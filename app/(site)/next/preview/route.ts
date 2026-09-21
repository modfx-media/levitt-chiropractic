import { draftMode, headers } from "next/headers";
import { redirect } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";

function isPublicPath(path: string | null): path is string {
  if (!path || !path.startsWith("/")) return false;
  if (path.includes("null") || path.includes("undefined")) return false;
  if (path.includes("//") || path.includes("?") || path.includes("#")) return false;
  const segments = path.split("/").slice(1);
  if (path !== "/" && segments.some((s) => s.length === 0)) return false;
  return true;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path");
  const previewSecret = searchParams.get("previewSecret");
  const secret = process.env.PREVIEW_SECRET;

  if (!secret || previewSecret !== secret) {
    return new Response("Unauthorized", { status: 403 });
  }
  if (!isPublicPath(path)) {
    return new Response("Invalid path", { status: 400 });
  }

  const payload = await getPayload({ config });
  const { user } = await payload.auth({ headers: await headers() });
  if (!user) {
    return new Response("Unauthorized", { status: 403 });
  }

  const draft = await draftMode();
  draft.enable();
  redirect(path);
}
