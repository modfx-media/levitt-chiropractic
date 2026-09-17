import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { generateMeta } from "@/lib/metadata";
import { servedCities, getCityBySlug } from "@/lib/areasData";
import { breadcrumbJsonLd, cityServiceAreaJsonLd, faqPageJsonLd } from "@/lib/jsonLd";
import { cityFaqs, cityMetaDescription } from "@/lib/areaPageCopy";
import { JsonLd } from "@/components/seo/JsonLd";
import AreaCityPageContent from "@/components/areas/AreaCityPageContent";

type Params = { city: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return servedCities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  const title = `Chiropractor in ${city.name}, MN`;
  const description = cityMetaDescription(city);

  return generateMeta({
    title,
    description,
    slug: `areas-we-serve/${city.slug}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return notFound();

  return (
    <>
      <JsonLd
        id={`ld-city-${city.slug}`}
        data={cityServiceAreaJsonLd({
          citySlug: city.slug,
          cityName: city.name,
          description: cityMetaDescription(city),
        })}
      />
      <JsonLd
        id={`ld-city-crumbs-${city.slug}`}
        data={breadcrumbJsonLd({
          items: [
            { name: "Home", url: "/" },
            { name: "Areas We Serve", url: "/areas-we-serve" },
            { name: city.name, url: `/areas-we-serve/${city.slug}` },
          ],
        })}
      />
      <JsonLd
        id={`ld-city-faq-${city.slug}`}
        data={faqPageJsonLd({ faqs: cityFaqs(city) })}
      />
      <AreaCityPageContent city={city} />
    </>
  );
}
