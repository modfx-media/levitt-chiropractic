import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
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

export default function Page() {
  return (
    <CMSRoute path="/areas-we-serve">
      <AreasWeServeContent cities={getServedCities()} />
    </CMSRoute>
  );
}
