/** Data model for rewritten PSEO city hubs. Every block in components/pseo
 *  renders only when its field is present, so a hub never shows an empty or
 *  boilerplate section. Inline syntax inside strings:
 *    {anchor text|/internal-path}  -> internal link
 *    [^source-id]                  -> superscript citation to `sources`
 */

export type PseoSource = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  /** ISO date the page was fetched for this rewrite. */
  accessed: string;
};

export type PseoFact = { label: string; value: string; sourceId?: string };
export type PseoProse = { eyebrow?: string; title: string; paragraphs: string[] };
export type PseoStep = { title: string; body: string };
export type PseoFaq = { q: string; a: string };
export type PseoLink = { href: string; label: string; note?: string };

export type PseoRouteDiagram = {
  title: string;
  caption: string;
  /** Ordered stops from the city to the clinic. `mi` is cumulative and approximate. */
  stops: { label: string; mi?: number; note?: string }[];
  /** Road names drawn between consecutive stops (length = stops.length - 1). */
  legs: string[];
};

export type PseoHub = {
  slug: string;
  heroSubtitle?: string;
  keyFacts?: PseoFact[];
  atAGlance?: { title: string; items: PseoFact[] };
  intro?: PseoProse;
  localFacts?: { title: string; intro?: string; cards: { title: string; body: string; sourceId: string }[] };
  diagram?: PseoRouteDiagram;
  sections?: PseoProse[];
  figure?: { src: string; alt: string; caption: string; width: number; height: number };
  process?: { title: string; intro?: string; steps: PseoStep[] };
  comparison?: { title: string; intro?: string; columns: string[]; rows: string[][]; note?: string };
  whoFor?: { title: string; fits: string[]; notFits: string[]; notFitsTitle: string; fitsTitle: string };
  cost?: { title: string; items: PseoFact[]; note?: string };
  provider?: { title: string; body: string };
  faqs?: { title: string; items: PseoFaq[] };
  related?: { title: string; links: PseoLink[] };
  sources?: PseoSource[];
  cta?: { title: string; body: string };
};
