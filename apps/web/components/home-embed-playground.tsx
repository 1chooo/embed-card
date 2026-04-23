"use client"

import { useMemo, useState } from "react"

import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock"

import { buildUrlOnlySnippet, pillClassName } from "@/components/embed-playground-shared"
import { sampleEmbeds } from "@/lib/sample-urls"

export type HomeEmbedPlaygroundProps = {
  /** Initial sample URL when the block mounts. */
  url?: string
  /** Wider breakout on small viewports (matches docs playground bleed). */
  bleed?: boolean
}

export function HomeEmbedPlayground({
  url: initialUrl = sampleEmbeds[0].url,
  bleed = false,
}: HomeEmbedPlaygroundProps) {
  const [url, setUrl] = useState<string>(initialUrl)

  const snippet = useMemo(() => buildUrlOnlySnippet(url), [url])

  const outerClass = [
    "not-prose overflow-hidden rounded-sm border border-fd-border bg-fd-background shadow-sm",
    bleed ? "-mx-4 lg:-mx-6" : "",
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <div className={outerClass}>
      <div className="flex flex-col gap-4 px-4 py-4 sm:px-5 sm:py-5">
        <div className="flex flex-wrap gap-2">
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

        <DynamicCodeBlock
          code={snippet}
          lang="tsx"
          codeblock={{
            className:
              "not-prose my-0 max-h-64 overflow-auto rounded-sm border border-fd-border bg-fd-muted/30 text-[11px] leading-relaxed text-fd-foreground",
          }}
        />
      </div>
    </div>
  )
}
