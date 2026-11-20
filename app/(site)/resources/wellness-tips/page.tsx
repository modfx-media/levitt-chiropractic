import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { loadPageContent } from "@/lib/designed/loadPage";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import WellnessTipsContent from "@/components/resources/WellnessTipsContent";


export const revalidate = 300;
const fallbackMeta: Metadata = generateMeta({
  title: "Spinal Wellness Tips",
  description:
    "Practical daily habits to protect your spine posture, lifting, sleep, hydration, and stretching tips from Dr. Alan Levitt at Levitt Chiropractic.",
  slug: "resources/wellness-tips",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/resources/wellness-tips", fallbackMeta);
}

export default async function Page() {
  const content = await loadPageContent("/resources/wellness-tips");
  return (
    <CMSRoute path="/resources/wellness-tips">
      <WellnessTipsContent content={content}  />
    </CMSRoute>
  );
}
