import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import PersonalInjuryContent from "@/components/services/PersonalInjuryContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const fallbackMeta: Metadata = generateMeta({
  title: "Personal Injury Chiropractor in Saint Louis Park, MN",
  description:
    "Personal injury chiropractic care in Saint Louis Park, MN from Dr. Alan Levitt for auto, bike, construction, OSHA and malpractice accident recovery.",
  slug: "personal-injury",
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
        description="Personal injury chiropractic care in Saint Louis Park, MN. Evaluation and treatment for injuries from auto, bike, construction, OSHA and malpractice incidents."
      />
      <PersonalInjuryContent />
    </>
  
    </CMSRoute>
  );
}
