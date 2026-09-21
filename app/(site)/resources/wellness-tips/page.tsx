import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import WellnessTipsContent from "@/components/resources/WellnessTipsContent";

const fallbackMeta: Metadata = generateMeta({
  title: "Spinal Wellness Tips",
  description:
    "Practical daily habits to protect your spine posture, lifting, sleep, hydration, and stretching tips from Dr. Alan Levitt at Levitt Chiropractic.",
  slug: "resources/wellness-tips",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/resources/wellness-tips", fallbackMeta);
}

export default function Page() {
  return (
    <CMSRoute path="/resources/wellness-tips">
      <WellnessTipsContent />
    </CMSRoute>
  );
}
