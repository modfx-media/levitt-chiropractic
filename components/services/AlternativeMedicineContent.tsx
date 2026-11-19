"use client";

import Link from "next/link";

import { siteConfig } from "@/lib/siteConfig";
import { alternativeMedicineDefaults } from "@/lib/designed/defaults/alternativeMedicineDefaults";
import { mergeContent } from "@/lib/designed/merge";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock, RelatedCare, SectionIntro } from "@/components/services/enrichment";

const linkClass = "font-semibold text-[#F97316] underline-offset-4 hover:underline";

export default function AlternativeMedicineContent({ content }: { content?: unknown }) {
  const copy = mergeContent(alternativeMedicineDefaults, content);

  return (
    <>
      <ServiceHero
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        crumbs={copy.hero.crumbs}
      />

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.intro.eyebrow} title={copy.intro.title}>
            <p>
              {copy.intro.beforeAddress}{" "}
              {siteConfig.address.full}
              {copy.intro.afterAddress}
            </p>
            <p>
              {copy.intro.beforeFunctional}{" "}
              <Link href={copy.intro.functional.href} className={linkClass}>
                {copy.intro.functional.label}
              </Link>
              . {copy.intro.afterFunctional}
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionIntro dark center eyebrow={copy.means.eyebrow} title={copy.means.title}>
            <p>{copy.means.intro}</p>
          </SectionIntro>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {copy.means.items.map((item) => (
              <li key={item.title} className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6">
                <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.fit.eyebrow} title={copy.fit.title}>
            <p>
              {copy.fit.beforeLinks}{" "}
              <Link href={copy.fit.neck.href} className={linkClass}>{copy.fit.neck.label}</Link>,{" "}
              <Link href={copy.fit.back.href} className={linkClass}>{copy.fit.back.label}</Link>,{" "}
              <Link href={copy.fit.adjustments.href} className={linkClass}>{copy.fit.adjustments.label}</Link>.{" "}
              {copy.fit.afterLinks}
            </p>
            <p>{copy.fit.digestion}</p>
            <p>{copy.fit.stress}</p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.visit.eyebrow} title={copy.visit.title}>
            <p>{copy.visit.exam}</p>
            <p>
              {copy.visit.beforePhone}{" "}
              {siteConfig.phone} or{" "}
              <Link href={copy.visit.booking.href} className={linkClass}>
                {copy.visit.booking.label}
              </Link>
              . {copy.visit.afterBooking}
            </p>
            <p>{copy.visit.expectations}</p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow={copy.line.eyebrow} title={copy.line.title}>
              <p>{copy.line.body}</p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard eyebrow={copy.cta.eyebrow} title={copy.cta.title} body={copy.cta.body} />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A]">{copy.month.title}</h2>
          {copy.month.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <FaqBlock
        id="ld-faq-alternative"
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
