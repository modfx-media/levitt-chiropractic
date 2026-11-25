import type { PseoHub } from "@/lib/pseo/types";
import { RichText } from "./RichText";
import { Section } from "./Section";

/** Native <details>/<summary>: zero client JS. Marker, open state and reveal animation are CSS-only (pseo.css). */
export function FAQAccordion({ data, sourceIds, tone = "slate" }: { data?: PseoHub["faqs"]; sourceIds: string[]; tone?: "white" | "slate" | "warm" }) {
  if (!data?.items.length) return null;
  return (
    <Section eyebrow="Questions" eyebrowChrome title={data.title} tone={tone}>
      <div className="max-w-4xl space-y-3">
        {data.items.map((f) => (
          <details key={f.q} className="pseo-faq group rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.05)] transition-colors open:border-[#F97316]/40 open:shadow-[0_10px_30px_-14px_rgba(15,23,42,0.22)]">
            <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-4 rounded-2xl px-5 py-4 font-heading text-base font-bold leading-snug text-[#0F172A] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#F97316] sm:px-6 sm:text-lg">
              <span>{f.q}</span>
              <span aria-hidden className="pseo-faq-icon h-8 w-8 shrink-0 rounded-full border border-slate-300 text-[#C2410C] transition-colors" />
            </summary>
            <div className="pseo-faq-a px-5 pb-5 sm:px-6 sm:pb-6">
              <p className="max-w-[68ch] text-[0.9375rem] leading-relaxed text-slate-700 sm:text-base"><RichText text={f.a} sourceIds={sourceIds} /></p>
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
