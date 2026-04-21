export { EmbedCard } from "./embed-card"
export {
  decodeRedditHtmlEntities,
  fetchRedditPost,
  formatRedditScore,
  normalizeRedditPostUrl,
  redditTimeAgo,
} from "./reddit-data"
export type { RedditPostData, RedditVideo } from "./reddit-data"
export { RedditEmbedPreview } from "./reddit-embed"
export type { RedditEmbedPreviewProps } from "./reddit-embed"
export { createEmbedProvider, defaultProviders } from "./providers"
export { resolveEmbed } from "./resolve"
export {
  createThemeVariables,
  EMBED_CARD_DEFAULT_SHADOW,
  variablesToInlineStyle,
} from "./theme"
export { EmbedCardElement, registerEmbedCard } from "./web-component"
export type {
  EmbedCardTheme,
  EmbedProvider,
  EmbedRenderer,
  RedditClientEmbedRenderer,
  ResolvedEmbed,
  ResolveEmbedOptions,
} from "./types"
