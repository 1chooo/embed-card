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
  accentColor?: string
  background?: string
  borderColor?: string
  textColor?: string
  mutedColor?: string
  radius?: number | string
  shadow?: string
}

export interface IframeEmbedRenderer {
  type: "iframe"
  src: string
  title: string
  aspectRatio?: string
  minHeight?: number
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

export type EmbedRenderer =
  | IframeEmbedRenderer
  | LinkEmbedRenderer
  | InvalidEmbedRenderer
  | RedditClientEmbedRenderer

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
  resolve: (url: URL) => ResolvedEmbed | null
}

export interface ResolveEmbedOptions {
  providers?: readonly EmbedProvider[]
  includeFallback?: boolean
}
