import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import TestimonialsContent from "@/components/testimonials/TestimonialsContent";

const fallbackMeta: Metadata = generateMeta({
  title: "Patient Testimonials in Saint Louis Park, MN",
  description:
    "Real reviews of Dr. Alan Levitt back, neck, headache, and post-accident chiropractic patients have trusted since 1987 in Saint Louis Park, MN.",
  slug: "testimonials",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/testimonials", fallbackMeta);
}

export default function TestimonialsPage() {
  return (
    <CMSRoute path="/testimonials">
      <TestimonialsContent />
    </CMSRoute>
  );
}
