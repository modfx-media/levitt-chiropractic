import { NextResponse, type NextRequest } from "next/server";

import { retiredCityTarget } from "@/lib/areaRetirement";
import { getServiceBySlug } from "@/lib/pseoServices";

/** City service pages that were removed; they fold back into the city page. */
const REMOVED_CITY_SERVICES = new Set(["injuries", "personal-injury"]);

/**
 * Area redirects that depend on today's date live here instead of next.config.ts,
 * which is fixed at build time. Every rule resolves to its final page in one hop.
 */
export function proxy(request: NextRequest) {
  const [, , citySlug, serviceSlug, ...rest] = request.nextUrl.pathname.split("/");
  if (!citySlug || rest.length > 0) return NextResponse.next();

  const target = retiredCityTarget(citySlug);
  const city = target ?? citySlug;

  let destination: string | null = null;
  if (serviceSlug && REMOVED_CITY_SERVICES.has(serviceSlug)) {
    destination = `/areas-we-serve/${city}`;
  } else if (target) {
    destination =
      serviceSlug && getServiceBySlug(serviceSlug)
        ? `/areas-we-serve/${target}/${serviceSlug}`
        : `/areas-we-serve/${target}`;
  }

  if (!destination) return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = destination;
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: ["/areas-we-serve/:city", "/areas-we-serve/:city/:service"],
};
