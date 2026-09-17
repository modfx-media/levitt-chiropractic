import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import AreasWeServeContent from "@/components/areas/AreasWeServeContent";

export const metadata: Metadata = generateMeta({
  title: "Areas We Serve | Twin Cities Chiropractor",
  description:
    "Chiropractic care from our Saint Louis Park clinic for 82 Twin Cities communities. Find your city, the real drive, and how to book with Dr. Alan Levitt.",
  slug: "areas-we-serve",
});

export default function Page() {
  return <AreasWeServeContent />;
}
