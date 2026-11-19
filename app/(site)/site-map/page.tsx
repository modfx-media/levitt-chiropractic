import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { loadPageContent } from "@/lib/designed/loadPage";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import { getServedCities } from "@/lib/areasData";
import SiteMapContent from "@/components/legal/SiteMapContent";

export const revalidate = 3600;

const fallbackMeta: Metadata = generateMeta({
  title: "Site Map",
  description:
    "Browse every page on Levitt Chiropractic Center, P.A. services, areas we serve, new patient resources, contact information, and legal policies.",
  slug: "site-map",
  noindex: true,
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/site-map", fallbackMeta);
}

export default async function Page() {
  const content = await loadPageContent("/site-map");
  return (
    <CMSRoute path="/site-map">
      <SiteMapContent content={content} cities={getServedCities()}  />
    </CMSRoute>
  );
}
