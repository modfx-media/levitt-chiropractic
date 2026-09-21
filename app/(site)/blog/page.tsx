import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import { getAllPosts } from "@/lib/blog";
import { BlogIndexContent } from "@/components/blog/BlogIndexContent";
import { getLiveRankedBlogPosts } from "@/lib/ranked/posts";
import { rankedToBlogPost } from "@/lib/ranked/adapter";

export const revalidate = 3600;

const fallbackMeta: Metadata = generateMeta({
  title: "Blog & Insights",
  description:
    "Plain-language articles on chiropractic care, recovery, posture, and spinal health from Dr. Alan Levitt at Levitt Chiropractic in Saint Louis Park, MN.",
  slug: "blog",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/blog", fallbackMeta);
}

export default async function Page() {
  const localPosts = getAllPosts();
  const rankedPosts = await getLiveRankedBlogPosts();
  const localSlugs = new Set(localPosts.map((p) => p.slug));
  const converted = rankedPosts
    .filter((p) => !localSlugs.has(p.slug))
    .map(rankedToBlogPost);
  const posts = [...localPosts, ...converted].sort(
    (a, b) => b.publishedAt.localeCompare(a.publishedAt),
  );
  return (
    <CMSRoute path="/blog">
      <BlogIndexContent posts={posts} />
    </CMSRoute>
  );
}
