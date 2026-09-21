import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { queryRoutedContentByPath } from "./queries";
import { withCMS } from "./safe";
import { absoluteURL, normalizePath } from "./url";

type MetaShape = {
  title?: string | null;
  description?: string | null;
  image?: { url?: string } | string | null;
  canonicalUrl?: string | null;
  noIndex?: boolean | null;
  noFollow?: boolean | null;
};

export async function withCMSMeta(
  path: string,
  fallback: Metadata,
): Promise<Metadata> {
  return withCMS(async () => {
    const routed = await queryRoutedContentByPath(path);
    if (!routed) return fallback;
    return cmsDocToMetadata(routed.doc, path, fallback);
  }, fallback);
}

export function cmsDocToMetadata(
  doc: Record<string, unknown>,
  path: string,
  fallback: Metadata,
): Metadata {
  const meta = (doc.meta ?? {}) as MetaShape;
  const title =
    meta.title || (typeof doc.title === "string" ? doc.title : undefined);
  const description =
    meta.description ||
    (typeof doc.excerpt === "string" ? doc.excerpt : undefined) ||
    (typeof fallback.description === "string" ? fallback.description : "");
  const image =
    typeof meta.image === "string"
      ? meta.image
      : meta.image && typeof meta.image === "object" && meta.image.url
        ? meta.image.url
        : undefined;
  const canonical =
    meta.canonicalUrl || absoluteURL(normalizePath(path));
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
