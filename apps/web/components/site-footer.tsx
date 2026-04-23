import Link from "next/link"

import {
  SITE_AUTHOR_NAME,
  SITE_AUTHOR_URL,
  SITE_AUTHOR_X_URL,
  SITE_GITHUB_URL,
  SITE_NPM_URL,
} from "@/lib/layout.shared"

const linkClass =
  "text-sm text-fd-muted-foreground underline-offset-2 transition hover:text-fd-foreground hover:underline"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-fd-border bg-fd-background">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10 md:flex-row md:items-start md:justify-between md:px-10 md:py-12">
        <div className="max-w-md space-y-3">
          <p className="text-sm font-semibold tracking-tight text-fd-foreground">
            embed-card
          </p>
          <p className="text-sm leading-relaxed text-fd-muted-foreground">
            URL-in, embed-out cards for YouTube, X, Instagram, Reddit, Maps,
            Vimeo, and more—one component for your docs and product pages.
          </p>
          <p className="text-xs text-fd-muted-foreground">
            © {year}{" "}
            <a
              className="font-medium text-fd-foreground underline-offset-2 hover:underline"
              href={SITE_AUTHOR_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              {SITE_AUTHOR_NAME}
            </a>
            . Open source under MIT.
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-col gap-6 sm:flex-row sm:gap-12 md:gap-16"
        >
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-wide text-fd-foreground uppercase">
              Project
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <a className={linkClass} href={SITE_GITHUB_URL}>
                  GitHub
                </a>
              </li>
              <li>
                <a className={linkClass} href={SITE_NPM_URL}>
                  npm
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-wide text-fd-foreground uppercase">
              Docs
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link className={linkClass} href="/docs">
                  Documentation
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/docs/getting-started">
                  Getting started
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/docs/playground">
                  Playground
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/docs/platforms">
                  Supported platforms
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-wide text-fd-foreground uppercase">
              Author
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <a className={linkClass} href={SITE_AUTHOR_URL}>
                  Website
                </a>
              </li>
              <li>
                <a className={linkClass} href={SITE_AUTHOR_X_URL}>
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  )
}
