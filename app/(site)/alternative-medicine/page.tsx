import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import AlternativeMedicineContent from "@/components/services/AlternativeMedicineContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const fallbackMeta: Metadata = generateMeta({
  title: "Alternative Medicine",
  description:
    "Alternative medicine at Levitt Chiropractic means a non-surgical start when the exam allows. It does not replace your physician.",
  slug: "alternative-medicine",
  absoluteTitle: true,
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/alternative-medicine", fallbackMeta);
}

export default function AlternativeMedicinePage() {
  return (
    <CMSRoute path="/alternative-medicine">
    <>
      <ServiceSchema
        name="Alternative Medicine"
        slug="alternative-medicine"
        description="Alternative medicine in Saint Louis Park, MN natural, drug-free therapies including chiropractic, nutritional and lifestyle care from Dr. Alan Levitt."
      />
      <AlternativeMedicineContent />
    </>
  
    </CMSRoute>
  );
}
