const TIKTOK_MAIN_HOSTS = new Set(["tiktok.com", "www.tiktok.com", "m.tiktok.com"])
const VM_TIKTOK_HOST = "vm.tiktok.com"

/** Hosts that serve canonical TikTok video pages (`/@handle/video/{id}`). */
export function isTikTokMainHost(hostname: string): boolean {
  return TIKTOK_MAIN_HOSTS.has(hostname)
}

/** Short-link host (`vm.tiktok.com/{code}`). */
export function isVmTikTokHost(hostname: string): boolean {
  return hostname === VM_TIKTOK_HOST
}

export function isTikTokEmbedHost(hostname: string): boolean {
  return isTikTokMainHost(hostname) || isVmTikTokHost(hostname)
}

/**
 * Numeric video id from `/@username/video/123` (with optional trailing slash or query).
 */
export function extractTikTokVideoId(url: URL): string | null {
  if (!isTikTokMainHost(url.hostname)) {
    return null
  }

  const match = url.pathname.match(/\/@[^/]+\/video\/(\d+)/)

  return match?.[1] ?? null
}

/**
 * `vm.tiktok.com` share links: one path segment (the opaque code), no nested paths.
 */
export function isVmTikTokShortLink(url: URL): boolean {
  if (!isVmTikTokHost(url.hostname)) {
    return false
  }

  const segments = url.pathname.split("/").filter(Boolean)

  return segments.length === 1 && segments[0]!.length > 0
}
