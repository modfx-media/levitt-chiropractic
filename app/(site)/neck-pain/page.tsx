import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import NeckPainContent from "@/components/services/NeckPainContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const fallbackMeta: Metadata = generateMeta({
  title: "Neck Pain Chiropractor",
  description:
    "Neck pain care in Saint Louis Park for stiffness, arm symptoms, and headaches that start in the neck. Exam first with Dr. Alan Levitt.",
  slug: "neck-pain",
  absoluteTitle: true,
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/neck-pain", fallbackMeta);
}

export default function NeckPainPage() {
  return (
    <CMSRoute path="/neck-pain">
      <>
        <ServiceSchema
          name="Neck Pain Care"
          slug="neck-pain"
          description="Chiropractic evaluation for neck pain, pinched nerves, and headaches that start in the neck at Levitt Chiropractic Center in Saint Louis Park."
        />
        <NeckPainContent />
      </>
    </CMSRoute>
  );
}
