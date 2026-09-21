import { draftMode } from "next/headers";

import { getCMS } from "./payload";
import { withCMS } from "./safe";
import { normalizePath } from "./url";

export type RoutedDoc = {
  collection: "pages" | "posts";
  doc: Record<string, unknown>;
};

async function draftState() {
  try {
    return (await draftMode()).isEnabled;
  } catch {
    return false;
  }
}

export async function queryRoutedContentByPath(
  path: string,
): Promise<RoutedDoc | null> {
  return withCMS(async () => {
    const normalized = normalizePath(path);
    const draft = await draftState();
    const payload = await getCMS();

    if (normalized === "/blog" || normalized.startsWith("/blog/")) {
      const slug = normalized === "/blog" ? "" : normalized.slice("/blog/".length);
      if (slug) {
        const posts = await payload.find({
          collection: "posts",
          depth: 2,
          draft,
          overrideAccess: draft,
          limit: 1,
          where: { slug: { equals: slug } },
        });
        const post = posts.docs[0];
        if (post) return { collection: "posts", doc: post as Record<string, unknown> };
      }
    }

    const pages = await payload.find({
      collection: "pages",
      depth: 2,
      draft,
      overrideAccess: draft,
      limit: 1,
      where: { path: { equals: normalized } },
    });
    const page = pages.docs[0];
    if (page) return { collection: "pages", doc: page as Record<string, unknown> };
    return null;
  }, null);
}

export async function queryPublishedSitemapDocs() {
  return withCMS(async () => {
    const payload = await getCMS();
    const [pages, posts] = await Promise.all([
      payload.find({
        collection: "pages",
        depth: 0,
        draft: false,
        overrideAccess: false,
        limit: 1000,
        pagination: false,
        where: {
          and: [
            { _status: { equals: "published" } },
            { "meta.excludeFromSitemap": { not_equals: true } },
            { "meta.noIndex": { not_equals: true } },
          ],
        },
      }),
      payload.find({
        collection: "posts",
        depth: 0,
        draft: false,
        overrideAccess: false,
        limit: 1000,
        pagination: false,
        where: {
          and: [
            { _status: { equals: "published" } },
            { "meta.excludeFromSitemap": { not_equals: true } },
            { "meta.noIndex": { not_equals: true } },
          ],
        },
      }),
    ]);
    return { pages: pages.docs, posts: posts.docs };
  }, { pages: [], posts: [] });
}

export async function querySitemapOverlay(): Promise<{
  extra: Array<{ path: string; lastmod?: string }>;
  skip: Set<string>;
}> {
  return withCMS(async () => {
    const payload = await getCMS();
    const [pages, posts] = await Promise.all([
      payload.find({
        collection: "pages",
        depth: 0,
        draft: false,
        overrideAccess: false,
        limit: 1000,
        pagination: false,
        where: { _status: { equals: "published" } },
      }),
      payload.find({
        collection: "posts",
        depth: 0,
        draft: false,
        overrideAccess: false,
        limit: 1000,
        pagination: false,
        where: { _status: { equals: "published" } },
      }),
    ]);

    const skip = new Set<string>();
    const extra: Array<{ path: string; lastmod?: string }> = [];

    for (const doc of [...pages.docs, ...posts.docs]) {
      const path = typeof doc.path === "string" ? doc.path : "";
      if (!path.startsWith("/")) continue;
      const meta = (doc.meta ?? {}) as {
        noIndex?: boolean | null;
        excludeFromSitemap?: boolean | null;
      };
      const lastmod =
        typeof doc.updatedAt === "string"
          ? doc.updatedAt
          : typeof doc.sourceUpdatedAt === "string"
            ? doc.sourceUpdatedAt
            : undefined;
      if (meta.noIndex || meta.excludeFromSitemap) {
        skip.add(path);
        continue;
      }
      extra.push({ path, lastmod });
    }

    return { extra, skip };
  }, { extra: [], skip: new Set<string>() });
}
