import Link from "next/link"
import type { ReactNode } from "react"

import { homePlatformChips } from "@/lib/home-marketing"

export type HomePlatformsSectionProps = {
  title: string
  description: ReactNode
}

export function HomePlatformsSection({
  title,
  description,
}: HomePlatformsSectionProps) {
  return (
    <section className="grid gap-8 border-t border-fd-border pt-14 md:pt-16">
      <div className="grid max-w-3xl gap-2 text-balance">
        <h2 className="text-xl font-semibold tracking-tight text-fd-foreground sm:text-2xl md:text-3xl">
          {title}
        </h2>
        <div className="max-w-2xl text-pretty text-base leading-relaxed text-fd-muted-foreground">
          {description}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {homePlatformChips.map((p) => (
          <Link
            className="rounded-full border border-fd-border bg-fd-card px-4 py-1.5 text-sm text-fd-foreground transition-colors hover:bg-fd-muted/60"
            href={p.href}
            key={p.href}
          >
            {p.name}
          </Link>
        ))}
      </div>
    </section>
  )
}
