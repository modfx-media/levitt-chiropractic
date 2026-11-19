import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { loadPageContent } from "@/lib/designed/loadPage";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import { getServedCities } from "@/lib/areasData";
import AreasWeServeContent from "@/components/areas/AreasWeServeContent";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const count = getServedCities().length;
  return withCMSMeta(
    "/areas-we-serve",
    generateMeta({
      title: "Areas We Serve | Twin Cities Chiropractor",
      description: `Chiropractic care from our Saint Louis Park clinic for ${count} Twin Cities communities. Find your city, the real drive, and how to book with Dr. Alan Levitt.`,
      slug: "areas-we-serve",
    }),
  );
}

export default async function Page() {
  const content = await loadPageContent("/areas-we-serve");
  return (
    <CMSRoute path="/areas-we-serve">
      <AreasWeServeContent content={content} cities={getServedCities()}  />
    </CMSRoute>
  );
}
