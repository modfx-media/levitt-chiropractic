import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import InjuriesContent from "@/components/services/InjuriesContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const fallbackMeta: Metadata = generateMeta({
  title: "Sports and Work Injuries",
  description:
    "Sports, work, and fall injuries in Saint Louis Park. Car crashes and whiplash are on the personal injury page.",
  slug: "injuries",
  absoluteTitle: true,
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
