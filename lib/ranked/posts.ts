import { DEFAULT_COVER, LEVITT_RANKED_PROJECT_ID } from './config'
import { getRankedContentDetail, isRankedConfigured, listRankedContent } from './client'
import { committedCoverUrl, getRankedCoverImage } from './cover'
import { reservedCoverUrls, rankedCoverAlt } from './unique-covers'
import { fetchGoogleDocHtml } from './google-doc'
import {
  htmlToBlogPost,
  isBlogContentType,
  isRankedPostLive,
  nextFreePublishDate,
  publishDateFromRanked,
  slugFromTitle,
} from './html-to-post'
import { getLocalBlogPosts } from './local-posts'
import type { BlogPostData, RankedContentDetail, RankedContentListItem } from './types'

function normalizeTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Skip Ranked items that duplicate a hand-written local article (slug or title). */
function isDuplicateOfLocal(rankedTitle: string, localPosts: BlogPostData[]): boolean {
  const rankedNorm = normalizeTitle(rankedTitle)
  const rankedSlug = slugFromTitle(rankedTitle)
  for (const local of localPosts) {
    const localNorm = normalizeTitle(local.title)
    if (local.slug === rankedSlug || slugFromTitle(local.title) === rankedSlug) return true
    if (localNorm === rankedNorm) return true
    if (localNorm.startsWith(rankedNorm) || rankedNorm.startsWith(localNorm)) return true
  }
  return false
}

async function resolveArticleHtml(
  item: RankedContentListItem,
  detail: RankedContentDetail | null,
): Promise<string | null> {
  const fromRanked = detail?.content_body?.trim()
  if (fromRanked) return fromRanked
  const docUrl = detail?.document_url || detail?.source_url || item.document_url || item.source_url
  return fetchGoogleDocHtml(docUrl)
}

function relatedFromLocal(excludeSlug: string): { title: string; slug: string }[] {
  return [...getLocalBlogPosts()]
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate))
    .filter((p) => p.slug !== excludeSlug)
    .slice(0, 3)
    .map((p) => ({ title: p.h1, slug: p.slug }))
}

function uniqueSlug(title: string, contentId: string, taken: Set<string>): string {
  const base = slugFromTitle(title)
  if (!taken.has(base)) return base
  const withId = `${base}-${contentId.slice(0, 8)}`
  if (!taken.has(withId)) return withId
  let i = 2
  while (taken.has(`${base}-${i}`)) i += 1
  return `${base}-${i}`
}

export async function getLiveRankedBlogPosts(
  projectId?: string,
  opts: { generateCovers?: boolean; generateForSlug?: string } = {},
): Promise<BlogPostData[]> {
  if (!isRankedConfigured() && !projectId) return []
  const id = projectId || process.env.RANKED_PROJECT_ID
  if (!process.env.RANKED_API_KEY || !id) return []

  if (id !== LEVITT_RANKED_PROJECT_ID) {
    console.error(
      `[ranked] Wrong RANKED_PROJECT_ID (${id}). Expected Levitt only: ${LEVITT_RANKED_PROJECT_ID}`,
    )
    return []
  }

  try {
    const items = await listRankedContent(id)
    const local = getLocalBlogPosts()
    const candidates = items
      .filter(
        (item) =>
          isBlogContentType(item.content_type) &&
          isRankedPostLive(item.status, item.scheduled_date) &&
          !isDuplicateOfLocal(item.title, local),
      )
      .sort((a, b) => {
        const da = publishDateFromRanked(a.scheduled_date, a.created_at)
        const db = publishDateFromRanked(b.scheduled_date, b.created_at)
        return da.localeCompare(db) || a.title.localeCompare(b.title)
      })
    const taken = new Set(local.map((p) => p.slug))
    const takenDates = new Set(local.map((p) => p.publishDate.slice(0, 10)))

    const resolved = await Promise.all(
      candidates.map(async (item) => {
        let detail: RankedContentDetail | null = null
        try {
          detail = await getRankedContentDetail(item.id, id)
        } catch (err) {
          console.error(`[ranked] detail failed for ${item.id}`, err)
        }
        try {
          const html = await resolveArticleHtml(item, detail)
          if (!html) return null
          return { source: detail ?? item, html }
        } catch (err) {
          console.error(`[ranked] article HTML failed for ${item.id}`, err)
          return null
        }
      }),
    )

    const posts: BlogPostData[] = []
    const usedCovers = reservedCoverUrls()
    for (const row of resolved) {
      if (!row) continue
      const { source, html } = row
      const slug = uniqueSlug(source.title, source.id, taken)
      const publishDate = nextFreePublishDate(
        publishDateFromRanked(source.scheduled_date, source.created_at),
        takenDates,
      )
      const post = htmlToBlogPost({
        title: source.title,
        html,
        description: source.description,
        publishDate,
        slug,
        coverImage: source.featured_image_url,
      })
      if (!post) continue
      takenDates.add(publishDate)
      const featured = source.featured_image_url?.trim() || ''
      const featuredIsUnique =
        featured !== '' && featured !== DEFAULT_COVER && !usedCovers.has(featured)
      const committed = committedCoverUrl(slug)
      post.coverImage =
        committed ??
        (featuredIsUnique
          ? featured
          : await getRankedCoverImage({
              contentId: source.id,
              title: source.title,
              slug,
              generate: Boolean(opts.generateCovers) || opts.generateForSlug === slug,
              taken: usedCovers,
            }))
      post.coverAlt = rankedCoverAlt(slug, source.title)
      post.relatedPosts = relatedFromLocal(slug)
      posts.push(post)
      taken.add(slug)
      usedCovers.add(post.coverImage)
    }
    return posts
  } catch (err) {
    console.error('[ranked] failed to load content calendar', err)
    return []
  }
}

export async function getLiveRankedBlogPost(slug: string): Promise<BlogPostData | undefined> {
  const posts = await getLiveRankedBlogPosts(undefined, { generateForSlug: slug })
  return posts.find((p) => p.slug === slug)
}

export async function getPublishedBlogPost(slug: string): Promise<BlogPostData | undefined> {
  const local = getLocalBlogPosts().find((p) => p.slug === slug)
  if (local) return local
  return getLiveRankedBlogPost(slug)
}

export async function getPublishedBlogPosts(): Promise<BlogPostData[]> {
  const local = getLocalBlogPosts()
  const ranked = await getLiveRankedBlogPosts()
  const taken = new Set(local.map((p) => p.slug))
  return [...local, ...ranked.filter((p) => !taken.has(p.slug))]
}

export async function getPublishedBlogSlugs(): Promise<string[]> {
  const posts = await getPublishedBlogPosts()
  return posts.map((p) => p.slug)
}
