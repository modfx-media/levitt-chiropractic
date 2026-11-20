"use client";

import Link from "next/link";

import { siteConfig } from "@/lib/siteConfig";
import { functionalMedicineDefaults } from "@/lib/designed/defaults/functionalMedicineDefaults";
import { mergeContent } from "@/lib/designed/merge";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock, RelatedCare, SectionIntro } from "@/components/services/enrichment";

const linkClass = "font-semibold text-[#F97316] underline-offset-4 hover:underline";

export default function FunctionalMedicineContent({ content }: { content?: unknown }) {
  const copy = mergeContent(functionalMedicineDefaults, content);

  return (
    <>
      <ServiceHero title={copy.hero.title} subtitle={copy.hero.subtitle} crumbs={copy.hero.crumbs} />

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.intro.eyebrow} title={copy.intro.title}>
            <p>{copy.intro.whole}</p>
            <p>
              {copy.intro.beforeDoctor}{" "}
              <Link href={copy.intro.doctor.href} className={linkClass}>
                {copy.intro.doctor.label}
              </Link>{" "}
              {copy.intro.afterDoctor}
            </p>
            <p>{copy.intro.root}</p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionIntro dark center eyebrow={copy.interview.eyebrow} title={copy.interview.title}>
            <p>{copy.interview.intro}</p>
          </SectionIntro>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {copy.interview.items.map((item) => (
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
          <SectionIntro eyebrow={copy.examples.eyebrow} title={copy.examples.title}>
            <p>
              {copy.examples.beforeBack}{" "}
              <Link href={copy.examples.back.href} className={linkClass}>
                {copy.examples.back.label}
              </Link>{" "}
              {copy.examples.afterBack}
            </p>
            <p>
              {copy.examples.beforeNeck}{" "}
              <Link href={copy.examples.neck.href} className={linkClass}>
                {copy.examples.neck.label}
              </Link>
              {copy.examples.afterNeck}
            </p>
            <p>{copy.examples.fibromyalgia}</p>
            <p>{copy.examples.nutrition}</p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.boundaries.eyebrow} title={copy.boundaries.title}>
            <p>
              {copy.boundaries.beforeAlternative}{" "}
              <Link href={copy.boundaries.alternative.href} className={linkClass}>
                {copy.boundaries.alternative.label}
              </Link>{" "}
              {copy.boundaries.afterAlternative}
            </p>
            <p>{copy.boundaries.guarantee}</p>
            <p>
              {copy.boundaries.beforeAddress}{" "}
              {siteConfig.address.full}
              {copy.boundaries.beforePhone}{" "}
              {siteConfig.phone}{" "}
              {copy.boundaries.beforeBooking}{" "}
              <Link href={copy.boundaries.booking.href} className={linkClass}>
                {copy.boundaries.booking.label}
              </Link>
              {copy.boundaries.afterBooking}
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow={copy.afterward.eyebrow} title={copy.afterward.title}>
              <p>{copy.afterward.body}</p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard eyebrow={copy.cta.eyebrow} title={copy.cta.title} body={copy.cta.body} />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A]">{copy.notes.title}</h2>
          {copy.notes.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <FaqBlock
        id="ld-faq-functional"
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
