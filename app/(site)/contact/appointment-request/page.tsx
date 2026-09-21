import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import AppointmentRequestContent from "@/components/contact/AppointmentRequestContent";

const fallbackMeta: Metadata = generateMeta({
  title: "Request an Appointment",
  description:
    "Request a chiropractic appointment at Levitt Chiropractic in Saint Louis Park, MN. We typically reply within one business day to schedule your visit.",
  slug: "contact/appointment-request",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/contact/appointment-request", fallbackMeta);
}

export default function Page() {
  return (
    <CMSRoute path="/contact/appointment-request">
      <AppointmentRequestContent />
    </CMSRoute>
  );
}
