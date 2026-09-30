export const SITE_ORIGIN = (
  process.env.SITE_ORIGIN || 'https://www.levittchiropracticcenter.com'
).replace(/\/$/, '')

/** Levitt Chiropractic only — never publish another Ranked project on this domain. */
export const LEVITT_RANKED_PROJECT_ID = 'aff273b8-51d2-42da-a1ad-6ca3c6b91038'

export const DEFAULT_COVER = '/images/og-default.jpg'

export const DEFAULT_COVER_ALT = 'Blog article cover'

export const DEFAULT_CTA = {
  label: 'Contact us',
  href: '/contact',
}

/** Cover prompt for this brand. No patient faces / medical gore. */
export function coverPrompt(title: string): string {
  return [
    'Editorial photograph, 16:9 landscape, premium brand photography.',
    `Theme inspired by: ${title.slice(0, 120)}.`,
    'Warm chiropractic wellness aesthetic, healthy spine and movement.',
    'Cinematic lighting, sharp, no grain, no watermark.',
    'No text, no letters, no logos, no captions, no readable signage.',
  ].join(' ')
}

/**
 * Slugs that already have a committed file at /images/blog/covers/{slug}.png
 * List only. Do not fs.stat public/ — that packs images into the cron bundle.
 */
export const COMMITTED_COVER_SLUGS: readonly string[] = [
  'beyond-back-pain-relief-with-a-chiropractor-in-minneapolis',
  'choosing-a-holistic-chiropractor-in-minneapolis-for-whole-body-healing',
  'everyday-clues-you-need-chiropractic-care-in-saint-louis-park',
  'winter-spine-strain-triggers-in-saint-louis-park-and-how-chiropractors-help',
]
