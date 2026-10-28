import { getCityBySlug } from "./areasData";
import { getServiceBySlug } from "./pseoServices";

/** Google’s practical title limit. Measured on the decoded title, not HTML entities. */
export const TITLE_MAX = 60;

const BRAND = "Levitt Chiropractic";
const BRAND_SHORT = "Levitt";
const FULL = ` | ${BRAND}`;
const SHORT = ` | ${BRAND_SHORT}`;

/** Homepage SERP title. Keyword + brand, already within 60 characters. */
export const HOME_TITLE =
  "Chiropractor in Saint Louis Park, MN | Levitt Chiropractic";

/**
 * Saint Louis Park city hub. Must not repeat HOME_TITLE
 * (that pair was one of the duplicate titles).
 */
export const SLP_HUB_TITLE =
  "Saint Louis Park Chiropractor | Levitt Chiropractic";

/**
 * Shorter service labels, longest first. Used on city + service URLs
 * so the city name still fits beside the brand.
 */
const SERVICE_LABELS: Record<string, string[]> = {
  "adjustments-and-manipulation": [
    "Chiropractic Adjustments & Manipulation",
    "Adjustments & Manipulation",
    "Spinal Adjustments",
  ],
  injuries: ["Injury Chiropractic Care", "Injury Care"],
  "personal-injury": [
    "Personal Injury Chiropractic Care",
    "Personal Injury Care",
    "Personal Injury",
  ],
  cryotherapy: ["Cryotherapy"],
  "ice-pack-cryotherapy": ["Ice Pack Cryotherapy", "Ice Pack Therapy"],
  "cold-laser-therapy": ["Cold Laser Therapy"],
  "custom-foot-orthotics": ["Custom Foot Orthotics", "Foot Orthotics"],
  "common-chiropractic-conditions": [
    "Treatment for Common Chiropractic Conditions",
    "Chiropractic Conditions",
    "Common Conditions",
  ],
  "back-pain-treatments": ["Back Pain Treatment", "Back Pain Care"],
  "degenerative-disc-disease": [
    "Degenerative Disc Disease Care",
    "Disc Disease Care",
  ],
  "therapeutic-exercise": ["Therapeutic Exercise"],
  "functional-medicine": ["Functional Medicine"],
  "alternative-medicine": ["Alternative Medicine"],
};

const DANGLING =
  /^(a|an|the|in|of|and|or|for|to|with|on|at|vs|vs\.)$/i;

function firstFit(candidates: string[]): string | null {
  for (const candidate of candidates) {
    if (candidate.length > 0 && candidate.length <= TITLE_MAX) return candidate;
  }
  return null;
}

function trimTo(primary: string, suffix: string): string {
  const direct = `${primary}${suffix}`;
  if (direct.length <= TITLE_MAX) return direct;
  const room = TITLE_MAX - suffix.length;
  let cut = primary.slice(0, Math.max(0, room)).trimEnd();
  const space = cut.lastIndexOf(" ");
  if (space > 12) cut = cut.slice(0, space);
  cut = cut.replace(/[:|,–—-]+$/g, "").trim();
  let parts = cut.split(" ");
  while (parts.length > 3 && DANGLING.test(parts[parts.length - 1] ?? "")) {
    parts = parts.slice(0, -1);
    cut = parts.join(" ");
  }
  const title = `${cut}${suffix}`;
  return title.length <= TITLE_MAX ? title : title.slice(0, TITLE_MAX);
}

function shortPlace(city: string): string {
  return city.replace(/\bSaint\b/g, "St.");
}

function cityServiceTitle(labels: string[], city: string): string {
  const places = [city];
  const abbreviated = shortPlace(city);
  if (abbreviated !== city) places.push(abbreviated);
  const candidates: string[] = [];
  for (const label of labels) {
    for (const place of places) {
      candidates.push(`${label} in ${place}, MN${FULL}`);
      candidates.push(`${label} in ${place}${FULL}`);
      candidates.push(`${label} in ${place}, MN${SHORT}`);
      candidates.push(`${label} in ${place}${SHORT}`);
    }
  }
  return (
    firstFit(candidates) ??
    trimTo(`${labels[labels.length - 1]} in ${abbreviated}`, SHORT)
  );
}

function cityHubTitle(city: string): string {
  const abbreviated = shortPlace(city);
  return (
    firstFit([
      `Chiropractor in ${city}, MN${FULL}`,
      `Chiropractor in ${city}${FULL}`,
      `Chiropractor in ${abbreviated}${FULL}`,
      `Chiropractor in ${city}${SHORT}`,
      `Chiropractor in ${abbreviated}${SHORT}`,
    ]) ?? trimTo(`Chiropractor in ${abbreviated}`, SHORT)
  );
}

function serviceLabels(serviceSlug: string): string[] {
  const known = SERVICE_LABELS[serviceSlug];
  if (known) return known;
  const service = getServiceBySlug(serviceSlug);
  if (service) return [service.name];
  return [serviceSlug.replace(/-/g, " ")];
}

function cityName(citySlug: string): string {
  return getCityBySlug(citySlug)?.name ?? citySlug.replace(/-/g, " ");
}

function stripBrand(raw: string): string {
  return raw.replace(/\s*\|\s*Levitt(?: Chiropractic)?$/i, "").trim();
}

function otherTitle(raw: string): string {
  let primary = stripBrand(raw);
  if (primary.includes("|")) primary = primary.split("|")[0]?.trim() ?? primary;
  primary = primary
    .replace(/\s+in\s+Saint Louis Park(?:,\s*MN)?$/i, "")
    .trim();
  return firstFit([`${primary}${FULL}`, `${primary}${SHORT}`]) ?? trimTo(primary, SHORT);
}

/**
 * Build the final `<title>` (brand included) for a public path.
 * `raw` is the page’s primary phrase, with or without a brand suffix.
 * City URLs keep the city so they stay unique from the matching core page.
 */
export function composeSeoTitle(raw: string, slug = ""): string {
  const path = slug.replace(/^\/+|\/+$/g, "");
  if (path === "") return HOME_TITLE;

  const cityService = path.match(/^areas-we-serve\/([^/]+)\/([^/]+)$/);
  if (cityService) {
    const [, citySlug, serviceSlug] = cityService;
    return cityServiceTitle(serviceLabels(serviceSlug), cityName(citySlug));
  }

  const cityHub = path.match(/^areas-we-serve\/([^/]+)$/);
  if (cityHub) {
    const citySlug = cityHub[1];
    if (citySlug === "saint-louis-park") return SLP_HUB_TITLE;
    return cityHubTitle(cityName(citySlug));
  }

  return otherTitle(raw);
}
