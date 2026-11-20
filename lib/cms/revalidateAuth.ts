import { timingSafeEqual } from "node:crypto";

/** Secret accepted by POST /api/revalidate. Prefer a dedicated value, then the preview or Payload secret. */
export function revalidateSecret(): string {
  return (
    process.env.REVALIDATE_SECRET ||
    process.env.PREVIEW_SECRET ||
    process.env.PAYLOAD_SECRET ||
    ""
  );
}

export function authorizeRevalidate(authorization: string | null, secret = revalidateSecret()): boolean {
  if (!secret || !authorization) return false;
  const presented = authorization.startsWith("Bearer ")
    ? authorization.slice("Bearer ".length)
    : authorization;
  const left = Buffer.from(presented);
  const right = Buffer.from(secret);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}
