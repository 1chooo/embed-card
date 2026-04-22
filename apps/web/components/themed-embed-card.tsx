"use client"

import { EmbedCard, type EmbedCardProps } from "embed-card"
import { useTheme } from "next-themes"

/**
 * Wraps `EmbedCard` and forwards the web app's resolved theme as `appearance`
 * so the card always matches the site's light/dark setting rather than the OS
 * preference. An explicit `theme.appearance` on the caller still takes precedence.
 */
export function ThemedEmbedCard({ theme, ...props }: EmbedCardProps) {
  const { resolvedTheme } = useTheme()
  const appearance = theme?.appearance ?? (resolvedTheme === "dark" ? "dark" : "light")
  return <EmbedCard {...props} theme={{ ...theme, appearance }} />
}
