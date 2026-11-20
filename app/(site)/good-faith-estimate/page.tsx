import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { loadPageContent } from "@/lib/designed/loadPage";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import GoodFaithEstimateContent from "@/components/legal/GoodFaithEstimateContent";

const fallbackMeta: Metadata = generateMeta({
  title: "Good Faith Estimate",
  description:
    "Your right to a Good Faith Estimate under the No Surprises Act and what to expect when planning chiropractic visits at Levitt Chiropractic Center, P.A.",
  slug: "good-faith-estimate",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/good-faith-estimate", fallbackMeta);
}

export default async function Page() {
  const content = await loadPageContent("/good-faith-estimate");
  return (
    <CMSRoute path="/good-faith-estimate">
      <GoodFaithEstimateContent content={content}  />
    </CMSRoute>
  );
}
