/**
 * Draft-first CMS import. Does not publish.
 *
 *   CMS_IMPORT_APPLY=1 bun --env-file=.env.local scripts/import-content.ts --apply
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getPayload, type Payload } from "payload";

import config from "../payload.config.ts";
import { sitemapEntries } from "../lib/sitemapEntries";
import { blogPosts } from "../lib/blogPosts";
import { siteConfig } from "../lib/siteConfig";
import { servedCities } from "../lib/areasData";
import { pseoServices } from "../lib/pseoServices";
import {
  cityMetaDescription,
  cityServiceMetaDescription,
} from "../lib/areaPageCopy";
import type { BlogBlock } from "../lib/blog";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const argv = process.argv.slice(2).filter((a) => a !== "--");
const apply =
  process.env.CMS_IMPORT_APPLY === "1" || argv.includes("--apply");
const publish = process.env.CMS_IMPORT_PUBLISH === "1" || argv.includes("--publish");
const skipMedia = argv.includes("--skip-media");
const skipPosts = argv.includes("--skip-posts");
const skipGlobals = argv.includes("--skip-globals");
const areasOnly = argv.includes("--areas-only");

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

type Report = {
  apply: boolean;
  publish: boolean;
  media: { created: number; updated: number; skipped: number };
  pages: { created: number; updated: number };
  posts: { created: number; updated: number };
  globals: string[];
  errors: string[];
};

const report: Report = {
  apply,
  publish,
  media: { created: 0, updated: 0, skipped: 0 },
  pages: { created: 0, updated: 0 },
  posts: { created: 0, updated: 0 },
  globals: [],
  errors: [],
};

function textNode(text: string, format = 0) {
  return {
    type: "text" as const,
    text,
    format,
    detail: 0,
    mode: "normal" as const,
    style: "",
    version: 1,
  };
}

function paragraph(text: string) {
  return {
    type: "paragraph",
    children: text ? [textNode(text)] : [],
    direction: "ltr",
    format: "",
    indent: 0,
    textFormat: 0,
    version: 1,
  };
}

function heading(tag: "h2" | "h3", text: string) {
  return {
    type: "heading",
    tag,
    children: [textNode(text)],
    direction: "ltr",
    format: "",
    indent: 0,
    version: 1,
  };
}

function list(listType: "bullet" | "number", items: string[]) {
  return {
    type: "list",
    listType,
    tag: listType === "number" ? "ol" : "ul",
    start: 1,
    children: items.map((item, i) => ({
      type: "listitem",
      value: i + 1,
      children: [paragraph(item)],
      direction: "ltr",
      format: "",
      indent: 0,
      version: 1,
    })),
    direction: "ltr",
    format: "",
    indent: 0,
    version: 1,
  };
}

function quote(text: string) {
  return {
    type: "quote",
    children: [textNode(text)],
    direction: "ltr",
    format: "",
    indent: 0,
    version: 1,
  };
}

function lexicalDoc(children: unknown[]) {
  return {
    root: {
      type: "root",
      children,
      direction: "ltr",
      format: "",
      indent: 0,
      version: 1,
    },
  };
}

function blocksToLexical(blocks: BlogBlock[]) {
  const children: unknown[] = [];
  for (const block of blocks) {
    if (block.type === "p") children.push(paragraph(block.text));
    else if (block.type === "h2") children.push(heading("h2", block.text));
    else if (block.type === "h3") children.push(heading("h3", block.text));
    else if (block.type === "ul") children.push(list("bullet", block.items));
    else if (block.type === "ol") children.push(list("number", block.items));
    else if (block.type === "quote") children.push(quote(block.text));
    else if (block.type === "callout") {
      if (block.title) children.push(paragraph(block.title));
      children.push(paragraph(block.text));
    } else if (block.type === "cta") {
      children.push(heading("h2", block.title));
      children.push(
        paragraph(block.segments.map((s) => s.text).join("")),
      );
    }
  }
  return lexicalDoc(children.length ? children : [paragraph("")]);
}

function altFromFilename(file: string) {
  const base = path.basename(file, path.extname(file)).replace(/[-_]+/g, " ");
  return base.replace(/\b\w/g, (c) => c.toUpperCase());
}

function walkImages(dir: string, acc: string[] = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walkImages(p, acc);
    else if (/\.(jpe?g|png|webp|gif)$/i.test(ent.name)) acc.push(p);
  }
  return acc;
}

function pageRecords() {
  const extra = [
    {
      path: "/areas-we-serve",
      title: "Areas We Serve | Twin Cities Chiropractor",
      excerpt:
        "Chiropractic care from our Saint Louis Park clinic for 82 Twin Cities communities. Find your city, the real drive, and how to book with Dr. Alan Levitt.",
    },
  ];
  const fromSitemap = sitemapEntries.map((e) => {
    const slug = e.path === "/" ? "home" : e.path.replace(/^\//, "");
    return {
      path: e.path,
      title: slug === "home" ? siteConfig.name : slug,
      excerpt: "",
    };
  });

  const metaByPath = new Map<string, { title: string; excerpt: string }>();
  const sitePages = path.join(root, "app", "(site)");
  const walk = (dir: string) => {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        if (ent.name.startsWith("[") || ent.name === "next") continue;
        walk(p);
        continue;
      }
      if (ent.name !== "page.tsx") continue;
      const src = fs.readFileSync(p, "utf8");
      const title = src.match(/title:\s*"([^"]+)"/)?.[1];
      const desc = src.match(/description:\s*"([^"]+)"/)?.[1];
      const slug = src.match(/slug:\s*"([^"]*)"/)?.[1];
      if (!title) continue;
      const publicPath = slug === "" || slug === undefined ? "/" : `/${slug}`;
      metaByPath.set(publicPath.replace(/\/+/g, "/"), {
        title,
        excerpt: desc || "",
      });
    }
  };
  walk(sitePages);

  const areaPages = servedCities.flatMap((city) => {
    const cityPath = `/areas-we-serve/${city.slug}`;
    const cityRow = {
      path: cityPath,
      title: `Chiropractor in ${city.name}, MN`,
      excerpt: cityMetaDescription(city),
    };
    const serviceRows = pseoServices.map((service) => ({
      path: `${cityPath}/${service.slug}`,
      title: `${service.name} in ${city.name}, MN`,
      excerpt: cityServiceMetaDescription(city, service),
    }));
    return [cityRow, ...serviceRows];
  });

  const merged = areasOnly
    ? areaPages
    : [...fromSitemap, ...extra, ...areaPages];
  const seen = new Set<string>();
  return merged
    .filter((row) => {
      if (seen.has(row.path)) return false;
      seen.add(row.path);
      return true;
    })
    .map((row) => {
      const meta = metaByPath.get(row.path);
      return {
        path: row.path,
        title: meta?.title || row.title,
        excerpt: meta?.excerpt || row.excerpt,
        slug: row.path === "/" ? "home" : row.path.replace(/^\//, ""),
      };
    });
}

async function upsertMedia(payload: Payload, filePath: string) {
  const filename = path.basename(filePath);
  const existing = await payload.find({
    collection: "media",
    where: { filename: { equals: filename } },
    limit: 1,
    overrideAccess: true,
  });
  const alt = altFromFilename(filePath);
  if (existing.docs[0]) {
    await payload.update({
      collection: "media",
      id: existing.docs[0].id,
      data: { alt },
      overrideAccess: true,
    });
    report.media.updated += 1;
    return existing.docs[0].id;
  }
  const doc = await payload.create({
    collection: "media",
    data: { alt },
    filePath,
    overrideAccess: true,
  });
  report.media.created += 1;
  return doc.id;
}

function isTransientPg(error: unknown) {
  const msg = String(error);
  return /ETIMEDOUT|cannot connect to Postgres|connection terminated|ECONNRESET|fetch failed|timeout/i.test(
    msg,
  );
}

async function withRetry<T>(fn: () => Promise<T>, label: string): Promise<T> {
  let last: unknown;
  for (let attempt = 0; attempt < 6; attempt++) {
    try {
      return await fn();
    } catch (error) {
      last = error;
      if (!isTransientPg(error) || attempt === 5) throw error;
      console.warn(`retry ${attempt + 1} ${label}: ${String(error)}`);
      await sleep(1500 * (attempt + 1));
    }
  }
  throw last;
}

async function upsertByLegacy(
  payload: Payload,
  collection: "pages" | "posts",
  legacyId: string,
  data: Record<string, unknown>,
) {
  const existing = await payload.find({
    collection,
    where: { legacyId: { equals: legacyId } },
    limit: 1,
    overrideAccess: true,
    draft: true,
  });
  const status = publish ? "published" : "draft";
  const body = { ...data, legacyId, _status: status };
  if (existing.docs[0]) {
    await payload.update({
      collection,
      id: existing.docs[0].id,
      data: body,
      overrideAccess: true,
      draft: true,
    });
    report[collection].updated += 1;
    return existing.docs[0].id;
  }
  const created = await payload.create({
    collection,
    data: body,
    overrideAccess: true,
    draft: true,
  });
  report[collection].created += 1;
  return created.id;
}

async function main() {
  if (publish) {
    console.error("Refusing --publish. Import stays draft unless you review in /admin first.");
    process.exit(1);
  }

  const records = pageRecords();
  console.log(
    `Cities ${servedCities.length} × services ${pseoServices.length} → area URLs ${servedCities.length * (1 + pseoServices.length)}`,
  );
  console.log(`Images found: ${walkImages(path.join(root, "public", "images")).length}`);
  console.log(`Pages to upsert: ${records.length}`);
  console.log(`Posts: ${blogPosts.length}`);
  if (!apply) {
    console.log("Dry run. Re-run with --apply to write to Neon.");
    process.exit(0);
  }

  let payload = await getPayload({ config });
  const imageFiles = walkImages(path.join(root, "public", "images"));
  const usedNames = new Set<string>();
  const mediaByPublicPath = new Map<string, string | number>();

  if (!skipMedia && !areasOnly) {
    for (const file of imageFiles) {
      const name = path.basename(file);
      if (usedNames.has(name.toLowerCase())) {
        report.media.skipped += 1;
        continue;
      }
      usedNames.add(name.toLowerCase());
      try {
        const id = await withRetry(
          () => upsertMedia(payload, file),
          `media ${name}`,
        );
        const rel =
          "/" +
          path.relative(path.join(root, "public"), file).split(path.sep).join("/");
        mediaByPublicPath.set(rel, id);
      } catch (error) {
        report.errors.push(`media ${file}: ${String(error)}`);
      }
      await sleep(25);
    }
  }

  let i = 0;
  for (const page of records) {
    i += 1;
    try {
      await withRetry(
        () =>
          upsertByLegacy(payload, "pages", `page:${page.path}`, {
            title: page.title,
            slug: page.slug,
            path: page.path,
            sourceUrl: page.path,
            excerpt: page.excerpt,
            layout: [
              {
                blockType: "content",
                body: lexicalDoc([paragraph(page.excerpt || page.title)]),
              },
              {
                blockType: "cta",
                heading: "Request an appointment",
                body: `Call ${siteConfig.phone} or request a visit online.`,
                label: "Request Appointment",
                href: "/contact/appointment-request",
              },
            ],
          }),
        `page ${page.path}`,
      );
    } catch (error) {
      report.errors.push(`page ${page.path}: ${String(error)}`);
    }
    if (i % 50 === 0) {
      console.log(`pages ${i}/${records.length} created=${report.pages.created} updated=${report.pages.updated}`);
    }
    await sleep(25);
  }

  if (!skipPosts && !areasOnly) {
    for (const post of blogPosts) {
      try {
        const cover = mediaByPublicPath.get(post.coverImage);
        await withRetry(
          () =>
            upsertByLegacy(payload, "posts", `post:${post.slug}`, {
              title: post.title,
              slug: post.slug,
              path: `/blog/${post.slug}`,
              sourceUrl: `/blog/${post.slug}`,
              excerpt: post.excerpt || post.description,
              publishedAt: post.publishedAt,
              coverImage: cover ?? undefined,
              content: blocksToLexical(post.blocks),
            }),
          `post ${post.slug}`,
        );
      } catch (error) {
        report.errors.push(`post ${post.slug}: ${String(error)}`);
      }
      await sleep(25);
    }
  }

  if (!skipGlobals && !areasOnly) {
    await payload.updateGlobal({
      slug: "header",
      data: {
        tagline: siteConfig.tagline,
        navNote:
          "Designed site header stays live. Edit here for copy notes until a header overlay is reviewed.",
      },
      overrideAccess: true,
    });
    report.globals.push("header");

    await payload.updateGlobal({
      slug: "footer",
      data: {
        blurb:
          "Chiropractic care in Saint Louis Park since 1999 — Highway 100 and Excelsior Boulevard, near Methodist Hospital and the West End.",
      },
      overrideAccess: true,
    });
    report.globals.push("footer");

    await payload.updateGlobal({
      slug: "site-settings",
      data: {
        defaultMetaTitle: siteConfig.name,
        defaultMetaDescription: siteConfig.description,
      },
      overrideAccess: true,
    });
    report.globals.push("site-settings");
  }

  const outDir = path.join(root, "migration-data");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(
    path.join(outDir, "import-report.json"),
    JSON.stringify(report, null, 2),
  );
  console.log(JSON.stringify(report, null, 2));
  process.exit(report.errors.length ? 1 : 0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
