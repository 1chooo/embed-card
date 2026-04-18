# embed-card monorepo

A pnpm + Turborepo workspace bootstrapped with `pnpm dlx shadcn@latest init --monorepo`, then extended into a package-focused setup for URL embeds.

## Workspace layout

```txt
apps/
  web/   -> Next.js demo playground
  docs/  -> Fumadocs site
packages/
  embed-card/ -> publishable package
  ui/         -> shared shadcn/ui components
examples/     -> framework usage snippets
```

## What the package does

`embed-card` exposes:

- `EmbedCard` for React / Next.js
- `registerEmbedCard()` for web component usage
- `resolveEmbed()` and provider helpers for manual rendering

Built-in providers currently include YouTube, X / Twitter, Reddit, Vimeo, Google Maps, plus a link-preview fallback.

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm typecheck
```

To run a single app:

```bash
pnpm --filter web dev
pnpm --filter docs dev
```
