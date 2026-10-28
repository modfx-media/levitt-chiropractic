import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import DegenerativeDiscDiseaseContent from "@/components/services/DegenerativeDiscDiseaseContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const fallbackMeta: Metadata = generateMeta({
  title: "Herniated Disc & Disc Disease",
  description:
    "Degenerative disc disease and herniated disc care in Saint Louis Park. Symptoms, red flags, and conservative options with Dr. Alan Levitt.",
  slug: "degenerative-disc-disease",
  absoluteTitle: true,
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
        description="Chiropractic care for degenerative disc disease and herniated discs in Saint Louis Park, with red-flag screening and conservative options."
      />
      <DegenerativeDiscDiseaseContent />
    </>
  
    </CMSRoute>
  );
}
