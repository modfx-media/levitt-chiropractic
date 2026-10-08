/** Blog post model and helpers.
 *  Posts are authored as typed data in `lib/blogPosts.ts` so they
 *  flow into static rendering, sitemap, RSS, and JSON-LD without
 *  any runtime parsing.
 */

import { blogPosts } from "./blogPosts";

export type InlineSpan = {
  text: string;
  href?: string;
  external?: boolean;
  bold?: boolean;
  italic?: boolean;
};

export type BlogBlock =
  | { type: "p"; text: string; spans?: InlineSpan[] }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title?: string; text: string }
  | { type: "image"; src: string; alt: string; width?: number; height?: number }
  | {
      type: "cta";
      title: string;
      /** Ordered segments; each is either a plain text run or a link. */
      segments: Array<{ text: string; href?: string; external?: boolean }>;
    };

export type BlogFaq = { q: string; a: string };

export type BlogPost = {
  slug: string;
  title: string;
  /** 150–160 char meta description for SERPs. */
  description: string;
  /** 1–2 sentence excerpt shown on the index page. */
  excerpt: string;
  /** ISO 8601 (YYYY-MM-DD). */
  publishedAt: string;
  /** ISO 8601 (YYYY-MM-DD). Optional. */
  updatedAt?: string;
  author: {
    name: string;
    title?: string;
    url?: string;
  };
  category: string;
  tags: string[];
  /** Cover image path under /public. Recommended 1600×900. */
  coverImage: string;
  /** Alt text for cover image. */
  coverAlt: string;
  /** Estimated reading time in minutes. */
  readingMinutes: number;
  /** Article body, rendered top-to-bottom. */
  blocks: BlogBlock[];
  /** Optional FAQs power FAQPage JSON-LD when present. */
  faqs?: BlogFaq[];
  /** Optional related-post slugs. If empty, related posts are picked
   *  by category overlap. */
  relatedSlugs?: string[];
};

const PRIMARY_CATEGORY = "Chiropractic Care";

const sortByPublishedDesc = (a: BlogPost, b: BlogPost) =>
  b.publishedAt.localeCompare(a.publishedAt);

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(sortByPublishedDesc);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function getAllCategories(): string[] {
  const set = new Set<string>();
  for (const p of blogPosts) set.add(p.category);
  return Array.from(set).sort();
}

export function getAllTags(): string[] {
  const set = new Set<string>();
  for (const p of blogPosts) for (const t of p.tags) set.add(t);
  return Array.from(set).sort();
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  if (post.relatedSlugs && post.relatedSlugs.length > 0) {
    const explicit = post.relatedSlugs
      .map((s) => getPostBySlug(s))
      .filter((p): p is BlogPost => Boolean(p));
    if (explicit.length >= limit) return explicit.slice(0, limit);
  }

  const tagSet = new Set(post.tags);
  const ranked = blogPosts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({
      post: p,
      score:
        (p.category === post.category ? 2 : 0) +
        p.tags.filter((t) => tagSet.has(t)).length,
    }))
    .sort((a, b) => b.score - a.score || sortByPublishedDesc(a.post, b.post))
    .map((entry) => entry.post);

  return ranked.slice(0, limit);
}

/** Format an ISO date as e.g. "June 16, 2026". */
export function formatPostDate(iso: string): string {
  const d = new Date(`${iso}T12:00:00Z`);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export const BLOG_DEFAULTS = {
  category: PRIMARY_CATEGORY,
} as const;
