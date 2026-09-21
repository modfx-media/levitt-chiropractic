import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import WhatToExpectContent from "@/components/patient/WhatToExpectContent";

const fallbackMeta: Metadata = generateMeta({
  title: "What to Expect on Your First Visit",
  description:
    "A friendly walkthrough of your first visit to Levitt Chiropractic in Saint Louis Park, MN paperwork, exam, goals, and your personalized care plan.",
  slug: "new-patient-center/what-to-expect",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/new-patient-center/what-to-expect", fallbackMeta);
}

export default function Page() {
  return (
    <CMSRoute path="/new-patient-center/what-to-expect">
      <WhatToExpectContent />
    </CMSRoute>
  );
}
