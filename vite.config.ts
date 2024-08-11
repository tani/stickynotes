import pages from '@hono/vite-cloudflare-pages'
import adapter from '@hono/vite-dev-server/cloudflare'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkMath from 'remark-math'
import rehypeMathjax from 'rehype-mathjax/svg'
import rehypeInlineCss from 'rehype-inline-css'
import honox from 'honox/vite'
import unocss from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    unocss(),
    honox({ devServer: { adapter } }),
    mdx({
      jsxImportSource: 'hono/jsx',
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter,
        remarkMath
      ],
      rehypePlugins: [
        [rehypeMathjax, {svg: {fontCache: 'none'}}],
        rehypeInlineCss
      ]
    }),
    pages()
  ]
})
