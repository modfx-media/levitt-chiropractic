import Image from "next/image";
import type { PseoHub } from "@/lib/pseo/types";

/** Client-owned photos from /public/images only. */
export function FigureWithCaption({ data }: { data?: PseoHub["figure"] }) {
  if (!data || !data.src.startsWith("/images/")) return null;
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <Image src={data.src} alt={data.alt} width={data.width} height={data.height} sizes="(min-width: 1024px) 20rem, 100vw" className="h-auto w-full object-cover" />
      <figcaption className="px-4 py-3 text-sm leading-relaxed text-slate-600">{data.caption}</figcaption>
    </figure>
  );
}
