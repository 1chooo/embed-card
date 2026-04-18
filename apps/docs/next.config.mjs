import { createMDX } from "fumadocs-mdx/next"

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["embed-card"],
}

export default withMDX(nextConfig)
