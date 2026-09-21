import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import AdjustmentsContent from "@/components/services/AdjustmentsContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const fallbackMeta: Metadata = generateMeta({
  title: "Chiropractic Adjustments & Spinal Manipulation in Saint Louis Park, MN",
  description:
    "Chiropractic adjustments and spinal manipulation in Saint Louis Park, MN from Dr. Alan Levitt Diversified, Zone, and Torque Release techniques.",
  slug: "adjustments-and-manipulation",
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
