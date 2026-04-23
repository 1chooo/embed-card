"use client"

import { useCallback, useMemo, useState } from "react"

import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock"

import {
  buildUrlOnlySnippet,
  isTikTokDemoUrl,
  pillClassName,
  tiktokPlaygroundFigureStyle,
} from "@/components/embed-playground-shared"
import { sampleEmbeds } from "@/lib/sample-urls"
import { ThemedEmbedCard } from "embed-card/next-themes"

export type EmbedPlaygroundProps = {
  /** Initial embed URL; visitors can still edit it in the playground. */
  url?: string
  /** Negative margin for full-bleed inside docs prose (default: true). */
  bleed?: boolean
}

export function EmbedPlayground({
  url: initialUrl = sampleEmbeds[0].url,
  bleed = true,
}: EmbedPlaygroundProps) {
  const [url, setUrl] = useState<string>(initialUrl)

  const snippet = useMemo(() => buildUrlOnlySnippet(url), [url])
  const isTikTok = isTikTokDemoUrl(url)

  const reset = useCallback(() => {
    setUrl(initialUrl)
  }, [initialUrl])

  const outerClass = [
    "not-prose flex min-h-0 min-w-0 flex-col border border-fd-border bg-fd-background lg:flex-row lg:rounded-sm",
    bleed ? "-mx-4 lg:-mx-6" : "overflow-hidden rounded-sm shadow-sm",
  ].join(" ")

  return (
    <div className={outerClass}>
      <div className="flex min-h-[280px] flex-1 flex-col lg:min-h-[min(520px,calc(100dvh-16rem))]">
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-6 lg:px-10">
          <div
            className={
              isTikTok
                ? "mx-auto w-full max-w-[328px] shrink-0"
                : "max-h-[min(65dvh,520px)] w-full max-w-3xl min-w-0 overflow-y-auto"
            }
          >
            <ThemedEmbedCard
              style={isTikTok ? tiktokPlaygroundFigureStyle : undefined}
              url={url}
            />
          </div>
        </div>
      </div>

      <aside
        className={[
          "flex w-full shrink-0 flex-col gap-0 border-t border-fd-border bg-fd-background lg:w-[min(100%,400px)] lg:border-t-0 lg:border-l lg:overflow-y-auto lg:self-start",
          "lg:max-h-[min(720px,calc(100dvh-8rem))] lg:sticky lg:top-28",
        ].join(" ")}
      >
        <div className="flex items-center justify-between gap-2 border-b border-fd-border px-4 py-3 sm:px-5">
          <span className="text-xs font-semibold text-fd-foreground">
            Options
          </span>
          <button
            className="shrink-0 rounded-sm border border-fd-border px-2.5 py-1.5 text-[11px] font-medium text-fd-muted-foreground transition hover:bg-fd-muted/50 hover:text-fd-foreground"
            onClick={reset}
            type="button"
          >
            Reset
          </button>
        </div>

        <div className="space-y-8 px-4 py-6 sm:px-5">
          <div>
            <p className="text-xs font-semibold text-fd-foreground">Source</p>
            <label className="mt-3 block text-[11px] font-medium text-fd-muted-foreground">
              URL
              <input
                className="mt-1.5 h-10 w-full rounded-sm border border-fd-border bg-fd-background px-3 font-mono text-xs text-fd-foreground outline-none transition placeholder:text-fd-muted-foreground focus-visible:border-fd-primary focus-visible:ring-2 focus-visible:ring-fd-primary/25"
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://..."
                spellCheck={false}
                value={url}
              />
            </label>
            <p className="mt-3 text-[11px] font-medium text-fd-muted-foreground">
              Samples
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {sampleEmbeds.map((sample) => (
                <button
                  className={pillClassName(sample.url === url)}
                  key={sample.label}
                  onClick={() => setUrl(sample.url)}
                  type="button"
                >
                  {sample.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-fd-border pt-6">
            <p className="text-xs font-semibold text-fd-foreground">
              React snippet
            </p>
            <DynamicCodeBlock
              code={snippet}
              lang="tsx"
              codeblock={{
                className:
                  "not-prose my-0 mt-3 max-h-56 overflow-auto rounded-sm border border-fd-border bg-fd-muted/30 text-[11px] leading-relaxed text-fd-foreground",
              }}
            />
          </div>
        </div>
      </aside>
    </div>
  )
}
