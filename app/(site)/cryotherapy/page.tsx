import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import CryotherapyContent from "@/components/services/CryotherapyContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const fallbackMeta: Metadata = generateMeta({
  title: "Targeted Cryotherapy",
  description:
    "Targeted cryotherapy in Saint Louis Park for hot, swollen tissue. Not a walk-in cold chamber. Dr. Alan Levitt.",
  slug: "cryotherapy",
  absoluteTitle: true,
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/cryotherapy", fallbackMeta);
}

export default function CryotherapyPage() {
  return (
    <CMSRoute path="/cryotherapy">
    <>
      <ServiceSchema
        name="Cryotherapy"
        slug="cryotherapy"
        description="Cryotherapy in Saint Louis Park, MN ice pack and whole-body cold therapy to reduce pain, swelling and inflammation."
      />
      <CryotherapyContent />
    </>
  
    </CMSRoute>
  );
}
