import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/nuxt@3.0.0-rc.11_ytqihlhqkzccfn7ye2a3kphpxm/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}