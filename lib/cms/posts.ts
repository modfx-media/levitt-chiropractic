import type { BlogPost } from "@/lib/blog";

import { getCMS } from "./payload";
import { cmsDocToBlogPost } from "./postToBlog";
import { withCMS } from "./safe";

function sortByPublishedDesc(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

/** Published CMS posts merged onto the designed list. The designed list is the fallback. */
export async function mergePublishedCmsPosts(hardcoded: BlogPost[]): Promise<BlogPost[]> {
  const fallback = sortByPublishedDesc(hardcoded);
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

    const bySlug = new Map<string, BlogPost>();
    for (const post of fallback) bySlug.set(post.slug, post);
    for (const doc of result.docs) {
      const mapped = cmsDocToBlogPost(doc);
      if (!mapped) continue;
      bySlug.set(mapped.slug, mapped);
    }
    return sortByPublishedDesc([...bySlug.values()]);
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
