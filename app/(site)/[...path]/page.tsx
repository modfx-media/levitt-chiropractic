import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import { queryRoutedContentByPath } from "@/lib/cms/queries";

type Params = { path: string[] };

function pathnameFrom(segments: string[]) {
  return `/${segments.filter(Boolean).join("/")}`.replace(/\/+/g, "/") || "/";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { path } = await params;
  const pathname = pathnameFrom(path);
  const routed = await queryRoutedContentByPath(pathname);
  if (!routed) {
    return { robots: { index: false, follow: true } };
  }
  return withCMSMeta(pathname, {
    title: typeof routed.doc.title === "string" ? routed.doc.title : "Page",
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { path } = await params;
  const pathname = pathnameFrom(path);
  const routed = await queryRoutedContentByPath(pathname);
  if (!routed) notFound();

  return <CMSRoute path={pathname}>{null}</CMSRoute>;
}
