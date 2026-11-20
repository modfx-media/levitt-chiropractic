"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { termsOfUseDefaults as defaults } from "@/lib/designed/defaults/termsOfUse";
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

function TermsSectionBody({
  section,
}: {
  section: (typeof defaults.sections)[number];
}) {
  if (section.kind === "license" && section.items) {
    return (
      <>
        <p className="mb-4">{section.intro}</p>
        <ul className="list-disc space-y-2 pl-6">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4">{section.closing}</p>
      </>
    );
  }

  if (section.kind === "governing") {
    return (
      <>
        <p>{section.body}</p>
        <p className="mt-4 text-sm italic text-slate-500">{section.note}</p>
      </>
    );
  }

  const paragraphs = section.paragraphs ?? [];
  return (
    <>
      {paragraphs.map((text, i) => (
        <p key={i} className={i < paragraphs.length - 1 ? "mb-4" : undefined}>
          {text}
        </p>
      ))}
    </>
  );
}

export default function TermsOfUseContent({ content }: { content?: unknown }) {
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
              {copy.intro.body}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 SLATE: NUMBERED CARDS */}
      <section className="relative bg-slate-50 py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-8">
            {copy.sections.map((s, i) => (
              <motion.article
                key={s.id}
                id={s.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="rounded-2xl border-l-4 border-[#F97316] bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-heading text-2xl font-black text-[#F97316]/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                    {s.title}
                  </h3>
                </div>
                <div className="mt-4 text-base leading-relaxed text-slate-700">
                  <TermsSectionBody section={s} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 DARK NAVY: CONTACT CTA */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              {copy.cta.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              {copy.cta.title}
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
              {copy.cta.beforePhone}{" "}
              <a
                href={siteConfig.phoneHref}
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                {siteConfig.phone}
              </a>
              {copy.cta.afterPhone}
            </p>
          </motion.div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
