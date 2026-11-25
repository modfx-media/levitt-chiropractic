import Image from "next/image";
import type { PseoHub } from "@/lib/pseo/types";

/** Client-owned photos from /public/images only. Fixed aspect box = no layout shift. */
export function FigureWithCaption({ data }: { data?: PseoHub["figure"] }) {
  if (!data || !data.src.startsWith("/images/")) return null;
  return (
    <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_30px_-12px_rgba(15,23,42,0.18)]">
      <div className="relative bg-slate-100" style={{ aspectRatio: `${data.width} / ${data.height}` }}>
        <Image src={data.src} alt={data.alt} fill sizes="(min-width: 1024px) 21rem, 100vw" className="object-cover" />
      </div>
      <figcaption className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600">{data.caption}</figcaption>
    </figure>
  );
}
