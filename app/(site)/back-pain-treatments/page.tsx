import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import BackPainTreatmentsContent from "@/components/services/BackPainTreatmentsContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const fallbackMeta: Metadata = generateMeta({
  title: "Back Pain & Sciatica Care",
  description:
    "Back pain and sciatica care in Saint Louis Park. Dr. Alan Levitt examines the cause, then uses adjustments, laser, ice, or exercise when they fit.",
  slug: "back-pain-treatments",
  absoluteTitle: true,
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
        description="Chiropractic back pain and sciatica care in Saint Louis Park. Exam first, then adjustments, cold laser, ice, or exercise when the findings support them."
      />
      <BackPainTreatmentsContent />
    </>
  
    </CMSRoute>
  );
}
