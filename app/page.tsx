import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import HomeContent from "@/components/home/HomeContent";
import { StickyBookNowBanner } from "@/components/layout/StickyBookNowBanner";

export const metadata: Metadata = generateMeta({
  title: "Chiropractor in Saint Louis Park, MN",
  description:
    "Chiropractor in Saint Louis Park — Suite 201 at 6200 Excelsior Blvd, near Methodist Hospital. Back pain, injuries, cold laser, and custom orthotics with Dr. Alan Levitt.",
  slug: "",
  absoluteTitle: true,
});

export default function Page() {
  return (
    <>
      <HomeContent />
      <StickyBookNowBanner />
    </>
  );
}
