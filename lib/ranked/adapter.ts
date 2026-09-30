/**
 * Convert Ranked BlogPostData → existing BlogPost shape used by the UI.
 * Ranked sections become h2 + p blocks. Body is plain text (not dangerouslySetInnerHTML).
 */
import type { BlogBlock, BlogPost } from '@/lib/blog'
import type { BlogPostData } from './types'

const BULLET_MARK = /(?:\u2022|\u00b7|\u25cf|\u25aa|\u2023|&bull;)/

/** Google Docs often exports lists as paragraphs that start with a bullet character. */
function bulletItems(text: string): string[] | null {
  const trimmed = text.trim()
  if (!new RegExp(`^${BULLET_MARK.source}`).test(trimmed)) return null
  const items = trimmed
    .split(new RegExp(`(?:^|\\s)${BULLET_MARK.source}\\s*`))
    .map((item) => item.trim())
    .filter(Boolean)
  return items.length ? items : null
}

function pushBody(blocks: BlogBlock[], paragraphs: string[]) {
  let items: string[] = []
  const flush = () => {
    if (!items.length) return
    blocks.push({ type: 'ul', items })
    items = []
  }

  for (const para of paragraphs) {
    const bullets = bulletItems(para)
    if (bullets) {
      items.push(...bullets)
      continue
    }
    flush()
    if (para.trim()) blocks.push({ type: 'p', text: para })
  }
  flush()
}

export function rankedToBlogPost(r: BlogPostData): BlogPost {
  const blocks: BlogBlock[] = []

  if (r.intro) {
    const introBullets = bulletItems(r.intro)
    if (introBullets) blocks.push({ type: 'ul', items: introBullets })
    else blocks.push({ type: 'p', text: r.intro })
  }

  for (const section of r.sections) {
    const id = section.heading
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
    blocks.push({ type: 'h2', text: section.heading, id })
    pushBody(blocks, section.body)
  }

  blocks.push({
    type: 'cta',
    title: 'Ready to feel better?',
    segments: [
      { text: 'Schedule your appointment at ' },
      { text: 'Levitt Chiropractic Center', href: r.cta.href },
      { text: ' today.' },
    ],
  })

  const wordCount = blocks.reduce((sum, b) => {
    if ('text' in b && typeof b.text === 'string') return sum + b.text.split(/\s+/).length
    if (b.type === 'ul' || b.type === 'ol') {
      return sum + b.items.join(' ').split(/\s+/).filter(Boolean).length
    }
    return sum
  }, 0)

  return {
    slug: r.slug,
    title: r.title,
    description: r.metaDescription,
    excerpt: r.intro.slice(0, 200),
    publishedAt: r.publishDate,
    author: {
      name: 'Dr. Alan Levitt, D.C.',
      title: 'Chiropractor, Levitt Chiropractic Center',
      url: '/meet-the-doctor',
    },
    category: 'Chiropractic Care',
    tags: [],
    coverImage: r.coverImage,
    coverAlt: r.coverAlt,
    readingMinutes: Math.max(1, Math.round(wordCount / 230)),
    blocks,
  }
}
