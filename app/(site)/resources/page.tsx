import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { loadPageContent } from "@/lib/designed/loadPage";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import ResourcesHubContent from "@/components/resources/ResourcesHubContent";


export const revalidate = 300;
const fallbackMeta: Metadata = generateMeta({
  title: "Patient Resources",
  description:
    "Patient education from Levitt Chiropractic about chiropractic, Q&A, wellness tips, and our blog with in-depth articles on spinal health and recovery.",
  slug: "resources",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/resources", fallbackMeta);
}

export default async function Page() {
  const content = await loadPageContent("/resources");
  return (
    <CMSRoute path="/resources">
      <ResourcesHubContent content={content}  />
    </CMSRoute>
  );
}
