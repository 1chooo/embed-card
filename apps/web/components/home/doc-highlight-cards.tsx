import Link from "next/link"
import { BookOpenText, Layers, Sparkles } from "lucide-react"

const cards = [
  {
    title: "Getting started",
    description:
      "Install with your package manager, render your first card, and theme it in minutes.",
    href: "/docs/getting-started",
    icon: Sparkles,
  },
  {
    title: "Interactive playground",
    description:
      "Paste URLs, try samples, and copy minimal snippets—same flow as the homepage block.",
    href: "/docs/playground",
    icon: Layers,
  },
  {
    title: "Browse documentation",
    description:
      "Framework guides, custom rendering, and the full API—organized like a product manual.",
    href: "/docs",
    icon: BookOpenText,
  },
] as const

export function DocHighlightCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map(({ title, description, href, icon: Icon }) => (
        <Link
          key={href}
          className="group relative flex flex-col overflow-hidden rounded-xl border border-fd-border bg-fd-card/50 p-5 shadow-sm ring-1 ring-transparent transition hover:border-fd-border hover:ring-fd-border/60 hover:shadow-md"
          href={href}
        >
          <div className="mb-3 inline-flex size-9 items-center justify-center rounded-lg border border-fd-border bg-fd-background text-fd-foreground">
            <Icon aria-hidden className="size-4" />
          </div>
          <h3 className="text-sm font-semibold tracking-tight text-fd-foreground">
            {title}
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-fd-muted-foreground">
            {description}
          </p>
          <span className="mt-4 text-xs font-medium text-fd-foreground underline-offset-4 group-hover:underline">
            Open
            <span aria-hidden> →</span>
          </span>
        </Link>
      ))}
    </div>
  )
}
