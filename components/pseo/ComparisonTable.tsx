import type { PseoHub } from "@/lib/pseo/types";
import { RichText } from "./RichText";
import { Section } from "./Section";

/**
 * The table scrolls inside its own focusable region (never the page).
 * Two-column tables fit a 390px screen without scrolling; wider tables get a
 * min-width of ~11rem per column and edge shadows from pseo.css.
 */
export function ComparisonTable({ data, sourceIds, tone = "slate" }: { data?: PseoHub["comparison"]; sourceIds: string[]; tone?: "white" | "slate" | "warm" }) {
  if (!data?.rows.length) return null;
  const minWidth = data.columns.length > 2 ? `${data.columns.length * 11}rem` : undefined;
  return (
    <Section eyebrow="Side by side" eyebrowChrome title={data.title} tone={tone}>
      {data.intro ? <p className="max-w-[68ch] text-[1.0625rem] leading-[1.75] text-slate-700 sm:text-lg"><RichText text={data.intro} sourceIds={sourceIds} /></p> : null}
      <div
        role="region"
        aria-label={data.title}
        tabIndex={0}
        className="pseo-table-scroll mt-8 max-w-full rounded-3xl border border-slate-200 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.18)]"
      >
        <table className="w-full border-collapse text-left text-[0.9375rem] sm:text-base" style={{ minWidth }}>
          <thead>
            <tr className="bg-[#0F172A] text-white">
              {data.columns.map((c, j) => (
                <th key={c} scope="col" className={`px-4 py-3.5 font-heading text-[0.8125rem] font-bold uppercase tracking-[0.12em] sm:px-6 ${j === 0 ? "w-[45%]" : ""}`}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((r, i) => (
              <tr key={i} className="border-t border-slate-200 align-top first:border-t-0">
                {r.map((cell, j) =>
                  j === 0 ? (
                    <th key={j} scope="row" className="bg-white/70 px-4 py-4 font-semibold leading-snug text-[#0F172A] sm:px-6 sm:py-5">
                      <RichText text={cell} sourceIds={sourceIds} />
                    </th>
                  ) : (
                    <td key={j} className="px-4 py-4 leading-relaxed text-slate-700 sm:px-6 sm:py-5">
                      <span className="flex gap-2.5">
                        <span aria-hidden className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]" />
                        <span><RichText text={cell} sourceIds={sourceIds} /></span>
                      </span>
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.note ? (
        <p className="mt-4 max-w-[68ch] rounded-2xl border border-[#F97316]/25 bg-[#FFF7ED] px-4 py-3 text-sm leading-relaxed text-slate-700">
          <RichText text={data.note} sourceIds={sourceIds} />
        </p>
      ) : null}
    </Section>
  );
}
