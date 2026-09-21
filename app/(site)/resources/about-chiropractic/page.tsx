import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import AboutChiropracticContent from "@/components/resources/AboutChiropracticContent";

const fallbackMeta: Metadata = generateMeta({
  title: "About Chiropractic",
  description:
    "What is chiropractic? A natural, systemic approach to healing built on the idea that the body is self-sustaining, self-healing, and nervous-system led.",
  slug: "resources/about-chiropractic",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/resources/about-chiropractic", fallbackMeta);
}

export default function Page() {
  return (
    <CMSRoute path="/resources/about-chiropractic">
      <AboutChiropracticContent />
    </CMSRoute>
  );
}
