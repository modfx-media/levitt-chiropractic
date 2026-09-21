import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import HomeContent from "@/components/home/HomeContent";
import { StickyBookNowBanner } from "@/components/layout/StickyBookNowBanner";

const fallbackMeta: Metadata = generateMeta({
  title: "Chiropractor in Saint Louis Park, MN",
  description:
    "Chiropractor in Saint Louis Park — Suite 201 at 6200 Excelsior Blvd, near Methodist Hospital. Back pain, injuries, cold laser, and custom orthotics with Dr. Alan Levitt.",
  slug: "",
  absoluteTitle: true,
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/", fallbackMeta);
}

export default function Page() {
  return (
    <CMSRoute path="/">
      <>
        <HomeContent />
        <StickyBookNowBanner />
      </>
    </CMSRoute>
  );
}
