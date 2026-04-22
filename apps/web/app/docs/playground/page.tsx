import type { Metadata } from "next"
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page"

import { EmbedPlayground } from "@/components/embed-playground"

export const metadata: Metadata = {
  title: "Playground",
  description:
    "Try sample URLs; the live preview and React snippet stay in sync as you edit.",
}

export default function DocsPlaygroundPage() {
  return (
    <DocsPage full>
      <DocsTitle>Playground</DocsTitle>
      <DocsDescription>
        Paste a URL or pick a sample. The snippet matches the preview; use the
        copy control on the code block when you are ready.
      </DocsDescription>
      <DocsBody>
        <EmbedPlayground />
      </DocsBody>
    </DocsPage>
  )
}
