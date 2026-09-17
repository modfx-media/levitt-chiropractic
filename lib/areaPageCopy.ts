import type { ServedCity } from "./areasData";
import type { PseoService } from "./pseoServices";
import { siteConfig } from "./siteConfig";
import { localFact } from "./cityLocalFacts";
import { serviceExtra } from "./serviceCopyExtras";

export function neighborsPhrase(city: Pick<ServedCity, "neighbors">): string {
  const n = city.neighbors;
  if (n.length === 0) return "nearby neighborhoods";
  if (n.length === 1) return n[0];
  if (n.length === 2) return `${n[0]} and ${n[1]}`;
  return `${n.slice(0, -1).join(", ")} and ${n[n.length - 1]}`;
}

export function zipPhrase(city: Pick<ServedCity, "zips">): string {
  if (city.zips.length === 1) return city.zips[0];
  if (city.zips.length === 2) return `${city.zips[0]} and ${city.zips[1]}`;
  return `${city.zips.slice(0, -1).join(", ")}, and ${city.zips[city.zips.length - 1]}`;
}

/** Typical Twin Cities drive, not posted speed. */
export function driveMinutes(city: Pick<ServedCity, "distanceMi">): number {
  if (city.distanceMi === 0) return 0;
  return Math.max(10, Math.round(city.distanceMi * 2.2));
}

export function driveLabel(city: Pick<ServedCity, "distanceMi" | "name">): string {
  if (city.distanceMi === 0) return `In ${city.name}`;
  const min = driveMinutes(city);
  return `About ${city.distanceMi} miles · ${min} min`;
}

export function cityIntro(city: ServedCity): {
  lead: string;
  support: string;
  local: string;
  typical: string;
} {
  const fact = localFact(city);

  if (city.distanceMi === 0) {
    return {
      lead: `Levitt Chiropractic Center is in ${city.name}, at ${siteConfig.address.street}, near ${city.landmark}. ZIP codes we see most days: ${zipPhrase(city)}.`,
      support: `Dr. Alan Levitt has practiced here since 1999 (and as a chiropractor since 1987). Care is drug-free on purpose: spinal adjustments, cold laser, targeted ice, therapeutic exercise, and custom orthotics when the exam says they would change the load — not because they are on a menu.`,
      local: fact.note,
      typical: fact.typical,
    };
  }

  return {
    lead: `There is no second office in ${city.name}. If you live near ${city.landmark} or in ZIP ${zipPhrase(city)}, you are seen in Saint Louis Park — about ${city.distanceMi} miles, typically ${driveMinutes(city)} minutes when ${fact.corridor} is moving.`,
    support: `That drive is why the first visit is unhurried. Dr. Levitt has treated ${city.region.toLowerCase()} families for decades, including people who also come from ${neighborsPhrase(city)}. You leave with a plan you can keep from ${city.name}, not a schedule that pretends you live on Excelsior Boulevard.`,
    local: fact.note,
    typical: fact.typical,
  };
}

export function cityWhyPoints(city: ServedCity): Array<{ title: string; body: string }> {
  const fact = localFact(city);
  const drive =
    city.distanceMi === 0
      ? `You are already in the neighborhood. Suite 201 has parking; Methodist Hospital is less than a mile east if you are coming from that campus.`
      : `Most ${city.name} patients treat this as a dedicated appointment. We work around your calendar so the ${driveMinutes(city)}-minute drive via ${fact.corridor} is worth it.`;

  return [
    {
      title: "How people actually get here",
      body: drive,
    },
    {
      title: `What we see from ${city.name}`,
      body: fact.typical,
    },
    {
      title: "Root-cause, not a script",
      body: `Dr. Levitt uses the exam — and imaging only when it would change the plan — then chooses among adjustments, laser, cryotherapy, exercise, and orthotics. Nearby medical context for ${city.name}: ${fact.hospital}.`,
    },
  ];
}

export function firstVisitSteps(city: ServedCity): Array<{ title: string; body: string }> {
  const fact = localFact(city);
  return [
    {
      title: "Tell the real story",
      body: `When it started, what makes it worse, what you already tried. ${city.name} patients often leave out the commute or the weekend miles — those belong in the history.`,
    },
    {
      title: "Exam before any technique",
      body: `Posture, motion, and the nervous system. Red flags (night pain, unexplained weight loss, bowel or bladder change, recent major trauma) mean we refer, not adjust first.`,
    },
    {
      title: "A plan you can keep",
      body:
        city.distanceMi === 0
          ? `Because you live here, follow-ups can be tighter if the exam needs them. You still get homework so you are not living on the table.`
          : `Because you are coming from ${city.name}, we do not write a fantasy of three visits a week. Home work has to survive ${fact.corridor}.`,
    },
    {
      title: "Practical next step",
      body: `You leave knowing whether the next visit is treatment, a hold, or a medical referral. Call ${siteConfig.phone} if the drive timing is the thing you need to settle first.`,
    },
  ];
}

export function insuranceNote(city: ServedCity): string {
  const crash =
    city.distanceMi === 0
      ? `After a crash on Highway 100, Excelsior, or Highway 7, Minnesota no-fault (PIP) can cover chiropractic as a medical expense — you do not have to “win” a lawsuit first.`
      : `If the problem started with a Twin Cities crash, Minnesota no-fault (PIP) can cover chiropractic medical expense through your own auto policy. That is a Minnesota rule, not a clinic slogan.`;
  return `${crash} Health insurance is a separate conversation; we will tell you what we can verify. No referral is required to book a first visit.`;
}

