import type { Metadata } from "next";

import { mergeCmsMetadata } from "./mergeDesigned";
import { queryRoutedContentByPath } from "./queries";
import { withCMS } from "./safe";

export { mergeCmsMetadata } from "./mergeDesigned";

export function cmsDocToMetadata(
  doc: Record<string, unknown>,
  _path: string,
  fallback: Metadata,
): Metadata {
  return mergeCmsMetadata(fallback, doc);
}

export async function withCMSMeta(
  path: string,
  fallback: Metadata,
): Promise<Metadata> {
  return withCMS(async () => {
    const routed = await queryRoutedContentByPath(path);
    if (!routed) return fallback;
    return mergeCmsMetadata(fallback, routed.doc);
  }, fallback);
}
