"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import type { ServedCity } from "@/lib/areasData";
import {
  getPriorityHub,
  type HubSection,
} from "@/lib/priorityCityHubs";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

function Inline({ text }: { text: string }) {
  const re = /\{([^|{}]+)\|([^{}]+)\}/g;
  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = re.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    nodes.push(
      <Link
        key={key++}
        href={match[2]}
        className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
      >
        {match[1]}
      </Link>,
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

function SectionBlock({ section, dark = false }: { section: HubSection; dark?: boolean }) {
  return (
    <section className={dark ? "bg-[#0F172A] py-16 text-white sm:py-20" : "bg-white py-12 sm:py-16 md:py-20"}>
      <div className="mx-auto max-w-3xl px-6">
        <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${dark ? "text-orange-300" : "text-orange-600"}`}>
          {section.eyebrow}
        </p>
        <h2 className={`mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-[#0F172A]"}`}>
          {section.title}
        </h2>
        <span aria-hidden className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]" />
        <div className={`mt-6 space-y-4 text-base leading-relaxed sm:text-lg ${dark ? "text-white/80" : "text-slate-700"}`}>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>
              <Inline text={paragraph} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function isPriorityHubSlug(slug: string): boolean {
  return getPriorityHub(slug) != null;
}

export default function PriorityCityHub({ city }: { city: ServedCity }) {
  const hub = getPriorityHub(city.slug);
  if (!hub) return null;

  return (
    <>
      <ServiceHero
        title={hub.h1}
        subtitle={hub.subtitle}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Areas We Serve", href: "/areas-we-serve" },
          { label: city.name },
        ]}
      />

      {hub.sections.map((section, index) => (
        <SectionBlock key={section.title} section={section} dark={index % 2 === 1} />
      ))}

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#0F172A]">
            {hub.servicesTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">
            <Inline text={hub.servicesIntro} />
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {hub.services.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="block h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#F97316]"
                >
                  <span className="font-heading text-base font-bold text-[#0F172A]">
                    {service.label}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-slate-600">
                    {service.note}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#0F172A]">
              {hub.faqTitle}
            </h2>
            <div className="mt-8 space-y-6">
              {hub.faqs.map((faq) => (
                <article key={faq.q} className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="font-heading text-lg font-bold text-[#0F172A]">{faq.q}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-700">{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <CtaCard eyebrow={city.name} title={hub.ctaTitle} body={hub.ctaBody} />
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
