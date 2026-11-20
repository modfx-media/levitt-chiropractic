"use client";

import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { appointmentRequestDefaults as defaults } from "@/lib/designed/defaults/appointmentRequest";
import { mergeContent } from "@/lib/designed/merge";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const forms = {
  new: {
    id: "JKf5DJnpikVe68RzfV0T",
    name: "\uD83D\uDD35 Website Form (REQUEST APPMT) ",
    height: "534",
    extraAttrs: {} as Record<string, string>,
  },
  existing: {
    id: "URmegmIswpVqCJnFftaL",
    name: "\uD83D\uDD35 Website Form (Existing Patient APPMT) ",
    height: "562",
    extraAttrs: {
      "data-cookie-consent": "true",
      "data-cookie-consent-provider": "auto",
    },
  },
};

export default function AppointmentRequestContent({
  variant = "new",
  content,
}: {
  variant?: "new" | "existing";
  content?: unknown;
}) {
  const copy = mergeContent(defaults, content);
  const page = copy[variant];
  const form = forms[variant];

  return (
    <>
      <ServiceHero
        title={page.title}
        subtitle={page.subtitle}
        crumbs={[
          { label: copy.home.label, href: copy.home.href },
          { label: copy.contact.label, href: copy.contact.href },
          { label: page.title },
        ]}
      />

      {/* SECTION 2 WHITE: INTRO + FORM */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                {page.eyebrow}
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                {copy.heading}
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                {page.intro}
              </p>

              <ul className="mt-8 space-y-4">
                {page.reasons.map((r) => (
                  <li key={r.title} className="flex items-start gap-4">
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-[#F97316] text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <div>
                      <p
                        className="font-heading text-sm font-bold text-[#0F172A]"
                        dangerouslySetInnerHTML={{ __html: r.title }}
                      />
                      <p
                        className="mt-1 text-sm text-slate-600"
                        dangerouslySetInnerHTML={{ __html: r.body }}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl bg-[#0F172A] p-6 text-white ring-1 ring-white/10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                  {copy.call.eyebrow}
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="mt-2 block font-heading text-2xl font-bold text-white transition-colors hover:text-[#F97316]"
                >
                  {siteConfig.phone}
                </a>
                <p className="mt-1 text-xs text-white/60">
                  {copy.call.hours}
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-7"
            >
              <div className="relative overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-600">
                  {copy.form.eyebrow}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-[#0F172A]">
                  {copy.form.heading}
                </h3>

                <div className="mt-6 h-[720px] w-full">
                  <iframe
                    src={`https://api.leadconnectorhq.com/widget/form/${form.id}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      borderRadius: "8px",
                    }}
                    id={`inline-${form.id}`}
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name={form.name}
                    data-height={form.height}
                    data-layout-iframe-id={`inline-${form.id}`}
                    data-form-id={form.id}
                    {...form.extraAttrs}
                    title={page.formTitle}
                  />
                </div>
                <Script
                  src="https://link.msgsndr.com/js/form_embed.js"
                  strategy="lazyOnload"
                />

                <p className="mt-6 text-xs text-slate-500">
                  {copy.form.beforeLink}{" "}
                  <Link
                    href={copy.form.linkHref}
                    className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
                  >
                    {copy.form.linkLabel}
                  </Link>{" "}
                  {copy.form.afterLink}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
