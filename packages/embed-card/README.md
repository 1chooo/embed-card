# embed-card

`embed-card` is a small frontend package for turning a URL into a polished embed
card with one install.

## Install

```bash
pnpm add embed-card
```

## React usage

```tsx
import { EmbedCard } from "embed-card"

export function ArticleEmbed() {
  return (
    <EmbedCard url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
  )
}
```

## Theme the card

```tsx
import { EmbedCard } from "embed-card"

export function BrandedEmbed() {
  return (
    <EmbedCard
      url="https://vimeo.com/76979871"
      theme={{
        accentColor: "#e11d48",
        radius: 28,
      }}
    />
  )
}
```

## Web component usage

```ts
import { registerEmbedCard } from "embed-card/web-component"

registerEmbedCard()
```

```html
<embed-card
  url="https://www.google.com/maps?q=Tokyo+Station&output=embed"
  accent-color="#0f766e"
></embed-card>
```

## Low-level manual usage

```ts
import { resolveEmbed } from "embed-card/manual"

const embed = resolveEmbed("https://x.com/vercel/status/1808506503694602450")
```

## Built-in providers

- YouTube
- X / Twitter
- Reddit
- Google Maps
- Vimeo
- Fallback link preview

## Custom providers

```tsx
import {
  EmbedCard,
  createEmbedProvider,
  defaultProviders,
} from "embed-card"

const customProvider = createEmbedProvider({
  id: "docs",
  label: "Docs",
  accentColor: "#7c3aed",
  match: (url) => url.hostname === "docs.example.com",
  resolve: (url) => ({
    provider: "docs",
    providerLabel: "Docs",
    accentColor: "#7c3aed",
    title: "Documentation page",
    description: "Custom providers plug into the same normalized contract.",
    site: url.hostname,
    url: url.toString(),
    displayUrl: url.toString(),
    renderer: {
      type: "link",
      href: url.toString(),
      ctaLabel: "Open docs",
    },
  }),
})

<EmbedCard
  providers={[customProvider, ...defaultProviders]}
  url="https://docs.example.com/platform/embeds"
/>
```
