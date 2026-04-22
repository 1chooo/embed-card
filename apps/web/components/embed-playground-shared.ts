/** Sample pills and Options bar buttons (rounded-md, 11px). */
export function pillClassName(isActive: boolean): string {
  return [
    "inline-flex min-h-0 items-center justify-center rounded-md border border-fd-border px-2.5 py-1.5 text-[11px] font-medium transition active:scale-[0.98]",
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
