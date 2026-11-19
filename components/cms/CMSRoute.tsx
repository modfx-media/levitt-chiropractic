import { draftMode } from "next/headers";
import type { ReactNode } from "react";

import { LivePreviewListener } from "@/components/cms/LivePreviewListener";
import { RenderRoutedContent } from "@/components/cms/RenderRoutedContent";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  childrenAreDesigned,
  cmsOverlayJsonLd,
  pickRoutedNode,
  selectRoutedBody,
} from "@/lib/cms/mergeDesigned";
import { queryRoutedContentByPath } from "@/lib/cms/queries";
import { normalizePath } from "@/lib/cms/url";

function cmsSchemaId(path: string): string {
  const normalized = normalizePath(path);
  const slug =
    normalized === "/"
      ? "home"
      : normalized.replace(/^\//, "").replace(/[^a-zA-Z0-9]+/g, "-");
  return `ld-cms-seo-${slug}`;
}

export async function CMSRoute({
  path,
  children,
}: {
  path: string;
  children: ReactNode;
}) {
  const [routed, draft] = await Promise.all([
    queryRoutedContentByPath(path),
    draftMode().catch(() => ({ isEnabled: false })),
  ]);

  // Designed routes always render `children`. A published or previewed CMS
  // doc contributes SEO and schema only. The generic block renderer is for
  // CMS-only paths whose layout actually has content.
  const body = selectRoutedBody({
    hasDesignedPage: childrenAreDesigned(children),
    doc: routed,
  });
  const schema = cmsOverlayJsonLd(path, routed?.doc);
  const generic =
    routed && (body === "generic" || body === "post") ? (
      <RenderRoutedContent doc={routed} />
    ) : null;

  return (
    <>
      {draft.isEnabled ? <LivePreviewListener /> : null}
      {pickRoutedNode(body, children, generic)}
      {schema ? <JsonLd id={cmsSchemaId(path)} data={schema} /> : null}
    </>
  );
}
