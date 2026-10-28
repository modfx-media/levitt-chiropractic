import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import IcePackCryotherapyContent from "@/components/services/IcePackCryotherapyContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const fallbackMeta: Metadata = generateMeta({
  title: "Ice Pack Cryotherapy",
  description:
    "Ice pack cryotherapy in Saint Louis Park: a cloth barrier, a small area, and about 15 to 20 minutes. Skin rules included.",
  slug: "ice-pack-cryotherapy",
  absoluteTitle: true,
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/ice-pack-cryotherapy", fallbackMeta);
}

export default function IcePackCryotherapyPage() {
  return (
    <CMSRoute path="/ice-pack-cryotherapy">
    <>
      <ServiceSchema
        name="Ice Pack Cryotherapy"
        slug="ice-pack-cryotherapy"
        description="Ice pack cryotherapy in Saint Louis Park, MN to reduce pain, swelling and inflammation. Used in sports medicine and chiropractic rehab."
      />
      <IcePackCryotherapyContent />
    </>
  
    </CMSRoute>
  );
}
