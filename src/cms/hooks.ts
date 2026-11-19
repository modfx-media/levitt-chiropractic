import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from "payload";

async function safeRevalidate(path: string | null | undefined) {
  if (!path || !path.startsWith("/")) return;
  try {
    const { revalidatePath, revalidateTag } = await import("next/cache");
    revalidatePath(path);
    if (path === "/blog" || path.startsWith("/blog/")) revalidatePath("/blog");
    revalidatePath("/sitemap.xml");
    revalidateTag("cms", { expire: 0 });
  } catch (error) {
    console.error("[cms] revalidate failed", error);
  }
}

/** Header, footer, site settings, and catalog edits change the shell on every designed page. */
export async function revalidateDesignedShell(): Promise<void> {
  try {
    const { revalidatePath, revalidateTag } = await import("next/cache");
    revalidatePath("/", "layout");
    revalidatePath("/sitemap.xml");
    revalidatePath("/blog");
    revalidateTag("cms", { expire: 0 });
  } catch (error) {
    console.error("[cms] revalidate failed", error);
  }
}

async function revalidateCatalogDoc(doc: { path?: unknown } | null | undefined) {
  await revalidateDesignedShell();
  await safeRevalidate(typeof doc?.path === "string" ? doc.path : undefined);
  return doc;
}

export const revalidateCatalog: CollectionAfterChangeHook = async ({ doc }) => revalidateCatalogDoc(doc);

export const revalidateCatalogDeleted: CollectionAfterDeleteHook = async ({ doc }) => {
  await revalidateCatalogDoc(doc);
};

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
  await revalidateDesignedShell();
  return doc;
};
