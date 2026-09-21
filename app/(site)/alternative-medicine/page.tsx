import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import AlternativeMedicineContent from "@/components/services/AlternativeMedicineContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const fallbackMeta: Metadata = generateMeta({
  title: "Alternative Medicine Doctor in Saint Louis Park, MN",
  description:
    "Natural, root-cause alternative medicine in Saint Louis Park, MN from Dr. Alan Levitt chiropractic and soft-tissue therapies for pain and headaches.",
  slug: "alternative-medicine",
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
