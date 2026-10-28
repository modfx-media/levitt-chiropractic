import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import ColdLaserTherapyContent from "@/components/services/ColdLaserTherapyContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const fallbackMeta: Metadata = generateMeta({
  title: "Cold Laser Therapy",
  description:
    "Cold laser therapy in Saint Louis Park: a handheld low-level light, no incision and little or no heat, used after an exam.",
  slug: "cold-laser-therapy",
  absoluteTitle: true,
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/cold-laser-therapy", fallbackMeta);
}

export default function ColdLaserTherapyPage() {
  return (
    <CMSRoute path="/cold-laser-therapy">
      <>
        <ServiceSchema
          name="Cold Laser Therapy"
          slug="cold-laser-therapy"
          description="Handheld cold laser therapy at Levitt Chiropractic Center in Saint Louis Park, used after an exam for selected soft-tissue and joint pain."
        />
        <ColdLaserTherapyContent />
      </>
    </CMSRoute>
  );
}
