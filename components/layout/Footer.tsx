"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type MotionProps } from "framer-motion";

import { useSiteShell } from "@/components/layout/SiteShellContext";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function Footer() {
  const shell = useSiteShell();
  const reduce = useReducedMotion();
  const year = new Date().getFullYear();
  const exploreLinks = shell.footer.explore;
  const legalLinks = shell.footer.legal;

  const fadeUp: MotionProps = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.5, ease: "easeOut" },
      };

  return (
    <>
      <motion.footer
        {...fadeUp}
        className="mt-auto border-t border-white/5 bg-dark text-white/75"
      >
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-14">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-5">
              <Link
                href="/"
                className="inline-flex items-center gap-2.5"
                aria-label={`${shell.name} home`}
              >
                <Image
                  src={shell.logos.markSrc}
                  alt={shell.logos.markAlt}
                  width={48}
                  height={48}
                  className="h-9 w-9 flex-shrink-0 object-contain"
                />
                <Image
                  src={shell.logos.wordmarkSrc}
                  alt={shell.logos.wordmarkAlt}
                  width={220}
                  height={56}
                  className="h-9 w-auto object-contain"
                />
              </Link>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
                {shell.footer.blurb}
              </p>

              {/* Contact row */}
              <div className="mt-5 space-y-2 text-sm">
                <a
                  href={shell.phoneHref}
                  className="inline-flex items-center gap-2 text-white hover:text-primary"
                >
                  <PhoneIcon className="h-4 w-4 text-primary" />
                  <span className="font-semibold">{shell.phone}</span>
                </a>
                <p className="flex items-start gap-2 text-white/65">
                  <PinIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{shell.address.full}</span>
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Link
                  href={shell.appointmentUrl}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-orange-600"
                >
                  {shell.footer.newPatientLabel}
                </Link>
                <Link
                  href={shell.existingPatientAppointmentUrl}
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:border-primary hover:text-primary"
                >
                  {shell.footer.existingPatientLabel}
                </Link>
              </div>
            </div>

            {/* Explore */}
            <div className="lg:col-span-3">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                {shell.footer.exploreTitle}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {exploreLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-white/70 transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="lg:col-span-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                {shell.footer.legalTitle}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {legalLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-white/70 transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-start gap-3 border-t border-white/10 pt-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {shell.name} All Rights Reserved.
            </p>
            <a
              href={shell.footer.poweredByHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold uppercase tracking-[0.14em] transition-colors hover:text-primary"
            >
              {shell.footer.poweredByLabel}
            </a>
          </div>
        </div>
      </motion.footer>

      <ScrollToTop />
    </>
  );
}
