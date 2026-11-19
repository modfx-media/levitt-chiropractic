"use client";

import Link from "next/link";

import { siteConfig } from "@/lib/siteConfig";
import { icePackCryotherapyDefaults } from "@/lib/designed/defaults/icePackCryotherapyDefaults";
import { mergeContent } from "@/lib/designed/merge";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock, RelatedCare, SectionIntro } from "@/components/services/enrichment";

const linkClass = "font-semibold text-[#F97316] underline-offset-4 hover:underline";

export default function IcePackCryotherapyContent({ content }: { content?: unknown }) {
  const copy = mergeContent(icePackCryotherapyDefaults, content);

  return (
    <>
      <ServiceHero title={copy.hero.title} subtitle={copy.hero.subtitle} crumbs={copy.hero.crumbs} />

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.intro.eyebrow} title={copy.intro.title}>
            <p>{copy.intro.effects}</p>
            <p>{copy.intro.intent}</p>
            <p>
              {copy.intro.beforeAddress}{" "}
              {siteConfig.address.full}
              {copy.intro.beforePhone}{" "}
              {siteConfig.phone}
              {copy.intro.afterPhone}
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro dark eyebrow={copy.steps.eyebrow} title={copy.steps.title}>
            <p>{copy.steps.intro}</p>
          </SectionIntro>
          <ol className="mt-8 space-y-4">
            {copy.steps.items.map((step) => (
              <li key={step.n} className="rounded-2xl border border-white/10 bg-[#1E3A5F]/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                  {copy.steps.prefix} {step.n}
                </p>
                <h3 className="mt-1 font-heading text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.where.eyebrow} title={copy.where.title}>
            <p>{copy.where.situations}</p>
            <p>
              {copy.where.beforeNeck}{" "}
              <Link href={copy.where.neck.href} className={linkClass}>{copy.where.neck.label}</Link>.{" "}
              {copy.where.beforeBack}{" "}
              <Link href={copy.where.back.href} className={linkClass}>{copy.where.back.label}</Link>.
            </p>
            <p>{copy.where.athletes}</p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.mistakes.eyebrow} title={copy.mistakes.title}>
            <p>{copy.mistakes.errors}</p>
            <p>
              {copy.mistakes.beforeExercise}{" "}
              <Link href={copy.mistakes.exercise.href} className={linkClass}>{copy.mistakes.exercise.label}</Link>
              {copy.mistakes.afterExercise}
            </p>
            <p>
              {copy.mistakes.beforeBooking}{" "}
              <Link href={copy.mistakes.booking.href} className={linkClass}>{copy.mistakes.booking.label}</Link>{" "}
              {copy.mistakes.beforeCryo}{" "}
              <Link href={copy.mistakes.cryotherapy.href} className={linkClass}>{copy.mistakes.cryotherapy.label}</Link>.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow={copy.better.eyebrow} title={copy.better.title}>
              <p>{copy.better.body}</p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard eyebrow={copy.cta.eyebrow} title={copy.cta.title} body={copy.cta.body} />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A]">{copy.placement.title}</h2>
          {copy.placement.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <FaqBlock
        id="ld-faq-ice"
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
