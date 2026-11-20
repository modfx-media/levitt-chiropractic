"use client";

import Link from "next/link";

import { siteConfig } from "@/lib/siteConfig";
import { adjustmentsDefaults } from "@/lib/designed/defaults/adjustmentsDefaults";
import { mergeContent } from "@/lib/designed/merge";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock, RelatedCare, SectionIntro } from "@/components/services/enrichment";

export default function AdjustmentsContent({ content }: { content?: unknown }) {
  const copy = mergeContent(adjustmentsDefaults, content);

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
              {copy.intro.beforeAddress}
              {siteConfig.address.full}{" "}
              {copy.intro.beforePhone}
              {siteConfig.phone}
              {copy.intro.afterPhone}
            </p>
            <p>{copy.intro.subluxation}</p>
            <p>{copy.intro.methods}</p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionIntro dark center eyebrow={copy.techniques.eyebrow} title={copy.techniques.title}>
            <p>{copy.techniques.intro}</p>
          </SectionIntro>
          <ol className="mt-10 grid gap-5 lg:grid-cols-3">
            {copy.techniques.items.map((item) => (
              <li key={item.title} className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6">
                <h3 className="font-heading text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.who.eyebrow} title={copy.who.title}>
            <p>
              {copy.who.beforeNeck}{" "}
              <Link href={copy.who.neck.href} className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                {copy.who.neck.label}
              </Link>
              . {copy.who.beforeBack}{" "}
              <Link href={copy.who.back.href} className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                {copy.who.back.label}
              </Link>
              . {copy.who.afterBack}
            </p>
            <p>{copy.who.headaches}</p>
            <p>{copy.who.benefits}</p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.visit.eyebrow} title={copy.visit.title}>
            <p>{copy.visit.arrival}</p>
            <p>{copy.visit.afterward}</p>
            <p>
              {copy.visit.beforeBook}{" "}
              <Link href={copy.visit.booking.href} className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                {copy.visit.booking.label}
              </Link>{" "}
              {copy.visit.afterBook}
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow={copy.skip.eyebrow} title={copy.skip.title}>
              <p>{copy.skip.body}</p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard
              eyebrow={copy.cta.eyebrow}
              title={copy.cta.title}
              body={copy.cta.body}
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A]">{copy.notice.title}</h2>
          {copy.notice.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <FaqBlock
        id="ld-faq-adjustments"
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
