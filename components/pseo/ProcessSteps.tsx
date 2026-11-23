import type { PseoHub } from "@/lib/pseo/types";
import { RichText } from "./RichText";
import { Section } from "./Section";

export function ProcessSteps({ data, sourceIds }: { data?: PseoHub["process"]; sourceIds: string[] }) {
  if (!data?.steps.length) return null;
  return (
    <Section eyebrow="Step by step" title={data.title}>
      {data.intro ? <p className="max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg"><RichText text={data.intro} sourceIds={sourceIds} /></p> : null}
      <ol className="mt-6 space-y-4">
        {data.steps.map((s, i) => (
          <li key={s.title} className="grid grid-cols-[2.75rem_1fr] gap-4 rounded-2xl border border-slate-200 bg-white p-5">
            <span aria-hidden className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0F172A] font-heading text-lg font-bold text-white">{i + 1}</span>
            <div>
              <h3 className="font-heading text-lg font-bold text-[#0F172A]">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-700 sm:text-base"><RichText text={s.body} sourceIds={sourceIds} /></p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
