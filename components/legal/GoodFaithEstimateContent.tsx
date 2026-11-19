"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { goodFaithEstimateDefaults as defaults } from "@/lib/designed/defaults/goodFaithEstimate";
import { mergeContent } from "@/lib/designed/merge";
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

export default function GoodFaithEstimateContent({ content }: { content?: unknown }) {
  const copy = mergeContent(defaults, content);

  return (
    <>
      <ServiceHero
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        crumbs={copy.hero.crumbs}
      />

      {/* SECTION 2 WHITE: INTRO */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              {copy.intro.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              {copy.intro.title}
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              {copy.intro.lead}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              {copy.intro.law}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 DARK NAVY: 4 KEY RIGHTS */}
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
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              {copy.protections.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {copy.protections.title}
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="mt-8 sm:mt-14 grid gap-5 sm:grid-cols-2"
          >
            {copy.protections.items.map((r, i) => (
              <motion.article
                key={r.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6 ring-1 ring-white/10 backdrop-blur-sm"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-heading text-2xl font-black text-[#F97316]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white">
                    {r.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {"body" in r ? (
                    r.body
                  ) : (
                    <>
                      {r.before} <strong>{r.strong}</strong> {r.after}
                    </>
                  )}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 WHITE: CONTACT / RESOURCE CTA */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              {copy.learnMore.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              {copy.learnMore.title}
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              {copy.learnMore.beforeLink}{" "}
              <a
                href={copy.learnMore.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                {copy.learnMore.linkLabel}
              </a>
              {copy.learnMore.afterLink}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              {copy.learnMore.beforePhone}{" "}
              <a
                href={siteConfig.phoneHref}
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                {siteConfig.phone}
              </a>
              {copy.learnMore.afterPhone}
            </p>
          </motion.div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
