// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../components.plugin").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt-hedge@0.1.6/node_modules/nuxt-hedge/dist/runtime/lib/vueuse-head.plugin").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt-hedge@0.1.6/node_modules/nuxt-hedge/dist/runtime/plugin").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.0.0-rc.11_ytqihlhqkzccfn7ye2a3kphpxm/node_modules/nuxt/dist/pages/runtime/router").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/plugin").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt-schema-org@1.1.0-beta.4_typescript@4.8.4/node_modules/nuxt-schema-org/dist/runtime/plugin").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt-schema-org@1.1.0-beta.4_typescript@4.8.4/node_modules/nuxt-schema-org/dist/runtime/plugin-fallback.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+image-edge@1.0.0-27719579.87dcdf2/node_modules/@nuxt/image-edge/dist/runtime/plugin").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.1.7/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.1.7/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.0.0-rc.11_ytqihlhqkzccfn7ye2a3kphpxm/node_modules/nuxt/dist/app/plugins/payload.client").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
