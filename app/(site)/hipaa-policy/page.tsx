import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import HipaaPolicyContent from "@/components/legal/HipaaPolicyContent";

const fallbackMeta: Metadata = generateMeta({
  title: "HIPAA Notice of Privacy Practices",
  description:
    "HIPAA Notice of Privacy Practices for Levitt Chiropractic Center, P.A. how your protected health information may be used, disclosed, and accessed.",
  slug: "hipaa-policy",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/hipaa-policy", fallbackMeta);
}

export default function Page() {
  return (
    <CMSRoute path="/hipaa-policy">
      <HipaaPolicyContent />
    </CMSRoute>
  );
}
