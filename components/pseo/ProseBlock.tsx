import type { PseoProse } from "@/lib/pseo/types";
import { RichText } from "./RichText";
import { Section } from "./Section";

export function ProseBlock({ block, sourceIds, tone, aside }: { block?: PseoProse; sourceIds: string[]; tone?: "white" | "slate"; aside?: React.ReactNode }) {
  if (!block?.paragraphs.length) return null;
  const body = (
    <div className="space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
      {block.paragraphs.map((p, i) => (
        <p key={i}>
          <RichText text={p} sourceIds={sourceIds} />
        </p>
      ))}
    </div>
  );
  return (
    <Section eyebrow={block.eyebrow} title={block.title} tone={tone}>
      {aside ? <div className="grid gap-8 lg:grid-cols-[1fr_20rem]">{body}<div>{aside}</div></div> : body}
    </Section>
  );
}
