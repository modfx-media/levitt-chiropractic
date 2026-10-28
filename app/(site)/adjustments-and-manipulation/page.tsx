import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import AdjustmentsContent from "@/components/services/AdjustmentsContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const fallbackMeta: Metadata = generateMeta({
  title: "Spinal Adjustments",
  description:
    "Spinal adjustments in Saint Louis Park using Diversified, Zone Therapy, or Torque Release, chosen after an exam by Dr. Alan Levitt.",
  slug: "adjustments-and-manipulation",
  absoluteTitle: true,
  image: "/images/adjustment-1.jpg",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/adjustments-and-manipulation", fallbackMeta);
}

export default function AdjustmentsPage() {
  return (
    <CMSRoute path="/adjustments-and-manipulation">
    <>
      <ServiceSchema
        name="Chiropractic Adjustments & Spinal Manipulation"
        slug="adjustments-and-manipulation"
        description="Chiropractic adjustments and spinal manipulation in Saint Louis Park, MN using Diversified Technique, Zone Therapy and Torque Release Technique to relieve pain and restore alignment."
      />
      <AdjustmentsContent />
    </>
  
    </CMSRoute>
  );
}
