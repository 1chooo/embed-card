import { describe, expect, it } from "vitest"

import { defaultProviders } from "./providers"
import { resolveEmbed } from "./resolve"

describe("resolveEmbed tiktok", () => {
  it("resolves canonical /@user/video/id URLs to TikTok iframe embeds", () => {
    const url = "https://www.tiktok.com/@scout2015/video/6718335390845095173"
    const r = resolveEmbed(url, { providers: defaultProviders })
    expect(r.provider).toBe("tiktok")
    expect(r.renderer.type).toBe("iframe")
    if (r.renderer.type === "iframe") {
      expect(r.renderer.src).toBe(
        "https://www.tiktok.com/embed/v2/6718335390845095173"
      )
    }
  })

  it("resolves vm.tiktok.com short links to tiktok_client renderer", () => {
    const url = "https://vm.tiktok.com/ZMabcdef123/"
    const r = resolveEmbed(url, { providers: defaultProviders })
    expect(r.provider).toBe("tiktok")
    expect(r.renderer.type).toBe("tiktok_client")
    if (r.renderer.type === "tiktok_client") {
      expect(r.renderer.shareUrl).toBe(url)
    }
  })

  it("falls back to link preview for TikTok hosts without a video or vm code", () => {
    const r = resolveEmbed("https://www.tiktok.com/@nasa", { providers: defaultProviders })
    expect(r.provider).toBe("link")
    expect(r.renderer.type).toBe("link")
  })
})
