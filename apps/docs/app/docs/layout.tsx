import type { ReactNode } from "react"

import { DocsLayout } from "fumadocs-ui/layouts/docs"

import { baseOptions } from "@/lib/layout.shared"
import { source } from "@/lib/source"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...baseOptions()}
      tree={source.getPageTree()}
      sidebar={{
        banner: (
          <div className="rounded-2xl border border-fd-border/70 bg-white/80 p-4 text-sm leading-6 text-fd-muted-foreground dark:bg-white/5">
            One package, many surfaces. Use React, a custom element, or the
            low-level resolver depending on the app.
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  )
}
