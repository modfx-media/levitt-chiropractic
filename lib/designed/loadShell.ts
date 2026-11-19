import { getCMS } from "@/lib/cms/payload";
import { withCMS } from "@/lib/cms/safe";
import { defaultShell, shellFromGlobals, type SiteShell } from "@/lib/designed/shell";

export async function loadSiteShell(): Promise<SiteShell> {
  return withCMS(async () => {
    const payload = await getCMS();
    const [header, footer, settings] = await Promise.all([
      payload.findGlobal({ slug: "header", depth: 0 }),
      payload.findGlobal({ slug: "footer", depth: 0 }),
      payload.findGlobal({ slug: "site-settings", depth: 0 }),
    ]);
    return shellFromGlobals({ header, footer, settings });
  }, defaultShell);
}
