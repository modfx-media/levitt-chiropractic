import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import ContactContent from "@/components/contact/ContactContent";

const fallbackMeta: Metadata = generateMeta({
  title: "Contact Us",
  description:
    "Reach Levitt Chiropractic Center in Saint Louis Park, MN phone, address, office hours, directions, and a quick online appointment request form.",
  slug: "contact",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/contact", fallbackMeta);
}

export default function Page() {
  return (
    <CMSRoute path="/contact">
      <ContactContent />
    </CMSRoute>
  );
}
