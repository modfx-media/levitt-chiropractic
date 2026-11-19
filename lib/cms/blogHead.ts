import type { Metadata } from "next";

import type { BlogPost } from "@/lib/blog";
import { blogPostingJsonLd } from "@/lib/jsonLd";
import { generateMeta } from "@/lib/metadata";

import { mergeCmsMetadata } from "./mergeDesigned";
import { cmsDocToBlogPost } from "./postToBlog";

const MISSING = "Post Not Found";

export function blogHeadMetadata(input: {
  slug: string;
  local?: Pick<BlogPost, "title" | "description" | "slug" | "coverImage"> | null;
  doc?: Record<string, unknown> | null;
}): Metadata {
  const cmsPost = input.doc ? cmsDocToBlogPost(input.doc) : null;
  const base = input.local ?? cmsPost;
  const path = `/blog/${input.slug}`;
  if (!base) {
    return generateMeta({
      title: MISSING,
      description: "The article you're looking for could not be found.",
      slug: `blog/${input.slug}`,
      noindex: true,
    });
  }

  const fallback = generateMeta({
    title: base.title,
    description: base.description,
    slug: `blog/${base.slug}`,
    image: base.coverImage,
  });
  if (!input.doc) return fallback;
  return mergeCmsMetadata(fallback, input.doc, path);
}

/** Post production rendered into BlogPosting when a CMS article exists. */
export function blogSchemaPost(
  local: BlogPost,
  doc: Record<string, unknown> | null | undefined,
): BlogPost {
  return (doc && cmsDocToBlogPost(doc)) || local;
}

export function blogPostingFromPost(post: Pick<
  BlogPost,
  | "slug"
  | "title"
  | "description"
  | "coverImage"
  | "publishedAt"
  | "updatedAt"
  | "author"
  | "tags"
  | "category"
  | "blocks"
>) {
  return blogPostingJsonLd({
    slug: post.slug,
    title: post.title,
    description: post.description,
    image: post.coverImage,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    authorName: post.author.name,
    authorUrl: post.author.url,
    keywords: post.tags,
    articleSection: post.category,
  });
}
