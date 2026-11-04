import Link from "next/link";

import { siteConfig } from "@/lib/siteConfig";

const ADDRESS = "6200 Excelsior Blvd, Suite 201, Saint Louis Park, MN 55416";

type Topic =
  | "home"
  | "services"
  | "adjustments"
  | "back-pain"
  | "cold-laser";

const copy: Record<Topic, string> = {
  home: `Looking for a chiropractor in Saint Louis Park? The office is at ${ADDRESS}. Dr. Alan Levitt sees people with back pain, neck pain, and stiffness that has not settled on its own. A first visit is the story, an exam, and a plan you can follow.`,
  services: `Every service on this page is provided by the Saint Louis Park chiropractor at ${ADDRESS}. If you are not sure which one fits, call or request a visit and describe what hurts.`,
  adjustments: `Adjustments are part of care at this Saint Louis Park chiropractic office (${ADDRESS}). They are for people whose neck or back is not moving the way it should. You should know which technique will be used, and why, before it happens.`,
  "back-pain":
    "Back pain treatment here is for people in Saint Louis Park whose low back has not calmed down with rest. Expect an exam and a plan built around your week, not a generic script.",
  "cold-laser": `Cold laser therapy is available at the Saint Louis Park office, ${ADDRESS}, for people who want a drug-free option with their chiropractic care. The light sits over the sore area.`,
};

/**
 * Local context and booking links. Added as its own paragraph so it does not
 * rewrite existing page copy.
 */
export function LocalPracticeLinks({ topic }: { topic: Topic }) {
  return (
    <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
      {copy[topic]}{" "}
      <Link
        href={siteConfig.appointmentUrl}
        className="font-semibold text-primary underline-offset-4 hover:underline"
      >
        Request an appointment
      </Link>{" "}
      or call{" "}
      <a
        href={siteConfig.phoneHref}
        className="font-semibold text-primary underline-offset-4 hover:underline"
      >
        {siteConfig.phone}
      </a>
      .
    </p>
  );
}
