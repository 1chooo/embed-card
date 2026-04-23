export type EmbedReferrerPolicy =
  | "no-referrer"
  | "no-referrer-when-downgrade"
  | "origin"
  | "origin-when-cross-origin"
  | "same-origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin"
  | "unsafe-url"

export interface EmbedCardTheme {
  /** Primary brand color. Provider's own accent is used when omitted. */
  accentColor?: string
  /** Corner radius. Accepts a pixel number or any valid CSS length. Defaults to `24px`. */
  radius?: number | string
  /** Any valid CSS `box-shadow`. Defaults to `"none"`. */
  shadow?: string
  /** Any valid CSS `font-family` value. Defaults to system-ui sans-serif stack. */
  fontFamily?: string
  /**
   * Controls the surface palette (gradients, preview panel, borders).
   * - `"light"` — always use the light palette (default when omitted).
   * - `"dark"`  — always use a dark palette.
   * - `"system"` — follow `prefers-color-scheme` at runtime; falls back to light on SSR.
   */
  appearance?: "light" | "dark" | "system"
}

export interface IframeEmbedRenderer {
  type: "iframe"
  src: string
  title: string
  aspectRatio?: string
  minHeight?: number
  /**
   * Caps height in pixels (applied as `min(Npx, 90vmin, 65dvh)` on the card). Use with
   * `aspectRatio` and optional `maxWidth` so the used size stays within bounds while keeping proportions.
   */
  maxHeight?: number
  /**
   * Limits the card width and centers it. Useful for providers (e.g. Instagram) whose
   * embed UI is designed for a narrow column so content stays readable without extra scrolling.
   */
  maxWidth?: number | string
  /**
   * `"card"` (default): border, shadow, and tinted surface like other embeds.
   * `"flush"`: no outer border or shadow and a transparent surface so hosts like TikTok that ship their own chrome are not double-framed.
   */
  embedChrome?: "card" | "flush"
  allow?: string
  allowFullScreen?: boolean
  referrerPolicy?: EmbedReferrerPolicy
  sandbox?: string
}

export interface LinkEmbedRenderer {
  type: "link"
  href: string
  ctaLabel?: string
}

export interface InvalidEmbedRenderer {
  type: "invalid"
  message: string
}

export interface RedditClientEmbedRenderer {
  type: "reddit_client"
  /** Canonical thread URL used for `fetch(url + ".json")` (no trailing slash). */
  postUrl: string
}

export interface TikTokClientEmbedRenderer {
  type: "tiktok_client"
  /** Full share URL passed to TikTok’s oEmbed API (`vm.tiktok.com/…` or any resolvable link). */
  shareUrl: string
}

export type EmbedRenderer =
  | IframeEmbedRenderer
  | LinkEmbedRenderer
  | InvalidEmbedRenderer
  | RedditClientEmbedRenderer
  | TikTokClientEmbedRenderer

export interface ResolvedEmbed {
  provider: string
  providerLabel: string
  accentColor: string
  title: string
  description: string
  site: string
  url: string
  displayUrl: string
  renderer: EmbedRenderer
}

export interface EmbedProvider {
  id: string
  label: string
  accentColor: string
  match: (url: URL) => boolean
  resolve: (url: URL, context?: ResolveEmbedContext) => ResolvedEmbed | null
}

/** Passed into {@link EmbedProvider.resolve} so iframe URLs can match the card (e.g. X `theme`). */
export interface ResolveEmbedContext {
  appearance?: "light" | "dark"
}

export interface ResolveEmbedOptions extends ResolveEmbedContext {
  providers?: readonly EmbedProvider[]
  includeFallback?: boolean
}
