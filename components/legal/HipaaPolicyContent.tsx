"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { hipaaPolicyDefaults as defaults } from "@/lib/designed/defaults/hipaaPolicy";
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

function PhoneLink() {
  return (
    <a
      href={siteConfig.phoneHref}
      className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
    >
      {siteConfig.phone}
    </a>
  );
}

export default function HipaaPolicyContent({ content }: { content?: unknown }) {
  const copy = mergeContent(defaults, content);

  return (
    <>
      <ServiceHero
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        crumbs={copy.hero.crumbs}
      />

      {/* SECTION 2 WHITE: INTRO BANNER */}
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
              <strong className="font-semibold text-[#0F172A]">
                {copy.intro.notice}
              </strong>
            </p>
            {copy.intro.paragraphs.map((paragraph, i) => (
              <p
                key={paragraph}
                className={
                  i === 0
                    ? "mt-6 text-base leading-relaxed text-slate-700 sm:text-lg"
                    : "mt-4 text-base leading-relaxed text-slate-700 sm:text-lg"
                }
              >
                {paragraph}
              </p>
            ))}
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              {copy.intro.beforePhone}{" "}
              <PhoneLink />
              {copy.intro.afterPhone}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 SLATE: SECTION A Use & Disclosure */}
      <section className="relative bg-slate-50 py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              {copy.useAndDisclosure.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              {copy.useAndDisclosure.title}
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 text-base leading-relaxed text-slate-700">
              {copy.useAndDisclosure.intro}
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {copy.useAndDisclosure.items.map((item, i) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="rounded-2xl border-l-4 border-[#F97316] bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-heading text-lg font-black text-[#F97316]/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-heading text-base font-bold text-[#0F172A]"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                </div>
                <div className="mt-3 text-sm leading-relaxed text-slate-700">
                  {item.body}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 DARK NAVY: SECTION B */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
        />
        <div className="relative mx-auto max-w-3xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              {copy.restrictions.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              {copy.restrictions.title}
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
              {copy.restrictions.body}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 WHITE: SECTION C Rights */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              {copy.rights.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              {copy.rights.title}
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <div className="space-y-5">
            {copy.rights.items.map((item, i) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="rounded-2xl border-l-4 border-[#F97316] bg-slate-50 p-6 ring-1 ring-slate-100 sm:p-7"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-heading text-2xl font-black text-[#F97316]/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#0F172A] sm:text-xl">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-base leading-relaxed text-slate-700">
                  {item.body}
                </p>
              </motion.article>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-8 text-base leading-relaxed text-slate-700"
          >
            {copy.rights.beforePhone}{" "}
            <PhoneLink />
            {copy.rights.afterPhone}
          </motion.p>
        </div>
      </section>

      {/* SECTION 6 SLATE: SECTIONS D + E */}
      <section className="relative bg-slate-50 py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl space-y-10 px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border-l-4 border-[#F97316] bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-heading text-2xl font-black text-[#F97316]/70">
                {copy.changes.marker}
              </span>
              <h3 className="font-heading text-xl font-bold text-[#0F172A] sm:text-2xl">
                {copy.changes.title}
              </h3>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              {copy.changes.body}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border-l-4 border-[#F97316] bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-heading text-2xl font-black text-[#F97316]/70">
                {copy.complaints.marker}
              </span>
              <h3 className="font-heading text-xl font-bold text-[#0F172A] sm:text-2xl">
                {copy.complaints.title}
              </h3>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              {copy.complaints.beforePhone}{" "}
              <PhoneLink />
              {copy.complaints.afterPhone}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              {copy.complaints.beforeEmail}{" "}
              <a
                href={copy.complaints.emailHref}
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                {copy.complaints.emailLabel}
              </a>
              {copy.complaints.beforeForm}{" "}
              <a
                href={copy.complaints.formHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                {copy.complaints.formLabel}
              </a>
              {copy.complaints.afterForm}
            </p>
          </motion.div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
