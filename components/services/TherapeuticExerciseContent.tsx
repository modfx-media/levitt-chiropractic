"use client";

import Link from "next/link";

import { siteConfig } from "@/lib/siteConfig";
import { therapeuticExerciseDefaults } from "@/lib/designed/defaults/therapeuticExerciseDefaults";
import { mergeContent } from "@/lib/designed/merge";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock, RelatedCare, SectionIntro } from "@/components/services/enrichment";

const linkClass = "font-semibold text-[#F97316] underline-offset-4 hover:underline";

export default function TherapeuticExerciseContent({ content }: { content?: unknown }) {
  const copy = mergeContent(therapeuticExerciseDefaults, content);

  return (
    <>
      <ServiceHero title={copy.hero.title} subtitle={copy.hero.subtitle} crumbs={copy.hero.crumbs} />

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.homework.eyebrow} title={copy.homework.title}>
            <p>{copy.homework.pain}</p>
            <p>
              {copy.homework.beforeAddress}{" "}
              {siteConfig.address.full}
              {copy.homework.beforePhone}{" "}
              {siteConfig.phone}
              {copy.homework.afterPhone}
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionIntro dark center eyebrow={copy.kinds.eyebrow} title={copy.kinds.title}>
            <p>{copy.kinds.intro}</p>
          </SectionIntro>
          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {copy.kinds.items.map((item) => (
              <li key={item.title} className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6">
                <h3 className="font-heading text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.aims.eyebrow} title={copy.aims.title}>
            <ul className="grid gap-2 sm:grid-cols-2">
              {copy.aims.items.map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">{item}</li>
              ))}
            </ul>
            <p>{copy.aims.breathing}</p>
            <p>
              {copy.aims.beforeDisc}{" "}
              <Link href={copy.aims.disc.href} className={linkClass}>{copy.aims.disc.label}</Link>{" "}
              {copy.aims.afterDisc}{" "}
              <Link href={copy.aims.neck.href} className={linkClass}>{copy.aims.neck.label}</Link>.{" "}
              {copy.aims.beforeBack}{" "}
              <Link href={copy.aims.back.href} className={linkClass}>{copy.aims.back.label}</Link>.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.program.eyebrow} title={copy.program.title}>
            <p>{copy.program.shown}</p>
            <p>
              {copy.program.beforeIce}{" "}
              <Link href={copy.program.ice.href} className={linkClass}>{copy.program.ice.label}</Link>
              {copy.program.beforeAdjustments}{" "}
              <Link href={copy.program.adjustments.href} className={linkClass}>{copy.program.adjustments.label}</Link>.
            </p>
            <p>
              {copy.program.beforePhone}{" "}
              {siteConfig.phone}{" "}
              {copy.program.beforeForm}{" "}
              <Link href={copy.program.form.href} className={linkClass}>{copy.program.form.label}</Link>
              {copy.program.beforeAddress}{" "}
              {siteConfig.address.full}
              {copy.program.afterAddress}
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow={copy.progress.eyebrow} title={copy.progress.title}>
              <p>{copy.progress.body}</p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard eyebrow={copy.cta.eyebrow} title={copy.cta.title} body={copy.cta.body} />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A]">{copy.examples.title}</h2>
          {copy.examples.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <FaqBlock
        id="ld-faq-exercise"
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
