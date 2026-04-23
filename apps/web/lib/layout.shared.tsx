import type { SVGProps } from "react"
import { BookOpenText, PlayCircle } from "lucide-react"
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"

export const SITE_GITHUB_URL = "https://github.com/1chooo/embed-card"
export const SITE_NPM_URL = "https://www.npmjs.com/package/embed-card"

/** Homepage / footer attribution */
export const SITE_AUTHOR_NAME = "Hugo Lin"
export const SITE_AUTHOR_URL = "https://1chooo.com"
export const SITE_AUTHOR_X_URL = "https://x.com/1chooo___"

function NpmLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zM5.13 5.323l13.837.004-.009 13.834h-3.619l.01-10.382h-3.68v10.37H5.13V5.326z" />
    </svg>
  )
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "embed-card",
      url: "/",
    },
    githubUrl: SITE_GITHUB_URL,
    links: [
      {
        text: "Documentation",
        url: "/docs",
        icon: <BookOpenText className="size-4" />,
        active: "nested-url",
      },
      {
        text: "Playground",
        url: "/docs/playground",
        icon: <PlayCircle className="size-4" />,
        active: "nested-url",
      },
      {
        type: "icon",
        url: SITE_NPM_URL,
        text: "npm",
        label: "embed-card on npm",
        icon: <NpmLogo />,
        active: "none",
      },
    ],
  }
}
