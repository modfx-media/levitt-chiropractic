import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import HomeContent from "@/components/home/HomeContent";
import { StickyBookNowBanner } from "@/components/layout/StickyBookNowBanner";
import { getDisplayedGoogleReviews } from "@/lib/google-reviews";

const fallbackMeta: Metadata = generateMeta({
  title: "Chiropractor in Saint Louis Park, MN",
  description:
    "Chiropractor in Saint Louis Park at 6200 Excelsior Blvd, Suite 201. Back pain, injuries, cold laser, and custom orthotics with Dr. Alan Levitt.",
  slug: "",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/", fallbackMeta);
}

export default async function Page() {
  const payload = await getDisplayedGoogleReviews();

  return (
    <CMSRoute path="/">
      <>
        <HomeContent reviews={payload.reviews} meta={payload.meta} />
        <StickyBookNowBanner />
      </>
    </CMSRoute>
  );
}
