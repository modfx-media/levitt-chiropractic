import type { PseoHub } from "@/lib/pseo/types";
import { RichText } from "./RichText";
import { Section } from "./Section";

export function WhoItsFor({ data, sourceIds }: { data?: PseoHub["whoFor"]; sourceIds: string[] }) {
  if (!data || (!data.fits.length && !data.notFits.length)) return null;
  return (
    <Section eyebrow="Is this the right place" title={data.title}>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
          <h3 className="font-heading text-lg font-bold text-[#0F172A]">{data.fitsTitle}</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700 sm:text-base">
            {data.fits.map((f) => <li key={f} className="flex gap-2"><span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" /><span><RichText text={f} sourceIds={sourceIds} /></span></li>)}
          </ul>
        </div>
        <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5">
          <h3 className="font-heading text-lg font-bold text-[#0F172A]">{data.notFitsTitle}</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700 sm:text-base">
            {data.notFits.map((f) => <li key={f} className="flex gap-2"><span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-600" /><span><RichText text={f} sourceIds={sourceIds} /></span></li>)}
          </ul>
        </div>
      </div>
    </Section>
  );
}
