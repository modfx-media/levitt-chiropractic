import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import CommonChiropracticConditionsContent from "@/components/services/CommonChiropracticConditionsContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const fallbackMeta: Metadata = generateMeta({
  title: "Chiropractic Conditions",
  description:
    "A map of chiropractic conditions in Saint Louis Park. Neck, back, discs, and crash injuries each have their own page.",
  slug: "common-chiropractic-conditions",
  absoluteTitle: true,
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/common-chiropractic-conditions", fallbackMeta);
}

export default function CommonChiropracticConditionsPage() {
  return (
    <CMSRoute path="/common-chiropractic-conditions">
    <>
      <ServiceSchema
        name="Common Chiropractic Conditions Treatment"
        slug="common-chiropractic-conditions"
        description="Chiropractic care for allergies, headaches, sciatica, whiplash, carpal tunnel, fibromyalgia, joint dysfunction and more in Saint Louis Park, MN."
      />
      <CommonChiropracticConditionsContent />
    </>
  
    </CMSRoute>
  );
}
