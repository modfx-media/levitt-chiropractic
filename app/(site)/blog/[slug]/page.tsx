import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import { queryRoutedContentByPath } from "@/lib/cms/queries";
import {
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
  getAllPosts,
} from "@/lib/blog";
import { BlogPostContent } from "@/components/blog/BlogPostContent";
import { getLiveRankedBlogPosts } from "@/lib/ranked/posts";
import { rankedToBlogPost } from "@/lib/ranked/adapter";

export const revalidate = 3600;

type RouteParams = { slug: string };

export const dynamicParams = true;

export async function generateStaticParams(): Promise<RouteParams[]> {
  const localSlugs = getAllSlugs();
  const rankedPosts = await getLiveRankedBlogPosts().catch(() => []);
  const rankedSlugs = rankedPosts.map((p) => p.slug);
  const all = [...new Set([...localSlugs, ...rankedSlugs])];
  return all.map((slug) => ({ slug }));
}

async function resolvePost(slug: string) {
  const local = getPostBySlug(slug);
  if (local) return local;
  const rankedPosts = await getLiveRankedBlogPosts();
  const ranked = rankedPosts.find((p) => p.slug === slug);
  if (ranked) return rankedToBlogPost(ranked);
  return undefined;
}

export async function generateMetadata(
  { params }: { params: Promise<RouteParams> },
): Promise<Metadata> {
  const { slug } = await params;
  const path = `/blog/${slug}`;
  const post = await resolvePost(slug);
  if (!post) {
    return withCMSMeta(
      path,
      generateMeta({
        title: "Post Not Found",
        description: "The article you're looking for could not be found.",
        slug: `blog/${slug}`,
        noindex: true,
      }),
    );
  }

  return withCMSMeta(
    path,
    generateMeta({
      title: post.title,
      description: post.description,
      slug: `blog/${post.slug}`,
      image: post.coverImage,
    }),
  );
}

export default async function Page(
  { params }: { params: Promise<RouteParams> },
) {
  const { slug } = await params;
  const path = `/blog/${slug}`;
  const post = await resolvePost(slug);
  if (!post) {
    const routed = await queryRoutedContentByPath(path);
    if (!routed) notFound();
    return <CMSRoute path={path}>{null}</CMSRoute>;
  }

  const related = getRelatedPosts(post, 3);
  return (
    <CMSRoute path={path}>
      <BlogPostContent post={post} related={related} />
    </CMSRoute>
  );
}
