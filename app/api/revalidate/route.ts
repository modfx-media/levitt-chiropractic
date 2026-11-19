import { NextResponse } from "next/server";

import { revalidateDesignedShell } from "@/src/cms/hooks";
import { authorizeRevalidate } from "@/lib/cms/revalidateAuth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function pathsFrom(body: unknown): string[] {
  if (!body || typeof body !== "object") return [];
  const paths = (body as { paths?: unknown }).paths;
  if (!Array.isArray(paths)) return [];
  return paths.filter((path): path is string => typeof path === "string" && path.startsWith("/"));
}

export async function POST(request: Request) {
  if (!authorizeRevalidate(request.headers.get("authorization"))) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  let body: unknown = {};
  try {
    body = await request.json();
  } catch {
    body = {};
  }
  const paths = pathsFrom(body);
  const { revalidatePath, revalidateTag } = await import("next/cache");
  await revalidateDesignedShell();
  for (const path of paths) revalidatePath(path);
  revalidateTag("cms", { expire: 0 });
  return NextResponse.json({ ok: true, paths: paths.length });
}
