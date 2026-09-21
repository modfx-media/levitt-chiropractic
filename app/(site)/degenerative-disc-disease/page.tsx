import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import DegenerativeDiscDiseaseContent from "@/components/services/DegenerativeDiscDiseaseContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const fallbackMeta: Metadata = generateMeta({
  title: "Degenerative Disc Disease Treatment in Saint Louis Park, MN",
  description:
    "Chiropractic care for degenerative disc disease in Saint Louis Park, MN. Dr. Levitt explains symptoms, causes and options for discs and spinal stenosis.",
  slug: "degenerative-disc-disease",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/degenerative-disc-disease", fallbackMeta);
}

export default function DegenerativeDiscDiseasePage() {
  return (
    <CMSRoute path="/degenerative-disc-disease">
    <>
      <ServiceSchema
        name="Degenerative Disc Disease Treatment"
        slug="degenerative-disc-disease"
        description="Chiropractic care for degenerative disc disease in Saint Louis Park, MN evaluation and treatment for herniated discs, spinal stenosis and related conditions."
      />
      <DegenerativeDiscDiseaseContent />
    </>
  
    </CMSRoute>
  );
}
