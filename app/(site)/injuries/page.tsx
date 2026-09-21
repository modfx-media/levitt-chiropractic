import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import InjuriesContent from "@/components/services/InjuriesContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const fallbackMeta: Metadata = generateMeta({
  title: "Injury Chiropractor in Saint Louis Park, MN",
  description:
    "Chiropractic injury care in Saint Louis Park, MN from Dr. Alan Levitt auto, work, sports, and personal injuries. Drug-free recovery. Call 952-920-7535.",
  slug: "injuries",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/injuries", fallbackMeta);
}

export default function InjuriesPage() {
  return (
    <CMSRoute path="/injuries">
    <>
      <ServiceSchema
        name="Injury Chiropractic Care"
        slug="injuries"
        description="Chiropractic treatment for personal injuries in Saint Louis Park, MN by Dr. Alan Levitt."
      />
      <InjuriesContent />
    </>
  
    </CMSRoute>
  );
}
