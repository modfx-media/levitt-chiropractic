import type { PseoHub } from "../types";
import { edina } from "./edina";
import { hopkins } from "./hopkins";
import { goldenValley } from "./golden-valley";
import { minneapolis } from "./minneapolis";
import { richfield } from "./richfield";
import { minnetonka } from "./minnetonka";
import { robbinsdale } from "./robbinsdale";
import { saintLouisPark } from "./saint-louis-park";
import { bloomington } from "./bloomington";
import { saintPaul } from "./saint-paul";
import { roseville } from "./roseville";
import { fridley } from "./fridley";
import { mapleGrove } from "./maple-grove";
import { springLakePark } from "./spring-lake-park";
import { wayzata } from "./wayzata";
import { maplewood } from "./maplewood";
import { falconHeights } from "./falcon-heights";
import { eagan } from "./eagan";
import { orono } from "./orono";
import { burnsville } from "./burnsville";
import { lauderdale } from "./lauderdale";
import { columbiaHeights } from "./columbia-heights";
import { ardenHills } from "./arden-hills";
import { shoreview } from "./shoreview";
import { savage } from "./savage";
import { brooklynPark } from "./brooklyn-park";

const HUBS: Record<string, PseoHub> = Object.fromEntries(
  [
    edina,
    hopkins,
    goldenValley,
    minneapolis,
    richfield,
    minnetonka,
    robbinsdale,
    saintLouisPark,
    bloomington,
    saintPaul,
    roseville,
    fridley,
    mapleGrove,
    springLakePark,
    wayzata,
    maplewood,
    falconHeights,
    eagan,
    orono,
    burnsville,
    lauderdale,
    columbiaHeights,
    ardenHills,
    shoreview,
    savage,
    brooklynPark,
  ].map((h) => [h.slug, h]),
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
