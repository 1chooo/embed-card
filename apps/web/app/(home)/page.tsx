import type { Metadata } from "next"

import { DocHighlightCards } from "@/components/home/doc-highlight-cards"
import { FeatureGrid } from "@/components/home/feature-grid"
import { HeroSection } from "@/components/home/hero-section"
import { InstallCommand } from "@/components/home/install-command"
import { HomePlaygroundSection } from "@/components/home-playground-section"
import { SITE_GITHUB_URL, SITE_NPM_URL } from "@/lib/layout.shared"
import { ThemedEmbedCard } from "embed-card/next-themes"

const exampleUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

const description =
  "Pass a URL and render the matching embed card—YouTube, X, Reddit, Maps, Vimeo, and more—without wiring one-off components."

export const metadata: Metadata = {
  title: { absolute: "embed-card" },
  description,
  openGraph: {
    title: "embed-card",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "embed-card",
    description,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "embed-card",
  description,
  url: SITE_NPM_URL,
  codeRepository: SITE_GITHUB_URL,
  programmingLanguage: "TypeScript",
  license: "https://opensource.org/licenses/MIT",
} as const

export default function HomePage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
        type="application/ld+json"
      />
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-14 px-6 pb-20 pt-10 md:gap-16 md:px-10 md:pb-24 md:pt-12">
        <div className="home-hero-surface -mx-2 overflow-hidden shadow-sm sm:-mx-4 md:-mx-6">
          <HeroSection
            preview={
              <ThemedEmbedCard
                theme={{
                  accentColor: "#e11d48",
                  radius: 20,
                }}
                url={exampleUrl}
              />
            }
          />

          <div className="border-t border-fd-border px-5 py-8 sm:px-8">
            <p className="text-[11px] font-semibold tracking-wider text-fd-muted-foreground uppercase">
              Install
            </p>
            <div className="mt-4 max-w-2xl">
              <InstallCommand />
            </div>
          </div>
        </div>

        <section className="space-y-5">
          <div className="max-w-2xl space-y-1.5">
            <h2 className="text-lg font-semibold tracking-tight text-fd-foreground sm:text-xl">
              Built for product pages and docs
            </h2>
            <p className="text-sm leading-relaxed text-fd-muted-foreground">
              One mental model for previews: paste a link, render a card, ship.
              Explore how it maps to your stack below.
            </p>
          </div>
          <FeatureGrid />
        </section>

        <section className="space-y-5">
          <div className="max-w-2xl space-y-1.5">
            <h2 className="text-lg font-semibold tracking-tight text-fd-foreground sm:text-xl">
              Start from a guide
            </h2>
            <p className="text-sm leading-relaxed text-fd-muted-foreground">
              Jump straight into the path that matches how you build.
            </p>
          </div>
          <DocHighlightCards />
        </section>

        <HomePlaygroundSection />
      </main>
    </>
  )
}
