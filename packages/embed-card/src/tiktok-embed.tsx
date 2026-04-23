"use client"

import type { CSSProperties } from "react"
import { useEffect, useState } from "react"

import {
  TIKTOK_EMBED_ASPECT_RATIO,
  TIKTOK_EMBED_MAX_WIDTH_PX,
  TIKTOK_EMBED_MIN_HEIGHT_PX,
  tiktokEmbedMaxHeightCss,
} from "./tiktok-embed-layout"
import { fetchTikTokVideoIdFromOEmbed } from "./tiktok-oembed"

const shell: CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100%",
  minHeight: "280px",
  background: "var(--embed-card-preview-canvas)",
}

const shellFlush: CSSProperties = {
  ...shell,
  background: "transparent",
}

const iframeStyle: CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  border: "none",
}

export interface TikTokEmbedPreviewProps {
  shareUrl: string
  className?: string
  style?: CSSProperties
}

export function TikTokEmbedPreview({ shareUrl, className, style }: TikTokEmbedPreviewProps) {
  const [state, setState] = useState<"loading" | "error" | { videoId: string }>("loading")

  useEffect(() => {
    const ac = new AbortController()
    void fetchTikTokVideoIdFromOEmbed(shareUrl, { signal: ac.signal }).then((videoId) => {
      if (ac.signal.aborted) {
        return
      }
      setState(videoId ? { videoId } : "error")
    })
    return () => ac.abort()
  }, [shareUrl])

  if (state === "loading") {
    return (
      <div
        className={className}
        style={{
          ...shell,
          ...style,
          padding: "1.5rem",
          display: "grid",
          gap: "0.75rem",
          alignContent: "center",
          animation: "embed-card-tiktok-pulse 1.4s ease-in-out infinite",
        }}
      >
        <div
          style={{
            height: "10px",
            width: "33%",
            borderRadius: "6px",
            background: "color-mix(in srgb, var(--embed-card-border) 55%, transparent)",
          }}
        />
        <div
          style={{
            height: "14px",
            width: "75%",
            borderRadius: "6px",
            background: "color-mix(in srgb, var(--embed-card-border) 45%, transparent)",
          }}
        />
        <div
          style={{
            height: "14px",
            width: "50%",
            borderRadius: "6px",
            background: "color-mix(in srgb, var(--embed-card-border) 35%, transparent)",
          }}
        />
        <style>{"@keyframes embed-card-tiktok-pulse{0%,100%{opacity:1}50%{opacity:.55}}"}</style>
      </div>
    )
  }

  if (state === "error") {
    return (
      <div
        className={className}
        style={{
          ...shell,
          ...style,
          display: "grid",
          placeItems: "center",
          padding: "2rem",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "var(--embed-card-muted)",
        }}
      >
        Video unavailable.
      </div>
    )
  }

  const src = `https://www.tiktok.com/embed/v2/${state.videoId}`

  return (
    <div
      className={className}
      style={{
        ...shellFlush,
        ...style,
        aspectRatio: TIKTOK_EMBED_ASPECT_RATIO,
        minHeight: `min(${TIKTOK_EMBED_MIN_HEIGHT_PX}px, 90vmin)`,
        maxHeight: tiktokEmbedMaxHeightCss(),
        maxWidth: TIKTOK_EMBED_MAX_WIDTH_PX,
        marginInline: "auto",
      }}
    >
      <iframe
        allow="fullscreen"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        src={src}
        style={iframeStyle}
        title="Embedded TikTok video"
      />
    </div>
  )
}
