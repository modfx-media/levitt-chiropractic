import type { PseoHub } from "@/lib/pseo/types";
import { RichText } from "./RichText";
import { Section } from "./Section";

export function LocalFactCard({ data, sourceIds }: { data?: PseoHub["localFacts"]; sourceIds: string[] }) {
  if (!data?.cards.length) return null;
  return (
    <Section eyebrow="Local context" title={data.title} tone="slate">
      {data.intro ? <p className="max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg"><RichText text={data.intro} sourceIds={sourceIds} /></p> : null}
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.cards.map((c) => (
          <li key={c.title} className="rounded-2xl border border-slate-200 border-t-4 border-t-[#F97316] bg-white p-5 shadow-sm">
            <h3 className="font-heading text-lg font-bold text-[#0F172A]">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
              <RichText text={`${c.body}[^${c.sourceId}]`} sourceIds={sourceIds} />
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
