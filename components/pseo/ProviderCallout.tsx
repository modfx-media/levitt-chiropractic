import Image from "next/image";
import type { PseoHub } from "@/lib/pseo/types";
import { siteConfig } from "@/lib/siteConfig";
import { RichText } from "./RichText";

/** Provider card. Portrait is the client-owned photo already used here (siteConfig.physician.image). */
export function ProviderCallout({ data, sourceIds, tone = "white" }: { data?: PseoHub["provider"]; sourceIds: string[]; tone?: "white" | "slate" | "warm" }) {
  if (!data) return null;
  return (
    <section className={`${tone === "slate" ? "bg-slate-50" : tone === "warm" ? "bg-[#FFF7ED]" : "bg-white"} border-t border-slate-200/70 py-14 sm:py-20`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="relative grid overflow-hidden rounded-[2rem] bg-[#0F172A] text-white shadow-[0_24px_60px_-28px_rgba(15,23,42,0.6)] sm:grid-cols-[14rem_minmax(0,1fr)] lg:grid-cols-[18rem_minmax(0,1fr)]">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F97316]/20 blur-[90px]" />
          <div className="relative aspect-[4/3] bg-[#1E3A5F] sm:aspect-auto sm:min-h-full">
            <Image
              src={siteConfig.physician.image}
              alt={siteConfig.physician.name}
              fill
              sizes="(min-width: 1024px) 18rem, (min-width: 640px) 14rem, 100vw"
              className="object-cover object-[50%_20%]"
            />
          </div>
          <div className="relative p-6 sm:p-8 lg:p-10">
            <span aria-hidden className="block h-1 w-12 rounded-full bg-[#F97316]" />
            <h2 className="mt-4 text-balance font-heading text-2xl font-extrabold leading-tight sm:text-[1.75rem]">{data.title}</h2>
            <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-white/80 sm:text-[1.0625rem] [&_a]:text-orange-200 [&_sup_a]:!text-orange-300">
              <RichText text={data.body} sourceIds={sourceIds} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
