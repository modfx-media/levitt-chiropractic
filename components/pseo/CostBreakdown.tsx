import type { PseoHub } from "@/lib/pseo/types";
import { RichText } from "./RichText";
import { Section } from "./Section";

export function CostBreakdown({ data, sourceIds }: { data?: PseoHub["cost"]; sourceIds: string[] }) {
  if (!data?.items.length) return null;
  return (
    <Section eyebrow="Before you book" title={data.title} tone="slate">
      <dl className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {data.items.map((i) => (
          <div key={i.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[12rem_1fr] sm:gap-4">
            <dt className="font-semibold text-[#0F172A]">{i.label}</dt>
            <dd className="text-slate-700"><RichText text={i.value} sourceIds={sourceIds} /></dd>
          </div>
        ))}
      </dl>
      {data.note ? <p className="mt-3 text-sm text-slate-500"><RichText text={data.note} sourceIds={sourceIds} /></p> : null}
    </Section>
  );
}
