import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import { servedCities, getCityBySlug } from "@/lib/areasData";
import { pseoServices, getServiceBySlug } from "@/lib/pseoServices";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/jsonLd";
import { cityServiceFaqs, cityServiceMetaDescription } from "@/lib/areaPageCopy";
import AreaServicePageContent from "@/components/areas/AreaServicePageContent";

type Params = { city: string; service: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  const out: Params[] = [];
  for (const c of servedCities) {
    for (const s of pseoServices) {
      out.push({ city: c.slug, service: s.slug });
    }
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) return {};

  const title = `${service.name} in ${city.name}, MN`;
  const description = cityServiceMetaDescription(city, service);
  const path = `/areas-we-serve/${city.slug}/${service.slug}`;

  return withCMSMeta(
    path,
    generateMeta({
      title,
      description,
      slug: `areas-we-serve/${city.slug}/${service.slug}`,
    }),
  );
}

export default async function Page({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) return notFound();

  return (
    <CMSRoute path={`/areas-we-serve/${city.slug}/${service.slug}`}>
    <>
      <ServiceSchema
        name={`${service.name} in ${city.name}, MN`}
        slug={`areas-we-serve/${city.slug}/${service.slug}`}
        description={cityServiceMetaDescription(city, service)}
        serviceType={service.serviceType ?? service.name}
        areaServed={city.name}
      />
      <JsonLd
        id={`ld-crumbs-${city.slug}-${service.slug}`}
        data={breadcrumbJsonLd({
          items: [
            { name: "Home", url: "/" },
            { name: "Areas We Serve", url: "/areas-we-serve" },
            { name: city.name, url: `/areas-we-serve/${city.slug}` },
            {
              name: service.name,
              url: `/areas-we-serve/${city.slug}/${service.slug}`,
            },
          ],
        })}
      />
      <JsonLd
        id={`ld-faq-${city.slug}-${service.slug}`}
        data={faqPageJsonLd({ faqs: cityServiceFaqs(city, service) })}
      />
      <AreaServicePageContent city={city} service={service} />
    </>
    </CMSRoute>
  );
}
