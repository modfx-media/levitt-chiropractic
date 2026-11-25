import type { PseoHub } from "@/lib/pseo/types";
import { RichText } from "./RichText";
import { Section } from "./Section";

const lgCols: Record<number, string> = { 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" };

/** Connected timeline: vertical on mobile/tablet, horizontal on desktop when there are 2-4 steps. */
export function ProcessSteps({ data, sourceIds, tone = "white" }: { data?: PseoHub["process"]; sourceIds: string[]; tone?: "white" | "slate" | "warm" }) {
  if (!data?.steps.length) return null;
  const horizontal = lgCols[data.steps.length];
  return (
    <Section eyebrow="Step by step" title={data.title} tone={tone}>
      {data.intro ? <p className="max-w-[68ch] text-[1.0625rem] leading-[1.75] text-slate-700 sm:text-lg"><RichText text={data.intro} sourceIds={sourceIds} /></p> : null}
      <ol className={`mt-8 grid gap-0 ${horizontal ? `${horizontal} lg:gap-6` : ""}`}>
        {data.steps.map((s, i) => {
          const last = i === data.steps.length - 1;
          return (
            <li key={s.title} className={`relative grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-4 pb-8 last:pb-0 ${horizontal ? "lg:block lg:pb-0" : ""}`}>
              {/* connector line: vertical below the badge, or horizontal to the next card on desktop */}
              {!last ? (
                <span
                  aria-hidden
                  className={`absolute left-[1.375rem] top-12 bottom-1 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#F97316]/60 to-slate-200 ${
                    horizontal ? "lg:left-14 lg:right-[-1.5rem] lg:top-[1.375rem] lg:bottom-auto lg:h-0.5 lg:w-auto lg:translate-x-0 lg:bg-gradient-to-r" : ""
                  }`}
                />
              ) : null}
              <span
                aria-hidden
                className="relative z-10 grid h-11 w-11 place-items-center rounded-full bg-[#0F172A] font-heading text-base font-extrabold text-white shadow-[0_0_0_6px_#fff] ring-2 ring-[#F97316]"
              >
                {i + 1}
              </span>
              <div className={`rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.05)] sm:p-6 ${horizontal ? "lg:mt-5 lg:h-[calc(100%-4rem)]" : ""}`}>
                <h3 className="text-pretty font-heading text-lg font-bold leading-snug text-[#0F172A]">{s.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate-700 sm:text-base"><RichText text={s.body} sourceIds={sourceIds} /></p>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
