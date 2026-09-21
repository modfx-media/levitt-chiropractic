import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import ResourcesHubContent from "@/components/resources/ResourcesHubContent";

const fallbackMeta: Metadata = generateMeta({
  title: "Patient Resources",
  description:
    "Patient education from Levitt Chiropractic about chiropractic, Q&A, wellness tips, and our blog with in-depth articles on spinal health and recovery.",
  slug: "resources",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/resources", fallbackMeta);
}

export default function Page() {
  return (
    <CMSRoute path="/resources">
      <ResourcesHubContent />
    </CMSRoute>
  );
}
