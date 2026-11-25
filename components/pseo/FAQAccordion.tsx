import type { PseoHub } from "@/lib/pseo/types";
import { RichText } from "./RichText";
import { Section } from "./Section";

/** Native <details>/<summary>: works in Safari with zero client JS. */
export function FAQAccordion({ data, sourceIds }: { data?: PseoHub["faqs"]; sourceIds: string[] }) {
  if (!data?.items.length) return null;
  return (
    <Section eyebrow="Questions" title={data.title}>
      <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {data.items.map((f) => (
          <details key={f.q} className="group px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-heading text-base font-bold text-[#0F172A] sm:text-lg">
              <span>{f.q}</span>
              <span aria-hidden className="mt-0.5 shrink-0 text-xl leading-none text-[#F97316] transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base"><RichText text={f.a} sourceIds={sourceIds} /></p>
          </details>
        ))}
      </div>
    </Section>
  );
}
