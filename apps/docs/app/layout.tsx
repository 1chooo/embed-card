import type { Metadata } from "next"
import type { CSSProperties, ReactNode } from "react"

import { RootProvider } from "fumadocs-ui/provider/next"

import "./global.css"

export const metadata: Metadata = {
  title: {
    default: "embed-card docs",
    template: "%s | embed-card docs",
  },
  description:
    "Fumadocs-powered documentation for the embed-card monorepo starter.",
}

const fontVariables = {
  "--font-sans": '"Avenir Next", "Gill Sans", sans-serif',
  "--font-mono": '"SFMono-Regular", "Menlo", monospace',
} as CSSProperties

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={fontVariables}
    >
      <body className="flex min-h-screen flex-col font-sans text-fd-foreground">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
