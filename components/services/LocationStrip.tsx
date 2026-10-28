"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";

const hoursInline = [
  { day: "Mon / Thu", time: "8:30–11:30am · 2:30–5:30pm" },
  { day: "Tue / Fri", time: "8:30am – 11:30am" },
  { day: "Wed", time: "10:00am – 12:00pm" },
  { day: "Sat", time: "By Appointment" },
  { day: "Sun", time: "Closed" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function LocationStrip() {
  return (
    <section className="relative bg-white py-16">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-7xl gap-5 px-5 sm:gap-6 sm:px-6 md:grid-cols-3 md:gap-8"
      >
        {/* Address */}
        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
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
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0F172A]/60">
              Address
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[#0F172A]">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}, {siteConfig.address.state}{" "}
              {siteConfig.address.zip}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
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
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0F172A]/60">
              Phone
            </p>
            <a
              href={siteConfig.phoneHref}
              className="mt-1 block text-sm font-semibold text-[#0F172A] transition-colors hover:text-[#F97316]"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
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
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0F172A]/60">
              Hours
            </p>
            <ul className="mt-1 space-y-0.5 text-xs text-[#0F172A]/80">
              {hoursInline.map((h) => (
                <li key={h.day} className="flex gap-2">
                  <span className="font-semibold text-[#0F172A]">
                    {h.day}:
                  </span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
