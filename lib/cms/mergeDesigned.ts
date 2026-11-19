import type { Metadata } from "next";
import { Fragment, isValidElement, type ReactNode } from "react";

import { generateMeta } from "@/lib/metadata";
import { mediaPublicUrl } from "./mediaUrl";
import { absoluteURL, normalizePath } from "./url";

/**
 * Payload is the data plane. Designed routes always render their own
 * component. A CMS document may fill SEO, JSON-LD, and other fields that
 * map onto that component. It must not swap the page for the generic
 * block renderer.
 */

export type CmsSeoFields = {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  schemaType?: string;
  breadcrumbLabel?: string;
  noIndex: boolean;
  noFollow: boolean;
  jsonLd?: Record<string, unknown>;
};

export type RoutedDocLike = {
  collection: "pages" | "posts";
  doc: Record<string, unknown>;
} | null;

export type RoutedBody = "designed" | "generic" | "post" | "none";

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export function nonEmpty(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (!trimmed || trimmed === "null" || trimmed === "undefined") return undefined;
  return trimmed;
}

function imageUrl(value: unknown): string | undefined {
  if (typeof value === "string") return mediaPublicUrl({ url: value })?.url;
  return mediaPublicUrl(value)?.url;
}

function canonicalUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;
  if (value.startsWith("https://") || value.startsWith("http://")) return value;
  if (value.startsWith("/")) return absoluteURL(value);
  return value;
}

function readJsonObject(value: unknown): Record<string, unknown> | undefined {
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return undefined;
    try {
      return readJsonObject(JSON.parse(trimmed) as unknown);
    } catch {
      return undefined;
    }
  }
  if (!isRecord(value) || Object.keys(value).length === 0) return undefined;
  return value;
}

export function readCmsSeo(
  doc: Record<string, unknown> | null | undefined,
): CmsSeoFields {
  const meta = isRecord(doc?.meta) ? doc.meta : {};
  const jsonLd =
    readJsonObject(meta.jsonLd) ??
    readJsonObject(meta.schema) ??
    readJsonObject(doc?.jsonLd) ??
    readJsonObject(doc?.schema);

  return {
    title: nonEmpty(meta.title),
    description: nonEmpty(meta.description),
    image: imageUrl(meta.image),
    canonicalUrl: canonicalUrl(nonEmpty(meta.canonicalUrl)),
    schemaType: nonEmpty(meta.schemaType),
    breadcrumbLabel: nonEmpty(meta.breadcrumbLabel),
    noIndex: meta.noIndex === true,
    noFollow: meta.noFollow === true,
    jsonLd,
  };
}

export function cmsSeoHasContent(seo: CmsSeoFields): boolean {
  return Boolean(
    seo.title ||
      seo.description ||
      seo.image ||
      seo.canonicalUrl ||
      seo.schemaType ||
      seo.breadcrumbLabel ||
      seo.jsonLd,
  );
}

/** Keep a designed prop when the CMS value is missing, null, or blank. */
export function mergeMappedFields<T extends Record<string, unknown>>(
  defaults: T,
  overlay: Record<string, unknown> | null | undefined,
): T {
  if (!overlay) return defaults;
  const next: Record<string, unknown> = { ...defaults };
  for (const [key, value] of Object.entries(overlay)) {
    if (value == null) continue;
    if (typeof value === "string" && value.trim() === "") continue;
    if (Array.isArray(value) && value.length === 0) continue;
    next[key] = value;
  }
  return next as T;
}

function nodeHasText(node: unknown): boolean {
  if (typeof node === "string") return Boolean(nonEmpty(node));
  if (Array.isArray(node)) return node.some((child) => nodeHasText(child));
  if (!isRecord(node)) return false;
  if (typeof node.text === "string" && node.text.trim()) return true;
  if (Array.isArray(node.children) && node.children.some((child) => nodeHasText(child))) {
    return true;
  }
  if ("root" in node) return nodeHasText(node.root);
  return false;
}

export function pageLayoutHasContent(doc: Record<string, unknown>): boolean {
  if (!Array.isArray(doc.layout)) return false;
  return doc.layout.some((block) => {
    if (!isRecord(block)) return false;
    const type = nonEmpty(block.blockType);
    if (type === "cta") {
      return Boolean(
        nonEmpty(block.heading) || nonEmpty(block.body) || nonEmpty(block.label),
      );
    }
    if (type === "content") return nodeHasText(block.body);
    return Object.entries(block).some(([key, value]) => {
      if (key === "blockType" || key === "id" || key === "blockName") return false;
      return typeof value === "string" ? Boolean(nonEmpty(value)) : nodeHasText(value);
    });
  });
}

export function postIsRenderable(doc: Record<string, unknown>): boolean {
  const fromSlug = nonEmpty(doc.slug)?.replace(/^\/+|\/+$/g, "");
  const path = nonEmpty(doc.path);
  const fromPath =
    path && path.startsWith("/blog/")
      ? path.slice("/blog/".length).replace(/^\/+|\/+$/g, "")
      : undefined;
  const slug = fromSlug || fromPath;
  if (!slug || slug.includes("/")) return false;
  if (slug.includes("null") || slug.includes("undefined")) return false;
  return true;
}

