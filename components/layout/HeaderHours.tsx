"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

type Range = { open: number; close: number };

/** Parse a single range like "8:30–11:30am" or "2:30pm–5:30pm".
 *  Returns minutes-from-midnight pair, or null if it can't parse. */
function parseRange(input: string): Range | null {
  const m = input
    .trim()
    .match(
      /(\d{1,2})(?::(\d{2}))?\s*([ap]m)?\s*[–-]\s*(\d{1,2})(?::(\d{2}))?\s*([ap]m)/i,
    );
  if (!m) return null;
  const closeAmPm = m[6].toLowerCase();
  const openAmPm = (m[3] ?? closeAmPm).toLowerCase();
  const toMinutes = (h: string, mm: string | undefined, ap: string) => {
    let hh = parseInt(h, 10);
    const min = mm ? parseInt(mm, 10) : 0;
    if (ap === "pm" && hh < 12) hh += 12;
    if (ap === "am" && hh === 12) hh = 0;
    return hh * 60 + min;
  };
  return {
    open: toMinutes(m[1], m[2], openAmPm),
    close: toMinutes(m[4], m[5], closeAmPm),
  };
}

function parseHoursString(hours: string): {
  closed: boolean;
  byAppointment: boolean;
  ranges: Range[];
} {
  if (/closed/i.test(hours))
    return { closed: true, byAppointment: false, ranges: [] };
  if (/appointment/i.test(hours))
    return { closed: false, byAppointment: true, ranges: [] };
  const ranges: Range[] = [];
  for (const part of hours.split("&")) {
    const r = parseRange(part);
    if (r) ranges.push(r);
  }
  return { closed: ranges.length === 0, byAppointment: false, ranges };
}

function ClockIcon({ className = "" }: { className?: string }) {
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
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

type Variant = "topbar" | "mobile";

export function HeaderHours({ variant = "topbar" }: { variant?: Variant }) {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState<Date>(() => new Date());
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Hydrate-safe: only show live state after mount.
  useEffect(() => {
    setMounted(true);
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  // Close on outside click / Escape
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const todayName = DAY_NAMES[now.getDay()];
  const todayEntry = useMemo(
    () => siteConfig.hours.find((h) => h.day === todayName),
    [todayName],
  );

  const status = useMemo(() => {
    if (!todayEntry)
      return {
        label: "Hours unavailable",
        accent: "text-white/60",
        dotClass: "bg-white/30",
        isOpen: false,
      };
    const parsed = parseHoursString(todayEntry.hours);
    if (parsed.closed)
      return {
        label: `Closed today`,
        accent: "text-white/60",
        dotClass: "bg-white/30",
        isOpen: false,
      };
    if (parsed.byAppointment)
      return {
        label: `By appointment today`,
        accent: "text-white/80",
        dotClass: "bg-amber-400",
        isOpen: false,
      };
    const minutes = now.getHours() * 60 + now.getMinutes();
    const inRange = parsed.ranges.find(
      (r) => minutes >= r.open && minutes < r.close,
    );
    if (inRange) {
      return {
        label: `Open now`,
        accent: "text-emerald-300",
        dotClass: "bg-emerald-400",
        isOpen: true,
      };
    }
    // Find next opening today
    const upcoming = parsed.ranges.find((r) => minutes < r.open);
    if (upcoming) {
      return {
        label: `Closed · opens ${formatMinutes(upcoming.open)}`,
        accent: "text-white/70",
        dotClass: "bg-white/40",
        isOpen: false,
      };
    }
    return {
      label: `Closed for the day`,
      accent: "text-white/60",
      dotClass: "bg-white/30",
      isOpen: false,
    };
  }, [todayEntry, now]);

  const triggerLabel = mounted
    ? `Today · ${todayEntry?.hours ?? "Hours"}`
    : "View hours";

  const wrapperClass =
    variant === "topbar"
      ? "relative inline-flex"
      : "relative inline-flex w-full justify-center";

  const buttonClass =
    variant === "topbar"
      ? "inline-flex items-center gap-2 transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded"
      : "inline-flex w-full items-center justify-center gap-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60";

  return (
    <div ref={wrapRef} className={wrapperClass}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={buttonClass}
      >
        <ClockIcon className="h-3.5 w-3.5 text-primary" />
        {mounted && (
          <span className="inline-flex items-center gap-1.5">
            <span
              aria-hidden
              className={`h-1.5 w-1.5 rounded-full ${status.dotClass}`}
            />
            <span className={`${status.accent} normal-case tracking-normal`}>
              {status.label}
            </span>
          </span>
        )}
        <span className="hidden text-white/85 normal-case tracking-normal sm:inline">
          {triggerLabel}
        </span>
        <ChevronDownIcon
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Operating hours"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className={
              variant === "topbar"
                ? "absolute left-0 top-full z-50 mt-2 w-[19rem] origin-top rounded-2xl border border-white/10 bg-[#0F172A] p-5 text-left text-white shadow-2xl ring-1 ring-black/5"
                : "absolute left-1/2 top-full z-50 mt-2 w-[19rem] -translate-x-1/2 origin-top rounded-2xl border border-white/10 bg-[#0F172A] p-5 text-left text-white shadow-2xl ring-1 ring-black/5"
            }
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-300">
              Office Hours
            </p>
            <ul className="mt-3 space-y-1.5 text-[13px] normal-case tracking-normal">
              {siteConfig.hours.map((h) => {
                const isToday = mounted && h.day === todayName;
                return (
                  <li
                    key={h.day}
                    className={`flex items-center justify-between gap-4 rounded-md px-2 py-1 ${
                      isToday ? "bg-white/5 ring-1 ring-primary/30" : ""
                    }`}
                  >
                    <span
                      className={`font-medium ${
                        isToday ? "text-white" : "text-white/70"
                      }`}
                    >
                      {h.day}
                      {isToday && (
                        <span className="ml-2 rounded-full bg-primary/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-orange-300">
                          Today
                        </span>
                      )}
                    </span>
                    <span
                      className={`tabular-nums ${
                        isToday ? "text-white" : "text-white/60"
                      }`}
                    >
                      {h.hours}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs">
              <a
                href={siteConfig.phoneHref}
                className="font-semibold text-orange-300 transition-colors hover:text-primary"
              >
                Call {siteConfig.phone}
              </a>
              <a
                href={siteConfig.appointmentUrl}
                className="font-semibold text-white/80 transition-colors hover:text-white"
              >
                NEW Patient Appointment →
              </a>
              <a
                href={siteConfig.existingPatientAppointmentUrl}
                className="font-semibold text-white/80 transition-colors hover:text-white"
              >
                Existing Patient Appointment →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function formatMinutes(total: number): string {
  let h = Math.floor(total / 60);
  const m = total % 60;
  const ap = h >= 12 ? "pm" : "am";
  h = h % 12 || 12;
  const mm = m === 0 ? "" : `:${String(m).padStart(2, "0")}`;
  return `${h}${mm}${ap}`;
}
