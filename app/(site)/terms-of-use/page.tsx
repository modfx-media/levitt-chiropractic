import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import TermsOfUseContent from "@/components/legal/TermsOfUseContent";

const fallbackMeta: Metadata = generateMeta({
  title: "Terms of Use",
  description:
    "Website Terms of Service for Levitt Chiropractic Center, P.A. Please read these terms carefully before using this website or our online forms.",
  slug: "terms-of-use",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/terms-of-use", fallbackMeta);
}

export default function Page() {
  return (
    <CMSRoute path="/terms-of-use">
      <TermsOfUseContent />
    </CMSRoute>
  );
}
