/** Phased retirement of /areas-we-serve cities more than 15 miles from the clinic.
 *
 *  A batch retires automatically at midnight Minnesota time on its date. Retired
 *  cities drop out of the sitemap, the areas hub, the HTML site map, and every
 *  internal link, and `proxy.ts` sends a single 301 to the nearest city that stays.
 *
 *  To pause, set AREA_RETIREMENT_MAX_BATCH in Vercel (e.g. "2") and redeploy.
 *  Batches above that number stay live until the variable is raised or removed.
 *
 *  `redirectTo` must always be a city that is not in this list, so no redirect
 *  lands on another redirect.
 */

export type RetirementBatch = { batch: number; startsAt: string };

export const RETIREMENT_BATCHES: RetirementBatch[] = [
  { batch: 1, startsAt: "2026-11-06T00:00:00-06:00" },
  { batch: 2, startsAt: "2026-11-09T00:00:00-06:00" },
  { batch: 3, startsAt: "2026-11-12T00:00:00-06:00" },
  { batch: 4, startsAt: "2026-11-15T00:00:00-06:00" },
];

export type RetiredCity = { slug: string; batch: number; redirectTo: string };

export const RETIRED_CITIES: RetiredCity[] = [
  // Batch 1: 22-26 miles
  { slug: "forest-lake", batch: 1, redirectTo: "north-oaks" },
  { slug: "farmington", batch: 1, redirectTo: "burnsville" },
  { slug: "waconia", batch: 1, redirectTo: "chanhassen" },
  { slug: "cottage-grove", batch: 1, redirectTo: "south-saint-paul" },
  { slug: "bayport", batch: 1, redirectTo: "north-saint-paul" },
  { slug: "lakeville", batch: 1, redirectTo: "burnsville" },
  { slug: "rosemount", batch: 1, redirectTo: "eagan" },
  { slug: "ham-lake", batch: 1, redirectTo: "spring-lake-park" },
  { slug: "centerville", batch: 1, redirectTo: "north-oaks" },
  { slug: "stillwater", batch: 1, redirectTo: "north-saint-paul" },

  // Batch 2: 19-21 miles
  { slug: "andover", batch: 2, redirectTo: "spring-lake-park" },
  { slug: "lino-lakes", batch: 2, redirectTo: "north-oaks" },
  { slug: "hugo", batch: 2, redirectTo: "vadnais-heights" },
  { slug: "saint-paul-park", batch: 2, redirectTo: "south-saint-paul" },
  { slug: "maple-plain", batch: 2, redirectTo: "long-lake" },
  { slug: "anoka", batch: 2, redirectTo: "brooklyn-park" },

  // Batch 3: 18 miles
  { slug: "inver-grove-heights", batch: 3, redirectTo: "south-saint-paul" },
  { slug: "champlin", batch: 3, redirectTo: "brooklyn-park" },
  { slug: "coon-rapids", batch: 3, redirectTo: "brooklyn-park" },
  { slug: "blaine", batch: 3, redirectTo: "spring-lake-park" },
  { slug: "woodbury", batch: 3, redirectTo: "maplewood" },
  { slug: "newport", batch: 3, redirectTo: "south-saint-paul" },
  { slug: "lake-elmo", batch: 3, redirectTo: "north-saint-paul" },
  { slug: "mahtomedi", batch: 3, redirectTo: "vadnais-heights" },

  // Batch 4: 16-17 miles
  { slug: "chaska", batch: 4, redirectTo: "chanhassen" },
  { slug: "medina", batch: 4, redirectTo: "plymouth" },
  { slug: "mound", batch: 4, redirectTo: "orono" },
  { slug: "victoria", batch: 4, redirectTo: "chanhassen" },
  { slug: "apple-valley", batch: 4, redirectTo: "burnsville" },
  { slug: "prior-lake", batch: 4, redirectTo: "savage" },
  { slug: "shakopee", batch: 4, redirectTo: "savage" },
  { slug: "spring-park", batch: 4, redirectTo: "orono" },
  { slug: "white-bear-lake", batch: 4, redirectTo: "vadnais-heights" },
  { slug: "oakdale", batch: 4, redirectTo: "north-saint-paul" },
];

const RETIRED_BY_SLUG = new Map(RETIRED_CITIES.map((c) => [c.slug, c]));

function maxBatchOverride(): number {
  const raw = process.env.AREA_RETIREMENT_MAX_BATCH?.trim();
  if (!raw) return Infinity;
  const n = Number(raw);
  return Number.isFinite(n) ? n : Infinity;
}

/** Highest batch number that is retired right now (0 = none). */
export function activeRetirementBatch(now: Date = new Date()): number {
  const cap = maxBatchOverride();
  let active = 0;
  for (const { batch, startsAt } of RETIREMENT_BATCHES) {
    if (batch <= cap && now.getTime() >= Date.parse(startsAt)) active = Math.max(active, batch);
  }
  return active;
}

/** The kept city a retired city redirects to, or null if the city is live. */
export function retiredCityTarget(slug: string, now: Date = new Date()): string | null {
  const entry = RETIRED_BY_SLUG.get(slug);
  if (!entry || entry.batch > activeRetirementBatch(now)) return null;
  return entry.redirectTo;
}

export function isCityRetired(slug: string, now: Date = new Date()): boolean {
  return retiredCityTarget(slug, now) !== null;
}

/** True for /areas-we-serve/<retired-city> and anything below it. */
export function isRetiredAreaPath(path: string, now: Date = new Date()): boolean {
  const match = /^\/areas-we-serve\/([^/]+)/.exec(path);
  return Boolean(match && isCityRetired(match[1], now));
}
