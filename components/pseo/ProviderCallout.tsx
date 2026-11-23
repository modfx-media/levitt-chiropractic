import Image from "next/image";
import type { PseoHub } from "@/lib/pseo/types";
import { siteConfig } from "@/lib/siteConfig";
import { RichText } from "./RichText";

export function ProviderCallout({ data, sourceIds }: { data?: PseoHub["provider"]; sourceIds: string[] }) {
  if (!data) return null;
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto grid max-w-5xl items-center gap-6 px-5 sm:grid-cols-[9rem_1fr] sm:px-6">
        <Image src={siteConfig.physician.image} alt={siteConfig.physician.name} width={144} height={144} className="h-28 w-28 rounded-full border-4 border-[#F97316]/30 object-cover sm:h-36 sm:w-36" />
        <div className="rounded-2xl border-l-4 border-[#F97316] bg-slate-50 p-5 sm:p-6">
          <h2 className="font-heading text-xl font-bold text-[#0F172A] sm:text-2xl">{data.title}</h2>
          <p className="mt-2 text-base leading-relaxed text-slate-700"><RichText text={data.body} sourceIds={sourceIds} /></p>
        </div>
      </div>
    </section>
  );
}
