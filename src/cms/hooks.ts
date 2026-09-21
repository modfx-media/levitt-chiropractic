import { revalidatePath, revalidateTag } from "next/cache";
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from "payload";

function safeRevalidate(path: string | null | undefined) {
  if (!path || !path.startsWith("/")) return;
  try {
    revalidatePath(path);
    revalidateTag("cms");
  } catch (error) {
    console.error("[cms] revalidate failed", error);
  }
}

export const revalidatePublished: CollectionAfterChangeHook = ({
  doc,
  previousDoc,
}) => {
  const path = typeof doc?.path === "string" ? doc.path : undefined;
  const prev =
    typeof previousDoc?.path === "string" ? previousDoc.path : undefined;
  if (doc?._status === "published") safeRevalidate(path);
  if (previousDoc?._status === "published" && prev !== path) safeRevalidate(prev);
  return doc;
};

export const revalidateDeleted: CollectionAfterDeleteHook = ({ doc }) => {
  const path = typeof doc?.path === "string" ? doc.path : undefined;
  safeRevalidate(path);
  return doc;
};
