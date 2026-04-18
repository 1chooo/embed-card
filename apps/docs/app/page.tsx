import Link from "next/link"
import { ArrowRight, BookOpenText, PlayCircle } from "lucide-react"

import { EmbedCard } from "embed-card"

const exampleUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-14 px-6 py-10 md:px-10 lg:py-14">
      <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex rounded-full border border-fd-border/70 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-fd-muted-foreground dark:bg-white/5">
            Fumadocs app in the monorepo
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl font-semibold tracking-[-0.06em] text-balance sm:text-6xl">
              Document the package, demo the component, keep everything in one
              repo.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-fd-muted-foreground">
              This app is the documentation surface for `embed-card`. It shows
              the install story, the provider registry pattern, and framework
              examples for React, web components, and manual rendering.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-fd-primary px-5 py-3 text-sm font-semibold text-fd-primary-foreground transition hover:opacity-90"
              href="/docs"
            >
              Open docs
              <ArrowRight className="size-4" />
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full border border-fd-border/70 bg-white/75 px-5 py-3 text-sm text-fd-muted-foreground dark:bg-white/5">
              <PlayCircle className="size-4" />
              Run `pnpm --filter web dev` for the playground
            </div>
          </div>
          <div className="rounded-[28px] border border-fd-border/70 bg-white/75 p-5 dark:bg-white/5">
            <div className="flex items-center gap-3 text-sm font-semibold">
              <BookOpenText className="size-4 text-rose-500" />
              What ships today
            </div>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-fd-muted-foreground">
              <li>One publishable `embed-card` package in `packages/embed-card`.</li>
              <li>React `<EmbedCard url="" />` API for Next.js and React apps.</li>
              <li>Custom element + manual resolver exports for other frameworks.</li>
              <li>Examples and docs living beside the demo app in the same workspace.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-[34px] border border-fd-border/70 bg-white/80 p-5 shadow-[0_28px_90px_rgba(15,23,42,0.12)] dark:bg-white/5 sm:p-7">
          <EmbedCard
            theme={{
              accentColor: "#e11d48",
              borderColor: "rgba(225, 29, 72, 0.2)",
              radius: 30,
              shadow: "0 28px 100px rgba(225, 29, 72, 0.16)",
            }}
            url={exampleUrl}
          />
        </div>
      </section>
    </main>
  )
}
