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
            The live playground is on the homepage. Use these guides to wire
            the same package into React, a custom element, or a manual render
            path.
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  )
}
