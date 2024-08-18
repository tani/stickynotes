import pages from '@hono/vite-cloudflare-pages'
import adapter from '@hono/vite-dev-server/cloudflare'
import honox from 'honox/vite'
import { defineConfig } from 'vite'
import jsxify from 'unplugin-jsxify/vite'
import markdownIt from 'markdown-it'
import mathjax3 from 'markdown-it-mathjax3'
import frontMatter from 'front-matter'
import Shiki from '@shikijs/markdown-it'

const shiki = await Shiki({
  themes: {
    light: 'vitesse-light',
    dark: 'vitesse-dark'
  }
})

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['html-react-parser'],
    },
  },
  ssr: {
    external: ['html-react-parser'],
  },
  plugins: [
    honox({ devServer: { adapter } }),
    jsxify({
      default: {
        jsxImportSource: 'hono/jsx',
      },
      markdown: {
        extensions: ['.md', '.mdx'],
        render(source) {
          const { body } = frontMatter(source);
          const md = markdownIt()
          md.use(mathjax3)
            .use(shiki)
          return md.render(body)
        },
        extract(source) {
          const { attributes } = frontMatter(source);
          return attributes as Record<string, unknown>;
        }
      }
    }),
    pages()
  ]
})
