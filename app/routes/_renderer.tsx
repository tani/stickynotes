import { Style } from 'hono/css'
import { jsxRenderer } from 'hono/jsx-renderer'
import { Script } from 'honox/server'

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="icon" href="https://cdn.jsdelivr.net/npm/@twemoji/svg@15/1f4d1.svg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/modern-normalize@2/modern-normalize.css" />
        <link rel="icon" href="/favicon.ico" />
        <Script src="/app/client.ts" async />
        <Style />
      </head>
      <body>{children}</body>
    </html>
  )
})
