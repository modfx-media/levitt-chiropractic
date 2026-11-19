import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CMSRoute } from "@/components/cms/CMSRoute";
import { withCMSMeta } from "@/lib/cms/generateMeta";
import { cmsOnlyDocIsRenderable } from "@/lib/cms/mergeDesigned";
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
  if (!cmsOnlyDocIsRenderable(routed)) {
    return { robots: { index: false, follow: true } };
  }
  return withCMSMeta(pathname, {
    title: typeof routed.doc.title === "string" ? routed.doc.title : "Page",
    description:
      typeof routed.doc.excerpt === "string" ? routed.doc.excerpt : undefined,
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { path } = await params;
  const pathname = pathnameFrom(path);
  const routed = await queryRoutedContentByPath(pathname);
  if (!cmsOnlyDocIsRenderable(routed)) notFound();

  return <CMSRoute path={pathname}>{null}</CMSRoute>;
}
