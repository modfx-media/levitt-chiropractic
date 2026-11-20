const IGNORED_KEYS = new Set([
  "id",
  "updatedAt",
  "createdAt",
  "globalType",
  "_status",
  "version",
  "_order",
]);

function normalize(value: unknown): unknown {
  if (value == null) return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (typeof value === "string") {
    if (value.trim() === "") return null;
    if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
    return value;
  }
  if (typeof value === "boolean") return value;
  if (Array.isArray(value)) {
    return value.map(normalize).filter((item) => item != null && !(Array.isArray(item) && item.length === 0));
  }
  if (typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const key of Object.keys(value as object).sort()) {
      if (IGNORED_KEYS.has(key)) continue;
      const child = normalize((value as Record<string, unknown>)[key]);
      if (child == null) continue;
      if (Array.isArray(child) && child.length === 0) continue;
      if (typeof child === "object" && !Array.isArray(child) && Object.keys(child as object).length === 0) continue;
      out[key] = child;
    }
    return out;
  }
  return value;
}

/** Deep-equal CMS values, ignoring object key order and Payload bookkeeping fields. */
export function contentEqual(left: unknown, right: unknown): boolean {
  return JSON.stringify(normalize(left)) === JSON.stringify(normalize(right));
}
