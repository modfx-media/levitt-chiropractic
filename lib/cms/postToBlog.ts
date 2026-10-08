import type { BlogPost } from "@/lib/blog";

import { lexicalToBlocks } from "./lexicalToBlocks";
import { mediaPublicUrl } from "./mediaUrl";

const DEFAULT_COVER = "/images/og-default.jpg";
const DEFAULT_CATEGORY = "Chiropractic Care";
const DEFAULT_AUTHOR = {
  name: "Dr. Alan Levitt, D.C.",
  title: "Chiropractor, Levitt Chiropractic Center",
  url: "/meet-the-doctor",
} as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object";
}

function dateOnly(value: unknown): string | undefined {
  if (typeof value !== "string" || !value) return undefined;
  const day = value.slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(day) ? day : undefined;
}

function wordCount(post: Pick<BlogPost, "blocks">): number {
  let total = 0;
  for (const block of post.blocks) {
    if (block.type === "image") continue;
    if ("text" in block && typeof block.text === "string") {
      total += block.text.trim().split(/\s+/).filter(Boolean).length;
    }
    if ("items" in block) {
      for (const item of block.items) total += item.trim().split(/\s+/).filter(Boolean).length;
    }
    if (block.type === "cta") {
      total += block.title.trim().split(/\s+/).filter(Boolean).length;
      for (const segment of block.segments) {
        total += segment.text.trim().split(/\s+/).filter(Boolean).length;
      }
    }
  }
  return total;
}

export function cmsDocToBlogPost(doc: unknown): BlogPost | null {
  if (!isRecord(doc)) return null;

  let slug = "";
  if (typeof doc.slug === "string") slug = doc.slug.replace(/^\/+|\/+$/g, "");
  if (!slug && typeof doc.path === "string" && doc.path.startsWith("/blog/")) {
    slug = doc.path.slice("/blog/".length).replace(/^\/+|\/+$/g, "");
  }
  if (!slug || slug.includes("/") || slug.includes("null") || slug.includes("undefined")) {
    return null;
  }

  const title =
    typeof doc.title === "string" && doc.title.trim() ? doc.title.trim() : "Article";
  const blocks = lexicalToBlocks(doc.content);
  const firstParagraph = blocks.find((block) => block.type === "p");
  const excerpt =
    typeof doc.excerpt === "string" && doc.excerpt.trim()
      ? doc.excerpt.trim()
      : firstParagraph && "text" in firstParagraph
        ? firstParagraph.text.slice(0, 220)
        : title;

  const meta = isRecord(doc.meta) ? doc.meta : {};
  const description =
    typeof meta.description === "string" && meta.description.trim()
      ? meta.description.trim()
      : excerpt;

  const cover = mediaPublicUrl(doc.coverImage);
  const publishedAt =
    dateOnly(doc.publishedAt) || dateOnly(doc.createdAt) || dateOnly(doc.updatedAt) || "1970-01-01";
  const updatedAt = dateOnly(doc.updatedAt);
  const words = wordCount({ blocks });

  return {
    slug,
    title,
    description,
    excerpt,
    publishedAt,
    updatedAt: updatedAt && updatedAt !== publishedAt ? updatedAt : undefined,
    author: { ...DEFAULT_AUTHOR },
    category: DEFAULT_CATEGORY,
    tags: [],
    coverImage: cover?.url ?? DEFAULT_COVER,
    coverAlt: cover?.alt || title,
    readingMinutes: Math.max(1, Math.round(words / 230) || 1),
    blocks,
  };
}
