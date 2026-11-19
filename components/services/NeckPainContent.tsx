"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { neckPainDefaults } from "@/lib/designed/defaults/neckPainDefaults";
import { mergeContent } from "@/lib/designed/merge";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock, RelatedCare, SectionIntro, fadeUp } from "@/components/services/enrichment";

const linkClass = "font-semibold text-[#F97316] underline-offset-4 hover:underline";

export default function NeckPainContent({ content }: { content?: unknown }) {
  const copy = mergeContent(neckPainDefaults, content);

  return (
    <>
      <ServiceHero title={copy.hero.title} subtitle={copy.hero.subtitle} crumbs={copy.hero.crumbs} />

      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.intro.eyebrow} title={copy.intro.title}>
            <p>
              {copy.intro.beforeAddress}{" "}
              {siteConfig.address.full}{" "}
              {copy.intro.sincePhone}{" "}
              {siteConfig.phone}.
            </p>
            <p>
              {copy.intro.beforeBack}{" "}
              <Link href={copy.intro.back.href} className={linkClass}>{copy.intro.back.label}</Link>.
            </p>
            <p>{copy.intro.nerve}</p>
          </SectionIntro>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionIntro dark center eyebrow={copy.patterns.eyebrow} title={copy.patterns.title}>
            <p>{copy.patterns.intro}</p>
          </SectionIntro>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {copy.patterns.items.map((item) => (
              <li key={item.title} className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6 ring-1 ring-white/10">
                <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionIntro eyebrow={copy.desk.eyebrow} title={copy.desk.title}>
              <p>{copy.desk.head}</p>
              <p>{copy.desk.headache}</p>
              <p>{copy.desk.sleep}</p>
            </SectionIntro>
          </div>
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border-t-4 border-[#F97316] bg-[#0F172A] p-7 text-white">
              <h2 className="font-heading text-2xl font-bold">{copy.urgent.title}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/80">
                {copy.urgent.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="relative bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.visit.eyebrow} title={copy.visit.title}>
            <p>{copy.visit.paperwork}</p>
            <p>
              {copy.visit.beforeExpect}{" "}
              <Link href={copy.visit.expect.href} className={linkClass}>{copy.visit.expect.label}</Link>.
            </p>
            <p>
              {copy.visit.beforeAdjustments}{" "}
              <Link href={copy.visit.adjustments.href} className={linkClass}>{copy.visit.adjustments.label}</Link>
              . {copy.visit.afterAdjustments}
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.added.eyebrow} title={copy.added.title}>
            <p>
              {copy.added.beforeLaser}{" "}
              <Link href={copy.added.laser.href} className={linkClass}>{copy.added.laser.label}</Link>{" "}
              {copy.added.afterLaser}
            </p>
            <p>
              {copy.added.beforeExercise}{" "}
              <Link href={copy.added.exercise.href} className={linkClass}>{copy.added.exercise.label}</Link>{" "}
              {copy.added.afterExercise}
            </p>
            <p>
              {copy.added.beforeDisc}{" "}
              <Link href={copy.added.disc.href} className={linkClass}>{copy.added.disc.label}</Link>{" "}
              {copy.added.afterDisc}
            </p>
            <p>
              {copy.added.beforePhone}{" "}
              {siteConfig.phone}{" "}
              {copy.added.beforeForm}{" "}
              <Link href={copy.added.form.href} className={linkClass}>{copy.added.form.label}</Link>.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow={copy.recovery.eyebrow} title={copy.recovery.title}>
              <p>{copy.recovery.body}</p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard eyebrow={copy.cta.eyebrow} title={copy.cta.title} body={copy.cta.body} />
          </div>
        </div>
      </section>

      <FaqBlock
        id="ld-faq-neck-pain"
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
