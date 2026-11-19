import { getServedCities } from "@/lib/areasData";
import { getAllSlugs } from "@/lib/blog";
import { designedPages } from "@/lib/designed/registry";
import { pseoServices } from "@/lib/pseoServices";

const serviceSlugs = new Set(pseoServices.map((service) => service.slug));

/**
 * Paths the public site already serves from code. A Payload document on any
 * other path must not become a new URL, including after it is published.
 */
export function isLivePublicPath(pathname: string): boolean {
  if (pathname in designedPages) return true;
  if (pathname === "/blog") return true;
  if (pathname.startsWith("/blog/")) {
    const slug = pathname.slice("/blog/".length);
    return slug.length > 0 && !slug.includes("/") && getAllSlugs().includes(slug);
  }
  const area = pathname.match(/^\/areas-we-serve\/([^/]+)(?:\/([^/]+))?$/);
  if (!area) return false;
  const city = getServedCities().some((entry) => entry.slug === area[1]);
  if (!city) return false;
  if (!area[2]) return true;
  return serviceSlugs.has(area[2]);
}
