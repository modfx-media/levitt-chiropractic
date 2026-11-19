import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { loadPageContent } from "@/lib/designed/loadPage";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";

const fallbackMeta: Metadata = generateMeta({
  title: "Privacy Policy",
  description:
    "How Levitt Chiropractic Center, P.A. collects, uses, stores, and protects the information you share through this website and our online forms.",
  slug: "privacy-policy",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/privacy-policy", fallbackMeta);
}

export default async function Page() {
  const content = await loadPageContent("/privacy-policy");
  return (
    <CMSRoute path="/privacy-policy">
      <PrivacyPolicyContent content={content}  />
    </CMSRoute>
  );
}
