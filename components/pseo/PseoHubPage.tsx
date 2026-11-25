import { Fragment, type ReactNode } from "react";
import type { PseoHub } from "@/lib/pseo/types";
import { loadSiteShell } from "@/lib/designed/loadShell";
import { PseoHero } from "./PseoHero";
import { TrustStrip } from "./TrustStrip";
import { KeyFacts } from "./KeyFacts";
import { AtAGlance } from "./AtAGlance";
import { ProseBlock } from "./ProseBlock";
import { LocalFactCard } from "./LocalFactCard";
import { SvgDiagram } from "./SvgDiagram";
import { FigureWithCaption } from "./FigureWithCaption";
import { ProcessSteps } from "./ProcessSteps";
import { ComparisonTable } from "./ComparisonTable";
import { WhoItsFor } from "./WhoItsFor";
import { CostBreakdown } from "./CostBreakdown";
import { ProviderCallout } from "./ProviderCallout";
import { FAQAccordion } from "./FAQAccordion";
import { RelatedLinks } from "./RelatedLinks";
import { Sources } from "./Sources";
import { CTA } from "./CTA";
import { CtaInline } from "./CtaInline";
import { VisitBlock } from "./VisitBlock";
import { StickyCallBar } from "./StickyCallBar";
import "./pseo.css";

type Tone = "white" | "slate";
type Block = { key: string; render: (tone: Tone) => ReactNode; ctaAfter?: boolean };

/**
 * Server-rendered layout for rewritten PSEO city hubs only.
 * Same props as before. Measured text (hero subtitle + [data-pseo-body]) is
 * unchanged; new shared chrome (hero buttons, trust strip, visit block, sticky
 * bar) lives outside [data-pseo-body], and the two inline CTA bands are tagged
 * data-pseo-chrome.
 */
export async function PseoHubPage({ hub, title, crumbs }: { hub: PseoHub; title: string; crumbs: { label: string; href?: string }[] }) {
  const shell = await loadSiteShell();
  const ids = (hub.sources ?? []).map((s) => s.id);
  const [first, ...rest] = hub.sections ?? [];
  const sideCol = hub.atAGlance || hub.figure ? (
    <div className="space-y-5">
      <AtAGlance data={hub.atAGlance} sourceIds={ids} />
      <FigureWithCaption data={hub.figure} />
    </div>
  ) : undefined;

  // Only blocks that have data are listed, so tones alternate cleanly
  // whatever subset a hub uses. Order is the same as the previous kit.
  const candidates: (Block | null)[] = [
    hub.intro?.paragraphs.length ? { key: "intro", render: (t) => <ProseBlock block={hub.intro} sourceIds={ids} aside={sideCol} tone={t} /> } : null,
    hub.localFacts?.cards.length ? { key: "local", render: (t) => <LocalFactCard data={hub.localFacts} sourceIds={ids} tone={t} /> } : null,
    hub.diagram && hub.diagram.stops.length >= 2 ? { key: "diagram", render: (t) => <SvgDiagram data={hub.diagram} tone={t} /> } : null,
    first?.paragraphs.length ? { key: "first", render: (t) => <ProseBlock block={first} sourceIds={ids} tone={t} /> } : null,
    hub.process?.steps.length ? { key: "process", render: (t) => <ProcessSteps data={hub.process} sourceIds={ids} tone={t} />, ctaAfter: true } : null,
    hub.comparison?.rows.length ? { key: "comparison", render: (t) => <ComparisonTable data={hub.comparison} sourceIds={ids} tone={t} /> } : null,
    ...rest.map((s) => (s.paragraphs.length ? { key: `s-${s.title}`, render: (t: Tone) => <ProseBlock block={s} sourceIds={ids} tone={t} /> } : null)),
    hub.whoFor && (hub.whoFor.fits.length || hub.whoFor.notFits.length) ? { key: "who", render: (t) => <WhoItsFor data={hub.whoFor} sourceIds={ids} tone={t} />, ctaAfter: true } : null,
    hub.cost?.items.length ? { key: "cost", render: (t) => <CostBreakdown data={hub.cost} sourceIds={ids} tone={t} /> } : null,
    hub.provider ? { key: "provider", render: (t) => <ProviderCallout data={hub.provider} sourceIds={ids} tone={t} /> } : null,
    hub.faqs?.items.length ? { key: "faqs", render: (t) => <FAQAccordion data={hub.faqs} sourceIds={ids} tone={t} /> } : null,
    hub.related?.links.length ? { key: "related", render: (t) => <RelatedLinks data={hub.related} tone={t} /> } : null,
  ];
  const blocks = candidates.filter((b): b is Block => b !== null);

  // If process is missing, the first CTA band falls back to after the 3rd block.
  if (!blocks.some((b) => b.key === "process") && blocks[2]) blocks[2].ctaAfter = true;

  let tone: Tone = "white";
  return (
    <div className="pseo">
      <PseoHero title={title} subtitle={hub.heroSubtitle} crumbs={crumbs} shell={shell} />
      {/* Everything after the hero shares one wrapper so the CSS-only sticky bar
          (its last child) cannot rise above the hero: it shows up once the hero
          scrolls away and settles above the footer at the end. */}
      <div>
      <TrustStrip shell={shell} />
      <div data-pseo-body="">
        <KeyFacts facts={hub.keyFacts} sourceIds={ids} />
        {blocks.map((b) => {
          const t = tone;
          tone = tone === "white" ? "slate" : "white";
          return (
            <Fragment key={b.key}>
              {b.render(t)}
              {b.ctaAfter ? <CtaInline shell={shell} /> : null}
            </Fragment>
          );
        })}
        <Sources sources={hub.sources} />
      </div>
      <VisitBlock shell={shell} />
      <CTA data={hub.cta} />
      <StickyCallBar shell={shell} />
      </div>
    </div>
  );
}
