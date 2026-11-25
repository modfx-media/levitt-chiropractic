import type { PseoHub } from "@/lib/pseo/types";
import { RichText } from "./RichText";
import { Section } from "./Section";

export function ComparisonTable({ data, sourceIds }: { data?: PseoHub["comparison"]; sourceIds: string[] }) {
  if (!data?.rows.length) return null;
  return (
    <Section eyebrow="Side by side" title={data.title} tone="slate">
      {data.intro ? <p className="max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg"><RichText text={data.intro} sourceIds={sourceIds} /></p> : null}
      <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm sm:text-base">
          <thead className="bg-[#0F172A] text-white">
            <tr>{data.columns.map((c) => <th key={c} scope="col" className="px-4 py-3 font-heading font-semibold">{c}</th>)}</tr>
          </thead>
          <tbody>
            {data.rows.map((r, i) => (
              <tr key={i} className="border-t border-slate-200 align-top odd:bg-white even:bg-slate-50">
                {r.map((cell, j) => j === 0
                  ? <th key={j} scope="row" className="px-4 py-3 font-semibold text-[#0F172A]"><RichText text={cell} sourceIds={sourceIds} /></th>
                  : <td key={j} className="px-4 py-3 text-slate-700"><RichText text={cell} sourceIds={sourceIds} /></td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.note ? <p className="mt-3 text-sm text-slate-500"><RichText text={data.note} sourceIds={sourceIds} /></p> : null}
    </Section>
  );
}
