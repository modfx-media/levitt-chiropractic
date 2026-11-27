import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { loadPageContent } from "@/lib/designed/loadPage";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import ContactContent from "@/components/contact/ContactContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonLd";

const fallbackMeta: Metadata = generateMeta({
  title: "Contact Us",
  description:
    "Reach Levitt Chiropractic Center in Saint Louis Park, MN phone, address, office hours, directions, and a quick online appointment request form.",
  slug: "contact",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/contact", fallbackMeta);
}

export default async function Page() {
  const content = await loadPageContent("/contact");
  return (
    <CMSRoute path="/contact">
      <>
        <JsonLd
          id="ld-contact-crumbs"
          data={breadcrumbJsonLd({
            items: [
              { name: "Home", url: "/" },
              { name: "Contact", url: "/contact" },
            ],
          })}
        />
        <ContactContent content={content}  />
      </>
    </CMSRoute>
  );
}