export function childrenAreDesigned(children: ReactNode): boolean {
  if (children == null || typeof children === "boolean") return false;
  if (typeof children === "string") return children.trim().length > 0;
  if (typeof children === "number") return true;
  if (Array.isArray(children)) return children.some((child) => childrenAreDesigned(child));
  if (isValidElement(children) && children.type === Fragment) {
    const nested = (children.props as { children?: ReactNode }).children;
    return childrenAreDesigned(nested);
  }
  return isValidElement(children);
}

/**
 * Designed pages win even when a published doc exists and its layout is
 * empty or only the thin imported blocks. The generic renderer is reserved
 * for paths with no designed page and real layout content. CMS-only posts
 * still use the designed blog article component.
 */
export function selectRoutedBody(input: {
  hasDesignedPage: boolean;
  doc: RoutedDocLike;
}): RoutedBody {
  if (input.hasDesignedPage) return "designed";
  if (!input.doc) return "none";
  if (input.doc.collection === "posts") {
    return postIsRenderable(input.doc.doc) ? "post" : "none";
  }
  return pageLayoutHasContent(input.doc.doc) ? "generic" : "none";
}

export function cmsOnlyDocIsRenderable(
  doc: RoutedDocLike,
): doc is NonNullable<RoutedDocLike> {
  return selectRoutedBody({ hasDesignedPage: false, doc }) !== "none";
}

export function pickRoutedNode(
  body: RoutedBody,
  designed: ReactNode,
  generic: ReactNode,
): ReactNode {
  if (body === "designed") return designed;
  if (body === "generic" || body === "post") return generic;
  return null;
}

export function mergeCmsJsonLd<T extends Record<string, unknown>>(
  hardcoded: T,
  doc: Record<string, unknown> | null | undefined,
): T {
  if (!doc) return hardcoded;
  const seo = readCmsSeo(doc);
  let next: Record<string, unknown> = seo.jsonLd
    ? mergeMappedFields({ ...hardcoded }, seo.jsonLd)
    : { ...hardcoded };

  const patch: Record<string, unknown> = {};
  if (seo.schemaType) patch["@type"] = seo.schemaType;
  if (seo.title) {
    if ("headline" in hardcoded) patch.headline = seo.title;
    if ("name" in hardcoded || !("headline" in hardcoded)) patch.name = seo.title;
  }
  if (seo.description) patch.description = seo.description;
  if (seo.canonicalUrl) {
    patch.url = seo.canonicalUrl;
    if (typeof hardcoded["@id"] === "string" && hardcoded["@id"].endsWith("#cms")) {
      patch["@id"] = `${seo.canonicalUrl}#cms`;
    }
  }
  if (seo.breadcrumbLabel) patch.alternateName = seo.breadcrumbLabel;
  if (seo.image) patch.image = seo.image;
  next = mergeMappedFields(next, patch);
  return next as T;
}

type MetaShape = {
  title?: string | null;
  description?: string | null;
  image?: { url?: string } | string | null;
  canonicalUrl?: string | null;
  noIndex?: boolean | null;
  noFollow?: boolean | null;
};

/**
 * Same head merge as production commit 04314cf.
 * A stored meta title is composed with the production suffix, images keep
 * width, height, and alt, and noIndex/noFollow false means index/follow.
 * A document with no title leaves the fallback untouched.
 */
export function mergeCmsMetadata(
  fallback: Metadata,
  doc: Record<string, unknown> | null | undefined,
  path = "/",
): Metadata {
  if (!doc) return fallback;
  const meta = (doc.meta ?? {}) as MetaShape;
  const title =
    (typeof meta.title === "string" && meta.title.trim()) ||
    (typeof doc.title === "string" && doc.title.trim()) ||
    "";
  if (!title) return fallback;

  const description =
    (typeof meta.description === "string" && meta.description.trim()) ||
    (typeof doc.excerpt === "string" && doc.excerpt.trim()) ||
    (typeof fallback.description === "string" ? fallback.description : "");
  const metaImage =
    typeof meta.image === "string"
      ? meta.image
      : meta.image && typeof meta.image === "object" && meta.image.url
        ? meta.image.url
        : undefined;
  const cover = mediaPublicUrl(doc.coverImage);
  const image =
    (metaImage && !metaImage.startsWith("/media/") ? metaImage : undefined) ||
    cover?.url;
  const canonical = (typeof meta.canonicalUrl === "string" && meta.canonicalUrl.trim()) ||
    absoluteURL(normalizePath(path));
  const noindex = meta.noIndex === true;
  const follow = meta.noFollow !== true;

  const generated = generateMeta({
    title,
    description,
    slug: path === "/" ? "" : path.replace(/^\//, ""),
    image,
    noindex,
  });

  return {
    ...fallback,
    ...generated,
    alternates: { canonical },
    robots: {
      index: !noindex,
      follow,
    },
  };
}

/** Page-level JSON-LD from CMS SEO/schema fields. Null when those fields are empty. */
export function cmsOverlayJsonLd(
  path: string,
  doc: Record<string, unknown> | null | undefined,
): Record<string, unknown> | null {
  if (!doc || !cmsSeoHasContent(readCmsSeo(doc))) return null;
  const url = absoluteURL(normalizePath(path));
  return mergeCmsJsonLd(
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#cms`,
      url,
    },
    doc,
  );
}
