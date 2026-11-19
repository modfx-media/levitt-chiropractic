"use client";

import Link from "next/link";

import { siteConfig } from "@/lib/siteConfig";
import { cryotherapyDefaults } from "@/lib/designed/defaults/cryotherapyDefaults";
import { mergeContent } from "@/lib/designed/merge";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock, RelatedCare, SectionIntro } from "@/components/services/enrichment";

const linkClass = "font-semibold text-[#F97316] underline-offset-4 hover:underline";

export default function CryotherapyContent({ content }: { content?: unknown }) {
  const copy = mergeContent(cryotherapyDefaults, content);

  return (
    <>
      <ServiceHero title={copy.hero.title} subtitle={copy.hero.subtitle} crumbs={copy.hero.crumbs} />

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.intro.eyebrow} title={copy.intro.title}>
            <p>{copy.intro.chamber}</p>
            <p>{copy.intro.reasons}</p>
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
        <div className="mx-auto max-w-6xl px-6">
          <SectionIntro dark center eyebrow={copy.timing.eyebrow} title={copy.timing.title}>
            <p>{copy.timing.intro}</p>
          </SectionIntro>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {copy.timing.items.map((item) => (
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
          <SectionIntro eyebrow={copy.alongside.eyebrow} title={copy.alongside.title}>
            <p>
              {copy.alongside.beforeAdjustments}{" "}
              <Link href={copy.alongside.adjustments.href} className={linkClass}>
                {copy.alongside.adjustments.label}
              </Link>{" "}
              {copy.alongside.afterAdjustments}
            </p>
            <p>
              {copy.alongside.beforeLaser}{" "}
              <Link href={copy.alongside.laser.href} className={linkClass}>
                {copy.alongside.laser.label}
              </Link>{" "}
              {copy.alongside.afterLaser}
            </p>
            <p>{copy.alongside.conditions}</p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow={copy.home.eyebrow} title={copy.home.title}>
            <p>{copy.home.instructions}</p>
            <p>
              {copy.home.beforeIce}{" "}
              <Link href={copy.home.ice.href} className={linkClass}>
                {copy.home.ice.label}
              </Link>
              . {copy.home.beforeForm}{" "}
              <Link href={copy.home.form.href} className={linkClass}>
                {copy.home.form.label}
              </Link>{" "}
              {copy.home.afterForm}
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow={copy.limit.eyebrow} title={copy.limit.title}>
              <p>{copy.limit.body}</p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard eyebrow={copy.cta.eyebrow} title={copy.cta.title} body={copy.cta.body} />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A]">{copy.window.title}</h2>
          {copy.window.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <FaqBlock
        id="ld-faq-cryotherapy"
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
