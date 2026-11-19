import { queryRoutedContentByPath } from "@/lib/cms/queries";
import { withCMS } from "@/lib/cms/safe";

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

/** Designed section content for a public path. Null when CMS is empty or unavailable. */
export async function loadPageContent(
  path: string,
): Promise<Record<string, unknown> | null> {
  return withCMS(async () => {
    const routed = await queryRoutedContentByPath(path);
    if (!routed || routed.collection !== "pages") return null;
    const designed = routed.doc.designed;
    if (isRecord(designed) && Object.keys(designed).length > 0) return designed;
    const sections = routed.doc.sections;
    if (!Array.isArray(sections) || sections.length === 0) return null;
    const out: Record<string, unknown> = {};
    for (const block of sections) {
      if (!isRecord(block)) continue;
      const blockType = block.blockType;
      if (typeof blockType !== "string" || !blockType) continue;
      const { blockType: _type, id: _id, blockName: _name, ...fields } = block;
      out[blockType] = fields;
    }
    return Object.keys(out).length > 0 ? out : null;
  }, null);
}
