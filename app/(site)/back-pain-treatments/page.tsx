import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import BackPainTreatmentsContent from "@/components/services/BackPainTreatmentsContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const fallbackMeta: Metadata = generateMeta({
  title: "Back Pain Treatments in Saint Louis Park, MN",
  description:
    "Drug-free chiropractic back pain treatments in Saint Louis Park, MN spinal adjustments, cold laser, therapeutic exercise, and soft-tissue care.",
  slug: "back-pain-treatments",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/back-pain-treatments", fallbackMeta);
}

export default function BackPainTreatmentsPage() {
  return (
    <CMSRoute path="/back-pain-treatments">
    <>
      <ServiceSchema
        name="Back Pain Treatments"
        slug="back-pain-treatments"
        description="Personalized chiropractic back pain treatments in Saint Louis Park, MN spinal adjustments, cold laser therapy, therapeutic exercise and soft-tissue techniques."
      />
      <BackPainTreatmentsContent />
    </>
  
    </CMSRoute>
  );
}
