import { createHash } from "node:crypto";

import { servedCities } from "../lib/areasData";
import { pseoServices } from "../lib/pseoServices";
import {
  cityFaqs,
  cityIntro,
  cityServiceFaqs,
  cityServiceIntro,
  cityWhyPoints,
  firstVisitSteps,
  insuranceNote,
} from "../lib/areaPageCopy";
import { localFact } from "../lib/cityLocalFacts";
import { serviceExtra } from "../lib/serviceCopyExtras";

function words(parts: string[]): number {
  return parts.join(" ").split(/\s+/).filter(Boolean).length;
}

function fingerprint(parts: string[]): string {
  return createHash("sha1").update(parts.join("\n")).digest("hex");
}

function cityWords(city: (typeof servedCities)[number]): number {
  const intro = cityIntro(city);
  const fact = localFact(city);
  return words([
    `Chiropractor in ${city.name}, MN`,
    city.distanceMi === 0
      ? `Drug-free chiropractic care in ${city.name}`
      : `${city.name} patients are seen in Saint Louis Park`,
    intro.lead,
    intro.support,
    intro.local,
    intro.typical,
    fact.note,
    fact.typical,
    ...cityWhyPoints(city).flatMap((p) => [p.title, p.body]),
    ...firstVisitSteps(city).flatMap((p) => [p.title, p.body]),
    ...cityFaqs(city).flatMap((f) => [f.q, f.a]),
    insuranceNote(city),
  ]);
}

function serviceWords(
  city: (typeof servedCities)[number],
  service: (typeof pseoServices)[number],
): number {
  const intro = cityServiceIntro(city, service);
  const extra = serviceExtra(service);
  const fact = localFact(city);
  return words([
    `${service.name} in ${city.name}, MN`,
    service.tagline,
    intro.lead,
    intro.support,
    intro.local,
    extra.whoItsFor,
    extra.visitFlow,
    extra.notFor,
    fact.note,
    fact.typical,
    ...service.benefits,
    ...service.conditions,
    ...cityServiceFaqs(city, service).flatMap((f) => [f.q, f.a]),
  ]);
}

const hubBodies = servedCities.map((city) => {
  const intro = cityIntro(city);
  const fact = localFact(city);
  return [
    intro.lead,
    intro.support,
    intro.local,
    intro.typical,
    fact.note,
    fact.typical,
    fact.corridor,
    ...cityWhyPoints(city).map((p) => p.body),
    ...cityFaqs(city).map((f) => f.a),
  ].join("\n");
});
const serviceBodies = servedCities.flatMap((city) =>
  pseoServices.map((service) => {
    const intro = cityServiceIntro(city, service);
    const fact = localFact(city);
    return [intro.lead, intro.local, fact.note, fact.typical, city.slug, service.slug].join("\n");
  }),
);
const hubCounts = servedCities.map(cityWords);
const serviceCounts = servedCities.flatMap((city) =>
  pseoServices.map((service) => serviceWords(city, service)),
);

function summary(counts: number[]) {
  const sorted = [...counts].sort((a, b) => a - b);
  const sum = counts.reduce((n, v) => n + v, 0);
  return {
    pages: counts.length,
    min: sorted[0],
    median: sorted[Math.floor(sorted.length / 2)],
    max: sorted[sorted.length - 1],
    mean: Math.round(sum / counts.length),
  };
}

const hubSet = hubCounts.map((n) => String(n));
const serviceSet = new Set(serviceCounts.map((n) => String(n)));
console.log(
  JSON.stringify(
    {
      hubs: summary(hubCounts),
      services: summary(serviceCounts),
      uniqueHubWordCounts: new Set(hubSet).size,
      uniqueHubBodies: new Set(hubBodies.map((b) => fingerprint([b]))).size,
      uniqueServiceWordCounts: serviceSet.size,
      uniqueServiceBodies: new Set(serviceBodies.map((b) => fingerprint([b]))).size,
      servicePages: serviceCounts.length,
    },
    null,
    2,
  ),
);
