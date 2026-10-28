import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import FunctionalMedicineContent from "@/components/services/FunctionalMedicineContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const fallbackMeta: Metadata = generateMeta({
  title: "Functional Medicine",
  description:
    "Functional medicine in Saint Louis Park alongside chiropractic care. Sleep, food, and habits. Prescribed medications are not stopped.",
  slug: "functional-medicine",
  absoluteTitle: true,
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/functional-medicine", fallbackMeta);
}

export default function FunctionalMedicinePage() {
  return (
    <CMSRoute path="/functional-medicine">
    <>
      <ServiceSchema
        name="Functional Medicine"
        slug="functional-medicine"
        description="Functional medicine in Saint Louis Park, MN. A personalized, whole-person approach to address chronic pain and chronic illness at the root cause."
      />
      <FunctionalMedicineContent />
    </>
  
    </CMSRoute>
  );
}
