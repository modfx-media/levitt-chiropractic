"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { siteMapDefaults as defaults } from "@/lib/designed/defaults/siteMap";
import { mergeContent } from "@/lib/designed/merge";
import type { ServedCity } from "@/lib/areasData";
import { pseoServices } from "@/lib/pseoServices";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function SiteMapContent({
  cities: servedCities,
  content,
}: {
  cities: ServedCity[];
  content?: unknown;
}) {
  const copy = mergeContent(defaults, content);
  const totalLinks = copy.sections.reduce((sum, s) => sum + s.links.length, 0);
  const totalAreaPages =
    1 + servedCities.length + servedCities.length * pseoServices.length;

  return (
    <>
      <ServiceHero
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        crumbs={copy.hero.crumbs}
      />

      {/* Intro */}
      <section className="relative bg-white py-10 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              {copy.intro.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              {copy.intro.title}
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-left text-base leading-relaxed text-slate-700 sm:text-lg">
              {totalLinks + totalAreaPages} {copy.intro.pagesAcross}{" "}
              {copy.sections.length + 1} {copy.intro.sectionsLabel}{" "}
              {copy.intro.machineReadable}{" "}
              <a
                href={copy.intro.sitemapHref}
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                {copy.intro.sitemapLabel}
              </a>{" "}
              {copy.intro.sitemapTail}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sections grid */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-[#1E3A5F]/60 blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
            {copy.sections.map((section, idx) => (
              <motion.div
                key={section.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.04 }}
                className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur-sm sm:p-7"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-300">
                  {String(idx + 1).padStart(2, "0")}
                  {copy.sectionMeta}
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold text-white sm:text-2xl">
                  {section.title}
                </h3>
                {section.description && (
                  <p className="mt-2 text-sm text-white/70">
                    {section.description}
                  </p>
                )}
                <span
                  aria-hidden
                  className="mt-4 block h-px w-12 bg-[#F97316]"
                />
                <ul className="mt-4 space-y-1.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-start gap-2 rounded-md px-2 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-orange-300"
                      >
                        <span
                          aria-hidden
                          className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F97316]/70 transition-colors group-hover:bg-[#F97316]"
                        />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve complete programmatic directory */}
      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              {copy.areas.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              {copy.areas.titlePrefix}
              {totalAreaPages.toLocaleString()}
              {copy.areas.titleSuffix}
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              {copy.areas.bodyPrefix}
              {pseoServices.length}
              {copy.areas.bodySuffix}
            </p>
          </motion.div>

          <div className="mt-8 sm:mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {servedCities.map((c) => (
              <details
                key={c.slug}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition open:border-[#F97316] open:bg-white open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-600">
                      {c.region}
                    </p>
                    <p className="mt-1 truncate font-heading text-base font-bold text-[#0F172A]">
                      {c.name}
                      {copy.areas.nameSuffix}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#F97316]/10 text-sm font-bold text-[#F97316] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <ul className="mt-4 space-y-1.5 border-t border-slate-200 pt-4">
                  <li>
                    <Link
                      href={`${copy.areas.basePath}/${c.slug}`}
                      className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-semibold text-[#0F172A] transition-colors hover:bg-orange-50 hover:text-[#F97316]"
                    >
                      <span aria-hidden className="text-[#F97316]">★</span>
                      {c.name}
                      {copy.areas.overviewSuffix}
                    </Link>
                  </li>
                  {pseoServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`${copy.areas.basePath}/${c.slug}/${s.slug}`}
                        className="flex items-start gap-2 rounded-md px-2 py-1.5 text-sm text-slate-700 transition-colors hover:bg-orange-50 hover:text-[#F97316]"
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F97316]/60"
                        />
                        <span>
                          {s.name}{" "}
                          <span className="text-slate-400">
                            {copy.areas.inLabel}
                            {c.name}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <CtaCard
            eyebrow={copy.cta.eyebrow}
            title={copy.cta.title}
            body={`${copy.cta.bodyBefore}${siteConfig.phone}${copy.cta.bodyAfter}`}
          />
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
