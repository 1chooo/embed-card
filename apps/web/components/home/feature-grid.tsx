import Link from "next/link"

const items = [
  {
    title: "One URL, one component",
    description:
      "Drop in EmbedCard with a string URL—no host-specific wrappers or iframe boilerplate.",
    href: "/docs/getting-started",
    cta: "Get started",
  },
  {
    title: "Many platforms",
    description:
      "YouTube, X, Instagram, Reddit, Maps, Vimeo, and more—see which URLs map to which embed.",
    href: "/docs/platforms",
    cta: "Supported platforms",
  },
  {
    title: "Multiple render paths",
    description:
      "Use React, a custom element, or manual rendering from the same package API surface.",
    href: "/docs/frameworks/react",
    cta: "React guide",
  },
] as const

export function FeatureGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.title}
          className="group flex flex-col rounded-xl border border-fd-border bg-fd-background/80 p-5 shadow-sm transition hover:border-fd-ring/40 hover:bg-fd-muted/25 hover:shadow-md"
          href={item.href}
        >
          <h3 className="text-sm font-semibold tracking-tight text-fd-foreground">
            {item.title}
          </h3>
          <p className="mt-2 flex-1 text-[13px] leading-relaxed text-fd-muted-foreground">
            {item.description}
          </p>
          <span className="mt-4 text-xs font-medium text-fd-foreground underline-offset-4 group-hover:underline">
            {item.cta}
            <span aria-hidden> →</span>
          </span>
        </Link>
      ))}
    </div>
  )
}
