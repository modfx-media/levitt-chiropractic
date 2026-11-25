import type { PseoProse } from "@/lib/pseo/types";
import { RichText } from "./RichText";
import { Section } from "./Section";

/** Reading column capped at ~68ch; optional aside becomes a sticky side card on desktop. */
export function ProseBlock({ block, sourceIds, tone, aside }: { block?: PseoProse; sourceIds: string[]; tone?: "white" | "slate"; aside?: React.ReactNode }) {
  if (!block?.paragraphs.length) return null;
  const body = (
    <div className="max-w-[68ch] space-y-5 text-[1.0625rem] leading-[1.75] text-slate-700 sm:text-lg">
      {block.paragraphs.map((p, i) => (
        <p key={i} className={i === 0 ? "text-slate-800" : undefined}>
          <RichText text={p} sourceIds={sourceIds} />
        </p>
      ))}
    </div>
  );
  return (
    <Section eyebrow={block.eyebrow} title={block.title} tone={tone}>
      {aside ? (
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-14">
          {body}
          <div className="lg:sticky lg:top-28 lg:self-start">{aside}</div>
        </div>
      ) : (
        body
      )}
    </Section>
  );
}
