"use client"

import Link from "next/link"

import { sampleEmbeds } from "@/lib/sample-urls"
import type { EmbedCardTheme } from "embed-card"
import { ThemedEmbedCard } from "embed-card/next-themes"

type GuideItem = {
  title: string
  description: string
  href: string
  url: string
  theme?: EmbedCardTheme
}

const accentByLabel: Partial<Record<(typeof sampleEmbeds)[number]["label"], EmbedCardTheme>> = {
  YouTube: { accentColor: "#ff0033", radius: 8 },
  X: { accentColor: "#1d9bf0", radius: 8 },
  Instagram: { accentColor: "#e4405f", radius: 8 },
  Reddit: { accentColor: "#ff4500", radius: 8 },
  "Google Maps": { accentColor: "#1a73e8", radius: 8 },
  Vimeo: { accentColor: "#1ab7ea", radius: 8 },
  TikTok: { accentColor: "#010101", radius: 8 },
}

const anchorByLabel: Record<(typeof sampleEmbeds)[number]["label"], string> = {
  YouTube: "/docs/platforms#youtube",
  X: "/docs/platforms#x-and-twitter",
  Instagram: "/docs/platforms#instagram",
  Reddit: "/docs/platforms#reddit",
  "Google Maps": "/docs/platforms#google-maps",
  Vimeo: "/docs/platforms#vimeo",
  TikTok: "/docs/platforms#tiktok",
}

const descriptions: Record<(typeof sampleEmbeds)[number]["label"], string> = {
  YouTube: "Watch URLs and shorts resolve to a responsive YouTube iframe embed.",
  X: "Status URLs load the official Tweet embed with theme-aware chrome.",
  Instagram: "Permalinks for posts, reels, and TV resolve to Instagram’s embed iframe.",
  Reddit: "Thread URLs fetch the public JSON API for an in-card thread preview.",
  "Google Maps": "Maps links gain output=embed for an iframe map inside the card.",
  Vimeo: "Standard Vimeo URLs resolve to the Vimeo player iframe.",
  TikTok: "Video permalinks use TikTok’s embed iframe; vm.tiktok.com links resolve via oEmbed in the browser.",
}

const guideItems: GuideItem[] = sampleEmbeds.map((s) => ({
  title: s.label,
  description: descriptions[s.label],
  href: anchorByLabel[s.label],
  url: s.url,
  theme: accentByLabel[s.label],
}))

export type HomeGuidesShowcaseProps = {
  title: string
  description: string
}

export function HomeGuidesShowcase({ title, description }: HomeGuidesShowcaseProps) {
  return (
    <section className="grid gap-10 border-t border-fd-border pt-14 md:gap-12 md:pt-16">
      <div className="grid max-w-3xl gap-2 text-balance">
        <h2 className="text-xl font-semibold tracking-tight text-fd-foreground sm:text-2xl md:text-3xl lg:text-[2.15rem] lg:leading-snug">
          {title}
        </h2>
        <p className="text-pretty text-base leading-relaxed text-fd-muted-foreground lg:text-lg">
          {description}
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {guideItems.map((item) => (
          <div
            key={item.title}
            className="group flex flex-col overflow-hidden rounded-sm border border-fd-border bg-fd-background p-4 shadow-sm transition hover:border-fd-border hover:bg-fd-muted/15 hover:shadow-md"
          >
            <Link
              className="block rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-fd-ring"
              href={item.href}
            >
              <h3 className="font-medium tracking-tight text-fd-foreground">{item.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-fd-muted-foreground">
                {item.description}
              </p>
            </Link>
            <div
              className="relative mt-4 -mr-6 -mb-6 ml-1 max-h-[220px] min-h-[180px] origin-top scale-[0.88] overflow-hidden rounded-sm border border-fd-border bg-fd-background transition duration-300 ease-out -rotate-2 group-hover:scale-[0.92] group-hover:rotate-0"
            >
              <div className="pointer-events-none p-2">
                <ThemedEmbedCard theme={item.theme} url={item.url} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
