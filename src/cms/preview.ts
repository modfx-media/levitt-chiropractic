function isPublicPath(path: unknown): path is string {
  if (typeof path !== "string" || !path.startsWith("/")) return false;
  if (path.includes("null") || path.includes("undefined")) return false;
  if (path.includes("//") || path.includes("?") || path.includes("#")) return false;
  const segments = path.split("/").slice(1);
  if (segments.some((s) => s.length === 0 && path !== "/")) return false;
  return true;
}

export function generatePreviewPath({ path }: { path?: unknown }): string | null {
  const secret = process.env.PREVIEW_SECRET;
  if (!secret || !isPublicPath(path)) return null;
  return `/next/preview?${new URLSearchParams({ path, previewSecret: secret })}`;
}

export function previewFromPath({
  data,
}: {
  data?: { path?: unknown; slug?: unknown };
}): string | null {
  const path =
    typeof data?.path === "string" && data.path
      ? data.path
      : typeof data?.slug === "string" && data.slug
        ? `/${String(data.slug).replace(/^\/+|\/+$/g, "")}`
        : null;
  return generatePreviewPath({ path });
}

export function previewFromSlugPrefix(prefix: string) {
  return ({ data }: { data?: { slug?: unknown; path?: unknown } }): string | null => {
    if (typeof data?.path === "string" && data.path) {
      return generatePreviewPath({ path: data.path });
    }
    if (typeof data?.slug !== "string" || !data.slug) return null;
    const slug = data.slug.replace(/^\/+|\/+$/g, "");
    if (!slug) return null;
    return generatePreviewPath({ path: `${prefix}/${slug}` });
  };
}
