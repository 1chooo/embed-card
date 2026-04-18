import { resolveEmbed } from "./resolve"
import { createThemeVariables, variablesToInlineStyle } from "./theme"
import type { EmbedCardTheme } from "./types"

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

const componentStyles = `
  :host {
    display: block;
    width: 100%;
  }

  .root {
    display: grid;
    gap: 1rem;
    padding: 1.25rem;
    border-radius: var(--embed-card-radius);
    border: 1px solid var(--embed-card-border);
    background: linear-gradient(160deg, color-mix(in srgb, var(--embed-card-background) 94%, white 6%), var(--embed-card-background));
    color: var(--embed-card-text);
    box-shadow: var(--embed-card-shadow);
    backdrop-filter: blur(18px);
    font-family: inherit;
  }

  .header,
  .footer {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .eyebrow,
  .description,
  .muted {
    color: var(--embed-card-muted);
  }

  .eyebrow {
    font-size: 0.82rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .title {
    margin: 0.35rem 0 0;
    font-size: 1.25rem;
    line-height: 1.15;
    font-weight: 700;
  }

  .badge {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
    border: 1px solid color-mix(in srgb, var(--embed-card-accent) 24%, white 76%);
    background: color-mix(in srgb, var(--embed-card-accent) 12%, white 88%);
    color: var(--embed-card-accent);
    font-size: 0.78rem;
    font-weight: 700;
    white-space: nowrap;
  }

  .description {
    margin: 0;
    line-height: 1.6;
    font-size: 0.96rem;
  }

  .preview {
    position: relative;
    overflow: hidden;
    border-radius: calc(var(--embed-card-radius) - 8px);
    border: 1px solid color-mix(in srgb, var(--embed-card-border) 82%, white 18%);
    background: radial-gradient(circle at top, color-mix(in srgb, var(--embed-card-accent) 22%, white 78%), transparent 58%), #ffffff;
  }

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  .fallback {
    display: grid;
    gap: 0.75rem;
    padding: 1rem;
    text-decoration: none;
    color: inherit;
  }

  .invalid {
    display: grid;
    place-items: center;
    min-height: 180px;
    padding: 1.5rem;
    text-align: center;
    font-size: 0.95rem;
  }

  .footer {
    flex-wrap: wrap;
    align-items: center;
    border-top: 1px solid color-mix(in srgb, var(--embed-card-border) 80%, white 20%);
    padding-top: 0.9rem;
  }

  a {
    color: var(--embed-card-accent);
    font-weight: 700;
    text-decoration: none;
  }
`

function getThemeFromAttributes(element: HTMLElement): EmbedCardTheme {
  return {
    accentColor: element.getAttribute("accent-color") ?? undefined,
    background: element.getAttribute("background") ?? undefined,
    borderColor: element.getAttribute("border-color") ?? undefined,
    textColor: element.getAttribute("text-color") ?? undefined,
    mutedColor: element.getAttribute("muted-color") ?? undefined,
    radius: element.getAttribute("radius") ?? undefined,
    shadow: element.getAttribute("shadow") ?? undefined,
  }
}

function renderPreview(url: string): string {
  const resolved = resolveEmbed(url)

  if (resolved.renderer.type === "iframe") {
    const size = [
      `aspect-ratio:${resolved.renderer.aspectRatio ?? "16 / 9"}`,
      resolved.renderer.minHeight
        ? `min-height:${resolved.renderer.minHeight}px`
        : "",
    ]
      .filter(Boolean)
      .join(";")

    return `
      <div class="preview" part="preview" style="${size}">
        <iframe
          allow="${escapeHtml(resolved.renderer.allow ?? "")}"
          ${resolved.renderer.allowFullScreen ? "allowfullscreen" : ""}
          loading="lazy"
          referrerpolicy="${escapeHtml(resolved.renderer.referrerPolicy ?? "strict-origin-when-cross-origin")}"
          ${resolved.renderer.sandbox ? `sandbox="${escapeHtml(resolved.renderer.sandbox)}"` : ""}
          src="${escapeHtml(resolved.renderer.src)}"
          title="${escapeHtml(resolved.renderer.title)}"
        ></iframe>
      </div>
    `
  }

  if (resolved.renderer.type === "link") {
    return `
      <a class="preview fallback" href="${escapeHtml(resolved.renderer.href)}" rel="noreferrer" target="_blank">
        <span class="eyebrow">Fallback preview</span>
        <strong>${escapeHtml(resolved.displayUrl)}</strong>
        <span>${escapeHtml(resolved.renderer.ctaLabel ?? "Open original")}</span>
      </a>
    `
  }

  return `
    <div class="preview invalid" part="invalid">
      ${escapeHtml(resolved.renderer.message)}
    </div>
  `
}

export class EmbedCardElement extends HTMLElement {
  static observedAttributes = [
    "url",
    "accent-color",
    "background",
    "border-color",
    "text-color",
    "muted-color",
    "radius",
    "shadow",
  ]

  connectedCallback(): void {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" })
    }

    this.render()
  }

  attributeChangedCallback(): void {
    this.render()
  }

  private render(): void {
    if (!this.shadowRoot) {
      return
    }

    const url = this.getAttribute("url") ?? ""
    const resolved = resolveEmbed(url)
    const variables = createThemeVariables({
      accentColor: resolved.accentColor,
      ...getThemeFromAttributes(this),
    })

    this.shadowRoot.innerHTML = `
      <style>${componentStyles}</style>
      <article class="root" part="root" data-provider="${escapeHtml(resolved.provider)}" style="${variablesToInlineStyle(variables)}">
        <div class="header" part="header">
          <div>
            <span class="eyebrow">${escapeHtml(resolved.providerLabel)}</span>
            <h3 class="title">${escapeHtml(resolved.title)}</h3>
          </div>
          <span class="badge">${escapeHtml(resolved.site)}</span>
        </div>
        <p class="description">${escapeHtml(resolved.description)}</p>
        ${renderPreview(url)}
        <div class="footer" part="footer">
          <span class="muted">${escapeHtml(resolved.displayUrl)}</span>
          ${
            resolved.renderer.type === "invalid"
              ? ""
              : `<a href="${escapeHtml(resolved.url)}" rel="noreferrer" target="_blank">Open original</a>`
          }
        </div>
      </article>
    `
  }
}

export function registerEmbedCard(tagName = "embed-card"): void {
  if (typeof window === "undefined" || customElements.get(tagName)) {
    return
  }

  customElements.define(tagName, EmbedCardElement)
}

declare global {
  interface HTMLElementTagNameMap {
    "embed-card": EmbedCardElement
  }
}
