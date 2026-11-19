/**
 * Write the current designed defaults to data/designed-content.json.
 * Does not touch a database.
 *
 *   pnpm exec tsx scripts/export-designed-content.ts
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { getServedCities } from "../lib/areasData";
import { areaTemplates, designedPages } from "../lib/designed/registry";
import { defaultShell } from "../lib/designed/shell";
import { pseoServices } from "../lib/pseoServices";
import { googleReviews, googleReviewsMeta } from "../lib/reviews";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const pages = Object.entries(designedPages).map(([pagePath, designed]) => ({
  path: pagePath,
  legacyId: `page:${pagePath}`,
  designed,
}));

for (const city of getServedCities()) {
  const cityPath = `/areas-we-serve/${city.slug}`;
  pages.push({
    path: cityPath,
    legacyId: `page:${cityPath}`,
    designed: areaTemplates.city,
  });
  for (const service of pseoServices) {
    const servicePath = `${cityPath}/${service.slug}`;
    pages.push({
      path: servicePath,
      legacyId: `page:${servicePath}`,
      designed: areaTemplates.service,
    });
  }
}

const document = {
  generatedFrom: "designed defaults",
  pages,
  globals: {
    header: {
      placeLabel: defaultShell.placeLabel,
      phone: defaultShell.phone,
      phoneHref: defaultShell.phoneHref,
      addressLine: defaultShell.address.full,
      logoMarkSrc: defaultShell.logos.markSrc,
      logoMarkAlt: defaultShell.logos.markAlt,
      logoWordmarkSrc: defaultShell.logos.wordmarkSrc,
      logoWordmarkAlt: defaultShell.logos.wordmarkAlt,
      newPatientLabel: defaultShell.headerCtas.newPatientLabel,
      existingPatientLabel: defaultShell.headerCtas.existingPatientLabel,
      stickyCallLabel: defaultShell.sticky.callLabel,
      stickyNewPatientLabel: defaultShell.sticky.newPatientLabel,
      stickyNewPatientRest: defaultShell.sticky.newPatientRest,
      stickyExistingPatientLabel: defaultShell.sticky.existingPatientLabel,
      stickyExistingPatientRest: defaultShell.sticky.existingPatientRest,
      hours: defaultShell.hours,
      hoursInline: defaultShell.hoursInline,
      nav: defaultShell.nav,
    },
    footer: {
      designedBlurb: defaultShell.footer.blurb,
      exploreTitle: defaultShell.footer.exploreTitle,
      legalTitle: defaultShell.footer.legalTitle,
      explore: defaultShell.footer.explore,
      legal: defaultShell.footer.legal,
      newPatientLabel: defaultShell.footer.newPatientLabel,
      existingPatientLabel: defaultShell.footer.existingPatientLabel,
      poweredByLabel: defaultShell.footer.poweredByLabel,
      poweredByHref: defaultShell.footer.poweredByHref,
    },
    "site-settings": {
      practiceName: defaultShell.name,
      shortName: defaultShell.shortName,
      tagline: defaultShell.tagline,
      description: defaultShell.description,
      phone: defaultShell.phone,
      phoneHref: defaultShell.phoneHref,
      phoneE164: defaultShell.phoneE164,
      email: defaultShell.email,
      foundingDate: defaultShell.foundingDate,
      appointmentUrl: defaultShell.appointmentUrl,
      existingPatientAppointmentUrl: defaultShell.existingPatientAppointmentUrl,
      callNowLabel: defaultShell.booking.callNowLabel,
      newPatientButtonLabel: defaultShell.booking.newPatientLabel,
      existingPatientButtonLabel: defaultShell.booking.existingPatientLabel,
      mapsUrl: defaultShell.mapsUrl,
      mapsEmbedUrl: defaultShell.mapsEmbedUrl,
      mapsDirectionsUrl: defaultShell.mapsDirectionsUrl,
      healthgradesUrl: defaultShell.healthgradesUrl,
      address: defaultShell.address,
      geo: defaultShell.geo,
      physician: defaultShell.physician,
      hours: defaultShell.hours,
    },
  },
  cities: getServedCities(),
  services: pseoServices,
  testimonials: googleReviews.map((review) => ({
    name: review.name,
    quote: review.quote,
    rating: review.rating,
    relativeTime: review.relativeTime ?? "",
  })),
  reviewsMeta: googleReviewsMeta,
};

const out = path.join(root, "data", "designed-content.json");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, `${JSON.stringify(document, null, 2)}\n`);
console.log(`Wrote ${pages.length} pages to ${path.relative(root, out)}`);
