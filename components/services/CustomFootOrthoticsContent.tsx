"use client";

import Link from "next/link";

import { siteConfig } from "@/lib/siteConfig";
import { customFootOrthoticsDefaults } from "@/lib/designed/defaults/customFootOrthoticsDefaults";
import { mergeContent } from "@/lib/designed/merge";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock, RelatedCare, SectionIntro } from "@/components/services/enrichment";

const linkClass = "font-semibold text-[#F97316] underline-offset-4 hover:underline";

export default function CustomFootOrthoticsContent({ content }: { content?: unknown }) {
  const copy = mergeContent(customFootOrthoticsDefaults, content);

  return (
    <>
      <ServiceHero title={copy.hero.title} subtitle={copy.hero.subtitle} crumbs={copy.hero.crumbs} />

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.device.eyebrow} title={copy.device.title}>
            <p>{copy.device.jobs}</p>
            <p>{copy.device.menu}</p>
            <p>
              {copy.device.beforeAddress}{" "}
              {siteConfig.address.full}
              {copy.device.beforePhone}{" "}
              {siteConfig.phone}
              {copy.device.afterPhone}
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionIntro dark center eyebrow={copy.compare.eyebrow} title={copy.compare.title}>
            <p>{copy.compare.intro}</p>
          </SectionIntro>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead>
                <tr className="text-orange-300">
                  <th className="py-2 pr-4 font-semibold">{copy.compare.corner}</th>
                  <th className="py-2 pr-4 font-semibold">{copy.compare.customHeader}</th>
                  <th className="py-2 font-semibold">{copy.compare.otcHeader}</th>
                </tr>
              </thead>
              <tbody>
                {copy.compare.rows.map((row) => (
                  <tr key={row.label} className="border-t border-white/10 align-top">
                    <th className="py-4 pr-4 font-semibold text-white">{row.label}</th>
                    <td className="py-4 pr-4 text-white/80">{row.custom}</td>
                    <td className="py-4 text-white/70">{row.otc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.who.eyebrow} title={copy.who.title}>
            <p>
              {copy.who.beforeDisc}{" "}
              <Link href={copy.who.disc.href} className={linkClass}>{copy.who.disc.label}</Link>
              . {copy.who.beforeBack}{" "}
              <Link href={copy.who.back.href} className={linkClass}>{copy.who.back.label}</Link>.
            </p>
            <p>{copy.who.spur}</p>
            <p>{copy.who.outside}</p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.fitting.eyebrow} title={copy.fitting.title}>
            <p>{copy.fitting.shoes}</p>
            <p>
              {copy.fitting.beforeBook}{" "}
              <Link href={copy.fitting.book.href} className={linkClass}>{copy.fitting.book.label}</Link>.
            </p>
            <p>
              {copy.fitting.beforeAdjustments}{" "}
              <Link href={copy.fitting.adjustments.href} className={linkClass}>{copy.fitting.adjustments.label}</Link>{" "}
              {copy.fitting.afterAdjustments}
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow={copy.after.eyebrow} title={copy.after.title}>
              <p>{copy.after.body}</p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard eyebrow={copy.cta.eyebrow} title={copy.cta.title} body={copy.cta.body} />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A]">{copy.weeks.title}</h2>
          {copy.weeks.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <FaqBlock
        id="ld-faq-orthotics"
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