export function cityFaqs(city: ServedCity): Array<{ q: string; a: string }> {
  const fact = localFact(city);
  const officeQ =
    city.distanceMi === 0
      ? {
          q: `Where is the chiropractor's office in ${city.name}?`,
          a: `Levitt Chiropractic Center is at ${siteConfig.address.full}, near ${city.landmark}, along ${fact.corridor}. ${fact.hospital} is the medical campus most neighbors already know. Call ${siteConfig.phone} or request a visit online.`,
        }
      : {
          q: `Do you have a chiropractic office in ${city.name}?`,
          a: `No. There is one clinic, in Saint Louis Park at ${siteConfig.address.street}. From ${city.name} that is about ${city.distanceMi} miles (typically ${driveMinutes(city)} minutes) via ${fact.corridor}. We regularly see patients from ${city.name} and ${neighborsPhrase(city)}.`,
        };

  return [
    officeQ,
    {
      q: `Are you accepting new patients from ${city.name}?`,
      a: `Yes. New patients from ${city.name} can request a visit online or call ${siteConfig.phone}. Most people are seen within the same week. Minnesota does not require a physician referral to see a chiropractor.`,
    },
    {
      q: `What should I expect on a first visit from ${city.name}?`,
      a: `Dr. Levitt listens first, then evaluates history, posture, and the nervous system. You leave with a next step. Imaging is ordered only when it would change care. ${fact.typical}`,
    },
    {
      q: `How do I park and find Suite 201?`,
      a: `The office is Suite 201 at 6200 Excelsior Blvd. If you are coming from ${city.name}, give yourself extra minutes the first time so you are not rushed into the exam. Nearby context: ${fact.hospital}.`,
    },
    {
      q: `Does insurance cover chiropractic after a car accident in Minnesota?`,
      a: insuranceNote(city),
    },
    {
      q: `What is a red flag that means I should not just “get adjusted”?`,
      a: `Unexplained weight loss, pain that is worse at rest or at night, fever, bowel or bladder changes, progressive weakness, or a significant recent trauma. Those need medical screening. A sore neck after a week at a desk is a different story — that is most of what we treat from ${city.name}.`,
    },
  ];
}

export function cityServiceIntro(
  city: ServedCity,
  service: PseoService,
): { lead: string; support: string; local: string } {
  const fact = localFact(city);
  const extra = serviceExtra(service);
  const conditions = formatList(service.conditions);

  if (city.distanceMi === 0) {
    return {
      lead: `${service.name} is available in our ${city.name} office near ${city.landmark}, along ${fact.corridor}.`,
      support: extra.whoItsFor,
      local: `${fact.note} People in ZIP ${zipPhrase(city)} typically book this for ${conditions}.`,
    };
  }

  return {
    lead: `${city.name} residents receive ${service.inlineNoun} in Saint Louis Park — about ${city.distanceMi} miles (${driveMinutes(city)} minutes) from ${city.landmark} via ${fact.corridor}.`,
    support: extra.whoItsFor,
      local: `This is not a second ${city.name} office. ${fact.note} Common reasons ${city.name} patients book ${service.inlineNoun}: ${conditions}.`,
  };
}

export function cityServiceFaqs(
  city: ServedCity,
  service: PseoService,
): Array<{ q: string; a: string }> {
  const extra = serviceExtra(service);
  const fact = localFact(city);

  const travel = {
    q: `Can I get ${service.name.toLowerCase()} if I live in ${city.name}?`,
    a:
      city.distanceMi === 0
        ? `Yes — you will be seen here in ${city.name} at ${siteConfig.address.street}.`
        : `Yes. There is no ${city.name} branch. Appointments are at the Saint Louis Park office, typically a ${driveMinutes(city)}-minute drive via ${fact.corridor}. Call ${siteConfig.phone} if you want to confirm timing before you come.`,
  };

  const fit = {
    q: `Who is ${service.name.toLowerCase()} actually for?`,
    a: extra.whoItsFor,
  };

  const skip = {
    q: `When is this the wrong first step?`,
    a: extra.notFor,
  };

  return [...service.faqs, fit, skip, travel];
}

export function visitFacts(city: ServedCity): Array<{ label: string; value: string }> {
  return [
    { label: "Office", value: siteConfig.address.full },
    { label: "From here", value: driveLabel(city) },
    { label: "County", value: `${city.county} County` },
    { label: "Phone", value: siteConfig.phone },
  ];
}

export function cityMetaDescription(city: ServedCity): string {
  const fact = localFact(city);
  if (city.distanceMi === 0) {
    return `Chiropractor in Saint Louis Park at 6200 Excelsior Blvd. Adjustments, laser, and orthotics near Methodist Hospital and the West End. Call ${siteConfig.phone}.`;
  }
  return `${city.name} chiropractic care in Saint Louis Park — about ${driveMinutes(city)} min via ${fact.corridor}. ${serviceClip(fact.typical)} Call ${siteConfig.phone}.`;
}

export function cityServiceMetaDescription(city: ServedCity, service: PseoService): string {
  const mins = city.distanceMi === 0 ? "in Saint Louis Park" : `~${driveMinutes(city)} min from ${city.name}`;
  return `${service.name} ${mins}. ${service.tagline} Call ${siteConfig.phone}.`;
}

function serviceClip(text: string): string {
  const sentence = text.split(/(?<=\.)\s/)[0] ?? text;
  return sentence.length > 140 ? `${sentence.slice(0, 137)}…` : sentence;
}

function formatList(items: string[]): string {
  if (items.length === 0) return "pain and mobility issues";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}
