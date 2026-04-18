import {
  EmbedCard,
  createEmbedProvider,
  defaultProviders,
} from "embed-card"

const docsProvider = createEmbedProvider({
  id: "company-docs",
  label: "Company Docs",
  accentColor: "#7c3aed",
  match: (url) => url.hostname === "docs.example.com",
  resolve: (url) => ({
    provider: "company-docs",
    providerLabel: "Company Docs",
    accentColor: "#7c3aed",
    title: "Internal docs",
    description: "Extend the registry instead of forking the component.",
    site: url.hostname,
    url: url.toString(),
    displayUrl: url.toString(),
    renderer: {
      type: "link",
      href: url.toString(),
      ctaLabel: "Read docs",
    },
  }),
})

export function ManualProviderExample() {
  return (
    <EmbedCard
      providers={[docsProvider, ...defaultProviders]}
      url="https://docs.example.com/platform/embeds"
    />
  )
}
