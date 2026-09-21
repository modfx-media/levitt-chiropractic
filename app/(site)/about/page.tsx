import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import AboutContent from "@/components/about/AboutContent";

const fallbackMeta: Metadata = generateMeta({
  title: "About Our Practice in Saint Louis Park, MN",
  description:
    "Inside Levitt Chiropractic Center in Saint Louis Park, MN our approach, payment options, and the conditions Dr. Alan Levitt treats every day.",
  slug: "about",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/about", fallbackMeta);
}

export default function Page() {
  return (
    <CMSRoute path="/about">
      <AboutContent />
    </CMSRoute>
  );
}
