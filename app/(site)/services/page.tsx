import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { loadPageContent } from "@/lib/designed/loadPage";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import ServicesContent from "@/components/services/ServicesContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonLd";

const fallbackMeta: Metadata = generateMeta({
  title: "Chiropractic Services",
  description:
    "Chiropractic services in Saint Louis Park: adjustments, cold laser, targeted cold, exercise, orthotics, and condition pages.",
  slug: "services",
  absoluteTitle: true,
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/services", fallbackMeta);
}

export default async function Page() {
  const content = await loadPageContent("/services");
  return (
    <CMSRoute path="/services">
      <>
        <JsonLd
          id="ld-services-crumbs"
          data={breadcrumbJsonLd({
            items: [
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" },
            ],
          })}
        />
        <ServicesContent content={content}  />
      </>
    </CMSRoute>
  );
}
