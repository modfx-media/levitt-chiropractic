import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import AreasWeServeContent from "@/components/areas/AreasWeServeContent";

const fallbackMeta: Metadata = generateMeta({
  title: "Areas We Serve | Twin Cities Chiropractor",
  description:
    "Chiropractic care from our Saint Louis Park clinic for 82 Twin Cities communities. Find your city, the real drive, and how to book with Dr. Alan Levitt.",
  slug: "areas-we-serve",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/areas-we-serve", fallbackMeta);
}

export default function Page() {
  return (
    <CMSRoute path="/areas-we-serve">
      <AreasWeServeContent />
    </CMSRoute>
  );
}
