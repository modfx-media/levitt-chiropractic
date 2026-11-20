import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";

import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import { loadPageContent } from "@/lib/designed/loadPage";
import { allServedCities, getCityBySlug, getServedCities, withLiveNeighbors } from "@/lib/areasData";
import { retiredCityTarget } from "@/lib/areaRetirement";
import { breadcrumbJsonLd, cityServiceAreaJsonLd, faqPageJsonLd } from "@/lib/jsonLd";
import { cityFaqs, cityMetaDescription } from "@/lib/areaPageCopy";
import { JsonLd } from "@/components/seo/JsonLd";
import AreaCityPageContent from "@/components/areas/AreaCityPageContent";

type Params = { city: string };

export const dynamicParams = false;
export const revalidate = 3600;

export function generateStaticParams(): Params[] {
  return allServedCities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const found = getCityBySlug(citySlug);
  if (!found) return {};
  const city = withLiveNeighbors(found);

  const title = `Chiropractor in ${city.name}, MN`;
  const description = cityMetaDescription(city);
  const path = `/areas-we-serve/${city.slug}`;

  return withCMSMeta(
    path,
    generateMeta({
      title,
      description,
      slug: `areas-we-serve/${city.slug}`,
    }),
  );
}

export default async function Page({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city: citySlug } = await params;
  const found = getCityBySlug(citySlug);
  if (!found) return notFound();
  const target = retiredCityTarget(found.slug);
  if (target) permanentRedirect(`/areas-we-serve/${target}`);

  const city = withLiveNeighbors(found);
  const content = await loadPageContent(`/areas-we-serve/${city.slug}`);
  const sameRegionCities = getServedCities()
    .filter((c) => c.region === city.region && c.slug !== city.slug)
    .slice(0, 8);

  return (
    <CMSRoute path={`/areas-we-serve/${city.slug}`}>
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
      <AreaCityPageContent content={content} city={city} sameRegionCities={sameRegionCities} />
    </>
    </CMSRoute>
  );
}
