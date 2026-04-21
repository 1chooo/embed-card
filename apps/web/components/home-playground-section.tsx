import Link from "next/link"

import { EmbedPlayground } from "@/components/embed-playground"

export function HomePlaygroundSection() {
  return (
    <section
      className="scroll-mt-24 border-t border-fd-border pt-16"
      id="playground"
    >
      <div className="mb-8 max-w-2xl space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-fd-foreground">
          Playground
        </h2>
        <p className="text-sm leading-6 text-fd-muted-foreground">
          Choose a sample URL and a theme preset—the preview updates right
          away. Copy the React snippet for your app, or open{" "}
          <Link
            className="font-medium text-fd-foreground underline-offset-2 hover:underline"
            href="/docs/playground"
          >
            /docs/playground
          </Link>{" "}
          for full slider controls.
        </p>
      </div>
      <EmbedPlayground
        bleed={false}
        defaultSnippetOpen={false}
        mode="simple"
      />
    </section>
  )
}
