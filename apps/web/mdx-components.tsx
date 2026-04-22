import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"

import {
  CustomRenderingEmbedCardCompare,
  CustomRenderingRedditPreviewCompare,
} from "@/components/custom-rendering-demos"

export function getMDXComponents(
  components?: MDXComponents
): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    CustomRenderingEmbedCardCompare,
    CustomRenderingRedditPreviewCompare,
  }
}

export function useMDXComponents(
  components?: MDXComponents
): MDXComponents {
  return getMDXComponents(components)
}

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>
}
