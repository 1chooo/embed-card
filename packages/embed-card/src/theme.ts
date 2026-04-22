import type { EmbedCardTheme } from "./types"

/** Default `theme.shadow` when the field is omitted. Single source of truth for docs and tools. */
export const EMBED_CARD_DEFAULT_SHADOW = "none" as const

/** Default `theme.fontFamily` when the field is omitted. */
export const EMBED_CARD_DEFAULT_FONT_FAMILY =
  'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' as const

export interface EmbedCardCssVariables {
  "--embed-card-accent": string
  "--embed-card-background": string
  "--embed-card-border": string
  "--embed-card-text": string
  "--embed-card-muted": string
  "--embed-card-radius": string
  "--embed-card-shadow": string
  "--embed-card-font-family": string
}

const defaultTheme: Required<EmbedCardTheme> = {
  accentColor: "#111827",
  background: "rgba(255, 255, 255, 0.98)",
  borderColor: "rgba(15, 23, 42, 0.12)",
  textColor: "#0f172a",
  mutedColor: "rgba(15, 23, 42, 0.62)",
  radius: "24px",
  shadow: EMBED_CARD_DEFAULT_SHADOW,
  fontFamily: EMBED_CARD_DEFAULT_FONT_FAMILY,
}

function toSize(value: number | string | undefined, fallback: string): string {
  if (typeof value === "number") {
    return `${value}px`
  }

  return value ?? fallback
}

export function createThemeVariables(
  theme: EmbedCardTheme = {}
): EmbedCardCssVariables {
  return {
    "--embed-card-accent": theme.accentColor ?? defaultTheme.accentColor,
    "--embed-card-background": theme.background ?? defaultTheme.background,
    "--embed-card-border": theme.borderColor ?? defaultTheme.borderColor,
    "--embed-card-text": theme.textColor ?? defaultTheme.textColor,
    "--embed-card-muted": theme.mutedColor ?? defaultTheme.mutedColor,
    "--embed-card-radius": toSize(theme.radius, toSize(defaultTheme.radius, "24px")),
    "--embed-card-shadow": theme.shadow ?? defaultTheme.shadow,
    "--embed-card-font-family": theme.fontFamily ?? defaultTheme.fontFamily,
  }
}

export function variablesToInlineStyle(
  variables: EmbedCardCssVariables
): string {
  return Object.entries(variables)
    .map(([key, value]) => `${key}:${value}`)
    .join(";")
}
