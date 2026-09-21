import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import CryotherapyContent from "@/components/services/CryotherapyContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const fallbackMeta: Metadata = generateMeta({
  title: "Cryotherapy in Saint Louis Park, MN",
  description:
    "Ice pack and whole-body cryotherapy services in Saint Louis Park, MN from Dr. Alan Levitt drug-free relief from pain, swelling, and inflammation.",
  slug: "cryotherapy",
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
