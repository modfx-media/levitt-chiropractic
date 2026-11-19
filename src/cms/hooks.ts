import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from "payload";

async function safeRevalidate(path: string | null | undefined) {
  if (!path || !path.startsWith("/")) return;
  try {
    const { revalidatePath, revalidateTag } = await import("next/cache");
    revalidatePath(path);
    if (path === "/blog" || path.startsWith("/blog/")) revalidatePath("/blog");
    revalidateTag("cms", { expire: 0 });
  } catch (error) {
    console.error("[cms] revalidate failed", error);
  }
}

type StatusDoc = {
  path?: unknown;
  _status?: unknown;
};

/** Paths whose cached HTML must be dropped after a publish, unpublish, move, or delete. */
export function pathsToRevalidate(doc?: StatusDoc | null, previousDoc?: StatusDoc | null): string[] {
  const path = typeof doc?.path === "string" ? doc.path : undefined;
  const prev = typeof previousDoc?.path === "string" ? previousDoc.path : undefined;
  const paths: string[] = [];
  if (doc?._status === "published" && path) paths.push(path);
  if (
    previousDoc?._status === "published" &&
    prev &&
    (prev !== path || doc?._status !== "published")
  ) {
    paths.push(prev);
  }
  return paths;
}

export const revalidatePublished: CollectionAfterChangeHook = async ({
  doc,
  previousDoc,
}) => {
  for (const path of pathsToRevalidate(doc, previousDoc)) await safeRevalidate(path);
  return doc;
};

export const revalidateDeleted: CollectionAfterDeleteHook = async ({ doc }) => {
  const path = typeof doc?.path === "string" ? doc.path : undefined;
  if (doc?._status === "published" || path) await safeRevalidate(path);
  return doc;
};
