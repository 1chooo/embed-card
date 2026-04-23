import Link from "next/link"
import { PanelRight } from "lucide-react"

import { HomeEmbedPlayground } from "@/components/home-embed-playground"

/** Matches `Reset` in the playground Options bar (`embed-playground.tsx`). */
const btnOutline =
  "inline-flex items-center justify-center rounded-sm border border-fd-border px-2.5 py-1.5 text-[11px] font-medium text-fd-muted-foreground transition hover:bg-fd-muted/50 hover:text-fd-foreground"
const btnPrimary =
  "inline-flex items-center justify-center gap-1.5 rounded-sm border border-fd-border bg-fd-primary px-2.5 py-1.5 text-[11px] font-medium text-fd-primary-foreground transition hover:opacity-90"

export function HomePlaygroundSection() {
  return (
    <section
      className="relative ml-[calc(50%-50vw)] w-screen max-w-[100vw] scroll-mt-24 border-y border-fd-border bg-fd-muted/35 py-14 md:py-16"
      id="playground"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,color-mix(in_srgb,var(--color-fd-primary)_6%,transparent),transparent_65%)]"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 md:px-10">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div className="min-w-0 max-w-2xl space-y-2">
            <p className="text-[11px] font-semibold tracking-wider text-fd-muted-foreground uppercase">
              Live preview
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-fd-foreground sm:text-2xl">
              Playground
            </h2>
            <p className="text-sm leading-relaxed text-fd-muted-foreground">
              Try sample URLs here for a quick look; open{" "}
              <Link
                className="font-medium text-fd-foreground underline-offset-2 hover:underline"
                href="/docs/playground"
              >
                /docs/playground
              </Link>{" "}
              for the same controls inside the docs layout, next to guides and
              API reference.
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
      </div>
    </section>
  )
}
