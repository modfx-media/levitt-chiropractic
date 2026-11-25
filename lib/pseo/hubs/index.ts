import type { PseoHub } from "../types";
import { edina } from "./edina";
import { hopkins } from "./hopkins";
import { goldenValley } from "./golden-valley";
import { minneapolis } from "./minneapolis";
import { richfield } from "./richfield";
import { minnetonka } from "./minnetonka";
import { robbinsdale } from "./robbinsdale";

const HUBS: Record<string, PseoHub> = Object.fromEntries(
  [edina, hopkins, goldenValley, minneapolis, richfield, minnetonka, robbinsdale].map((h) => [h.slug, h]),
);

/** Rewritten hubs only; every other city keeps its existing template. */
export function getPseoHub(slug: string): PseoHub | undefined {
  return HUBS[slug];
}

export const pseoHubSlugs = Object.keys(HUBS);

/** Strip inline link/citation syntax for JSON-LD. */
export function plainText(s: string): string {
  return s.replace(/\{([^|{}]+)\|[^{}]+\}/g, "$1").replace(/\[\^[a-z0-9-]+\]/g, "").replace(/\s+/g, " ").trim();
}
