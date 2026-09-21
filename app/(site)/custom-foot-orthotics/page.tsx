import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import CustomFootOrthoticsContent from "@/components/services/CustomFootOrthoticsContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const fallbackMeta: Metadata = generateMeta({
  title: "Custom Foot Orthotics in Saint Louis Park, MN",
  description:
    "Prescription custom foot orthotics from Dr. Alan Levitt for knee, foot, hip, and back pain in Saint Louis Park, MN. Precision-fit, lasts over a year.",
  slug: "custom-foot-orthotics",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/custom-foot-orthotics", fallbackMeta);
}

export default function CustomFootOrthoticsPage() {
  return (
    <CMSRoute path="/custom-foot-orthotics">
    <>
      <ServiceSchema
        name="Custom Foot Orthotics"
        slug="custom-foot-orthotics"
        description="Prescription custom foot orthotics for knee, foot, hip and back pain in Saint Louis Park, MN. Precision-fit, lasting 1+ year far better than over-the-counter inserts."
      />
      <CustomFootOrthoticsContent />
    </>
  
    </CMSRoute>
  );
}
