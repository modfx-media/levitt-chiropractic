"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { useFooterInView } from "@/lib/useFooterInView";

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

function CalendarIcon({ className = "" }: { className?: string }) {
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
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export function StickyBookNowBanner() {
  const [visible, setVisible] = useState(false);
  const footerInView = useFooterInView();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && !footerInView && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-dark/95 shadow-[0_-8px_24px_rgba(0,0,0,0.25)] backdrop-blur-md"
          role="region"
          aria-label="Book an appointment"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:gap-4 sm:px-6 sm:py-3">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex min-w-0 items-center gap-2 rounded-full px-2 py-2 text-sm font-semibold text-white transition-colors hover:text-primary sm:gap-3 sm:px-3 sm:text-base"
              aria-label={`Call ${siteConfig.phone}`}
            >
              <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30 sm:h-10 sm:w-10">
                <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <span className="flex min-w-0 flex-col leading-tight">
                <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 sm:block">
                  Call Today
                </span>
                <span className="truncate">{siteConfig.phone}</span>
              </span>
            </a>

            <Link
              href={siteConfig.appointmentUrl}
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.1em] text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600 sm:px-6 sm:py-3 sm:text-[13px] sm:tracking-[0.14em]"
            >
              <CalendarIcon className="h-4 w-4" />
              Book Now
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
