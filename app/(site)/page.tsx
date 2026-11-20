import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { loadPageContent } from "@/lib/designed/loadPage";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import HomeContent from "@/components/home/HomeContent";
import { StickyBookNowBanner } from "@/components/layout/StickyBookNowBanner";
import { getDisplayedGoogleReviews } from "@/lib/google-reviews";

const fallbackMeta: Metadata = generateMeta({
  title: "Chiropractor in Saint Louis Park, MN",
  description:
    "Chiropractor in Saint Louis Park at 6200 Excelsior Blvd, Suite 201. Back pain, neck pain, cold laser, and custom orthotics with Dr. Alan Levitt.",
  slug: "",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/", fallbackMeta);
}

export default async function Page() {
  const content = await loadPageContent("/");
  const payload = await getDisplayedGoogleReviews();

  return (
    <CMSRoute path="/">
      <>
        <HomeContent content={content} reviews={payload.reviews} meta={payload.meta}  />
        <StickyBookNowBanner />
      </>
    </CMSRoute>
  );
}
