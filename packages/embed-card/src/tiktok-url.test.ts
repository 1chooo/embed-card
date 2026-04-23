import { describe, expect, it } from "vitest"

import {
  extractTikTokVideoId,
  isTikTokEmbedHost,
  isTikTokMainHost,
  isVmTikTokHost,
  isVmTikTokShortLink,
} from "./tiktok-url"

describe("tiktok-url", () => {
  describe("isTikTokMainHost", () => {
    it("recognizes canonical TikTok hosts", () => {
      expect(isTikTokMainHost("tiktok.com")).toBe(true)
      expect(isTikTokMainHost("www.tiktok.com")).toBe(true)
      expect(isTikTokMainHost("m.tiktok.com")).toBe(true)
    })

    it("rejects vm and unrelated hosts", () => {
      expect(isTikTokMainHost("vm.tiktok.com")).toBe(false)
      expect(isTikTokMainHost("example.com")).toBe(false)
    })
  })

  describe("isVmTikTokHost", () => {
    it("recognizes vm short domain", () => {
      expect(isVmTikTokHost("vm.tiktok.com")).toBe(true)
    })
  })

  describe("isTikTokEmbedHost", () => {
    it("covers main and vm hosts", () => {
      expect(isTikTokEmbedHost("www.tiktok.com")).toBe(true)
      expect(isTikTokEmbedHost("vm.tiktok.com")).toBe(true)
    })
  })

  describe("extractTikTokVideoId", () => {
    it("extracts id from common video URL shapes", () => {
      expect(
        extractTikTokVideoId(
          new URL("https://www.tiktok.com/@scout2015/video/6718335390845095173")
        )
      ).toBe("6718335390845095173")

      expect(
        extractTikTokVideoId(
          new URL("https://tiktok.com/@user/video/1234567890123456789/")
        )
      ).toBe("1234567890123456789")

      expect(
        extractTikTokVideoId(
          new URL("https://m.tiktok.com/@creator/video/9876543210987654321?is_from_webapp=1")
        )
      ).toBe("9876543210987654321")
    })

    it("returns null for profiles, tags, and non-main hosts", () => {
      expect(extractTikTokVideoId(new URL("https://www.tiktok.com/@nasa"))).toBeNull()
      expect(extractTikTokVideoId(new URL("https://www.tiktok.com/tag/fyp"))).toBeNull()
      expect(
        extractTikTokVideoId(new URL("https://vm.tiktok.com/ZMxxxxx/"))
      ).toBeNull()
    })
  })

  describe("isVmTikTokShortLink", () => {
    it("accepts vm paths with a single segment", () => {
      expect(isVmTikTokShortLink(new URL("https://vm.tiktok.com/ZMabcdef123/"))).toBe(true)
      expect(isVmTikTokShortLink(new URL("https://vm.tiktok.com/ABC123xyz/"))).toBe(true)
    })

    it("rejects root, nested paths, and non-vm hosts", () => {
      expect(isVmTikTokShortLink(new URL("https://vm.tiktok.com/"))).toBe(false)
      expect(isVmTikTokShortLink(new URL("https://vm.tiktok.com/a/b"))).toBe(false)
      expect(
        isVmTikTokShortLink(new URL("https://www.tiktok.com/@u/video/1"))
      ).toBe(false)
    })
  })
})
