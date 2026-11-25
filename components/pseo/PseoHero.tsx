import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import type { SiteShell } from "@/lib/designed/shell";
import { btnGhostDark, btnPrimary, CalendarIcon, PhoneIcon, PinIcon } from "./ui";

/**
 * PSEO-only hero (server component, no framer-motion). Same H1 text, same
 * breadcrumbs + BreadcrumbJsonLd and the same subtitle the old ServiceHero
 * rendered, so the measured text (subtitle) is unchanged. ServiceHero itself
 * is NOT edited, so main pages keep their hero.
 */
export function PseoHero({
  title,
  subtitle,
  crumbs,
  shell,
}: {
  title: string;
  subtitle?: string;
  crumbs: { label: string; href?: string }[];
  shell: SiteShell;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0F172A] text-white">
      <BreadcrumbJsonLd crumbs={crumbs} />
      {/* Decorative background: the existing 60px orange grid + two soft glows, CSS only. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(249,115,22,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(249,115,22,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#F97316]/20 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#1E3A5F]/70 blur-[120px]" />

      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end lg:gap-14 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="min-w-0">
          <nav aria-label="Breadcrumb" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-300">
            <ol className="flex flex-wrap gap-y-1">
              {crumbs.map((c, i) => {
                const isLast = i === crumbs.length - 1;
                return (
                  <li key={`${c.label}-${i}`} className="flex items-center">
                    {i > 0 ? <span aria-hidden className="px-2 text-white/30">/</span> : null}
                    {c.href && !isLast ? (
                      <Link href={c.href} className="transition-colors hover:text-orange-200">{c.label}</Link>
                    ) : (
                      <span aria-current={isLast ? "page" : undefined} className={isLast ? "text-orange-100" : "text-white/60"}>{c.label}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>

          <h1 className="mt-5 text-balance font-heading text-[1.875rem] font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          <span aria-hidden className="mt-5 block h-1 w-20 rounded-full bg-[#F97316]" />

          {subtitle ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">{subtitle}</p>
          ) : null}

          <div data-pseo-chrome="" className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <Link href={shell.appointmentUrl} className={btnPrimary}>
              <CalendarIcon className="h-[1.125rem] w-[1.125rem]" />
              Book a visit
            </Link>
            <a href={shell.phoneHref} className={btnGhostDark} aria-label={`Call the clinic at ${shell.phone}`}>
              <PhoneIcon className="h-[1.125rem] w-[1.125rem]" />
              <span className="sm:hidden">Call</span>
              <span className="hidden sm:inline">{shell.phone}</span>
            </a>
          </div>

          <p data-pseo-chrome="" className="mt-6 flex items-start gap-2.5 text-sm leading-relaxed text-white/75">
            <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#F97316]" />
            <span>
              {shell.address.street}, {shell.address.city}, {shell.address.state} {shell.address.zip}
              <span aria-hidden className="px-2 text-white/30">·</span>
              <a href={shell.mapsDirectionsUrl} target="_blank" rel="noopener" className="font-semibold text-white underline decoration-[#F97316] decoration-2 underline-offset-4 hover:text-orange-200">
                Get directions
              </a>
            </span>
          </p>
        </div>

        {/* Desktop-only visit card (on mobile the same details live in the Visit block further down). */}
        <aside data-pseo-chrome="" aria-label="Office details" className="hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 lg:block">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-300">Office hours</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {shell.hoursInline.map((h) => (
              <li key={h.day} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-2.5 last:border-b-0 last:pb-0">
                <span className="font-semibold text-white">{h.day}</span>
                <span className="text-right text-white/70">{h.time}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-3 rounded-2xl bg-[#0F172A]/60 p-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#F97316]/15 text-[#F97316] ring-1 ring-[#F97316]/30">
              <PhoneIcon />
            </span>
            <p className="text-sm leading-snug text-white/75">
              Call the clinic
              <a href={shell.phoneHref} className="block font-heading text-lg font-bold text-white hover:text-orange-200">{shell.phone}</a>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
