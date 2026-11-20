/**
 * CMS values replace a designed default only when they are actually set.
 * Blank strings, nulls, and empty arrays keep the hardcoded value so a
 * published document can never blank out the page.
 */

export function isEmptyCmsValue(value: unknown): boolean {
  if (value == null) return true;
  if (typeof value === "string") return value.trim() === "";
  if (Array.isArray(value)) return value.length === 0;
  return false;
}

export function mergeContent<T>(defaults: T, override: unknown): T {
  if (isEmptyCmsValue(override)) return defaults;
  if (typeof defaults === "string") {
    return (typeof override === "string" && override.trim() ? override : defaults) as T;
  }
  if (typeof defaults === "number") {
    return (typeof override === "number" && Number.isFinite(override) ? override : defaults) as T;
  }
  if (typeof defaults === "boolean") {
    return (typeof override === "boolean" ? override : defaults) as T;
  }
  if (Array.isArray(defaults)) {
    if (!Array.isArray(override)) return defaults;
    const merged = defaults.map((item, index) =>
      index < override.length ? mergeContent(item, coerceItem(item, override[index])) : item,
    );
    for (let index = defaults.length; index < override.length; index += 1) {
      const extra = coerceItem(defaults[0], override[index]);
      if (!isEmptyCmsValue(extra)) merged.push(extra as (typeof defaults)[number]);
    }
    return merged as T;
  }
  if (defaults && typeof defaults === "object") {
    if (!override || typeof override !== "object" || Array.isArray(override)) return defaults;
    const source = override as Record<string, unknown>;
    const next: Record<string, unknown> = { ...(defaults as Record<string, unknown>) };
    for (const key of Object.keys(defaults as Record<string, unknown>)) {
      next[key] = mergeContent((defaults as Record<string, unknown>)[key], source[key]);
    }
    return next as T;
  }
  return defaults;
}

function coerceItem(sample: unknown, value: unknown): unknown {
  if (typeof sample === "string" && value && typeof value === "object" && "text" in value) {
    const text = (value as { text?: unknown }).text;
    return typeof text === "string" ? text : value;
  }
  return value;
}

export function sectionContent<T>(
  sections: Record<string, unknown> | null | undefined,
  key: string,
  defaults: T,
): T {
  const block = sections?.[key];
  if (!block || typeof block !== "object") return defaults;
  const record = block as Record<string, unknown>;
  const data = record.data && typeof record.data === "object" ? record.data : record;
  return mergeContent(defaults, data);
}
