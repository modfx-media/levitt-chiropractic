import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import TestimonialsContent from "@/components/testimonials/TestimonialsContent";
import { getDisplayedGoogleReviews } from "@/lib/google-reviews";

const fallbackMeta: Metadata = generateMeta({
  title: "Patient Testimonials in Saint Louis Park, MN",
  description:
    "Real reviews of Dr. Alan Levitt back, neck, headache, and post-accident chiropractic patients have trusted since 1987 in Saint Louis Park, MN.",
  slug: "testimonials",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/testimonials", fallbackMeta);
}

export default async function TestimonialsPage() {
  const payload = await getDisplayedGoogleReviews();

  return (
    <CMSRoute path="/testimonials">
      <TestimonialsContent
        items={payload.reviews.map((review) => ({
          name: review.name,
          quote: review.quote,
          when: review.relativeTime ?? "Posted on Google",
        }))}
        rating={payload.meta.rating}
        reviewCount={payload.meta.reviewCount}
        reviewsUrl={payload.meta.reviewsUrl}
      />
    </CMSRoute>
  );
}
