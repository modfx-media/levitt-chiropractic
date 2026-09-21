import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import NewPatientCenterContent from "@/components/patient/NewPatientCenterContent";

const fallbackMeta: Metadata = generateMeta({
  title: "New Patient Center",
  description:
    "Everything new patients need before their first visit to Levitt Chiropractic in Saint Louis Park, MN forms, what to expect, and a quick checklist.",
  slug: "new-patient-center",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/new-patient-center", fallbackMeta);
}

export default function Page() {
  return (
    <CMSRoute path="/new-patient-center">
      <NewPatientCenterContent />
    </CMSRoute>
  );
}
