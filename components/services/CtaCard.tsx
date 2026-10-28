"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";

type CtaCardProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
};

export function CtaCard({
  eyebrow = "Take the Next Step",
  title = "Ready to Feel Better?",
  body = "Make an appointment with Dr. Levitt today.",
}: CtaCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.aside
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -4 }}
      className="overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F] p-6 shadow-2xl ring-1 ring-white/10 sm:p-8 lg:sticky lg:top-28"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F97316]/15 blur-2xl"
      />
      <div className="relative">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
          {eyebrow}
        </p>
        <h3 className="mt-2 font-heading text-2xl font-bold text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-white/70">{body}</p>

        <div className="mt-6 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
            Call Now
          </p>
          <a
            href={siteConfig.phoneHref}
            className="mt-1 block font-heading text-xl font-black text-orange-400 transition-colors hover:text-orange-300 sm:text-2xl"
          >
            {siteConfig.phone}
          </a>
        </div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 320, damping: 20 }}
          className="mt-5"
        >
          <Link
            href={siteConfig.appointmentUrl}
            className="flex h-12 w-full items-center justify-center rounded-full bg-[#F97316] px-6 text-sm font-bold text-white shadow-md shadow-orange-500/30 transition-colors hover:bg-orange-600"
          >
            NEW Patient Appointment →
          </Link>
          <Link
            href={siteConfig.existingPatientAppointmentUrl}
            className="mt-3 flex h-12 w-full items-center justify-center rounded-full border border-white/25 px-6 text-sm font-bold text-white transition-colors hover:border-[#F97316] hover:text-orange-300"
          >
            Existing Patient Appointment →
          </Link>
        </motion.div>
      </div>
    </motion.aside>
  );
}
