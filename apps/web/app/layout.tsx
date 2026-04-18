import type { Metadata } from "next"
import type { CSSProperties } from "react"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"

export const metadata: Metadata = {
  title: "embed-card demo",
  description:
    "A Next.js playground for the embed-card package, built inside a shadcn/ui monorepo.",
}

const fontVariables = {
  "--font-sans": '"Avenir Next", "Trebuchet MS", sans-serif',
  "--font-mono": '"SFMono-Regular", "Menlo", monospace',
} as CSSProperties

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", "font-sans")}
      style={fontVariables}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
