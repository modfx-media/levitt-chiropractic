import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
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

export default function Page() {
  return (
    <CMSRoute path="/good-faith-estimate">
      <GoodFaithEstimateContent />
    </CMSRoute>
  );
}
