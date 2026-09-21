import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import ColdLaserTherapyContent from "@/components/services/ColdLaserTherapyContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const fallbackMeta: Metadata = generateMeta({
  title: "Cold Laser Therapy in Saint Louis Park, MN",
  description:
    "Cold laser therapy (low level laser) for back pain, arthritis, carpal tunnel, tendonitis and fibromyalgia in Saint Louis Park, MN. Drug-free pain relief.",
  slug: "cold-laser-therapy",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/cold-laser-therapy", fallbackMeta);
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is cold laser therapy used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cold laser therapy is used for acute and chronic pain, ligament sprains, muscle strain, tendonitis, arthritis, tennis elbow, back pain, bursitis, carpal tunnel syndrome, fibromyalgia, and wound healing.",
      },
    },
    {
      "@type": "Question",
      name: "Is cold laser therapy painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Cold laser therapy is non-invasive and pain-free. The handheld device is placed over the injured area for 30 seconds to several minutes with no heat or discomfort.",
      },
    },
  ],
};

export default function ColdLaserTherapyPage() {
  return (
    <CMSRoute path="/cold-laser-therapy">
      <>
        <ServiceSchema
          name="Cold Laser Therapy"
          slug="cold-laser-therapy"
          description="Low-level laser therapy in Saint Louis Park, MN for back pain, arthritis, carpal tunnel, tendonitis, fibromyalgia and more. Drug-free, non-invasive pain relief."
        />
        <JsonLd id="cold-laser-faq" data={faqSchema} />
        <ColdLaserTherapyContent />
      </>
    </CMSRoute>
  );
}
