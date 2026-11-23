import type { PseoHub } from "@/lib/pseo/types";
import { LocationStrip } from "@/components/services/LocationStrip";
import { PseoHero } from "./PseoHero";
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

/** Server-rendered layout for rewritten PSEO city hubs only. */
export function PseoHubPage({ hub, title, crumbs }: { hub: PseoHub; title: string; crumbs: { label: string; href?: string }[] }) {
  const ids = (hub.sources ?? []).map((s) => s.id);
  const [first, ...rest] = hub.sections ?? [];
  const sideCol = hub.atAGlance || hub.figure ? (
    <div className="space-y-5">
      <AtAGlance data={hub.atAGlance} sourceIds={ids} />
      <FigureWithCaption data={hub.figure} />
    </div>
  ) : undefined;
  return (
    <>
      <PseoHero title={title} subtitle={hub.heroSubtitle} crumbs={crumbs} />
      <div data-pseo-body="">
        <KeyFacts facts={hub.keyFacts} sourceIds={ids} />
        <ProseBlock block={hub.intro} sourceIds={ids} aside={sideCol} />
        <LocalFactCard data={hub.localFacts} sourceIds={ids} />
        <SvgDiagram data={hub.diagram} />
        <ProseBlock block={first} sourceIds={ids} tone="slate" />
        <ProcessSteps data={hub.process} sourceIds={ids} />
        <ComparisonTable data={hub.comparison} sourceIds={ids} />
        {rest.map((s, i) => <ProseBlock key={s.title} block={s} sourceIds={ids} tone={i % 2 ? "slate" : "white"} />)}
        <WhoItsFor data={hub.whoFor} sourceIds={ids} />
        <CostBreakdown data={hub.cost} sourceIds={ids} />
        <ProviderCallout data={hub.provider} sourceIds={ids} />
        <FAQAccordion data={hub.faqs} sourceIds={ids} />
        <RelatedLinks data={hub.related} />
        <Sources sources={hub.sources} />
      </div>
      <CTA data={hub.cta} />
      <LocationStrip />
    </>
  );
}
