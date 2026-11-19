"use client";

import Link from "next/link";

import { siteConfig } from "@/lib/siteConfig";
import { coldLaserTherapyDefaults } from "@/lib/designed/defaults/coldLaserTherapyDefaults";
import { mergeContent } from "@/lib/designed/merge";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock, RelatedCare, SectionIntro } from "@/components/services/enrichment";

const linkClass = "font-semibold text-[#F97316] underline-offset-4 hover:underline";

export default function ColdLaserTherapyContent({ content }: { content?: unknown }) {
  const copy = mergeContent(coldLaserTherapyDefaults, content);

  return (
    <>
      <ServiceHero title={copy.hero.title} subtitle={copy.hero.subtitle} crumbs={copy.hero.crumbs} />

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.device.eyebrow} title={copy.device.title}>
            <p>{copy.device.placement}</p>
            <p>{copy.device.cold}</p>
            <p>{copy.device.beside}</p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionIntro dark center eyebrow={copy.uses.eyebrow} title={copy.uses.title}>
            <p>{copy.uses.intro}</p>
          </SectionIntro>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {copy.uses.items.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-[#1E3A5F]/60 px-4 py-3 text-sm text-white/85">
                {item}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-white/75">{copy.uses.note}</p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.visit.eyebrow} title={copy.visit.title}>
            <p>{copy.visit.exam}</p>
            <p>{copy.visit.room}</p>
            <p>
              {copy.visit.beforePhone}{" "}
              {siteConfig.phone} or use the{" "}
              <Link href={copy.visit.form.href} className={linkClass}>
                {copy.visit.form.label}
              </Link>
              {copy.visit.beforeAddress}{" "}
              {siteConfig.address.full}
              {copy.visit.afterAddress}
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.limits.eyebrow} title={copy.limits.title}>
            <p>{copy.limits.notDo}</p>
            <p>{copy.limits.numbers}</p>
            <p>
              {copy.limits.beforeAdjustments}{" "}
              <Link href={copy.limits.adjustments.href} className={linkClass}>
                {copy.limits.adjustments.label}
              </Link>
              . {copy.limits.beforeIce}{" "}
              <Link href={copy.limits.ice.href} className={linkClass}>
                {copy.limits.ice.label}
              </Link>{" "}
              {copy.limits.afterIce}
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow={copy.expectations.eyebrow} title={copy.expectations.title}>
              <p>{copy.expectations.body}</p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard eyebrow={copy.cta.eyebrow} title={copy.cta.title} body={copy.cta.body} />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A]">{copy.regions.title}</h2>
          {copy.regions.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <FaqBlock
        id="ld-faq-cold-laser"
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
