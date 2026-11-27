import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { loadPageContent } from "@/lib/designed/loadPage";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import MeetTheDoctorContent from "@/components/about/MeetTheDoctorContent";

const fallbackMeta: Metadata = generateMeta({
  title: "Meet Dr. Alan G. Levitt, DC",
  description:
    "Meet Dr. Alan G. Levitt, DC born and raised in Saint Louis Park, MN with 39 years of nervous-system-first chiropractic experience since 1987.",
  slug: "meet-the-doctor",
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMeta("/meet-the-doctor", fallbackMeta);
}

export default async function Page() {
  const content = await loadPageContent("/meet-the-doctor");
  return (
    <CMSRoute path="/meet-the-doctor">
      <MeetTheDoctorContent content={content}  />
    </CMSRoute>
  );
}
