import type { Metadata } from "next";

import type { BlogPost } from "@/lib/blog";
import { blogPostingJsonLd } from "@/lib/jsonLd";
import { generateMeta } from "@/lib/metadata";

import { withVerbatimTitle } from "./mergeDesigned";
import { mediaPublicUrl } from "./mediaUrl";
import { cmsDocToBlogPost } from "./postToBlog";
import { absoluteURL, normalizePath } from "./url";

const MISSING = "Post Not Found";

type MetaShape = {
  title?: string | null;
  description?: string | null;
  image?: { url?: string; alt?: string | null } | string | null;
  canonicalUrl?: string | null;
  noIndex?: boolean | null;
  noFollow?: boolean | null;
};

/**
 * Blog head merge from main 04314cf. A CMS article replaces the fallback
 * title, description, and image, then drops the googleBot robots tag.
 * Open Graph alt is the title string, never the media alt.
 */
export function mainBlogCmsHead(
  doc: Record<string, unknown>,
  path: string,
  fallback: Metadata,
): Metadata {
  const meta = (doc.meta ?? {}) as MetaShape;
  const verbatimTitle =
    typeof meta.title === "string" && meta.title.trim() ? meta.title.trim() : undefined;
  const title = verbatimTitle || (typeof doc.title === "string" ? doc.title : undefined);
  const description =
    (typeof meta.description === "string" && meta.description) ||
    (typeof doc.excerpt === "string" ? doc.excerpt : undefined) ||
    (typeof fallback.description === "string" ? fallback.description : "");
  const metaImage =
    typeof meta.image === "string"
      ? meta.image
      : meta.image && typeof meta.image === "object" && meta.image.url
        ? meta.image.url
        : undefined;
  const cover = mediaPublicUrl(doc.coverImage);
  const image =
    (metaImage && !metaImage.startsWith("/media/") ? metaImage : undefined) || cover?.url;
  const canonical =
    (typeof meta.canonicalUrl === "string" && meta.canonicalUrl) ||
    absoluteURL(normalizePath(path));
  const noindex = Boolean(meta.noIndex);
  const follow = !meta.noFollow;

  if (!title) return fallback;

  const generated = generateMeta({
    title,
    description,
    slug: path === "/" ? "" : path.replace(/^\//, ""),
    image,
    noindex,
  });

  const head: Metadata = {
    ...fallback,
    ...generated,
    alternates: { canonical },
    robots: {
      index: !noindex,
      follow,
    },
  };
  return verbatimTitle ? withVerbatimTitle(head, verbatimTitle) : head;
}

export function blogHeadMetadata(input: {
  slug: string;
  local?: Pick<BlogPost, "title" | "description" | "slug" | "coverImage"> | null;
  doc?: Record<string, unknown> | null;
}): Metadata {
  const path = `/blog/${input.slug}`;
  const fallback = input.local
    ? generateMeta({
        title: input.local.title,
        description: input.local.description,
        slug: `blog/${input.local.slug}`,
        image: input.local.coverImage,
      })
    : generateMeta({
        title: MISSING,
        description: "The article you're looking for could not be found.",
        slug: `blog/${input.slug}`,
        noindex: true,
      });
  if (!input.doc) return fallback;
  return mainBlogCmsHead(input.doc, path, fallback);
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
