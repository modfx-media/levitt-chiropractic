import type { PseoHub } from "@/lib/pseo/types";
import { RichText } from "./RichText";
import { Section } from "./Section";

/** Numbered local fact cards (numbers are a CSS counter, so they add no measured text); each keeps its own citation. 2-up on tablets, 3-up (or 2-up for 4 cards) on desktop. */
export function LocalFactCard({ data, sourceIds, tone = "slate" }: { data?: PseoHub["localFacts"]; sourceIds: string[]; tone?: "white" | "slate" | "warm" }) {
  if (!data?.cards.length) return null;
  const lg = data.cards.length === 4 || data.cards.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return (
    <Section eyebrow="Local context" eyebrowChrome title={data.title} tone={tone}>
      {data.intro ? <p className="max-w-[68ch] text-[1.0625rem] leading-[1.75] text-slate-700 sm:text-lg"><RichText text={data.intro} sourceIds={sourceIds} /></p> : null}
      <ul className={`pseo-count mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 ${lg}`}>
        {data.cards.map((c) => (
          <li key={c.title} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.05)] transition-shadow hover:shadow-[0_14px_34px_-16px_rgba(15,23,42,0.25)] sm:p-7">
            <h3 className=" text-pretty font-heading text-lg font-bold leading-snug text-[#0F172A] sm:text-xl">{c.title}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate-700 sm:text-base">
              <RichText text={`${c.body}[^${c.sourceId}]`} sourceIds={sourceIds} />
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
