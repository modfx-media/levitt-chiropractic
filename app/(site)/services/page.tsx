import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import ServicesContent from "@/components/services/ServicesContent";

const fallbackMeta: Metadata = generateMeta({
  title: "Chiropractic Services",
  description:
    "Chiropractic services in Saint Louis Park: adjustments, cold laser, targeted cold, exercise, orthotics, and condition pages.",
  slug: "services",
  absoluteTitle: true,
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/services", fallbackMeta);
}

export default function Page() {
  return (
    <CMSRoute path="/services">
      <ServicesContent />
    </CMSRoute>
  );
}
