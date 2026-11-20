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
import { pathToFileURL, fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const argv = process.argv.slice(2).filter((arg) => arg !== "--");
const apply = process.env.CMS_IMPORT_APPLY === "1" || argv.includes("--apply");
const publish = process.env.CMS_IMPORT_PUBLISH === "1" || argv.includes("--publish");
const includePosts = argv.includes("--posts") && !argv.includes("--skip-posts");
const revalidate = argv.includes("--revalidate");
const loadTimeoutMs = Number(process.env.CMS_IMPORT_TIMEOUT_MS || 120000);

let dbReportPrinted = false;
const keepalive = setInterval(() => {}, 1000);

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
  const headers: Record<string, string> = {
    authorization: `Bearer ${secret}`,
    "content-type": "application/json",
  };
  const bypass = process.env.VERCEL_PROTECTION_BYPASS || process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
  if (bypass) headers["x-vercel-protection-bypass"] = bypass;
  const response = await fetch(`${origin}/api/revalidate`, {
    method: "POST",
    headers,
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

  const syncHref = pathToFileURL(path.join(root, "scripts", "designed-sync.ts")).href;
  const { loadDesignedFile, syncDesignedContent } = await import(syncHref);
  const loaded = loadDesignedFile(root);
  if (!loaded) {
    logError("Designed file missing after load.");
    return 1;
  }
  log("loading payload.config.ts");
  const payload = await withTimeout(openPayload(), loadTimeoutMs, "payload.config.ts");
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
    dbReportPrinted = true;
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

function withTimeout<T>(work: Promise<T>, ms: number, label: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(
        new Error(
          `Timed out after ${ms}ms waiting for ${label}. The database diff was not printed, so this run did not succeed.`,
        ),
      );
    }, ms);
    work.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      },
    );
  });
}

async function openPayload() {
  const { getPayload } = await import("payload");
  const configPath = path.resolve(root, "payload.config.ts");
  const imported = (await import(pathToFileURL(configPath).href)) as { default?: unknown };
  const loaded = imported.default ?? imported;
  const config = typeof loaded === "function" ? await loaded() : loaded;
  return getPayload({ config });
}

function finish(code: number): never {
  clearInterval(keepalive);
  if (code === 0 && !dbReportPrinted) {
    logError("Refusing to exit 0: the database diff was not printed, so nothing was confirmed.");
    code = 1;
  }
  process.exit(code);
}

process.on("beforeExit", (code) => {
  if (!dbReportPrinted) {
    logError("Event loop emptied before the database diff was printed.");
    process.exit(code === 0 ? 1 : code);
  }
});

main()
  .then((code) => {
    finish(code);
  })
  .catch((error: unknown) => {
    logError(error);
    finish(1);
  });
