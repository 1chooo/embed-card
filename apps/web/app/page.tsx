import { Blocks, PaintBucket, PanelsTopLeft, Rocket } from "lucide-react"

import { EmbedShowcase } from "@/components/embed-showcase"

const highlights = [
  {
    title: "One package for common embeds",
    description:
      "YouTube, X, Reddit, Vimeo, Google Maps, plus your own custom registry entries.",
    icon: Rocket,
  },
  {
    title: "Framework-friendly architecture",
    description:
      "React consumers import `EmbedCard`, while other stacks can use the same package through web components or low-level helpers.",
    icon: PanelsTopLeft,
  },
  {
    title: "Theme and provider customization",
    description:
      "Control accents, radius, borders, and add your own matchers without forking the package.",
    icon: PaintBucket,
  },
  {
    title: "Monorepo-first workflow",
    description:
      "Demo app, docs app, examples, and the publishable package all live together in one workspace.",
    icon: Blocks,
  },
]

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top_left,rgba(255,82,82,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(245,158,11,0.22),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.72),transparent)] dark:bg-[radial-gradient(circle_at_top_left,rgba(251,113,133,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(250,204,21,0.12),transparent_24%),linear-gradient(180deg,rgba(15,23,42,0.46),transparent)]" />
      <div className="mx-auto flex min-h-svh w-full max-w-7xl flex-col gap-14 px-6 py-10 md:px-10 lg:gap-18 lg:py-14">
        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-7">
            <div className="inline-flex rounded-full border border-border/70 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
              Shadcn monorepo + embed package starter
            </div>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-balance sm:text-6xl lg:text-7xl">
                Build one <span className="text-rose-600">EmbedCard</span> and
                reuse it across apps, docs, and future frameworks.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                This demo app previews the first version of `embed-card`: a
                single frontend package that turns a URL into a clean, branded
                embed experience with minimal setup.
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {highlights.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[28px] border border-border/70 bg-background/85 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur"
              >
                <Icon className="size-5 text-rose-500" />
                <h2 className="mt-4 text-base font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <EmbedShowcase />
      </div>
    </main>
  )
}
