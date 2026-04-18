"use client"

import { useState } from "react"

import { Button } from "@workspace/ui/components/button"
import { EmbedCard } from "embed-card"

import { demoThemes, sampleEmbeds } from "@/lib/sample-urls"

export function EmbedShowcase() {
  const [url, setUrl] = useState<string>(sampleEmbeds[0].url)
  const [themeId, setThemeId] = useState<string>(demoThemes[0].id)

  const activeTheme =
    demoThemes.find((theme) => theme.id === themeId) ?? demoThemes[0]

  const installSnippet = `pnpm add embed-card`
  const componentSnippet = `import { EmbedCard } from "embed-card"

export function SocialEmbed() {
  return <EmbedCard url="${url}" />
}`
  const themeSnippet = `import { EmbedCard } from "embed-card"

export function BrandedEmbed() {
  return (
    <EmbedCard
      url="${url}"
      theme={{
        accentColor: "${activeTheme.theme.accentColor}",
        radius: ${activeTheme.theme.radius},
      }}
    />
  )
}`
  const webComponentSnippet = `import { registerEmbedCard } from "embed-card/web-component"

registerEmbedCard()

<embed-card url="${url}"></embed-card>`

  return (
    <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
      <div className="grid gap-6">
        <article className="rounded-[34px] border border-border/70 bg-background/90 p-6 shadow-[0_22px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Live playground
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">
                Try a URL and switch the package theme
              </h2>
            </div>

            <label className="grid gap-2 text-sm font-medium">
              Embed URL
              <input
                className="h-12 rounded-2xl border border-border/70 bg-background px-4 text-sm outline-none transition focus:border-foreground/20 focus:ring-4 focus:ring-foreground/5"
                onChange={(event) => setUrl(event.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                value={url}
              />
            </label>

            <div className="grid gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Sample providers
              </span>
              <div className="flex flex-wrap gap-2">
                {sampleEmbeds.map((sample) => (
                  <Button
                    key={sample.label}
                    onClick={() => setUrl(sample.url)}
                    variant={sample.url === url ? "default" : "outline"}
                  >
                    {sample.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Theme presets
              </span>
              <div className="flex flex-wrap gap-2">
                {demoThemes.map((theme) => (
                  <Button
                    key={theme.id}
                    onClick={() => setThemeId(theme.id)}
                    variant={theme.id === themeId ? "default" : "outline"}
                  >
                    {theme.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-[34px] border border-border/70 bg-gradient-to-br from-background to-background/70 p-5 shadow-[0_28px_90px_rgba(15,23,42,0.08)] sm:p-7">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Preview
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                `EmbedCard` rendered from the workspace package
              </h3>
            </div>
            <div className="rounded-full border border-border/70 bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              Theme: {activeTheme.label}
            </div>
          </div>

          <EmbedCard theme={activeTheme.theme} url={url} />
        </article>
      </div>

      <div className="grid gap-6">
        <article className="rounded-[34px] border border-border/70 bg-zinc-950 p-6 text-zinc-50 shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
            Quick start
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
            Install once, then choose the surface you want
          </h3>

          <pre className="mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-7 text-zinc-100">
            <code>{installSnippet}</code>
          </pre>

          <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-7 text-zinc-100">
            <code>{componentSnippet}</code>
          </pre>

          <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-7 text-zinc-100">
            <code>{themeSnippet}</code>
          </pre>
        </article>

        <article className="rounded-[34px] border border-border/70 bg-background/90 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Framework story
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
            React first, but not React only
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            The same package exports a React component, a custom element
            registrar, and low-level helpers for manual rendering. That keeps
            the install surface small while still leaving room for Vue, Svelte,
            Astro, or plain HTML integrations.
          </p>

          <pre className="mt-5 overflow-x-auto rounded-2xl border border-border/70 bg-muted/40 p-4 text-sm leading-7">
            <code>{webComponentSnippet}</code>
          </pre>
        </article>
      </div>
    </section>
  )
}
