"use client";

import Link from "next/link";

import { siteConfig } from "@/lib/siteConfig";
import { commonChiropracticConditionsDefaults } from "@/lib/designed/defaults/commonChiropracticConditionsDefaults";
import { mergeContent } from "@/lib/designed/merge";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock, RelatedCare, SectionIntro } from "@/components/services/enrichment";

const linkClass = "font-semibold text-[#F97316] underline-offset-4 hover:underline";

export default function CommonChiropracticConditionsContent({ content }: { content?: unknown }) {
  const copy = mergeContent(commonChiropracticConditionsDefaults, content);

  return (
    <>
      <ServiceHero title={copy.hero.title} subtitle={copy.hero.subtitle} crumbs={copy.hero.crumbs} />

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.start.eyebrow} title={copy.start.title}>
            <p>{copy.start.match}</p>
            <p>
              {copy.start.beforeAddress}{" "}
              {siteConfig.address.full}
              {copy.start.beforePhone}{" "}
              {siteConfig.phone}
              {copy.start.afterPhone}
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionIntro dark center eyebrow={copy.common.eyebrow} title={copy.common.title}>
            <p>{copy.common.intro}</p>
          </SectionIntro>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {copy.common.links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block h-full rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6 ring-1 ring-white/10">
                  <h3 className="font-heading text-xl font-bold">{item.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{item.note}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.also.eyebrow} title={copy.also.title}>
            <div className="space-y-6">
              {copy.also.items.map((item) => (
                <article key={item.title}>
                  <h3 className="font-heading text-xl font-bold text-[#0F172A]">{item.title}</h3>
                  <p className="mt-2">{item.body}</p>
                </article>
              ))}
            </div>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.safety.eyebrow} title={copy.safety.title}>
            <p>{copy.safety.flags}</p>
            <p>
              {copy.safety.beforeBook}{" "}
              <Link href={copy.safety.book.href} className={linkClass}>{copy.safety.book.label}</Link>
              . {copy.safety.afterBook}
            </p>
            <p>
              {copy.safety.beforeTools}{" "}
              <Link href={copy.safety.adjustments.href} className={linkClass}>{copy.safety.adjustments.label}</Link>,{" "}
              <Link href={copy.safety.laser.href} className={linkClass}>{copy.safety.laser.label}</Link>,{" "}
              <Link href={copy.safety.exercise.href} className={linkClass}>{copy.safety.exercise.label}</Link>,{" "}
              {copy.safety.beforeOrthotics}{" "}
              <Link href={copy.safety.orthotics.href} className={linkClass}>{copy.safety.orthotics.label}</Link>.{" "}
              {copy.safety.afterTools}
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow={copy.between.eyebrow} title={copy.between.title}>
              <p>
                {copy.between.beforePhone}{" "}
                {siteConfig.phone}{" "}
                {copy.between.afterPhone}
              </p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard eyebrow={copy.cta.eyebrow} title={copy.cta.title} body={copy.cta.body} />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A]">{copy.describe.title}</h2>
          {copy.describe.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <FaqBlock
        id="ld-faq-conditions"
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
