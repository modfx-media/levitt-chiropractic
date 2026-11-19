"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { qaDefaults as defaults } from "@/lib/designed/defaults/qa";
import { mergeContent } from "@/lib/designed/merge";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

type FAQ = { q: string; a: string[] };

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function FAQAccordion({ faq, i }: { faq: FAQ; i: number }) {
  const [open, setOpen] = useState(i === 0);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-[#1E3A5F]/50 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#1E3A5F]/80"
      >
        <span className="flex items-center gap-4">
          <span className="font-heading text-xs font-black text-[#F97316]">
            Q{i + 1}
          </span>
          <span className="font-heading text-base font-bold text-white sm:text-lg">
            {faq.q}
          </span>
        </span>
        <span
          aria-hidden
          className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-[#F97316] text-white transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-t border-white/10 px-6 py-6 text-sm leading-relaxed text-white/80 sm:text-base">
              {faq.a.map((p, k) => (
                <p key={k} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function QAContent({ content }: { content?: unknown }) {
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
              {copy.intro.lead}{" "}
              <Link
                href={copy.intro.contactHref}
                className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
              >
                {copy.intro.contactLabel}
              </Link>{" "}
              {copy.intro.beforePhone}{" "}
              <a
                href={siteConfig.phoneHref}
                className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
              >
                {siteConfig.phone}
              </a>{" "}
              {copy.intro.afterPhone}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 DARK NAVY: FAQ ACCORDION */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-[#1E3A5F]/60 blur-[140px]"
        />

        <div className="relative mx-auto max-w-4xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              {copy.faq.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {copy.faq.title}
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.07 } },
            }}
            className="mt-8 sm:mt-12 grid gap-3"
          >
            {copy.faq.items.map((f, i) => (
              <FAQAccordion key={f.q} faq={f} i={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 WHITE: CTA */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-3"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                {copy.closing.eyebrow}
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                {copy.closing.title}
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                {copy.closing.beforePhone}{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  {siteConfig.phone}
                </a>{" "}
                {copy.closing.beforeLink}{" "}
                <Link
                  href={copy.closing.linkHref}
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  {copy.closing.linkLabel}
                </Link>{" "}
                {copy.closing.afterLink}
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow={copy.cta.eyebrow}
                title={copy.cta.title}
                body={copy.cta.body}
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
