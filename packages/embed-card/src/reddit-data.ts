/** Reddit public JSON listing payload (post thread). */

export interface RedditVideo {
  fallback_url: string
  hls_url?: string
  width: number
  height: number
  duration?: number
}

export interface RedditPostRaw {
  title: string
  author: string
  subreddit: string
  score: number
  num_comments: number
  selftext: string
  url: string
  permalink: string
  is_self: boolean
  is_video: boolean
  created_utc: number
  thumbnail: string
  media?: { reddit_video?: RedditVideo }
  preview?: {
    images: { source: { url: string; width: number; height: number } }[]
  }
}

export interface RedditPostData {
  title: string
  author: string
  subreddit: string
  score: number
  num_comments: number
  selftext: string
  url: string
  permalink: string
  is_self: boolean
  is_video: boolean
  created_utc: number
  thumbnail: string
  media?: { reddit_video?: RedditVideo }
  preview?: RedditPostRaw["preview"]
}

export function normalizeRedditPostUrl(url: string): string {
  return url.trim().replace(/\/$/, "")
}

export function decodeRedditHtmlEntities(url: string): string {
  return url.replaceAll("&amp;", "&")
}

export function formatRedditScore(n: number): string {
  if (n >= 1000) {
    return `${(n / 1000).toFixed(1)}k`
  }
  return String(n)
}

export function redditTimeAgo(utc: number): string {
  const diff = Math.floor(Date.now() / 1000 - utc)
  if (diff < 60) return "just now"
  if (diff < 3600) return `${Math.floor(diff / 60)} min. ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)} hr. ago`
  if (diff < 2592000) return `${Math.floor(diff / 86400)} days ago`
  if (diff < 31536000) return `${Math.floor(diff / 2592000)} mo. ago`
  return `${Math.floor(diff / 31536000)} yr. ago`
}

function mapPost(data: RedditPostRaw): RedditPostData {
  return {
    title: data.title,
    author: data.author,
    subreddit: data.subreddit,
    score: data.score,
    num_comments: data.num_comments,
    selftext: data.selftext ?? "",
    url: data.url,
    permalink: data.permalink,
    is_self: Boolean(data.is_self),
    is_video: Boolean(data.is_video),
    created_utc: data.created_utc,
    thumbnail: data.thumbnail ?? "",
    media: data.media,
    preview: data.preview,
  }
}

/**
 * Fetches post metadata from Reddit’s `.json` endpoint (intended for browser use).
 */
export async function fetchRedditPost(
  url: string,
  options?: { signal?: AbortSignal }
): Promise<RedditPostData | null> {
  try {
    const normalised = normalizeRedditPostUrl(url)
    const res = await fetch(`${normalised}.json?limit=1`, { signal: options?.signal })
    if (!res.ok) {
      return null
    }
    const json: unknown = await res.json()
    if (!Array.isArray(json) || json.length < 1) {
      return null
    }
    const first = json[0] as {
      data?: { children?: { data?: RedditPostRaw }[] }
    }
    const post = first?.data?.children?.[0]?.data
    if (!post || typeof post.title !== "string") {
      return null
    }
    return mapPost(post)
  } catch {
    return null
  }
}
