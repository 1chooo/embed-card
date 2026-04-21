import { BookOpenText, PlayCircle } from "lucide-react"
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "embed-card",
      url: "/",
    },
    githubUrl: "https://github.com/1chooo/embed-card",
    links: [
      {
        text: "Documentation",
        url: "/docs",
        icon: <BookOpenText className="size-4" />,
        active: "nested-url",
      },
      {
        text: "Playground",
        url: "/#playground",
        icon: <PlayCircle className="size-4" />,
        active: "url",
      },
    ],
  }
}
