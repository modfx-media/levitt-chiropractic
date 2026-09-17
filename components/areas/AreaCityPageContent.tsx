"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import type { ServedCity } from "@/lib/areasData";
import { servedCities } from "@/lib/areasData";
import { pseoServices } from "@/lib/pseoServices";
import {
  cityFaqs,
  cityIntro,
  cityWhyPoints,
  driveLabel,
  firstVisitSteps,
  insuranceNote,
  visitFacts,
  zipPhrase,
} from "@/lib/areaPageCopy";
import { localFact } from "@/lib/cityLocalFacts";
import { ServiceHero } from "@/components/services/ServiceHero";
import { LocationStrip } from "@/components/services/LocationStrip";
import { CtaCard } from "@/components/services/CtaCard";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function AreaCityPageContent({ city }: { city: ServedCity }) {
  const sameRegionCities = servedCities
    .filter((c) => c.region === city.region && c.slug !== city.slug)
    .slice(0, 8);
  const copy = cityIntro(city);
  const why = cityWhyPoints(city);
  const faqs = cityFaqs(city);
  const facts = visitFacts(city);
  const steps = firstVisitSteps(city);
  const fact = localFact(city);
  const corePages = [
    { href: "/adjustments-and-manipulation", label: "Adjustments" },
    { href: "/back-pain-treatments", label: "Back pain" },
    { href: "/personal-injury", label: "Personal injury" },
    { href: "/cold-laser-therapy", label: "Cold laser" },
    { href: "/custom-foot-orthotics", label: "Custom orthotics" },
    { href: "/new-patient-center/what-to-expect", label: "What to expect" },
  ];

  return (
    <>
      <ServiceHero
        title={`Chiropractor in ${city.name}, MN`}
        subtitle={
          city.distanceMi === 0
            ? `Drug-free chiropractic care in ${city.name} — adjustments, cold laser, cryotherapy, and custom orthotics at ${siteConfig.address.street}.`
            : `${city.name} patients are seen in Saint Louis Park — ${driveLabel(city).toLowerCase()} from ${city.landmark}.`
        }
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Areas We Serve", href: "/areas-we-serve" },
          { label: city.name },
        ]}
      />

      <section className="relative bg-white py-10 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              {city.region} · {city.county} County · ZIP {zipPhrase(city)}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              {city.distanceMi === 0
                ? `Chiropractic care in ${city.name}`
                : `${city.name} patients, one Saint Louis Park clinic`}
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              {copy.lead}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              {copy.support}
            </p>
            <p className="mt-4 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              {copy.local}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              {copy.typical}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Usual route from {city.name}: {fact.corridor}. Nearby medical
              context: {fact.hospital}.
            </p>
          </motion.div>

          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f) => (
              <div
                key={f.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-600">
                  {f.label}
                </dt>
                <dd className="mt-2 text-sm font-semibold leading-snug text-[#0F172A]">
                  {f.label === "Phone" ? (
                    <a href={siteConfig.phoneHref} className="hover:text-[#F97316]">
                      {f.value}
                    </a>
                  ) : (
                    f.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-slate-50 py-10 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Why patients from {city.name} come here
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
              What {city.name} patients should know
            </h2>
          </motion.div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {why.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl border-t-4 border-[#F97316] bg-white p-6 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="font-heading text-lg font-bold text-[#0F172A]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              First visit from {city.name}
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
              What actually happens
            </h2>
          </motion.div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-600">
                  Step {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-heading text-lg font-bold text-[#0F172A]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-slate-600">
            {insuranceNote(city)}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {corePages.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#0F172A] transition hover:border-[#F97316]"
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              Services for {city.name}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Care available to{" "}
              <span className="text-[#F97316]">{city.name} residents</span>
            </h2>
          </motion.div>

          <div className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pseoServices.map((s, idx) => (
              <motion.div
                key={s.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
              >
                <Link
                  href={`/areas-we-serve/${city.slug}/${s.slug}`}
                  className="group block h-full rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6 ring-1 ring-white/10 transition hover:bg-[#1E3A5F]/80 hover:ring-white/20"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-heading text-lg font-bold text-white transition-colors group-hover:text-orange-200">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {s.tagline}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#F97316]">
                    {s.name} in {city.name} →
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              {city.name} questions
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Getting here and getting started
            </h2>
          </motion.div>
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border-l-4 border-[#F97316] bg-slate-50 p-6"
              >
                <p className="font-heading text-lg font-bold text-[#0F172A]">
                  {f.q}
                </p>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {sameRegionCities.length > 0 && (
        <section className="bg-slate-50 py-10 sm:py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                Nearby areas
              </p>
              <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
                Other {city.region} communities we serve
              </h2>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {sameRegionCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/areas-we-serve/${c.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-[#0F172A] transition hover:border-[#F97316]"
                >
                  <span>
                    {c.name}
                    <span className="mt-0.5 block text-xs font-normal text-slate-500">
                      {c.distanceMi === 0 ? "Our office" : `${c.distanceMi} mi`}
                    </span>
                  </span>
                  <span aria-hidden className="text-[#F97316]">
                    →
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/areas-we-serve"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#F97316] hover:text-orange-700"
              >
                See every area we serve
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <CtaCard
            eyebrow={`Serving ${city.name}, MN`}
            title="Book your visit"
            body={`Call ${siteConfig.phone} or request an appointment online. Most ${city.name} patients are seen within the same week.`}
          />
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
