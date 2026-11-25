import type { PseoHub } from "@/lib/pseo/types";
import { RichText } from "./RichText";
import { Section } from "./Section";
import { ArrowIcon, CheckIcon } from "./ui";

export function WhoItsFor({ data, sourceIds, tone = "white" }: { data?: PseoHub["whoFor"]; sourceIds: string[]; tone?: "white" | "slate" | "warm" }) {
  if (!data || (!data.fits.length && !data.notFits.length)) return null;
  return (
    <Section eyebrow="Is this the right place" title={data.title} tone={tone}>
      <div className="grid gap-5 md:grid-cols-2">
        {data.fits.length ? (
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50/50 p-6 sm:p-7">
            <h3 className="font-heading text-lg font-bold text-[#0F172A]">{data.fitsTitle}</h3>
            <ul className="mt-4 space-y-3 text-[0.9375rem] leading-relaxed text-slate-700 sm:text-base">
              {data.fits.map((f) => (
                <li key={f} className="flex gap-3">
                  <span aria-hidden className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-600 text-white"><CheckIcon className="h-3.5 w-3.5" /></span>
                  <span><RichText text={f} sourceIds={sourceIds} /></span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {data.notFits.length ? (
          <div className="rounded-3xl border border-rose-200 bg-rose-50/50 p-6 sm:p-7">
            <h3 className="font-heading text-lg font-bold text-[#0F172A]">{data.notFitsTitle}</h3>
            <ul className="mt-4 space-y-3 text-[0.9375rem] leading-relaxed text-slate-700 sm:text-base">
              {data.notFits.map((f) => (
                <li key={f} className="flex gap-3">
                  <span aria-hidden className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-rose-700 text-white"><ArrowIcon className="h-3.5 w-3.5" /></span>
                  <span><RichText text={f} sourceIds={sourceIds} /></span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
