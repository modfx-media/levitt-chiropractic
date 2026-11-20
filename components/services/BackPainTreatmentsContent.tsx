"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { backPainTreatmentsDefaults } from "@/lib/designed/defaults/backPainTreatmentsDefaults";
import { mergeContent } from "@/lib/designed/merge";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock, RelatedCare, SectionIntro, fadeUp } from "@/components/services/enrichment";

const linkClass = "font-semibold text-[#F97316] underline-offset-4 hover:underline";

export default function BackPainTreatmentsContent({ content }: { content?: unknown }) {
  const copy = mergeContent(backPainTreatmentsDefaults, content);

  return (
    <>
      <ServiceHero title={copy.hero.title} subtitle={copy.hero.subtitle} crumbs={copy.hero.crumbs} />

      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.intro.eyebrow} title={copy.intro.title}>
            <p>{copy.intro.mechanical}</p>
            <p>{copy.intro.sciatica}</p>
            <p>
              {copy.intro.beforeNeck}{" "}
              <Link href={copy.intro.neck.href} className={linkClass}>{copy.intro.neck.label}</Link>.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionIntro dark center eyebrow={copy.patterns.eyebrow} title={copy.patterns.title}>
            <p>{copy.patterns.intro}</p>
          </SectionIntro>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="mt-10 grid gap-5 md:grid-cols-2"
          >
            {copy.patterns.items.map((item, index) => (
              <motion.li
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6 ring-1 ring-white/10"
              >
                <p className="font-heading text-sm font-bold text-orange-300">0{index + 1}</p>
                <h3 className="mt-2 font-heading text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.body}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionIntro eyebrow={copy.sciatica.eyebrow} title={copy.sciatica.title}>
              <p>{copy.sciatica.pattern}</p>
              <p>{copy.sciatica.sacroiliac}</p>
              <p>
                {copy.sciatica.beforeOrthotics}{" "}
                <Link href={copy.sciatica.orthotics.href} className={linkClass}>{copy.sciatica.orthotics.label}</Link>
                . {copy.sciatica.afterOrthotics}
              </p>
            </SectionIntro>
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-[#0F172A]">{copy.screen.title}</h2>
              <ul className="mt-5 space-y-3">
                {copy.screen.items.map((item) => (
                  <li key={item} className="border-l-4 border-[#F97316] pl-4 text-sm leading-relaxed text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                {copy.screen.beforeArticle}{" "}
                <Link href={copy.screen.article.href} className={linkClass}>{copy.screen.article.label}</Link>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.exam.eyebrow} title={copy.exam.title}>
            <p>{copy.exam.history}</p>
            <p>{copy.exam.physical}</p>
            <p>
              {copy.exam.beforeExpect}{" "}
              <Link href={copy.exam.expect.href} className={linkClass}>{copy.exam.expect.label}</Link>
              {copy.exam.beforeRequest}{" "}
              <a href={siteConfig.phoneHref} className={linkClass}>{siteConfig.phone}</a>{" "}
              {copy.exam.beforeForm}{" "}
              <Link href={copy.exam.form.href} className={linkClass}>{copy.exam.form.label}</Link>.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.tools.eyebrow} title={copy.tools.title}>
            <p>{copy.tools.assembled}</p>
            <p>
              {copy.tools.beforeAdjustments}{" "}
              <Link href={copy.tools.adjustments.href} className={linkClass}>{copy.tools.adjustments.label}</Link>
              . {copy.tools.afterAdjustments}
            </p>
            <p>
              {copy.tools.beforeLaser}{" "}
              <Link href={copy.tools.laser.href} className={linkClass}>{copy.tools.laser.label}</Link>
              ,{" "}
              <Link href={copy.tools.cryotherapy.href} className={linkClass}>{copy.tools.cryotherapy.label}</Link>
              , and{" "}
              <Link href={copy.tools.ice.href} className={linkClass}>{copy.tools.ice.label}</Link>.
            </p>
            <p>
              {copy.tools.beforeExercise}{" "}
              <Link href={copy.tools.exercise.href} className={linkClass}>{copy.tools.exercise.label}</Link>.
            </p>
            <p>
              {copy.tools.beforeDisc}{" "}
              <Link href={copy.tools.disc.href} className={linkClass}>{copy.tools.disc.label}</Link>
              . {copy.tools.beforeArticle}{" "}
              <Link href={copy.tools.article.href} className={linkClass}>{copy.tools.article.label}</Link>
              . {copy.tools.afterArticle}
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow={copy.between.eyebrow} title={copy.between.title}>
              <p>{copy.between.recent}</p>
              <p>{copy.between.sitting}</p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard eyebrow={copy.cta.eyebrow} title={copy.cta.title} body={copy.cta.body} />
          </div>
        </div>
      </section>

      <FaqBlock
        id="ld-faq-back-pain"
        eyebrow={copy.faqs.eyebrow}
        title={copy.faqs.title}
        intro={copy.faqs.intro}
        faqs={copy.faqs.items}
      />

      <RelatedCare
        eyebrow={copy.related.eyebrow}
        title={copy.related.title}
        intro={copy.related.intro}
        links={copy.related.links}
      />

      <LocationStrip />
    </>
  );
}
