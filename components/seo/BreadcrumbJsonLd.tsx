"use client";

import { usePathname } from "next/navigation";

import { JsonLd } from "./JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonLd";

export type BreadcrumbCrumb = { label: string; href?: string };

export function BreadcrumbJsonLd({ crumbs }: { crumbs: BreadcrumbCrumb[] }) {
  const pathname = usePathname();
  const items = crumbs.map((c, i) => {
    const isLast = i === crumbs.length - 1;
    const label = (c.label || "").trim();
    const url = c.href ?? (isLast ? pathname : "/");
    const fallback =
      url === "/"
        ? "Home"
        : (url.split("/").filter(Boolean).pop() || "Page").replace(/-/g, " ");
    return {
      name: label || fallback.replace(/\b\w/g, (ch) => ch.toUpperCase()),
      url,
    };
  });

  return <JsonLd id="ld-breadcrumb" data={breadcrumbJsonLd({ items })} />;
}
