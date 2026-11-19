/**
 * Import designed content. Dry-run unless --apply. --publish marks designed
 * pages published. Posts are skipped unless --posts, and even then existing
 * posts are never created or edited.
 *
 *   pnpm exec tsx scripts/export-designed-content.ts
 *   pnpm exec tsx scripts/import-content.ts
 *   pnpm exec tsx scripts/import-content.ts --apply
 *   pnpm exec tsx scripts/import-content.ts --apply --publish
 */
import "./next-env-interop.ts";

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { blogPosts } from "../lib/blogPosts";
import { loadDesignedFile, syncDesignedContent } from "./designed-sync.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const argv = process.argv.slice(2).filter((arg) => arg !== "--");
const apply = process.env.CMS_IMPORT_APPLY === "1" || argv.includes("--apply");
const publish = process.env.CMS_IMPORT_PUBLISH === "1" || argv.includes("--publish");
const includePosts = argv.includes("--posts") && !argv.includes("--skip-posts");

type PostReport = {
  created: number;
  updated: number;
  skipped: number;
  published: number;
  matched: number;
};

async function inspectPosts(
  payload: {
    find: (args: Record<string, unknown>) => Promise<{ docs: Array<Record<string, unknown>> }>;
  },
): Promise<PostReport> {
  const existing = await payload.find({
    collection: "posts",
    depth: 0,
    draft: true,
    limit: 1000,
    pagination: false,
    overrideAccess: true,
  });
  const report: PostReport = {
    created: 0,
    updated: 0,
    skipped: existing.docs.length,
    published: 0,
    matched: 0,
  };
  if (!includePosts) return report;

  for (const post of blogPosts) {
    const legacyId = `post:${post.slug}`;
    const pathName = `/blog/${post.slug}`;
    const hit = existing.docs.some(
      (doc) =>
        doc.legacyId === legacyId || doc.slug === post.slug || doc.path === pathName,
    );
    if (hit) report.matched += 1;
  }
  return report;
}

async function main() {
  const designedFile = loadDesignedFile(root);
  process.stdout.write(
    `designed-import apply=${apply} publish=${publish} posts=${includePosts ? "match-only" : "skipped"}\n`,
  );
  if (!designedFile) {
    process.stdout.write("Designed file missing. Run scripts/export-designed-content.ts\n");
    process.exitCode = 1;
    return;
  }
  process.stdout.write(
    `designed pages in file: ${designedFile.pages.length}; local markdown posts ignored unless --posts\n`,
  );

  const { getPayload } = await import("payload");
  const { default: config } = await import("../payload.config.ts");
  const payload = await getPayload({ config });
  try {
    const designed = await syncDesignedContent(payload, designedFile, { publish, apply });
    const posts = await inspectPosts(payload);
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
      posts,
      errors: designed.errors,
    };
    const outDir = path.join(root, "migration-data");
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "import-report.json"), `${JSON.stringify(report, null, 2)}\n`);
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
    process.exitCode = report.errors.length ? 1 : 0;
  } finally {
    await payload.destroy();
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
