"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { degenerativeDiscDiseaseDefaults } from "@/lib/designed/defaults/degenerativeDiscDiseaseDefaults";
import { mergeContent } from "@/lib/designed/merge";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock, RelatedCare, SectionIntro, fadeUp } from "@/components/services/enrichment";

const linkClass = "font-semibold text-[#F97316] underline-offset-4 hover:underline";
const phoneClass = "font-semibold text-orange-300 underline-offset-4 hover:underline";

export default function DegenerativeDiscDiseaseContent({ content }: { content?: unknown }) {
  const copy = mergeContent(degenerativeDiscDiseaseDefaults, content);

  return (
    <>
      <ServiceHero title={copy.hero.title} subtitle={copy.hero.subtitle} crumbs={copy.hero.crumbs} />

      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.disc.eyebrow} title={copy.disc.title}>
            <p>{copy.disc.spacer}</p>
            <p>{copy.disc.changes}</p>
            <p>
              {copy.disc.beforeBack}{" "}
              <Link href={copy.disc.back.href} className={linkClass}>{copy.disc.back.label}</Link>.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionIntro dark center eyebrow={copy.report.eyebrow} title={copy.report.title}>
            <p>{copy.report.intro}</p>
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
            {copy.report.items.map((item) => (
              <motion.li
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6 ring-1 ring-white/10"
              >
                <h3 className="font-heading text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.body}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionIntro eyebrow={copy.why.eyebrow} title={copy.why.title}>
              <p>{copy.why.lead}</p>
              <ul className="mt-2 space-y-2">
                {copy.why.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F97316]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>{copy.why.after}</p>
            </SectionIntro>
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border-t-4 border-[#F97316] bg-[#0F172A] p-7 text-white shadow-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">{copy.urgent.eyebrow}</p>
              <h2 className="mt-3 font-heading text-2xl font-bold">{copy.urgent.title}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/80">
                {copy.urgent.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-orange-100">{copy.urgent.note}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.film.eyebrow} title={copy.film.title}>
            <p>{copy.film.bring}</p>
            <p>
              {copy.film.beforeStreet}{" "}
              {siteConfig.address.street}, {siteConfig.address.city}, {copy.film.afterCity}
            </p>
            <p>{copy.film.notSurgery}</p>
          </SectionIntro>
        </div>
      </section>

      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.care.eyebrow} title={copy.care.title}>
            <p>{copy.care.when}</p>
            <p>
              {copy.care.beforeAdjustments}{" "}
              <Link href={copy.care.adjustments.href} className={linkClass}>{copy.care.adjustments.label}</Link>{" "}
              {copy.care.afterAdjustments}
            </p>
            <p>
              {copy.care.beforeLaser}{" "}
              <Link href={copy.care.laser.href} className={linkClass}>{copy.care.laser.label}</Link>
              ,{" "}
              <Link href={copy.care.ice.href} className={linkClass}>{copy.care.ice.label}</Link>
              , and{" "}
              <Link href={copy.care.exercise.href} className={linkClass}>{copy.care.exercise.label}</Link>.
            </p>
            <p>{copy.care.orthotics}</p>
          </SectionIntro>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow={copy.pace.eyebrow} title={copy.pace.title}>
              <p>{copy.pace.scoreboard}</p>
              <p>{copy.pace.activity}</p>
              <p>
                Call{" "}
                <a href={siteConfig.phoneHref} className={phoneClass}>{siteConfig.phone}</a>{" "}
                {copy.pace.beforeForm}{" "}
                <Link href={copy.pace.form.href} className={phoneClass}>{copy.pace.form.label}</Link>{" "}
                {copy.pace.afterForm}
              </p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard eyebrow={copy.cta.eyebrow} title={copy.cta.title} body={copy.cta.body} />
          </div>
        </div>
      </section>

      <FaqBlock
        id="ld-faq-ddd"
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
