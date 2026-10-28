"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import {
  primaryNav,
  isGroup,
  type NavEntry,
  type NavLeaf,
  type NavGroup,
} from "./navData";

type Props = {
  open: boolean;
  onClose: () => void;
  pathname: string;
};

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function MobileEntry({
  entry,
  pathname,
  onClose,
}: {
  entry: NavEntry;
  pathname: string;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(
    isActive(pathname, entry.href) && !!entry.groups,
  );
  const active = isActive(pathname, entry.href);

  if (!entry.groups || entry.groups.length === 0) {
    return (
      <Link
        href={entry.href}
        onClick={onClose}
        className={`block rounded-lg px-3 py-3 text-base font-semibold uppercase tracking-wide ${
          active ? "text-primary" : "text-white"
        }`}
      >
        {entry.label}
      </Link>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <Link
          href={entry.href}
          onClick={onClose}
          className={`flex-1 rounded-lg px-3 py-3 text-base font-semibold uppercase tracking-wide ${
            active ? "text-primary" : "text-white"
          }`}
        >
          {entry.label}
        </Link>
        <button
          type="button"
          aria-label={`Toggle ${entry.label} submenu`}
          aria-expanded={expanded}
          onClick={() => setExpanded((e) => !e)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white/80 hover:text-primary"
        >
          <svg
            className={`h-4 w-4 transition-transform ${
              expanded ? "rotate-180" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="ml-3 border-l border-white/10 pl-3 pb-2">
              {entry.groups.map((item) => {
                if (isGroup(item)) {
                  const group = item as NavGroup;
                  return (
                    <div key={group.label} className="py-1">
                      {group.href ? (
                        <Link
                          href={group.href}
                          onClick={onClose}
                          className={`block rounded-md px-3 py-2 text-sm font-semibold ${
                            isActive(pathname, group.href)
                              ? "text-primary"
                              : "text-white"
                          }`}
                        >
                          {group.label}
                        </Link>
                      ) : (
                        <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white/50">
                          {group.label}
                        </p>
                      )}
                      <div className="ml-2 border-l border-white/10 pl-2">
                        {group.items.map((leaf) => {
                          const a = isActive(pathname, leaf.href);
                          return (
                            <Link
                              key={leaf.href}
                              href={leaf.href}
                              onClick={onClose}
                              className={`block rounded-md px-3 py-2 text-sm ${
                                a
                                  ? "text-primary"
                                  : "text-white/80 hover:text-primary"
                              }`}
                            >
                              {leaf.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
                const leaf = item as NavLeaf;
                const a = isActive(pathname, leaf.href);
                return (
                  <Link
                    key={leaf.href}
                    href={leaf.href}
                    onClick={onClose}
                    className={`block rounded-md px-3 py-2 text-sm ${
                      a ? "text-primary" : "text-white/80 hover:text-primary"
                    }`}
                  >
                    {leaf.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MobileMenu({ open, onClose, pathname }: Props) {
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 h-[100dvh] xl:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <motion.div
            className="absolute inset-0 bg-dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="absolute inset-0 flex flex-col"
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex h-16 flex-shrink-0 items-center justify-between border-b border-white/10 px-4 sm:px-6">
              <Link
                href="/"
                onClick={onClose}
                className="font-heading text-base font-semibold text-white"
              >
                {siteConfig.name}
              </Link>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <nav
              className="flex-1 overflow-y-auto overscroll-contain px-3 py-4"
              aria-label="Mobile primary"
            >
              {primaryNav.map((entry) => (
                <MobileEntry
                  key={entry.href}
                  entry={entry}
                  pathname={pathname}
                  onClose={onClose}
                />
              ))}
            </nav>

            <div className="flex-shrink-0 border-t border-white/10 bg-dark p-4 sm:p-6">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2 text-base font-semibold text-white"
              >
                <svg
                  className="h-5 w-5 text-primary"
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
                {siteConfig.phone}
              </a>
              <Link
                href={siteConfig.appointmentUrl}
                onClick={onClose}
                className="mt-4 flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
              >
                NEW Patient Appointment
              </Link>
              <Link
                href={siteConfig.existingPatientAppointmentUrl}
                onClick={onClose}
                className="mt-3 flex w-full items-center justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:border-primary hover:text-primary"
              >
                Existing Patient Appointment
              </Link>
              <p className="mt-4 text-sm text-white/70">
                {siteConfig.address.full}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
