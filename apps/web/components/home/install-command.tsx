"use client"

import { useCallback, useId, useState } from "react"
import { Check, Copy } from "lucide-react"

type PackageManager = "pnpm" | "npm" | "yarn"

const commands: Record<PackageManager, string> = {
  pnpm: "pnpm add embed-card",
  npm: "npm install embed-card",
  yarn: "yarn add embed-card",
}

export function InstallCommand() {
  const statusId = useId()
  const [pm, setPm] = useState<PackageManager>("pnpm")
  const [copied, setCopied] = useState(false)

  const command = commands[pm]

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }, [command])

  return (
    <div className="not-prose space-y-3">
      <div
        aria-label="Package manager"
        className="inline-flex rounded-lg border border-fd-border bg-fd-muted/40 p-0.5"
        role="tablist"
      >
        {(["pnpm", "npm", "yarn"] as const).map((key) => (
          <button
            key={key}
            aria-selected={pm === key}
            className={
              pm === key
                ? "rounded-md bg-fd-background px-3 py-1.5 text-xs font-medium text-fd-foreground shadow-sm ring-1 ring-fd-border/60 transition"
                : "rounded-md px-3 py-1.5 text-xs font-medium text-fd-muted-foreground transition hover:text-fd-foreground"
            }
            onClick={() => setPm(key)}
            role="tab"
            type="button"
          >
            {key}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        <div className="flex min-w-0 flex-1 items-center rounded-lg border border-fd-border bg-fd-card/80 px-3 py-2.5 font-mono text-[13px] leading-relaxed text-fd-foreground shadow-sm">
          <span className="select-all text-fd-muted-foreground" aria-hidden>
            $
          </span>
          <span className="ml-2 min-w-0 flex-1 truncate">{command}</span>
        </div>
        <button
          aria-describedby={statusId}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-fd-border bg-fd-background px-4 py-2.5 text-sm font-medium text-fd-foreground transition hover:bg-fd-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-primary/25"
          onClick={copy}
          type="button"
        >
          {copied ? (
            <Check aria-hidden className="size-4 text-fd-success" />
          ) : (
            <Copy aria-hidden className="size-4 opacity-80" />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <p className="sr-only" id={statusId} role="status">
        {copied ? "Install command copied to clipboard" : ""}
      </p>
    </div>
  )
}
