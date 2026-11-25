import type { PseoRouteDiagram } from "@/lib/pseo/types";
import { Section } from "./Section";

function wrap(text: string, max: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > max) { if (cur) lines.push(cur); cur = w; } else cur = (cur + " " + w).trim();
  }
  if (cur) lines.push(cur);
  return lines;
}

/** Own-drawn route diagram (no third-party map tiles, no client JS). SVG geometry unchanged; only the frame is restyled. */
export function SvgDiagram({ data, tone = "white" }: { data?: PseoRouteDiagram; tone?: "white" | "slate" | "warm" }) {
  if (!data || data.stops.length < 2) return null;
  const rowH = 104;
  const top = 28;
  const h = top * 2 + rowH * (data.stops.length - 1) + 24;
  const x = 64;
  const titleId = `diagram-${data.title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
  return (
    <Section eyebrow="Getting here" title={data.title} tone={tone}>
      <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_30px_-12px_rgba(15,23,42,0.18)]">
        <div
          className="bg-[#FFF7ED]/60 px-4 py-6 sm:px-8 sm:py-10"
          style={{ backgroundImage: "radial-gradient(rgba(30,58,95,0.10) 1px, transparent 1px)", backgroundSize: "18px 18px" }}
        >
        <svg viewBox={`0 0 420 ${h}`} role="img" aria-labelledby={titleId} className="mx-auto block h-auto w-full max-w-xl">
          <title id={titleId}>{data.caption}</title>
          <line x1={x} y1={top} x2={x} y2={top + rowH * (data.stops.length - 1)} stroke="#1E3A5F" strokeWidth="6" strokeLinecap="round" />
          {data.legs.map((leg, i) => (
            <g key={`leg-${i}`}>
              <rect x={x + 18} y={top + rowH * i + rowH / 2 - 13} width={Math.min(320, leg.length * 7.4 + 20)} height="24" rx="12" fill="#FFF7ED" stroke="#F97316" />
              <text x={x + 28} y={top + rowH * i + rowH / 2 + 4} fontSize="12.5" fontWeight="600" fill="#9A3412">{leg}</text>
            </g>
          ))}
          {data.stops.map((s, i) => {
            const y = top + rowH * i;
            const last = i === data.stops.length - 1;
            return (
              <g key={s.label}>
                <circle cx={x} cy={y} r={last ? 14 : 10} fill={last ? "#F97316" : "#fff"} stroke={last ? "#9A3412" : "#1E3A5F"} strokeWidth="4" />
                {typeof s.mi === "number" ? <text x={x - 18} y={y + 4} fontSize="11" fill="#64748B" textAnchor="end">{s.mi === 0 ? "0 mi" : `~${s.mi} mi`}</text> : null}
                {wrap(s.label, 40).map((line, j) => (
                  <text key={j} x={x + 26} y={y + 5 + j * 16 - (s.note ? 6 : 0)} fontSize="14.5" fontWeight="700" fill="#0F172A">{line}</text>
                ))}
                {s.note ? <text x={x + 26} y={y + 5 + wrap(s.label, 40).length * 16 - 4} fontSize="12" fill="#475569">{s.note}</text> : null}
              </g>
            );
          })}
        </svg>
        </div>
        <figcaption className="border-t border-slate-200 px-5 py-4 text-sm leading-relaxed text-slate-600 sm:px-8">{data.caption}</figcaption>
      </figure>
    </Section>
  );
}
