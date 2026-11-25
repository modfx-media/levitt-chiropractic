import type { PseoHub } from "@/lib/pseo/types";
import { RichText } from "./RichText";
import { Section } from "./Section";

export function CostBreakdown({ data, sourceIds, tone = "slate" }: { data?: PseoHub["cost"]; sourceIds: string[]; tone?: "white" | "slate" | "warm" }) {
  if (!data?.items.length) return null;
  return (
    <Section eyebrow="Before you book" title={data.title} tone={tone}>
      <dl className="grid gap-4 sm:grid-cols-2">
        {data.items.map((i) => (
          <div key={i.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.05)] sm:p-6">
            <dt className="font-heading text-base font-bold text-[#0F172A]">{i.label}</dt>
            <dd className="mt-2 text-[0.9375rem] leading-relaxed text-slate-700 sm:text-base"><RichText text={i.value} sourceIds={sourceIds} /></dd>
          </div>
        ))}
      </dl>
      {data.note ? <p className="mt-4 max-w-[68ch] text-sm leading-relaxed text-slate-600"><RichText text={data.note} sourceIds={sourceIds} /></p> : null}
    </Section>
  );
}
