import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import ServicesContent from "@/components/services/ServicesContent";

const fallbackMeta: Metadata = generateMeta({
  title: "Chiropractic Services in Saint Louis Park, MN",
  description:
    "Dr. Alan Levitt's full chiropractic services in Saint Louis Park, MN spinal adjustments, cold laser, cryotherapy, orthotics, and functional medicine.",
  slug: "services",
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
