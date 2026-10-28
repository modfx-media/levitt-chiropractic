import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import PersonalInjuryContent from "@/components/services/PersonalInjuryContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const fallbackMeta: Metadata = generateMeta({
  title: "Personal Injury Chiropractor",
  description:
    "Exam-first chiropractic care in Saint Louis Park after an auto accident, including whiplash. No injury letter without an exam.",
  slug: "personal-injury",
  absoluteTitle: true,
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/personal-injury", fallbackMeta);
}

export default function PersonalInjuryPage() {
  return (
    <CMSRoute path="/personal-injury">
    <>
      <ServiceSchema
        name="Personal Injury Chiropractic Care"
        slug="personal-injury"
        description="Exam-first personal injury chiropractic care in Saint Louis Park after an auto accident, including whiplash and other crash injuries."
      />
      <PersonalInjuryContent />
    </>
  
    </CMSRoute>
  );
}
