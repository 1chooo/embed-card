import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"

export function getMDXComponents(
  components?: MDXComponents
): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
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
