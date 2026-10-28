import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import AppointmentRequestContent from "@/components/contact/AppointmentRequestContent";

const fallbackMeta: Metadata = generateMeta({
  title: "Existing Patient Appointment",
  description:
    "Existing patients of Levitt Chiropractic in Saint Louis Park, MN can request their next appointment online. Our staff will be in touch shortly to confirm your visit.",
  slug: "contact/existing-patient-appointment",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/contact/existing-patient-appointment", fallbackMeta);
}

export default function Page() {
  return (
    <CMSRoute path="/contact/existing-patient-appointment">
      <AppointmentRequestContent variant="existing" />
    </CMSRoute>
  );
}
