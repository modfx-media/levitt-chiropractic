import { ServiceHero } from "@/components/services/ServiceHero";

/** Keeps the existing designed hero (same H1 and breadcrumbs) and swaps in the hub's own subtitle. */
export function PseoHero({ title, subtitle, crumbs }: { title: string; subtitle?: string; crumbs: { label: string; href?: string }[] }) {
  return <ServiceHero title={title} subtitle={subtitle} crumbs={crumbs} />;
}
