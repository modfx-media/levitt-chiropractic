import type { BlogPost } from "@/lib/blog";
import { canonicalPublishDate } from "@/lib/ranked/publish-dates";

import { getCMS } from "./payload";
import { cmsDocToBlogPost } from "./postToBlog";
import { withCMS } from "./safe";

function sortByPublishedDesc(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

function withCanonicalDate(post: BlogPost): BlogPost {
  const canonical = canonicalPublishDate(post.title, post.slug);
  if (!canonical) return post;
  const current = post.publishedAt.slice(0, 10);
  if (current === canonical) return post;
  return { ...post, publishedAt: canonical };
}

function normalizePostTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export type PublishedPostSummary = {
  slug: string;
  title: string;
};

/** Published CMS titles/slugs so Ranked copies of the same article can be skipped. */
export async function queryPublishedPostSummaries(): Promise<PublishedPostSummary[]> {
  return withCMS(async () => {
    const payload = await getCMS();
    const result = await payload.find({
      collection: "posts",
      depth: 0,
      draft: false,
      overrideAccess: false,
      limit: 1000,
      pagination: false,
      where: { _status: { equals: "published" } },
    });
    return result.docs.flatMap((doc) => {
      const slug =
        typeof doc.slug === "string" ? doc.slug.replace(/^\/+|\/+$/g, "") : "";
      const title = typeof doc.title === "string" ? doc.title.trim() : "";
      if (!slug || !title || slug.includes("/")) return [];
      return [{ slug, title }];
    });
  }, []);
}

/** Published CMS posts merged onto the designed list. The designed list is the fallback. */
export async function mergePublishedCmsPosts(hardcoded: BlogPost[]): Promise<BlogPost[]> {
  const fallback = sortByPublishedDesc(hardcoded.map(withCanonicalDate));
  return withCMS(async () => {
    const payload = await getCMS();
    const result = await payload.find({
      collection: "posts",
      depth: 2,
      draft: false,
      overrideAccess: false,
      limit: 1000,
      pagination: false,
      sort: "-publishedAt",
      where: { _status: { equals: "published" } },
    });

    const cmsPosts: BlogPost[] = [];
    for (const doc of result.docs) {
      const mapped = cmsDocToBlogPost(doc);
      if (mapped) cmsPosts.push(mapped);
    }
    const cmsTitles = new Set(cmsPosts.map((post) => normalizePostTitle(post.title)));

    const bySlug = new Map<string, BlogPost>();
    for (const post of fallback) {
      if (cmsTitles.has(normalizePostTitle(post.title))) continue;
      bySlug.set(post.slug, post);
    }
    for (const mapped of cmsPosts) bySlug.set(mapped.slug, mapped);
    return sortByPublishedDesc([...bySlug.values()].map(withCanonicalDate));
  }, fallback);
}

export async function queryPublishedPostSlugs(): Promise<string[]> {
  return withCMS(async () => {
    const payload = await getCMS();
    const result = await payload.find({
      collection: "posts",
      depth: 0,
      draft: false,
      overrideAccess: false,
      limit: 1000,
      pagination: false,
      where: { _status: { equals: "published" } },
    });
    return result.docs
      .map((doc) => (typeof doc.slug === "string" ? doc.slug.replace(/^\/+|\/+$/g, "") : ""))
      .filter((slug) => slug.length > 0 && !slug.includes("/"));
  }, []);
}
