/** Whether a published CMS path is added to sitemap.xml. Matches main: posts are not limited to slugs hardcoded in the repo. */
export function acceptSitemapExtra(
  path: string,
  state: {
    existing: ReadonlySet<string>;
    skip: ReadonlySet<string>;
    exclusions: ReadonlySet<string>;
    retired: boolean;
  },
): boolean {
  if (!path.startsWith("/")) return false;
  if (state.existing.has(path)) return false;
  if (state.skip.has(path)) return false;
  if (state.exclusions.has(path)) return false;
  if (state.retired) return false;
  return true;
}
