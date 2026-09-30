import { DEFAULT_COVER, DEFAULT_COVER_ALT, DEFAULT_CTA } from './config'
import type { BlogPostData } from './types'

const NAMED_ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  bull: '\u2022',
  middot: '\u00b7',
  ldquo: '\u201c',
  rdquo: '\u201d',
  lsquo: '\u2018',
  rsquo: '\u2019',
  mdash: '\u2014',
  ndash: '\u2013',
  hellip: '\u2026',
}

function decodeEntities(text: string): string {
  let out = text
  // A second pass turns double-encoded entities such as &amp;bull; into •.
  for (let pass = 0; pass < 2; pass += 1) {
    const next = out
      .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) => String.fromCodePoint(Number.parseInt(hex, 16)))
      .replace(/&#(\d+);/g, (_, n: string) => String.fromCodePoint(Number(n)))
      .replace(/&([a-z]+);/gi, (entity, name: string) => NAMED_ENTITIES[name.toLowerCase()] ?? entity)
    if (next === out) break
    out = next
  }
  return out.replace(/\s+/g, ' ').trim()
}

function stripTags(html: string): string {
  return decodeEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<\/(p|div|li|h[1-6]|tr)>/gi, ' ')
      .replace(/<[^>]+>/g, ' '),
  )
}

function isSeoMetaLine(text: string): boolean {
  return /^(meta\s*title|meta\s*description|seo title|focus keyword)\s*:/i.test(text.trim())
}

function htmlChunkToPlain(html: string): string {
  const withLinks = html.replace(
    /<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,
    (_m, href: string, inner: string) => {
      const label = stripTags(inner)
      if (!label) return ''
      return `[${label}](${href})`
    },
  )
  return stripTags(withLinks)
}

function usableParas(parts: string[]): string[] {
  return parts.map(htmlChunkToPlain).filter((p) => p.length > 1 && !isSeoMetaLine(p))
}

export function slugFromTitle(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
  return slug || 'ranked-article'
}

function metaFromPlain(text: string, fallbackTitle: string): string {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (!clean) return fallbackTitle.slice(0, 155)
  if (clean.length <= 155) return clean
  const cut = clean.slice(0, 152)
  const lastSpace = cut.lastIndexOf(' ')
  return `${cut.slice(0, lastSpace > 80 ? lastSpace : 152).trim()}…`
}

export function htmlToBlogPost(input: {
  title: string
  html: string | null
  description: string | null
  publishDate: string
  slug: string
  coverImage: string | null
}): BlogPostData | null {
  const html = (input.html ?? '').trim()
  if (!html) return null

  const headingSplit = html.split(/<(h[1-6])[^>]*>/i)
  const sections: { heading: string; body: string[] }[] = []
  let intro = ''
  const titleNorm = input.title.replace(/\s+/g, ' ').trim().toLowerCase()

  if (headingSplit.length === 1) {
    const paras = usableParas(html.split(/<\/p>/i))
    if (paras.length === 0) return null
    intro = paras[0]
    sections.push({
      heading: input.title,
      body: paras.slice(1, 40).length ? paras.slice(1, 40) : paras,
    })
  } else {
    const preface = htmlChunkToPlain(headingSplit[0])
    if (preface && !isSeoMetaLine(preface)) intro = preface

    for (let i = 1; i < headingSplit.length; i += 2) {
      const tag = (headingSplit[i] ?? '').toLowerCase()
      const rest = headingSplit[i + 1] ?? ''
      const close = rest.indexOf('</')
      const headingHtml = close >= 0 ? rest.slice(0, close) : rest
      const heading = stripTags(headingHtml)
      const bodyHtml = close >= 0 ? rest.slice(rest.indexOf('>', close) + 1) : ''
      const paras = usableParas(bodyHtml.split(/<\/p>|<li>/i))
      const headingIsTitle =
        tag === 'h1' && heading.replace(/\s+/g, ' ').trim().toLowerCase() === titleNorm

      if (headingIsTitle) {
        if (!intro && paras[0]) intro = paras[0]
        if (paras.length > 1) {
          sections.push({ heading: input.title, body: paras.slice(1) })
        }
        continue
      }
      if (!heading && paras.length === 0) continue
      sections.push({
        heading: heading || input.title,
        body: paras.length ? paras : [htmlChunkToPlain(bodyHtml) || heading],
      })
    }
  }

  const usable = sections.filter((s) => s.body.some((p) => p.length > 8 && !isSeoMetaLine(p)))
  if (usable.length === 0) return null

  if (!intro || isSeoMetaLine(intro)) {
    intro = usable[0].body.find((p) => !isSeoMetaLine(p)) ?? input.description ?? input.title
  }

  return {
    slug: input.slug,
    title: input.title,
    metaDescription: metaFromPlain(input.description || intro, input.title),
    h1: input.title,
    publishDate: input.publishDate,
    coverImage: input.coverImage || DEFAULT_COVER,
    coverAlt: input.coverImage ? input.title : DEFAULT_COVER_ALT,
    intro,
    sections: usable,
    cta: DEFAULT_CTA,
  }
}

export function isBlogContentType(contentType: string | null): boolean {
  const type = (contentType ?? '').trim().toLowerCase()
  if (!type) return true
  return type.includes('blog')
}

export function isRankedPostLive(
  status: string,
  scheduledDate: string | null = null,
  now = new Date(),
): boolean {
  const s = status.trim().toLowerCase()
  if (s === 'revising' || s === 'cancelled' || s === 'canceled') return false
  if (!scheduledDate) return true
  const day = scheduledDate.slice(0, 10)
  const today = now.toLocaleDateString('en-CA', { timeZone: 'America/New_York' })
  return day <= today
}

export function publishDateFromRanked(scheduledDate: string | null, fallback: string): string {
  if (scheduledDate) return scheduledDate.slice(0, 10)
  return fallback.slice(0, 10)
}

function addUtcDays(isoDay: string, days: number): string {
  const [year, month, date] = isoDay.slice(0, 10).split('-').map(Number)
  return new Date(Date.UTC(year, month - 1, date + days)).toISOString().slice(0, 10)
}

function todayInNewYork(now = new Date()): string {
  return now.toLocaleDateString('en-CA', { timeZone: 'America/New_York' })
}

/**
 * Local posts publish weekly. If a Ranked date is already taken, step forward
 * one week at a time — but never past today, so a live article cannot show a
 * future publish date. Fall back to earlier unused days if needed.
 */
export function nextFreePublishDate(
  desired: string,
  taken: Set<string>,
  today = todayInNewYork(),
): string {
  const start = desired.slice(0, 10)
  if (!taken.has(start)) return start

  for (let week = 1; week <= 12; week += 1) {
    const candidate = addUtcDays(start, week * 7)
    if (candidate > today) break
    if (!taken.has(candidate)) return candidate
  }

  for (let back = 1; back <= 365; back += 1) {
    const candidate = addUtcDays(start, -back)
    if (!taken.has(candidate)) return candidate
  }

  return start
}
