import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import { SiteFooter } from "@/components/site-footer"
import { RootProvider } from "fumadocs-ui/provider/next"

import "./global.css"

export const metadata: Metadata = {
  title: {
    default: "embed-card",
    template: "%s | embed-card",
  },
  description:
    "Pass a URL and render the matching embed card—YouTube, X, Reddit, Maps, Vimeo, and more—without wiring one-off components.",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col font-sans text-fd-foreground antialiased">
        <RootProvider>
          <div className="flex min-h-screen flex-1 flex-col">
            <div className="flex min-h-0 flex-1 flex-col">{children}</div>
            <SiteFooter />
          </div>
        </RootProvider>
      </body>
    </html>
  )
}
