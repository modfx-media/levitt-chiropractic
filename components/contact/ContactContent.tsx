"use client";

import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
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

const MAP_QUERY = encodeURIComponent(
  `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
);
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const MAP_LINK = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

export default function ContactContent() {
  return (
    <>
      <ServiceHero
        title="Contact Us"
        subtitle="We&rsquo;re always happy to hear from you call, message, or stop by the office."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      {/* SECTION 2 WHITE: INTRO + CONTACT FORM */}
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
                Get In Touch
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                We&rsquo;d love to hear from you
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                We encourage you to contact us via phone or email. Fill out
                the form to send us a message. The map below shows the office
                at 6200 Excelsior Blvd, Suite 201, Saint Louis Park, MN 55416.
                If you have any questions or comments,
                please feel free to get in touch we&rsquo;re always happy
                to hear from you!
              </p>

              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-[#F97316]/10 text-[#F97316] ring-1 ring-[#F97316]/30">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.86 19.86 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.93.36 1.85.7 2.73a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.35-1.35a2 2 0 012.11-.45c.88.34 1.8.57 2.73.7a2 2 0 011.72 2z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0F172A]/60">
                      Phone
                    </p>
                    <a
                      href={siteConfig.phoneHref}
                      className="mt-1 block text-base font-semibold text-[#0F172A] transition-colors hover:text-[#F97316]"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-[#F97316]/10 text-[#F97316] ring-1 ring-[#F97316]/30">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden
                    >
                      <path d="M12 22s8-7.5 8-13a8 8 0 10-16 0c0 5.5 8 13 8 13z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0F172A]/60">
                      Address
                    </p>
                    <p className="mt-1 text-base leading-relaxed text-[#0F172A]">
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.city}, {siteConfig.address.state}{" "}
                      {siteConfig.address.zip}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-[#F97316]/10 text-[#F97316] ring-1 ring-[#F97316]/30">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </span>
                  <div className="flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0F172A]/60">
                      Office Hours
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-[#0F172A]">
                      {siteConfig.hours.map((h) => (
                        <li
                          key={h.day}
                          className="flex justify-between gap-6"
                        >
                          <span className="font-semibold">{h.day}</span>
                          <span className="text-slate-600">{h.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
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
                  Send a Message
                </p>
                <div className="mt-6 h-[640px] w-full">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/gOVyxQpZhEh5JDPGljU0"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      borderRadius: "8px",
                    }}
                    id="inline-gOVyxQpZhEh5JDPGljU0"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="\uD83D\uDD35 Website Form (CONTACT US) 18-06-26"
                    data-height="441"
                    data-layout-iframe-id="inline-gOVyxQpZhEh5JDPGljU0"
                    data-form-id="gOVyxQpZhEh5JDPGljU0"
                    title="Website Contact Form"
                  />
                </div>
                <Script
                  src="https://link.msgsndr.com/js/form_embed.js"
                  strategy="lazyOnload"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 DARK NAVY: MAP + DIRECTIONS */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-[#1E3A5F]/60 blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              Find Us
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Come visit our office
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-4 text-base text-white/70">
              Click the map for turn-by-turn directions.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12"
          >
            <div className="relative overflow-hidden rounded-2xl border-t-4 border-[#F97316] ring-1 ring-white/10">
              <iframe
                src={MAP_EMBED}
                title="Map to Levitt Chiropractic Center"
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[280px] w-full border-0 sm:h-[360px] lg:h-[420px]"
              />
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#0F172A] shadow-lg shadow-black/30 ring-1 ring-black/10 transition hover:bg-[#F97316] hover:text-white sm:text-[13px]"
                aria-label="Get directions to Levitt Chiropractic Center"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden
                >
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 WHITE: APPT CTA */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-3"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                Ready to Schedule?
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Skip the message request an appointment
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                If you&rsquo;re ready to book, our{" "}
                <Link
                  href="/contact/appointment-request"
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  appointment request form
                </Link>{" "}
                gets you on the schedule fastest. Or call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  {siteConfig.phone}
                </a>
                .
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Book a Visit"
                title="Request an appointment"
                body="Tell us when you&rsquo;d like to come in."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
