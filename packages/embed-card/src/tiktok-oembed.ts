const DATA_VIDEO_ID_RE = /data-video-id="(\d+)"/
const VIDEO_IN_PATH_RE = /\/video\/(\d+)/

export async function fetchTikTokVideoIdFromOEmbed(
  shareUrl: string,
  options?: { signal?: AbortSignal }
): Promise<string | null> {
  const oembedUrl = new URL("https://www.tiktok.com/oembed")
  oembedUrl.searchParams.set("url", shareUrl)

  let res: Response
  try {
    res = await fetch(oembedUrl.toString(), { signal: options?.signal })
  } catch {
    return null
  }

  if (!res.ok) {
    return null
  }

  let data: unknown
  try {
    data = await res.json()
  } catch {
    return null
  }

  if (!data || typeof data !== "object" || !("html" in data)) {
    return null
  }

  const html = String((data as { html?: unknown }).html ?? "")
  const fromDataAttr = html.match(DATA_VIDEO_ID_RE)
  if (fromDataAttr?.[1]) {
    return fromDataAttr[1]
  }

  const fromPath = html.match(VIDEO_IN_PATH_RE)
  return fromPath?.[1] ?? null
}
