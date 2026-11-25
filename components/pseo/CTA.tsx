import Link from "next/link";
import type { PseoHub } from "@/lib/pseo/types";
import { siteConfig } from "@/lib/siteConfig";
import { btnGhostDark, btnPrimary, CalendarIcon, PhoneIcon, PinIcon } from "./ui";

/** Closing conversion band. Title/body come from the hub data unchanged; button labels are the existing ones. */
export function CTA({ data }: { data?: PseoHub["cta"] }) {
  if (!data) return null;
  return (
    <section className="relative isolate overflow-hidden bg-[#0F172A] py-16 text-white sm:py-24">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-[44rem] max-w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316]/25 blur-[110px]" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(249,115,22,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(249,115,22,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <h2 className="text-balance font-heading text-[1.875rem] font-black leading-tight sm:text-[2.5rem]">{data.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">{data.body}</p>
        <div data-pseo-chrome="" className="mt-8 grid gap-3 sm:flex sm:justify-center">
          <Link href={siteConfig.appointmentUrl} className={btnPrimary}>
            <CalendarIcon className="h-[1.125rem] w-[1.125rem]" />
            Request a new-patient visit
          </Link>
          <a href={siteConfig.phoneHref} className={btnGhostDark}>
            <PhoneIcon className="h-[1.125rem] w-[1.125rem]" />
            Call {siteConfig.phone}
          </a>
        </div>
        <p data-pseo-chrome="" className="mt-6 inline-flex items-center gap-2 text-sm text-white/60">
          <PinIcon className="h-4 w-4 text-[#F97316]" />
          {siteConfig.address.full}
        </p>
      </div>
    </section>
  );
}
