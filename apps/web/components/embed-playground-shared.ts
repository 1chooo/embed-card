import type { CSSProperties } from "react"

/** True when the URL is a TikTok host used in playground samples (canonical or vm short link). */
export function isTikTokDemoUrl(url: string): boolean {
  try {
    const host = new URL(url.trim()).hostname
    return (
      host === "tiktok.com" ||
      host === "www.tiktok.com" ||
      host === "m.tiktok.com" ||
      host === "vm.tiktok.com"
    )
  } catch {
    return false
  }
}

/**
 * Passed to `ThemedEmbedCard` `style` in playgrounds for TikTok only: same max width as the
 * built-in Instagram embed (328px) plus a viewport-aware max height so the full 9:16 card fits
 * in the preview pane without inner scrolling.
 */
export const tiktokPlaygroundFigureStyle = {
  maxWidth: 328,
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  maxHeight: "min(380px, 46dvh)",
} as const satisfies CSSProperties

/** Sample pills and Options bar buttons (rounded-sm, 11px). */
export function pillClassName(isActive: boolean): string {
  return [
    "inline-flex min-h-0 items-center justify-center rounded-sm border border-fd-border px-2.5 py-1.5 text-[11px] font-medium transition active:scale-[0.98]",
    isActive
      ? "bg-fd-primary text-fd-primary-foreground hover:opacity-90"
      : "text-fd-muted-foreground hover:bg-fd-muted/50 hover:text-fd-foreground",
  ].join(" ")
}

export function buildUrlOnlySnippet(embedUrl: string): string {
  return `import { EmbedCard } from "embed-card"

export function Example() {
  return (
    <EmbedCard
      url={${JSON.stringify(embedUrl)}}
    />
  )
}`
}
