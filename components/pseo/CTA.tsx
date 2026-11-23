import Link from "next/link";
import type { PseoHub } from "@/lib/pseo/types";
import { siteConfig } from "@/lib/siteConfig";

export function CTA({ data }: { data?: PseoHub["cta"] }) {
  if (!data) return null;
  return (
    <section className="bg-[#0F172A] py-12 text-white sm:py-16">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">{data.title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">{data.body}</p>
        <p className="mt-2 text-sm text-white/60">{siteConfig.address.full}</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={siteConfig.appointmentUrl} className="inline-flex min-h-11 items-center rounded-full bg-[#F97316] px-6 font-semibold text-white hover:bg-orange-500">Request a new-patient visit</Link>
          <a href={siteConfig.phoneHref} className="inline-flex min-h-11 items-center rounded-full border border-white/30 px-6 font-semibold text-white hover:border-white">Call {siteConfig.phone}</a>
        </div>
      </div>
    </section>
  );
}
