import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import SiteMapContent from "@/components/legal/SiteMapContent";

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

export default function Page() {
  return (
    <CMSRoute path="/site-map">
      <SiteMapContent />
    </CMSRoute>
  );
}
