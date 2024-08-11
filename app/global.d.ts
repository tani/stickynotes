import {} from 'hono'
import type { AttributifyAttributes } from '@unocss/preset-attributify'

type Head = {
  title?: string
}

declare module 'hono' {
  interface Env {
    Variables: {}
    Bindings: {}
  }
  interface ContextRenderer {
    (content: string | Promise<string>, head?: Head): Response | Promise<Response>
  }
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}
