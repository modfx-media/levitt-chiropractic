import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = "force-static";

export async function GET() {
  const body = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${siteConfig.url}/sitemap.xml
`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
