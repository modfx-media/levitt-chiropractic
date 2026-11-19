/**
 * Import designed content. Prints a dry-run plan, then the database diff.
 * Writes only with --apply. --publish marks designed pages published.
 * --revalidate asks the deployed site to drop cached pages after a write.
 *
 *   npx tsx scripts/import-content.ts
 *   npx tsx scripts/import-content.ts --apply
 *   npx tsx scripts/import-content.ts --apply --publish
 *   npx tsx scripts/import-content.ts --apply --publish --revalidate
 *   npm run cms:import
 */
import "./next-env-interop.ts";

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const argv = process.argv.slice(2).filter((arg) => arg !== "--");
const apply = process.env.CMS_IMPORT_APPLY === "1" || argv.includes("--apply");
const publish = process.env.CMS_IMPORT_PUBLISH === "1" || argv.includes("--publish");
const includePosts = argv.includes("--posts") && !argv.includes("--skip-posts");
const revalidate = argv.includes("--revalidate");

function log(message: string) {
  fs.writeSync(1, message.endsWith("\n") ? message : `${message}\n`);
}

function logError(error: unknown) {
  const text = error instanceof Error ? error.stack || error.message : String(error);
  fs.writeSync(2, text.endsWith("\n") ? text : `${text}\n`);
}

process.on("uncaughtException", (error) => {
  logError(error);
  process.exit(1);
});
process.on("unhandledRejection", (error) => {
  logError(error);
  process.exit(1);
});

function readDesignedFile(): {
  pages: { path: string }[];
  cities: unknown[];
  services: unknown[];
  testimonials: unknown[];
} | null {
  const file = path.join(root, "data", "designed-content.json");
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8")) as {
    pages: { path: string }[];
    cities: unknown[];
    services: unknown[];
    testimonials: unknown[];
  };
}

function printPlan(file: NonNullable<ReturnType<typeof readDesignedFile>>) {
  log("dry-run plan");
  log(`  apply=${apply} publish=${publish} posts=${includePosts ? "match-only" : "skipped"} revalidate=${revalidate}`);
  log(`  designed pages: ${file.pages.length}`);
  log(`  cities: ${file.cities.length}`);
  log(`  services: ${file.services.length}`);
  log(`  testimonials: ${file.testimonials.length}`);
  log("  legacy globals kept when already set: header tagline, header navNote, footer blurb, site-settings default meta");
  log("  meta is not filled from title or excerpt");
}

async function callRevalidate(paths: string[]): Promise<void> {
  const origin = (
    process.env.REVALIDATE_URL ||
    process.env.NEXT_PUBLIC_SERVER_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    ""
  ).replace(/\/+$/, "");
  const secret =
    process.env.REVALIDATE_SECRET || process.env.PREVIEW_SECRET || process.env.PAYLOAD_SECRET || "";
  if (!origin || !secret) {
    throw new Error(
      "revalidate needs REVALIDATE_URL (or NEXT_PUBLIC_SITE_URL) and REVALIDATE_SECRET, PREVIEW_SECRET, or PAYLOAD_SECRET",
    );
  }
  const response = await fetch(`${origin}/api/revalidate`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${secret}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ paths, tags: ["cms"] }),
  });
  const text = await response.text();
  if (!response.ok) {
    throw new Error(`revalidate ${response.status}: ${text.slice(0, 300)}`);
  }
  log(`revalidated ${paths.length} paths via ${origin}/api/revalidate`);
}

async function main(): Promise<number> {
  const designedFile = readDesignedFile();
  if (!designedFile) {
    logError("Designed file missing. Run: npx tsx scripts/export-designed-content.ts");
    return 1;
  }
  printPlan(designedFile);
  if (!apply) {
    log("Dry run. Re-run with --apply to write. Add --publish to mark designed pages published.");
  }

  const { loadDesignedFile, syncDesignedContent } = await import("./designed-sync.ts");
  const loaded = loadDesignedFile(root);
  if (!loaded) {
    logError("Designed file missing after load.");
    return 1;
  }
  const { getPayload } = await import("payload");
  const { default: config } = await import("../payload.config.ts");
  const payload = await getPayload({ config });
  try {
    const designed = await syncDesignedContent(payload, loaded, { publish, apply });
    const { blogPosts } = includePosts ? await import("../lib/blogPosts.ts") : { blogPosts: [] };
    const existing = await payload.find({
      collection: "posts",
      depth: 0,
      draft: true,
      limit: 1000,
      pagination: false,
      overrideAccess: true,
    });
    let matched = 0;
    if (includePosts) {
      for (const post of blogPosts) {
        const legacyId = `post:${post.slug}`;
        const pathName = `/blog/${post.slug}`;
        if (
          existing.docs.some(
            (doc) => doc.legacyId === legacyId || doc.slug === post.slug || doc.path === pathName,
          )
        ) {
          matched += 1;
        }
      }
    }
    const report = {
      apply,
      publish,
      postsIncluded: includePosts,
      pages: designed.pages,
      legacyPages: designed.legacyPages,
      globals: designed.globals,
      cities: designed.cities,
      services: designed.services,
      testimonials: designed.testimonials,
      team: designed.team,
      faqs: designed.faqs,
      posts: {
        created: 0,
        updated: 0,
        skipped: existing.docs.length,
        published: 0,
        matched,
      },
      errors: designed.errors,
    };
    const outDir = path.join(root, "migration-data");
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "import-report.json"), `${JSON.stringify(report, null, 2)}\n`);
    log(JSON.stringify(report, null, 2));
    if (designed.errors.length) return 1;
    if (apply && revalidate) {
      const paths = [...new Set([...loaded.pages.map((page) => page.path), "/sitemap.xml", "/blog"])];
      await callRevalidate(paths);
    } else if (revalidate) {
      log("revalidate skipped: it runs after --apply");
    }
    return 0;
  } finally {
    await payload.destroy();
  }
}

main()
  .then((code) => {
    process.exit(code);
  })
  .catch((error: unknown) => {
    logError(error);
    process.exit(1);
  });
