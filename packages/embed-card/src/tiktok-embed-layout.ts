/** Shared layout for TikTok iframe and `tiktok_client` embed preview (9:16 phone-style). */
export const TIKTOK_EMBED_ASPECT_RATIO = "9 / 16" as const

export const TIKTOK_EMBED_MAX_WIDTH_PX = 420

/** Caps vertical size while the browser keeps aspect ratio with `maxWidth`. */
export const TIKTOK_EMBED_MAX_HEIGHT_PX = 480

/** CSS `max-height` for TikTok embed box (viewport-aware; keep in sync with EmbedCard iframe clamp). */
export function tiktokEmbedMaxHeightCss(): string {
  return `min(${TIKTOK_EMBED_MAX_HEIGHT_PX}px, 90vmin, 65dvh)`
}

/** Floor so the card does not collapse before the iframe paints. */
export const TIKTOK_EMBED_MIN_HEIGHT_PX = 280
