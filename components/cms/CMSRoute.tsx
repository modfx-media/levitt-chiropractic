import { draftMode } from "next/headers";
import type { ReactNode } from "react";

import { LivePreviewListener } from "@/components/cms/LivePreviewListener";
import { RenderRoutedContent } from "@/components/cms/RenderRoutedContent";
import { queryRoutedContentByPath } from "@/lib/cms/queries";

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

  if (!routed) return children;

  return (
    <>
      {draft.isEnabled ? <LivePreviewListener /> : null}
      <RenderRoutedContent doc={routed} />
    </>
  );
}
