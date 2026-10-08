/** Public URL stored on a media document. Never invent a local /media path. */

export type MediaAsset = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object";
}

function altFrom(value: Record<string, unknown>): string {
  if (typeof value.alt === "string" && value.alt.trim()) return value.alt.trim();
  if (typeof value.filename === "string" && value.filename.trim()) {
    return value.filename.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").trim();
  }
  return "";
}

function positive(value: unknown): number | undefined {
  return typeof value === "number" && Number.isFinite(value) && value > 0
    ? value
    : undefined;
}

export function mediaPublicUrl(value: unknown): MediaAsset | null {
  if (!isRecord(value)) return null;
  if (typeof value.url !== "string") return null;
  const trimmed = value.url.trim();
  if (!trimmed || trimmed.startsWith("//")) return null;
  if (trimmed.startsWith("/media/") || trimmed.startsWith("media/")) return null;

  const asset: MediaAsset = {
    url: trimmed,
    alt: altFrom(value),
    width: positive(value.width),
    height: positive(value.height),
  };

  if (trimmed.startsWith("/")) return asset;

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== "https:") return null;
    return { ...asset, url: parsed.href };
  } catch {
    return null;
  }
}

export function isRemoteImage(src: string): boolean {
  return src.startsWith("https://") || src.startsWith("http://");
}
