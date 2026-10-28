import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import AppointmentRequestContent from "@/components/contact/AppointmentRequestContent";

const fallbackMeta: Metadata = generateMeta({
  title: "New Patient Appointment",
  description:
    "Request a chiropractic appointment at Levitt Chiropractic in Saint Louis Park, MN. We typically reply within one business day to schedule your visit.",
  slug: "contact/new-patient-appointment",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/contact/new-patient-appointment", fallbackMeta);
}

export default function Page() {
  return (
    <CMSRoute path="/contact/new-patient-appointment">
      <AppointmentRequestContent />
    </CMSRoute>
  );
}
