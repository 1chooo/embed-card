import Link from "next/link"
import { PanelRight } from "lucide-react"

import { HomeEmbedPlayground } from "@/components/home-embed-playground"

/** Matches `Reset` in the playground Options bar (`embed-playground.tsx`). */
const btnOutline =
  "inline-flex items-center justify-center rounded-md border border-fd-border px-2.5 py-1.5 text-[11px] font-medium text-fd-muted-foreground transition hover:bg-fd-muted/50 hover:text-fd-foreground"
const btnPrimary =
  "inline-flex items-center justify-center gap-1.5 rounded-md border border-fd-border bg-fd-primary px-2.5 py-1.5 text-[11px] font-medium text-fd-primary-foreground transition hover:opacity-90"

export function HomePlaygroundSection() {
  return (
    <section
      className="scroll-mt-24 border-t border-fd-border pt-16"
      id="playground"
    >
      <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div className="min-w-0 space-y-1.5">
          <h2 className="text-lg font-semibold tracking-tight text-fd-foreground sm:text-xl">
            Playground
          </h2>
          <p className="max-w-md text-[13px] leading-relaxed text-fd-muted-foreground">
            Pick a sample URL and copy the generated snippet from the card
            panel.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          <Link className={btnOutline} href="/docs">
            Browse docs
          </Link>
          <Link className={btnPrimary} href="/docs/playground">
            <PanelRight className="size-3.5 opacity-90" aria-hidden />
            Full controls
          </Link>
        </div>
      </div>
      <HomeEmbedPlayground bleed={false} />
    </section>
  )
}
