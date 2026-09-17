"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import type { ServedCity } from "@/lib/areasData";
import type { PseoService } from "@/lib/pseoServices";
import { pseoServices } from "@/lib/pseoServices";
import {
  cityServiceFaqs,
  cityServiceIntro,
  driveLabel,
  visitFacts,
} from "@/lib/areaPageCopy";
import { localFact } from "@/lib/cityLocalFacts";
import { serviceExtra } from "@/lib/serviceCopyExtras";
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

type Props = {
  city: ServedCity;
  service: PseoService;
};

export default function AreaServicePageContent({ city, service }: Props) {
  const copy = cityServiceIntro(city, service);
  const faqs = cityServiceFaqs(city, service);
  const facts = visitFacts(city);
  const extra = serviceExtra(service);
  const fact = localFact(city);
  const relatedServices = pseoServices
    .filter((s) => s.slug !== service.slug)
    .slice(0, 6);

  return (
    <>
      <ServiceHero
        title={`${service.name} in ${city.name}, MN`}
        subtitle={
          city.distanceMi === 0
            ? `${service.tagline} Available at our ${city.name} office.`
            : `${service.tagline} ${city.name} patients drive ${driveLabel(city).toLowerCase()} to Saint Louis Park.`
        }
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Areas We Serve", href: "/areas-we-serve" },
          { label: city.name, href: `/areas-we-serve/${city.slug}` },
          { label: service.name },
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
              {city.region} · {city.county} County
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              {service.name} for {city.name} residents
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              {copy.lead}
            </p>
            <p className="mt-4 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              {copy.support}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              {copy.local}
            </p>
            <p className="mt-6 text-sm">
              <Link
                href={`/${service.slug}`}
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                Full {service.name.toLowerCase()} page
              </Link>
              {" · "}
              <Link
                href={`/areas-we-serve/${city.slug}`}
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                All care for {city.name}
              </Link>
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
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { title: "Who this is for", body: extra.whoItsFor },
              { title: "How a visit runs", body: extra.visitFlow },
              { title: "When this is the wrong first step", body: extra.notFor },
            ].map((item) => (
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
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-slate-600">
            From {city.name}, the usual route is {fact.corridor}. Nearby
            medical context: {fact.hospital}.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-[#1E3A5F]/60 blur-[140px]"
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
              What we deliver
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              {service.name}{" "}
              <span className="text-[#F97316]">built around your case</span>
            </h2>
          </motion.div>

          <div className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((b, idx) => (
              <motion.div
                key={b}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6 ring-1 ring-white/10"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">
                  Benefit {String(idx + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/90">
                  {b}
                </p>
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
              {city.name} patient questions
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Frequently asked
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

      <section className="bg-slate-50 py-10 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Other services in {city.name}
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
              Browse related care
            </h2>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/areas-we-serve/${city.slug}/${s.slug}`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-[#0F172A] transition hover:border-[#F97316]"
              >
                <span>
                  {s.name}{" "}
                  <span className="text-slate-500">in {city.name}</span>
                </span>
                <span aria-hidden className="text-[#F97316]">
                  →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href={`/areas-we-serve/${city.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#F97316] hover:text-orange-700"
            >
              See all services in {city.name}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <CtaCard
            eyebrow={`Serving ${city.name}, MN`}
            title={`Book your ${service.name.toLowerCase()} visit`}
            body={`Call ${siteConfig.phone} or request an appointment online. Most ${city.name} patients are seen within the same week.`}
          />
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
