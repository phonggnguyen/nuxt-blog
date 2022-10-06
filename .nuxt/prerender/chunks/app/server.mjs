import { getCurrentInstance, ref, onServerPrefetch, inject, watchEffect, defineAsyncComponent, unref, getCurrentScope, onScopeDispose, defineComponent, provide, h, Suspense, Transition, computed, reactive, watch as watch$1, useSSRContext, createElementBlock, resolveComponent, markRaw, shallowRef, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment as Fragment$1, withAsyncContext, createCommentVNode, createTextVNode, createApp, toRef, isRef, onErrorCaptured, nextTick, createStaticVNode, createElementVNode } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/vue@3.2.40/node_modules/vue/index.mjs';
import { $fetch as $fetch$1 } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/ohmyfetch@0.4.19/node_modules/ohmyfetch/dist/node.mjs';
import { withBase, withLeadingSlash, withoutTrailingSlash, joinURL, hasProtocol, isEqual as isEqual$1, encodeParam, parseURL, encodePath } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/ufo@0.8.5/node_modules/ufo/dist/index.mjs';
import { createHooks } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/hookable@5.3.0/node_modules/hookable/dist/index.mjs';
import { getContext, executeAsync } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/unctx@1.2.0/node_modules/unctx/dist/index.mjs';
import { RouterView, createMemoryHistory, createRouter } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/vue-router@4.1.5_vue@3.2.40/node_modules/vue-router/dist/vue-router.node.mjs';
import destr from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs';
import { createError as createError$1, appendHeader, sendRedirect } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/h3@0.7.21/node_modules/h3/dist/index.mjs';
import { defuFn, defu } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/defu@6.1.0/node_modules/defu/dist/defu.mjs';
import { unpackMeta as unpackMeta$1, packMeta } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/zhead@0.8.5/node_modules/zhead/dist/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderSuspense } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/vue@3.2.40/node_modules/vue/server-renderer/index.mjs';
import { createSchemaOrg } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/@vueuse+schema-org@1.1.0-beta.4_typescript@4.8.4/node_modules/@vueuse/schema-org/dist/index.mjs';
import { articleResolver, breadcrumbResolver, webPageResolver, personResolver, webSiteResolver } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/schema-org-graph-js@0.5.1_typescript@4.8.4/node_modules/schema-org-graph-js/dist/index.mjs';
import { isEqual, hash } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/ohash@0.1.5/node_modules/ohash/dist/index.mjs';
import { parse, serialize } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs';
import { a as useRuntimeConfig$1 } from '../nitro/nitro-prerenderer.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/node-fetch-native@0.1.7/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/radix3@0.1.2/node_modules/radix3/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/unenv@0.6.2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/scule@0.2.1/node_modules/scule/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/unstorage@0.4.2/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/unstorage@0.4.2/node_modules/unstorage/dist/drivers/fs.mjs';
import 'node:url';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/ipx@0.9.11/node_modules/ipx/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/pathe@0.3.8/node_modules/pathe/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/unist-util-visit@4.1.1/node_modules/unist-util-visit/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/remark-emoji@3.0.2/node_modules/remark-emoji/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/rehype-slug@5.0.1/node_modules/rehype-slug/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/remark-squeeze-paragraphs@5.0.1/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/rehype-external-links@1.0.1/node_modules/rehype-external-links/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/remark-gfm@3.0.1/node_modules/remark-gfm/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/rehype-sort-attribute-values@4.0.0/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/rehype-sort-attributes@4.0.0/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/rehype-raw@6.1.1/node_modules/rehype-raw/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/js-yaml@4.1.0/node_modules/js-yaml/dist/js-yaml.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/flat@5.0.2/node_modules/flat/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/unified@10.1.2/node_modules/unified/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/remark-parse@10.0.1/node_modules/remark-parse/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/remark-rehype@10.1.0/node_modules/remark-rehype/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/stringify-entities@4.0.3/node_modules/stringify-entities/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/parse-entities@4.0.0/node_modules/parse-entities/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/micromark-util-character@1.1.0/node_modules/micromark-util-character/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/micromark-factory-space@1.0.0/node_modules/micromark-factory-space/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/micromark-factory-whitespace@1.0.0/node_modules/micromark-factory-whitespace/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/detab@3.0.1/node_modules/detab/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/unist-builder@3.0.0/node_modules/unist-builder/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/mdurl@1.0.1/node_modules/mdurl/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/unist-util-position@4.0.3/node_modules/unist-util-position/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/html-tags@3.2.0/node_modules/html-tags/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/slugify@1.6.5/node_modules/slugify/slugify.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/@iconify+utils@2.0.0/node_modules/@iconify/utils/lib/loader/node-loader.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/cheerio@1.0.0-rc.10/node_modules/cheerio/lib/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/shiki-es@0.1.2/node_modules/shiki-es/dist/shiki.node.mjs';

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const buildAssetsDir = () => appConfig.buildAssetsDir;
const buildAssetsURL = (...path) => joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
};
globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options2) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    _asyncData: {},
    ...options2
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options2.ssrContext.runtimeConfig.public,
      app: options2.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options2.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a;
      if (prop === "public") {
        return target.public;
      }
      return (_a = target[prop]) != null ? _a : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return null;
    }
    if (plugin.length > 1) {
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    return plugin;
  }).filter(Boolean);
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const getDefault = () => null;
function useAsyncData(...args) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options2 = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options2.server = (_a = options2.server) != null ? _a : true;
  options2.default = (_b = options2.default) != null ? _b : getDefault;
  if (options2.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options2.lazy = (_d = (_c = options2.lazy) != null ? _c : options2.defer) != null ? _d : false;
  options2.initialCache = (_e = options2.initialCache) != null ? _e : true;
  options2.immediate = (_f = options2.immediate) != null ? _f : true;
  const nuxt = useNuxtApp();
  const useInitialCache = () => (nuxt.isHydrating || options2.initialCache) && nuxt.payload.data[key] !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref(useInitialCache() ? nuxt.payload.data[key] : (_h = (_g = options2.default) == null ? void 0 : _g.call(options2)) != null ? _h : null),
      pending: ref(!useInitialCache()),
      error: ref((_i = nuxt.payload._errors[key]) != null ? _i : null)
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((result) => {
      if (options2.transform) {
        result = options2.transform(result);
      }
      if (options2.pick) {
        result = pick(result, options2.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      var _a2, _b2;
      asyncData.error.value = error;
      asyncData.data.value = unref((_b2 = (_a2 = options2.default) == null ? void 0 : _a2.call(options2)) != null ? _b2 : null);
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options2.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options2.immediate) {
    const promise = initialFetch();
    onServerPrefetch(() => promise);
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const throwError = showError;
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const CookieDefaults = {
  path: "/",
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a, _b;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref((_b = cookies[name]) != null ? _b : (_a = opts.default) == null ? void 0 : _a.call(opts));
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  var _a;
  {
    return parse(((_a = useRequestEvent()) == null ? void 0 : _a.req.headers.cookie) || "", opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return serialize(name, value, { ...opts, maxAge: -1 });
  }
  return serialize(name, value, opts);
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const navigateTo = (to, options2) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = hasProtocol(toPath, true);
  if (isExternal && !(options2 == null ? void 0 : options2.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, (options2 == null ? void 0 : options2.redirectCode) || 302));
    }
  }
  if (isExternal) {
    if (options2 == null ? void 0 : options2.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options2 == null ? void 0 : options2.replace) ? router.replace(to) : router.push(to);
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options2) {
  const componentName2 = options2.componentName || "NuxtLink";
  return defineComponent({
    name: componentName2,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        return props.to || props.href || "";
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      const prefetched = ref(false);
      return () => {
        var _a, _b, _c;
        if (!isExternal.value) {
          return h(
            resolveComponent("RouterLink"),
            {
              ref: void 0,
              to: to.value,
              ...prefetched.value && !props.custom ? { class: props.prefetchedClass || options2.prefetchedClass } : {},
              activeClass: props.activeClass || options2.activeClass,
              exactActiveClass: props.exactActiveClass || options2.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? (_b = (_a = router.resolve(to.value)) == null ? void 0 : _a.href) != null ? _b : null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options2.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { href, rel, target }, (_c = slots.default) == null ? void 0 : _c.call(slots));
      };
    }
  });
}
const __nuxt_component_0$3 = defineNuxtLink({ componentName: "NuxtLink" });
const inlineConfig = {};
defuFn(inlineConfig);
const isObject = (val) => val !== null && typeof val === "object";
const isArray = Array.isArray;
const smartUnref = (val) => {
  if (val !== null && !isRef(val) && typeof val === "object")
    return deepUnref(val);
  return unref(val);
};
const unrefArray = (arr) => {
  const unreffed = [];
  arr.forEach((val) => {
    unreffed.push(smartUnref(val));
  });
  return unreffed;
};
const unrefObject = (obj) => {
  const unreffed = {};
  Object.keys(obj).forEach((key) => {
    unreffed[key] = smartUnref(obj[key]);
  });
  return unreffed;
};
const deepUnref = (val) => {
  const checkedVal = typeof val === "function" ? val() : unref(val);
  if (!isObject(checkedVal))
    return checkedVal;
  if (isArray(checkedVal))
    return unrefArray(checkedVal);
  return unrefObject(checkedVal);
};
function unpackMeta(input) {
  const val = ref();
  watch$1(() => input, () => {
    val.value = unpackMeta$1(deepUnref(input));
  }, {
    immediate: true,
    deep: true
  });
  return val;
}
function useMetaTags(metaTags) {
  const tags = ref([]);
  watchEffect(() => {
    tags.value = unpackMeta(metaTags).value;
    useHead({
      meta: tags.value
    });
  });
  return tags;
}
function useHead(meta2) {
  useNuxtApp()._useHead(meta2);
}
const components = {
  Breadcrumbs: defineAsyncComponent(() => import('./_nuxt/Breadcrumbs.1630eadf.mjs').then((c) => c.default || c)),
  CodeBlock: defineAsyncComponent(() => import('./_nuxt/CodeBlock.62d22384.mjs').then((c) => c.default || c)),
  Image: defineAsyncComponent(() => import('./_nuxt/Image.544dd2b2.mjs').then((c) => c.default || c)),
  List: defineAsyncComponent(() => import('./_nuxt/List.00d821bb.mjs').then((c) => c.default || c)),
  PostList: defineAsyncComponent(() => import('./_nuxt/PostList.cb0f3f6a.mjs').then((c) => c.default || c)),
  ProjectList: defineAsyncComponent(() => import('./_nuxt/ProjectList.c03362a5.mjs').then((c) => c.default || c)),
  Prose: defineAsyncComponent(() => import('./_nuxt/Prose.3b01a91f.mjs').then((c) => c.default || c)),
  Tip: defineAsyncComponent(() => import('./_nuxt/Tip.2fd789f0.mjs').then((c) => c.default || c)),
  WindiIcon: defineAsyncComponent(() => import('./_nuxt/WindiIcon.c96381a8.mjs').then((c) => c.default || c)),
  ContentDoc: defineAsyncComponent(() => import('./_nuxt/ContentDoc.275f24fb.mjs').then((c) => c.default || c)),
  ContentList: defineAsyncComponent(() => import('./_nuxt/ContentList.40628fce.mjs').then((c) => c.default || c)),
  ContentNavigation: defineAsyncComponent(() => import('./_nuxt/ContentNavigation.c52a1fd2.mjs').then((c) => c.default || c)),
  ContentQuery: defineAsyncComponent(() => import('./_nuxt/ContentQuery.0bfd106b.mjs').then((c) => c.default || c)),
  ContentRenderer: defineAsyncComponent(() => import('./_nuxt/ContentRenderer.db5b5b9b.mjs').then((c) => c.default || c)),
  Markdown: defineAsyncComponent(() => import('./_nuxt/Markdown.9a5e26d7.mjs').then((c) => c.default || c)),
  MarkdownRenderer: defineAsyncComponent(() => import('./_nuxt/MarkdownRenderer.5d536282.mjs').then((c) => c.default || c)),
  ProseA: defineAsyncComponent(() => import('./_nuxt/ProseA.2c798e88.mjs').then((c) => c.default || c)),
  ProseBlockquote: defineAsyncComponent(() => import('./_nuxt/ProseBlockquote.7bffc1c5.mjs').then((c) => c.default || c)),
  ProseCode: defineAsyncComponent(() => import('./_nuxt/ProseCode.a8b25332.mjs').then((c) => c.default || c)),
  ProseCodeInline: defineAsyncComponent(() => import('./_nuxt/ProseCodeInline.11fab5cd.mjs').then((c) => c.default || c)),
  ProseEm: defineAsyncComponent(() => import('./_nuxt/ProseEm.3c1afd96.mjs').then((c) => c.default || c)),
  ProseH1: defineAsyncComponent(() => import('./_nuxt/ProseH1.f46c294e.mjs').then((c) => c.default || c)),
  ProseH2: defineAsyncComponent(() => import('./_nuxt/ProseH2.eb428fec.mjs').then((c) => c.default || c)),
  ProseH3: defineAsyncComponent(() => import('./_nuxt/ProseH3.2dd85124.mjs').then((c) => c.default || c)),
  ProseH4: defineAsyncComponent(() => import('./_nuxt/ProseH4.b129df17.mjs').then((c) => c.default || c)),
  ProseH5: defineAsyncComponent(() => import('./_nuxt/ProseH5.481336f9.mjs').then((c) => c.default || c)),
  ProseH6: defineAsyncComponent(() => import('./_nuxt/ProseH6.1535acfc.mjs').then((c) => c.default || c)),
  ProseHr: defineAsyncComponent(() => import('./_nuxt/ProseHr.207d6d4e.mjs').then((c) => c.default || c)),
  ProseImg: defineAsyncComponent(() => import('./_nuxt/ProseImg.610bae40.mjs').then((c) => c.default || c)),
  ProseLi: defineAsyncComponent(() => import('./_nuxt/ProseLi.2935d876.mjs').then((c) => c.default || c)),
  ProseOl: defineAsyncComponent(() => import('./_nuxt/ProseOl.ce21eb5c.mjs').then((c) => c.default || c)),
  ProseP: defineAsyncComponent(() => import('./_nuxt/ProseP.4fde5aca.mjs').then((c) => c.default || c)),
  ProseStrong: defineAsyncComponent(() => import('./_nuxt/ProseStrong.a15b8263.mjs').then((c) => c.default || c)),
  ProseTable: defineAsyncComponent(() => import('./_nuxt/ProseTable.548dec36.mjs').then((c) => c.default || c)),
  ProseTbody: defineAsyncComponent(() => import('./_nuxt/ProseTbody.a8bbc247.mjs').then((c) => c.default || c)),
  ProseTd: defineAsyncComponent(() => import('./_nuxt/ProseTd.10a9ea00.mjs').then((c) => c.default || c)),
  ProseTh: defineAsyncComponent(() => import('./_nuxt/ProseTh.80491611.mjs').then((c) => c.default || c)),
  ProseThead: defineAsyncComponent(() => import('./_nuxt/ProseThead.7c262cec.mjs').then((c) => c.default || c)),
  ProseTr: defineAsyncComponent(() => import('./_nuxt/ProseTr.a53793e4.mjs').then((c) => c.default || c)),
  ProseUl: defineAsyncComponent(() => import('./_nuxt/ProseUl.0e75691a.mjs').then((c) => c.default || c))
};
const _nuxt_components_plugin_mjs_KR1HBZs4kY = defineNuxtPlugin((nuxtApp) => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
});
const isClient = false;
const isFunction = (val) => typeof val === "function";
const isNumber = (val) => typeof val === "number";
const isString = (val) => typeof val === "string";
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const noop = () => {
};
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function useTimeoutFn(cb, interval, options2 = {}) {
  const {
    immediate = true
  } = options2;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, resolveUnref(interval));
  }
  if (immediate) {
    isPending.value = true;
  }
  tryOnScopeDispose(stop);
  return {
    isPending,
    start,
    stop
  };
}
var PROVIDE_KEY = "usehead";
var HEAD_COUNT_KEY = "head:count";
var HEAD_ATTRS_KEY = "data-head-attrs";
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var BODY_TAG_ATTR_NAME = "data-meta-body";
var sortTags = (aTag, bTag) => {
  const tagWeight = (tag) => {
    if (tag.props.renderPriority)
      return tag.props.renderPriority;
    switch (tag.tag) {
      case "base":
        return -1;
      case "meta":
        if (tag.props.charset)
          return -2;
        if (tag.props["http-equiv"] === "content-security-policy")
          return 0;
        return 10;
      default:
        return 10;
    }
  };
  return tagWeight(aTag) - tagWeight(bTag);
};
var tagDedupeKey = (tag) => {
  if (!["meta", "base", "script", "link"].includes(tag.tag))
    return false;
  const { props, tag: tagName } = tag;
  if (tagName === "base")
    return "base";
  if (tagName === "link" && props.rel === "canonical")
    return "canonical";
  if (props.charset)
    return "charset";
  const name = ["key", "id", "name", "property", "http-equiv"];
  for (const n of name) {
    let value;
    if (typeof props.getAttribute === "function" && props.hasAttribute(n))
      value = props.getAttribute(n);
    else
      value = props[n];
    if (value !== void 0) {
      return `${tagName}-${n}-${value}`;
    }
  }
  return false;
};
function resolveUnrefDeeply(ref2) {
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map(resolveUnrefDeeply);
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([key, value]) => {
        if (key === "titleTemplate")
          return [key, unref(value)];
        return [
          key,
          resolveUnrefDeeply(value)
        ];
      })
    );
  }
  return root;
}
function resolveHeadInput(obj) {
  return resolveUnrefDeeply(obj);
}
var createElement = (tag, attrs, document2) => {
  const el = document2.createElement(tag);
  for (const key of Object.keys(attrs)) {
    if (key === "body" && attrs.body === true) {
      el.setAttribute(BODY_TAG_ATTR_NAME, "true");
    } else {
      const value = attrs[key];
      if (key === "renderPriority" || key === "key" || value === false)
        continue;
      if (key === "children")
        el.textContent = value;
      else
        el.setAttribute(key, value);
    }
  }
  return el;
};
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs))
        el.removeAttribute(key);
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false)
      el.removeAttribute(key);
    else
      el.setAttribute(key, value);
    keys.push(key);
  }
  if (keys.length)
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  else
    el.removeAttribute(HEAD_ATTRS_KEY);
};
var updateElements = (document2 = window.document, type, tags) => {
  var _a, _b;
  const head = document2.head;
  const body = document2.body;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const bodyMetaElements = body.querySelectorAll(`[${BODY_TAG_ATTR_NAME}]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldHeadElements = [];
  const oldBodyElements = [];
  if (bodyMetaElements) {
    for (let i = 0; i < bodyMetaElements.length; i++) {
      if (bodyMetaElements[i] && ((_a = bodyMetaElements[i].tagName) == null ? void 0 : _a.toLowerCase()) === type)
        oldBodyElements.push(bodyMetaElements[i]);
    }
  }
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_b = j == null ? void 0 : j.tagName) == null ? void 0 : _b.toLowerCase()) === type)
        oldHeadElements.push(j);
    }
  } else {
    headCountEl = document2.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => {
    var _a2;
    return {
      element: createElement(tag.tag, tag.props, document2),
      body: (_a2 = tag.props.body) != null ? _a2 : false
    };
  });
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldHeadElements.length; i++) {
      const oldEl = oldHeadElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldHeadElements.splice(i, 1);
        return false;
      }
    }
    for (let i = 0; i < oldBodyElements.length; i++) {
      const oldEl = oldBodyElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldBodyElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldBodyElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  oldHeadElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    if (t.body === true)
      body.insertAdjacentElement("beforeend", t.element);
    else
      head.insertBefore(t.element, headCountEl);
  });
  headCountEl.setAttribute(
    "content",
    `${headCount - oldHeadElements.length + newElements.filter((t) => !t.body).length}`
  );
};
var stringifyAttrName = (str) => str.replace(/[\s"'><\/=]/g, "").replace(/[^a-zA-Z0-9_-]/g, "");
var stringifyAttrValue = (str) => str.replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (const [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key")
      continue;
    if (value === false || value == null)
      continue;
    let attribute = stringifyAttrName(key);
    if (value !== true)
      attribute += `="${stringifyAttrValue(String(value))}"`;
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? ` ${handledAttributes.join(" ")}` : "";
};
var tagToString = (tag) => {
  let isBodyTag = false;
  if (tag.props.body) {
    isBodyTag = true;
    delete tag.props.body;
  }
  if (tag.props.renderPriority)
    delete tag.props.renderPriority;
  const attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}${isBodyTag ? `  ${BODY_TAG_ATTR_NAME}="true"` : ""}>`;
  }
  return `<${tag.tag}${attrs}${isBodyTag ? ` ${BODY_TAG_ATTR_NAME}="true"` : ""}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  const htmlAttrs = {};
  const bodyAttrs = {};
  const bodyTags = [];
  for (const tag of head.headTags.sort(sortTags)) {
    if (tag.tag === "title")
      titleTag = tagToString(tag);
    else if (tag.tag === "htmlAttrs")
      Object.assign(htmlAttrs, tag.props);
    else if (tag.tag === "bodyAttrs")
      Object.assign(bodyAttrs, tag.props);
    else if (tag.props.body)
      bodyTags.push(tagToString(tag));
    else
      tags.push(tagToString(tag));
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs({
        ...htmlAttrs,
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      });
    },
    get bodyAttrs() {
      return stringifyAttrs({
        ...bodyAttrs,
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      });
    },
    get bodyTags() {
      return bodyTags.join("");
    }
  };
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "noscript",
  "htmlAttrs",
  "bodyAttrs"
];
var renderTitleTemplate = (template, title) => {
  if (template == null)
    return "";
  if (typeof template === "function")
    return template(title);
  return template.replace("%s", title != null ? title : "");
};
var headObjToTags = (obj) => {
  const tags = [];
  const keys = Object.keys(obj);
  const convertLegacyKey = (value) => {
    if (value.hid) {
      value.key = value.hid;
      delete value.hid;
    }
    if (value.vmid) {
      value.key = value.vmid;
      delete value.vmid;
    }
    return value;
  };
  for (const key of keys) {
    if (obj[key] == null)
      continue;
    switch (key) {
      case "title":
        tags.push({ tag: key, props: { children: obj[key] } });
        break;
      case "titleTemplate":
        break;
      case "base":
        tags.push({ tag: key, props: { key: "default", ...obj[key] } });
        break;
      default:
        if (acceptFields.includes(key)) {
          const value = obj[key];
          if (Array.isArray(value)) {
            value.forEach((item) => {
              const props = convertLegacyKey(item);
              tags.push({ tag: key, props });
            });
          } else if (value) {
            tags.push({ tag: key, props: convertLegacyKey(value) });
          }
        }
        break;
    }
  }
  return tags;
};
var createHead = (initHeadObject) => {
  let allHeadObjs = [];
  const previousTags = /* @__PURE__ */ new Set();
  const hookBeforeDomUpdate = [];
  const hookTagsResolved = [];
  if (initHeadObject)
    allHeadObjs.push(initHeadObject);
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    hookBeforeDomUpdate,
    hookTagsResolved,
    get headTags() {
      const deduped = [];
      const deduping = {};
      const resolvedHeadObjs = allHeadObjs.map(resolveHeadInput);
      const titleTemplate = resolvedHeadObjs.map((i) => i.titleTemplate).reverse().find((i) => i != null);
      resolvedHeadObjs.forEach((objs, headObjectIdx) => {
        const tags2 = headObjToTags(objs);
        tags2.forEach((tag, tagIdx) => {
          tag._position = headObjectIdx * 1e4 + tagIdx;
          if (titleTemplate && tag.tag === "title") {
            tag.props.children = renderTitleTemplate(
              titleTemplate,
              tag.props.children
            );
          }
          const dedupeKey = tagDedupeKey(tag);
          if (dedupeKey)
            deduping[dedupeKey] = tag;
          else
            deduped.push(tag);
        });
      });
      deduped.push(...Object.values(deduping));
      const tags = deduped.sort((a, b) => a._position - b._position);
      if (head.hookTagsResolved) {
        for (const k in head.hookTagsResolved)
          head.hookTagsResolved[k](tags);
      }
      return tags;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document2 = window.document) {
      let title;
      const htmlAttrs = {};
      const bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags.sort(sortTags)) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (head.hookBeforeDomUpdate) {
        for (const k in head.hookBeforeDomUpdate) {
          const res = head.hookBeforeDomUpdate[k](actualTags);
          if (res === false)
            return;
        }
      }
      if (title !== void 0)
        document2.title = title;
      setAttrs(document2.documentElement, htmlAttrs);
      setAttrs(document2.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags)
        updateElements(document2, tag, actualTags[tag] || []);
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
const options = { "seoOptimise": true, "resolveAliases": false, "meta": [], "link": [], "style": [], "script": [] };
const node_modules__pnpm_nuxt_hedge_640_1_6_node_modules_nuxt_hedge_dist_runtime_lib_vueuse_head_plugin_mjs_oDjKmZe6Fp = defineNuxtPlugin((nuxtApp) => {
  const { resolveAliases, seoOptimise } = options;
  const head = createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    watchEffect(() => {
      head.updateDOM();
    });
  });
  if (resolveAliases) {
    head.hookTagsResolved.push(async (tags) => {
      var _a, _b;
      const props = ["href", "src"];
      for (const i in tags) {
        for (const prop of props) {
          if (((_b = (_a = tags[i]) == null ? void 0 : _a.props) == null ? void 0 : _b[prop]) && /^[~@]+\//.test(tags[i].props[prop])) {
            {
              tags[i].props[prop] = await import(
                /* @vite-ignore */
                `${tags[i].props[prop]}?url`
              );
            }
          }
        }
      }
    });
  }
  if (seoOptimise) {
    head.hookTagsResolved.push((tags) => {
      const metaProps = [];
      let title = "";
      for (const i in tags) {
        if (tags[i].tag === "meta")
          metaProps.push(tags[i].props);
        if (tags[i].tag === "title")
          title = tags[i].props.children;
      }
      const meta2 = packMeta(metaProps);
      if (meta2.ogImage && !meta2.twitterCard) {
        tags.push({
          tag: "meta",
          props: {
            name: "twitter:card",
            content: "summary_large_image"
          }
        });
      }
      if (title && !meta2.ogTitle) {
        tags.push({
          tag: "meta",
          props: {
            name: "og:title",
            content: title
          }
        });
      }
      if (meta2.description && !meta2.ogDescription) {
        tags.push({
          tag: "meta",
          props: {
            name: "og:description",
            content: meta2.description
          }
        });
      }
    });
  }
  let pauseDOMUpdates = false;
  head.hookBeforeDomUpdate.push(() => !pauseDOMUpdates);
  nuxtApp.hooks.hookOnce("page:finish", () => {
    pauseDOMUpdates = false;
    useRouter().beforeEach(() => {
      pauseDOMUpdates = true;
    });
    watch$1(useRoute(), () => {
      pauseDOMUpdates = false;
      head.updateDOM();
    });
  });
  nuxtApp._useHead = (_meta) => {
    const meta2 = ref(_meta);
    const headObj = computed(() => {
      const overrides = { meta: [] };
      if (meta2.value.charset) {
        overrides.meta.push({
          key: "charset",
          charset: meta2.value.charset
        });
      }
      if (meta2.value.viewport) {
        overrides.meta.push({
          name: "viewport",
          content: meta2.value.viewport
        });
      }
      return defu(overrides, meta2.value);
    });
    head.addHeadObjs(headObj);
    return;
  };
  {
    nuxtApp.ssrContext.renderMeta = () => {
      const meta2 = renderHeadToString(head);
      return {
        ...meta2,
        bodyScripts: meta2.bodyTags
      };
    };
  }
});
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    fetchpriority: String,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
const NoScript = defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a;
    const noscript = { ...props };
    const textContent = (((_a = slots.default) == null ? void 0 : _a.call(slots)) || []).filter(({ children }) => children).map(({ children }) => children).join("");
    if (textContent)
      noscript.children = textContent;
    return {
      noscript: [noscript]
    };
  })
});
const Link = defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
const Base = defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    const title = ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null;
    return {
      title
    };
  })
});
const Meta = defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((props) => {
    const meta2 = { ...props };
    if (meta2.httpEquiv) {
      meta2["http-equiv"] = meta2.httpEquiv;
      delete meta2.httpEquiv;
    }
    return {
      meta: [meta2]
    };
  })
});
const Style = defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const Html = defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const Components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Script,
  NoScript,
  Link,
  Base,
  Title,
  Meta,
  Style,
  Head,
  Html,
  Body
}, Symbol.toStringTag, { value: "Module" }));
const appHead = { "meta": [{ "http-equiv": "accept-ch", "content": "DPR" }], "link": [{ "rel": "apple-touch-icon", "sizes": "180x180", "href": "/apple-touch-icon.png" }, { "rel": "icon", "type": "image/png", "sizes": "32x32", "href": "/favicon-32x32.png" }, { "rel": "icon", "type": "image/png", "sizes": "16x16", "href": "/favicon-16x16.png" }], "style": [], "script": [], "noscript": [], "charset": "utf-8", "viewport": "width=device-width, initial-scale=1" };
const appPageTransition = { "name": "page", "mode": "out-in" };
const appKeepalive = false;
const metaMixin = {
  created() {
    const instance = getCurrentInstance();
    if (!instance)
      return;
    const options2 = instance.type;
    if (!options2 || !("head" in options2))
      return;
    const nuxtApp = useNuxtApp();
    const source = typeof options2.head === "function" ? computed(() => options2.head(nuxtApp)) : options2.head;
    useHead(source);
  }
};
const node_modules__pnpm_nuxt_hedge_640_1_6_node_modules_nuxt_hedge_dist_runtime_plugin_mjs_fcEfA3gAPg = defineNuxtPlugin((nuxtApp) => {
  useHead(markRaw({ title: "", ...appHead }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in Components)
    nuxtApp.vueApp.component(name, Components[name]);
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (override, routeProps) => {
  var _a;
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a2;
    return ((_a2 = m.components) == null ? void 0 : _a2.default) === routeProps.Component.type;
  });
  const source = (_a = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a : matchedRoute && interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = defineComponent({
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? h(component, props === true ? {} : props, slots) : h(Fragment, {}, slots) };
};
const isNestedKey = Symbol("isNested");
const NuxtPage = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    const isNested = inject(isNestedKey, false);
    provide(isNestedKey, true);
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          var _a, _b, _c, _d;
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(props.pageKey, routeProps);
          const transitionProps = (_b = (_a = props.transition) != null ? _a : routeProps.route.meta.pageTransition) != null ? _b : appPageTransition;
          return _wrapIf(
            Transition,
            transitionProps,
            wrapInKeepAlive(
              (_d = (_c = props.keepalive) != null ? _c : routeProps.route.meta.keepalive) != null ? _d : appKeepalive,
              isNested && nuxtApp.isHydrating ? h(Component, { key, routeProps, pageKey: key, hasTransition: !!transitionProps }) : h(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
              }, { default: () => h(Component, { key, routeProps, pageKey: key, hasTransition: !!transitionProps }) })
            )
          ).default();
        }
      });
    };
  }
});
const Component = defineComponent({
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props.routeProps.Component);
    };
  }
});
const ensureArray = (value) => Array.isArray(value) ? value : value ? [value] : [];
const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, queryParams) => {
  const params = {
    ...queryParams
  };
  for (const key of arrayParams) {
    if (params[key]) {
      params[key] = ensureArray(params[key]);
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      params[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => Object.freeze(params),
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(params.where), q]),
    sort: $set("sort", (sort) => [...ensureArray(params.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    findOne: () => fetcher({ ...params, first: true }),
    find: () => fetcher(params),
    findSurround: (query2, options2) => fetcher({ ...params, surround: { query: query2, ...options2 } }),
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};
function jsonStringify(value) {
  return JSON.stringify(value, regExpReplacer);
}
function regExpReplacer(_key, value) {
  if (value instanceof RegExp) {
    return `--REGEX ${value.toString()}`;
  }
  return value;
}
const TEXT_TAGS = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "li"];
function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}
function unwrap(vnode, tags = ["p"]) {
  if (Array.isArray(vnode)) {
    return vnode.flatMap((node) => unwrap(node, tags));
  }
  let result = vnode;
  if (tags.some((tag) => tag === "*" || isTag(vnode, tag))) {
    result = nodeChildren(vnode) || vnode;
    if (!Array.isArray(result) && TEXT_TAGS.some((tag) => isTag(vnode, tag))) {
      result = [result];
    }
  }
  return result;
}
function flatUnwrap(vnodes, tags = ["p"]) {
  vnodes = Array.isArray(vnodes) ? vnodes : [vnodes];
  if (!tags.length) {
    return vnodes;
  }
  return vnodes.flatMap((vnode) => flatUnwrap(unwrap(vnode, [tags[0]]), tags.slice(1))).filter((vnode) => !(isText(vnode) && nodeTextContent(vnode).trim() === ""));
}
const withContentBase = (url) => withBase(url, "/api/" + useRuntimeConfig().public.content.base);
const useUnwrap = () => ({
  unwrap,
  flatUnwrap
});
const queryFetch = (params) => {
  const apiPath = withContentBase(`/query/${hash(params)}`);
  {
    useHead({
      link: [
        { rel: "prefetch", href: apiPath }
      ]
    });
  }
  return $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: {
      _params: jsonStringify(params),
      previewToken: useCookie("previewToken").value
    }
  });
};
function queryContent(query, ...pathParts) {
  if (typeof query === "string") {
    let path = withLeadingSlash(withoutTrailingSlash(joinURL(query, ...pathParts)));
    path = path.replace(/[-[\]{}()*+.,^$\s]/g, "\\$&");
    return createQuery(queryFetch).where({ _path: new RegExp(`^${path}`) });
  }
  return createQuery(queryFetch, query);
}
const SiteName = "AnyBlog";
const SiteUrl = "nuxt-blog-azure.vercel.app";
const SiteImage = "/cover.png";
const SiteLogo = "/logo.webp";
const SiteLanguage = "en-AU";
const SiteDescription = "";
const SameAs = [];
function groupBy(values, fn) {
  return values.reduce((rv, x) => {
    (rv[fn(x)] = rv[fn(x)] || []).push(x);
    return rv;
  }, {});
}
function dayNth(input) {
  const d = Number.parseInt(input);
  if (d > 3 && d < 21)
    return `${d}th`;
  switch (d % 10) {
    case 1:
      return `${d}st`;
    case 2:
      return `${d}nd`;
    case 3:
      return `${d}rd`;
    default:
      return `${d}th`;
  }
}
const useProjects = () => {
  return useAsyncData(
    "content:projects",
    () => queryContent("projects").findOne()
  );
};
const useHeaderNav = () => {
  return useAsyncData("content:navigation", () => queryContent("pages").where({ nav: true }).only(["title", "icon", "path"]).find());
};
const usePostList = () => {
  return useAsyncData("content:post-partials", () => queryContent().where({ _path: /posts\/*/ }).without(["head", "body", "excerpt", "_"]).sort({
    publishedAt: -1
  }).find(), {
    transform: (posts) => groupBy(posts, (p) => new Date(p.publishedAt).getFullYear())
  });
};
const useRoutesContent = (path) => {
  if (!path)
    path = useRoute().path;
  return useAsyncData(
    `content:${path}`,
    () => queryContent().where({ path: new RegExp(path) }).without(["excerpt"]).findOne()
  );
};
const useContentHead = (doc) => {
  watch$1(() => doc, (doc2) => {
    doc2 = unref(doc2);
    if (!doc2)
      return;
    const head = Object.assign({}, (doc2 == null ? void 0 : doc2.head) || {});
    head.title = `${head.title || doc2.title}`;
    if (!head.title.endsWith(SiteName) && !head.title.startsWith(SiteName))
      head.title = `${head.title} - ${SiteName}`;
    useHead(head);
  }, {
    immediate: true
  });
};
const meta = void 0;
const _routes = [
  {
    name: "slug",
    path: "/:slug(.*)*",
    file: "/Users/bon/Documents/my-workspace/nuxt-blog/pages/[...slug].vue",
    children: [],
    meta,
    alias: [],
    component: () => import('./_nuxt/_...slug_.6047544b.mjs').then((m) => m.default || m)
  }
];
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    if (savedPosition) {
      return new Promise((resolve) => {
        nuxtApp.hooks.hookOnce("page:finish", () => {
          setTimeout(() => resolve(savedPosition), 50);
        });
      });
    }
    if (to.hash) {
      setTimeout(() => {
        const heading = document.querySelector(to.hash);
        return window.scrollTo({
          top: heading.offsetTop,
          behavior: "smooth"
        });
      });
      return;
    }
    if (from.path !== to.path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return;
    }
    return { top: 0 };
  }
};
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const globalMiddleware = [];
const namedMiddleware = {};
const node_modules__pnpm_nuxt_643_0_0_rc_11_ytqihlhqkzccfn7ye2a3kphpxm_node_modules_nuxt_dist_pages_runtime_router_mjs_14lziDp0Tp = defineNuxtPlugin(async (nuxtApp) => {
  var _a, _b, _c, _d;
  let __temp, __restore;
  nuxtApp.vueApp.component("NuxtPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtNestedPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtChild", NuxtPage);
  let routerBase = useRuntimeConfig().app.baseURL;
  if (routerOptions.hashMode && !routerBase.includes("#")) {
    routerBase += "#";
  }
  const history = (_b = (_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) != null ? _b : createMemoryHistory(routerBase);
  const routes = (_d = (_c = routerOptions.routes) == null ? void 0 : _c.call(routerOptions, _routes)) != null ? _d : _routes;
  const initialURL = nuxtApp.ssrContext.url;
  const router = createRouter({
    ...routerOptions,
    history,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a2, _b2, _c2, _d2;
    if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d2 = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d2.default)) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = computed(() => _route.value[key]);
  }
  nuxtApp._route = reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      ;
      [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
      ;
    }
    ;
    [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
    ;
  } catch (error2) {
    callWithNuxt(nuxtApp, showError, [error2]);
  }
  const initialLayout = useState("_layout");
  router.beforeEach(async (to, from) => {
    var _a2, _b2;
    to.meta = reactive(to.meta);
    if (nuxtApp.isHydrating) {
      to.meta.layout = (_a2 = initialLayout.value) != null ? _a2 : to.meta.layout;
    }
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      if (!middleware) {
        throw new Error(`Unknown route middleware: '${entry2}'.`);
      }
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError$1({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return callWithNuxt(nuxtApp, showError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      callWithNuxt(nuxtApp, showError, [createError$1({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.event.res.statusCode = 404;
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual$1(currentURL, initialURL)) {
        await callWithNuxt(nuxtApp, navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      callWithNuxt(nuxtApp, showError, [error2]);
    }
  });
  return { provide: { router } };
});
const node_modules__pnpm__64nuxt_43content_642_0_1_node_modules__64nuxt_content_dist_runtime_plugin_mjs_HlcFiC2ECt = defineNuxtPlugin(() => {
  useRuntimeConfig().public;
});
const config = { "canonicalHost": "nuxt-blog-azure.vercel.app", "defaultLanguage": "en-AU", "meta": { "host": "nuxt-blog-azure.vercel.app", "inLanguage": "en-AU" }, "client": false };
const node_modules__pnpm_nuxt_schema_org_641_1_0_beta_4_typescript_644_8_4_node_modules_nuxt_schema_org_dist_runtime_plugin_mjs_ZGntkaCKWs = defineNuxtPlugin(async (nuxtApp) => {
  var _a;
  let __temp, __restore;
  const ssr = !!((_a = nuxtApp.ssrContext) == null ? void 0 : _a.url);
  const client = createSchemaOrg({
    updateHead(fn) {
      nuxtApp._useHead(unref(fn));
    },
    async meta() {
      const head = nuxtApp.vueApp._context.provides.usehead;
      const inferredMeta = {};
      const headTag = head.headTags.reverse().filter((t) => t.tag === "title" && !!t.props.children);
      if (headTag.length)
        inferredMeta.title = headTag[0].props.children;
      const descTag = head.headTags.reverse().filter((t) => t.tag === "meta" && t.props.name === "description" && !!t.props.content);
      if (descTag.length)
        inferredMeta.description = descTag[0].props.content;
      const imageTag = head.headTags.reverse().filter((t) => t.tag === "meta" && t.props.property === "og:image" && !!t.props.content);
      if (imageTag.length)
        inferredMeta.image = imageTag[0].props.content;
      const schemaOrgMeta = {
        path: nuxtApp._route.path,
        ...inferredMeta,
        ...nuxtApp._route.meta,
        ...config.meta || {}
      };
      await nuxtApp.hooks.callHook("schema-org:meta", schemaOrgMeta);
      return schemaOrgMeta;
    }
  });
  nuxtApp.vueApp.use(client);
  if (ssr) {
    [__temp, __restore] = executeAsync(() => client.forceRefresh()), await __temp, __restore();
    return;
  }
  watch$1(() => nuxtApp._route.path, () => {
    client.forceRefresh();
  });
});
async function imageMeta(_ctx, url) {
  const meta2 = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta2;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/image-meta@0.1.1/node_modules/image-meta/dist/index.mjs').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta2 = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta2;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options2 = {}) => {
    const image = resolveImage(ctx, input, options2);
    return image;
  };
  const $img = (input, modifiers = {}, options2 = {}) => {
    return getImage2(input, {
      ...options2,
      modifiers: defu(modifiers, options2.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options2) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options2 });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options2) => getMeta(ctx, input, options2);
  $img.getSizes = (input, options2) => getSizes(ctx, input, options2);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options2) {
  const image = resolveImage(ctx, input, { ...options2 });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options2) {
  var _a, _b;
  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options2.provider || ctx.options.provider);
  const preset = getPreset(ctx, options2.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options2, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const hwRatio = width && height ? height / width : 0;
  const variants = [];
  const sizes = {};
  if (typeof opts.sizes === "string") {
    for (const entry2 of opts.sizes.split(/[\s,]+/).filter((e) => e)) {
      const s = entry2.split(":");
      if (s.length !== 2) {
        continue;
      }
      sizes[s[0].trim()] = s[1].trim();
    }
  } else {
    Object.assign(sizes, opts.sizes);
  }
  for (const key in sizes) {
    const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
    let size = String(sizes[key]);
    const isFluid = size.endsWith("vw");
    if (!isFluid && /^\d+$/.test(size)) {
      size = size + "px";
    }
    if (!isFluid && !size.endsWith("px")) {
      continue;
    }
    let _cWidth = parseInt(size);
    if (!screenMaxWidth || !_cWidth) {
      continue;
    }
    if (isFluid) {
      _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
    }
    const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
    variants.push({
      width: _cWidth,
      size,
      screenMaxWidth,
      media: `(max-width: ${screenMaxWidth}px)`,
      src: ctx.$img(input, { ...opts.modifiers, width: _cWidth, height: _cHeight }, opts)
    });
  }
  variants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  const defaultVar = variants[variants.length - 1];
  if (defaultVar) {
    defaultVar.media = "";
  }
  return {
    sizes: variants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", "),
    srcset: variants.map((v) => `${v.src} ${v.width}w`).join(", "),
    src: defaultVar == null ? void 0 : defaultVar.src
  };
}
const convertHextoRGBFormat = (value) => value.startsWith("#") ? value.replace("#", "rgb_") : value;
const removePathExtension = (value) => value.replace(/\.[^/.]+$/, "");
const operationsGenerator$1 = createOperationsGenerator({
  keyMap: {
    fit: "c",
    width: "w",
    height: "h",
    format: "f",
    quality: "q",
    background: "b",
    rotate: "a",
    roundCorner: "r",
    gravity: "g",
    effect: "e",
    color: "co",
    flags: "fl",
    dpr: "dpr",
    opacity: "o",
    overlay: "l",
    underlay: "u",
    transformation: "t",
    zoom: "z",
    colorSpace: "cs",
    customFunc: "fn",
    density: "dpi"
  },
  valueMap: {
    fit: {
      fill: "fill",
      inside: "pad",
      outside: "lpad",
      cover: "fit",
      contain: "scale",
      minCover: "mfit",
      minInside: "mpad",
      thumbnail: "thumb",
      cropping: "crop",
      coverLimit: "limit"
    },
    format: {
      jpeg: "jpg"
    },
    background(value) {
      return convertHextoRGBFormat(value);
    },
    color(value) {
      return convertHextoRGBFormat(value);
    },
    gravity: {
      auto: "auto",
      subject: "auto:subject",
      face: "face",
      sink: "sink",
      faceCenter: "face:center",
      multipleFaces: "faces",
      multipleFacesCenter: "faces:center",
      north: "north",
      northEast: "north_east",
      northWest: "north_west",
      west: "west",
      southWest: "south_west",
      south: "south",
      southEast: "south_east",
      east: "east",
      center: "center"
    }
  },
  joinWith: ",",
  formatter: (key, value) => `${key}_${value}`
});
const defaultModifiers = {
  format: "auto",
  quality: "auto"
};
const getImage$1 = (src, { modifiers = {}, baseURL: baseURL2 = "/" } = {}) => {
  const mergeModifiers = defu(modifiers, defaultModifiers);
  const operations = operationsGenerator$1(mergeModifiers);
  const remoteFolderMapping = baseURL2.match(/\/image\/upload\/(.*)/);
  if ((remoteFolderMapping == null ? void 0 : remoteFolderMapping.length) >= 1) {
    const remoteFolder = remoteFolderMapping[1];
    const baseURLWithoutRemoteFolder = baseURL2.replace(remoteFolder, "");
    return {
      url: joinURL(baseURLWithoutRemoteFolder, operations, remoteFolder, src)
    };
  } else if (/\/image\/fetch\/?/.test(baseURL2)) {
    src = encodePath(src);
  } else {
    src = removePathExtension(src);
  }
  return {
    url: joinURL(baseURL2, operations, src)
  };
};
const cloudinaryRuntime$NrXqqWKJst = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getImage: getImage$1
}, Symbol.toStringTag, { value: "Module" }));
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: ",",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL: baseURL2 } = {}, _ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL2) {
    baseURL2 = joinURL("/", "/_ipx");
  }
  return {
    url: joinURL(baseURL2, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$KxPrJApC87 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getImage,
  validateDomains,
  supportsAlias
}, Symbol.toStringTag, { value: "Module" }));
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [
    "avatars0.githubusercontent.com"
  ],
  "alias": {}
};
imageOptions.providers = {
  ["cloudinary"]: { provider: cloudinaryRuntime$NrXqqWKJst, defaults: { "baseURL": "https://res.cloudinary.com/dl6o1xpyq/image/upload/images", "modifiers": { "quality": "auto:best", "dpr": "auto" } } },
  ["ipx"]: { provider: ipxRuntime$KxPrJApC87, defaults: {} }
};
const node_modules__pnpm__64nuxt_43image_edge_641_0_0_27719579_87dcdf2_node_modules__64nuxt_image_edge_dist_runtime_plugin_mjs_dVNaI5y3vo = defineNuxtPlugin(() => {
  const img = createImage(imageOptions);
  return {
    provide: {
      img
    }
  };
});
const preference = "system";
const componentName = "ColorScheme";
const node_modules__pnpm__64nuxtjs_43color_mode_643_1_7_node_modules__64nuxtjs_color_mode_dist_runtime_plugin_server_mjs_5mHQGoUmlf = defineNuxtPlugin((nuxtApp) => {
  const colorMode = useState("color-mode", () => reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  })).value;
  const htmlAttrs = {};
  {
    useHead({ htmlAttrs });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});
const _plugins = [
  _nuxt_components_plugin_mjs_KR1HBZs4kY,
  node_modules__pnpm_nuxt_hedge_640_1_6_node_modules_nuxt_hedge_dist_runtime_lib_vueuse_head_plugin_mjs_oDjKmZe6Fp,
  node_modules__pnpm_nuxt_hedge_640_1_6_node_modules_nuxt_hedge_dist_runtime_plugin_mjs_fcEfA3gAPg,
  node_modules__pnpm_nuxt_643_0_0_rc_11_ytqihlhqkzccfn7ye2a3kphpxm_node_modules_nuxt_dist_pages_runtime_router_mjs_14lziDp0Tp,
  node_modules__pnpm__64nuxt_43content_642_0_1_node_modules__64nuxt_content_dist_runtime_plugin_mjs_HlcFiC2ECt,
  node_modules__pnpm_nuxt_schema_org_641_1_0_beta_4_typescript_644_8_4_node_modules_nuxt_schema_org_dist_runtime_plugin_mjs_ZGntkaCKWs,
  node_modules__pnpm__64nuxt_43image_edge_641_0_0_27719579_87dcdf2_node_modules__64nuxt_image_edge_dist_runtime_plugin_mjs_dVNaI5y3vo,
  node_modules__pnpm__64nuxtjs_43color_mode_643_1_7_node_modules__64nuxtjs_color_mode_dist_runtime_plugin_server_mjs_5mHQGoUmlf
];
const _sfc_main$6 = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = defineAsyncComponent(() => import('./_nuxt/error-component.b7a96c6e.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, showError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_App = resolveComponent("App");
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_App, null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt@3.0.0-rc.11_ytqihlhqkzccfn7ye2a3kphpxm/node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const provideResolver = (input, resolver) => {
  if (!input)
    input = {};
  input._resolver = resolver;
  return input;
};
const defineArticle = (input) => provideResolver(input, articleResolver);
const defineBreadcrumb = (input) => provideResolver(input, breadcrumbResolver);
const definePerson = (input) => provideResolver(input, personResolver);
const defineWebPage = (input) => provideResolver(input, webPageResolver);
const defineWebSite = (input) => provideResolver(input, webSiteResolver);
function injectSchemaOrg() {
  let client;
  try {
    client = inject("schemaorg");
  } catch (e) {
  }
  if (!client)
    console.warn("[@vueuse/schema-org] Failed to find plugin, you may have forgotten to apply app.use(schemaOrg)");
  return client;
}
let vmGlobalUid = -1;
function useSchemaOrg(input) {
  if (!input)
    return;
  const client = injectSchemaOrg();
  if (!client)
    return;
  const vm = getCurrentInstance();
  const vmUid = (vm == null ? void 0 : vm.uid) || ++vmGlobalUid;
  client.ctx._ctxUid = vmUid;
  client.ctx.addNode(input);
  {
    nextTick(() => {
      watch$1(() => input, async () => {
        await client.forceRefresh();
      }, {
        immediate: true,
        deep: true
      });
    });
    return;
  }
}
const shallowVNodesToText = (nodes) => {
  let text = "";
  for (const node of nodes) {
    if (typeof node.children === "string")
      text += node.children.trim();
  }
  return text;
};
const fixKey = (s) => {
  let key = s.replace(/-./g, (x) => x[1].toUpperCase());
  if (key === "type" || key === "id")
    key = `@${key}`;
  return key;
};
const ignoreKey = (s) => {
  if (s.startsWith("aria-") || s.startsWith("data-"))
    return false;
  return ["class", "style"].includes(s);
};
const defineSchemaOrgComponent = (name, defineFn) => {
  return defineComponent({
    name,
    props: {
      as: String
    },
    setup(props, { slots, attrs }) {
      const node = ref(null);
      const nodePartial = computed(() => {
        const val = {};
        Object.entries(unref(attrs)).forEach(([key, value]) => {
          if (!ignoreKey(key)) {
            val[fixKey(key)] = unref(value);
          }
        });
        if (!node.value) {
          for (const [key, slot] of Object.entries(slots)) {
            if (!slot || key === "default")
              continue;
            val[fixKey(key)] = shallowVNodesToText(slot(props));
          }
        }
        return val;
      });
      if (defineFn) {
        useSchemaOrg([defineFn(unref(nodePartial))]);
      }
      return () => {
        const data = unref(nodePartial);
        if (!slots.default)
          return null;
        const childSlots = [];
        if (slots.default)
          childSlots.push(slots.default(data));
        return h(props.as || "div", {}, childSlots);
      };
    }
  });
};
const SchemaOrgArticle = /* @__PURE__ */ defineSchemaOrgComponent("SchemaOrgArticle", defineArticle);
const SchemaOrgBreadcrumb = /* @__PURE__ */ defineSchemaOrgComponent("SchemaOrgBreadcrumb", defineBreadcrumb);
const SchemaOrgPerson = /* @__PURE__ */ defineSchemaOrgComponent("SchemaOrgPerson", definePerson);
const SchemaOrgWebPage = /* @__PURE__ */ defineSchemaOrgComponent("SchemaOrgWebPage", defineWebPage);
const SchemaOrgWebSite = /* @__PURE__ */ defineSchemaOrgComponent("SchemaOrgWebSite", defineWebSite);
defineComponent({
  name: "SchemaOrgDebug",
  props: {
    console: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const schemaRaw = ref("");
    if (props.console) {
      watch(schemaRaw, (val) => {
        console.info("[SchemaOrgDebug]", JSON.parse(val));
      });
    }
    return () => {
      return h("div", {
        style: {
          display: "inline-block"
        }
      }, [h("div", {
        style: {
          backgroundColor: "#282839",
          color: "#c5c6c9",
          padding: "5px",
          borderRadius: "5px",
          width: "900px",
          height: "600px",
          overflowY: "auto",
          boxShadow: "3px 4px 15px rgb(0 0 0 / 10%)"
        }
      }, [
        h("pre", { style: { textAlign: "left" } }, schemaRaw.value)
      ])]);
    };
  }
});
const useImage = () => {
  return useNuxtApp().$img;
};
const baseImageProps = {
  src: { type: String, required: true },
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  preload: { type: Boolean, default: void 0 },
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: { type: String, default: void 0 },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  }
};
const useBaseImage = (props) => {
  const options2 = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding
    };
  });
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options: options2,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 }
};
const __nuxt_component_0$2 = defineComponent({
  name: "NuxtImg",
  props: imgProps,
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = _base.attrs.value;
      if (props.sizes) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          }
        }]
      });
    }
    const imgEl = ref(null);
    return () => h("img", {
      ref: imgEl,
      key: src.value,
      src: src.value,
      ...attrs.value,
      ...ctx.attrs
    });
  }
});
function useSiteMeta() {
  return {
    name: SiteName,
    description: SiteDescription,
    sameAs: SameAs,
    image: SiteImage,
    logo: SiteLogo,
    lang: SiteLanguage,
    host: SiteUrl
  };
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Logo",
  __ssrInlineRender: true,
  setup(__props) {
    const siteMeta = useSiteMeta();
    const initials = siteMeta.name.split(" ").map((word) => word[0].toLowerCase()).join("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$3;
      const _component_NuxtImg = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
        to: "/",
        class: "flex items-center group unstyled py-4",
        title: "Go Home"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: unref(siteMeta).logo,
              width: "80",
              height: "80",
              format: "jpeg",
              alt: unref(siteMeta).name,
              style: { "width": "40px", "height": "40px" },
              class: "rounded-lg h-10 w-10 mr-3 group-hover:h-11 group-hover:w-11 transition-all"
            }, null, _parent2, _scopeId));
            _push2(`<div aria-label="Harlan Wilton Initials" class="hidden sm:block text-gray-700 dark:text-gray-200 relative transform top-2 group-hover:top-0"${_scopeId}><span class="block text-blue700 font-bold text-3xl logo"${_scopeId}>${ssrInterpolate(unref(initials))}</span><span class="block text-blue700 font-bold text-3xl logo"${_scopeId}>${ssrInterpolate(unref(initials))}</span></div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: unref(siteMeta).logo,
                width: "80",
                height: "80",
                format: "jpeg",
                alt: unref(siteMeta).name,
                style: { "width": "40px", "height": "40px" },
                class: "rounded-lg h-10 w-10 mr-3 group-hover:h-11 group-hover:w-11 transition-all"
              }, null, 8, ["src", "alt"]),
              createVNode("div", {
                "aria-label": "Harlan Wilton Initials",
                class: "hidden sm:block text-gray-700 dark:text-gray-200 relative transform top-2 group-hover:top-0"
              }, [
                createVNode("span", { class: "block text-blue700 font-bold text-3xl logo" }, toDisplayString(unref(initials)), 1),
                createVNode("span", { class: "block text-blue700 font-bold text-3xl logo" }, toDisplayString(unref(initials)), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Logo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _hoisted_1$5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = ["id"];
const _hoisted_3$3 = /* @__PURE__ */ createElementVNode("g", { fill: "#fff" }, [
  /* @__PURE__ */ createElementVNode("ellipse", {
    cx: "9.5",
    cy: "9",
    rx: "1.5",
    ry: "1"
  }),
  /* @__PURE__ */ createElementVNode("ellipse", {
    cx: "14.5",
    cy: "9",
    rx: "1.5",
    ry: "1"
  })
], -1);
const _hoisted_4$2 = [
  _hoisted_3$3
];
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="30" stroke-dashoffset="30" d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="30;0"></animate></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="10;0"></animate><animate attributeName="d" dur="3s" repeatCount="indefinite" values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"></animate></path></g>', 1);
const _hoisted_6 = ["mask"];
const _hoisted_7 = /* @__PURE__ */ createElementVNode("animate", {
  attributeName: "y",
  dur: "10s",
  keyTimes: "0;0.45;0.46;0.54;0.55;1",
  repeatCount: "indefinite",
  values: "11;11;7;7;11;11"
}, null, -1);
const _hoisted_8 = [
  _hoisted_7
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, [
    createElementVNode("mask", {
      id: _ctx.idMap["svgIDa"],
      width: "24",
      height: "24",
      x: "0",
      y: "0"
    }, _hoisted_4$2, 8, _hoisted_2$5),
    _hoisted_5,
    createElementVNode("rect", {
      width: "8",
      height: "4",
      x: "8",
      y: "11",
      fill: "currentColor",
      mask: "url(#" + _ctx.idMap["svgIDa"] + ")"
    }, _hoisted_8, 8, _hoisted_6)
  ]);
}
const __unplugin_components_1$1 = { name: "line-md-github-loop", render: render$5, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "svgIDa": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1$4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$4 = /* @__PURE__ */ createStaticVNode('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="30" stroke-dashoffset="30" d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="30;0"></animate></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19C7.59375 19 6.15625 18.4375 5.3125 17.8125C4.46875 17.1875 4.21875 16.1562 3 15.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="10;0"></animate></path></g>', 1);
const _hoisted_3$2 = [
  _hoisted_2$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$2);
}
const __unplugin_components_0$1 = { name: "line-md-github", render: render$4 };
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$3;
  const _component_i_line_md_github = __unplugin_components_0$1;
  const _component_i_line_md_github_loop = __unplugin_components_1$1;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-e5313bd6>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    href: "https://github.com/phonggnguyen",
    title: "Visit my GitHub",
    class: "group"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_i_line_md_github, {
          class: "icon icon--off",
          alt: "Github Logo"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_i_line_md_github_loop, {
          class: "icon icon--on",
          alt: "Github Logo"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_i_line_md_github, {
            class: "icon icon--off",
            alt: "Github Logo"
          }),
          createVNode(_component_i_line_md_github_loop, {
            class: "icon icon--on",
            alt: "Github Logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialIcons.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-e5313bd6"]]);
const __nuxt_component_0$1 = defineComponent({
  name: "ClientOnly",
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, null, fallbackStr);
    };
  }
});
const _sfc_main$3 = {
  name: componentName,
  props: {
    placeholder: String,
    tag: {
      type: String,
      default: "span"
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_ClientOnly, mergeProps({
    placeholder: $props.placeholder,
    "placeholder-tag": $props.tag
  }, _attrs), null, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+color-mode@3.1.7/node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const useColorMode = () => {
  return useState("color-mode").value;
};
const _hoisted_1$3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createStaticVNode('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="34" stroke-dashoffset="34" d="M12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="34;0"></animate></path><g stroke-dasharray="2" stroke-dashoffset="2"><path d="M0 0"><animate fill="freeze" attributeName="d" begin="0.5s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="2;0"></animate></path><path d="M0 0"><animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></animate></path><animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></g></g>', 1);
const _hoisted_3$1 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$1);
}
const __unplugin_components_3 = { name: "line-md-sunny-outline-loop", render: render$3 };
const _hoisted_1$2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createStaticVNode('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="34" stroke-dashoffset="34" d="M12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="34;0"></animate></path><g stroke-dasharray="2" stroke-dashoffset="2"><path d="M0 0"><animate fill="freeze" attributeName="d" begin="0.5s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="2;0"></animate></path><path d="M0 0"><animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></animate></path></g></g>', 1);
const _hoisted_3 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3);
}
const __unplugin_components_2 = { name: "line-md-sunny-outline", render: render$2 };
const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<g fill="currentColor" fill-opacity="0"><path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.4s" values="0;1"></animate></path><path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.4s" values="0;1"></animate></path></g><g fill-opacity="0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="currentColor" stroke-dasharray="56" stroke-dashoffset="56" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></animate><animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.15s" values="0;0.3"></animate></path></g>', 2);
const _hoisted_4$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_4$1);
}
const __unplugin_components_1 = { name: "line-md-moon-twotone", render: render$1 };
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<g fill="currentColor" fill-opacity="0"><path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.4s" values="0;1"></animate></path><path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.4s" values="0;1"></animate></path></g><path fill="none" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></animate></path>', 2);
const _hoisted_4 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_4);
}
const __unplugin_components_0 = { name: "line-md-moon", render };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ColorModeSwitch",
  __ssrInlineRender: true,
  setup(__props) {
    const colorMode = useColorMode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ColorScheme = __nuxt_component_0;
      const _component_i_line_md_moon = __unplugin_components_0;
      const _component_i_line_md_moon_twotone = __unplugin_components_1;
      const _component_i_line_md_sunny_outline = __unplugin_components_2;
      const _component_i_line_md_sunny_outline_loop = __unplugin_components_3;
      _push(`<button${ssrRenderAttrs(mergeProps({
        "aria-label": "Color Mode",
        title: `Enable ${unref(colorMode).value === "dark" ? "Light" : "Dark"} Mode`,
        class: "p-2 link inline-block hover:text-gray-700 dark:hover:text-gray-300 group"
      }, _attrs))}><div class="icon">`);
      _push(ssrRenderComponent(_component_ColorScheme, { placeholder: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(colorMode).value === "dark") {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_i_line_md_moon, { class: "icon icon--off" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_i_line_md_moon_twotone, { class: "icon icon--on" }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_i_line_md_sunny_outline, { class: "icon icon--off" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_i_line_md_sunny_outline_loop, { class: "icon icon--on" }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            }
          } else {
            return [
              unref(colorMode).value === "dark" ? (openBlock(), createBlock(Fragment$1, { key: 0 }, [
                createVNode(_component_i_line_md_moon, { class: "icon icon--off" }),
                createVNode(_component_i_line_md_moon_twotone, { class: "icon icon--on" })
              ], 64)) : (openBlock(), createBlock(Fragment$1, { key: 1 }, [
                createVNode(_component_i_line_md_sunny_outline, { class: "icon icon--off" }),
                createVNode(_component_i_line_md_sunny_outline_loop, { class: "icon icon--on" })
              ], 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></button>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ColorModeSwitch.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: nav } = ([__temp, __restore] = withAsyncContext(() => useHeaderNav()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Logo = _sfc_main$5;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_Link = resolveComponent("Link");
      const _component_SocialIcons = __nuxt_component_4;
      const _component_ColorModeSwitch = _sfc_main$2;
      _push(`<header${ssrRenderAttrs(_attrs)}><div class="flex justify-between items-center max-w-8xl mx-auto mx-auto sm:px-8 px-4">`);
      _push(ssrRenderComponent(_component_Logo, null, null, _parent));
      _push(`<div class="flex items-center"><nav aria-label="Main Menu" class="opacity-75"><ul class="flex lg:space-x-7 lg:mr-15 sm:space-x-2 space-x-1 md:mr-7 items-center"><!--[-->`);
      ssrRenderList(unref(nav), (link, key) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.path,
          class: "!inline-flex items-center group",
          title: `Visit ${link.title} Page`
        }, {
          default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([isActive ? ["sm:bg-green-50", "text-blue-800", "dark:sm:bg-green-800/10 dark:text-blue-50"] : [], "md:px-3 md:py-2 px-1 py-1 rounded nav"])}"${_scopeId}>`);
              if (link.icon) {
                _push2(`<svg${ssrRenderAttrs(mergeProps(link.icon, {
                  class: ["hidden sm:inline-block text mr-2 mb-1 transition opacity-75 group-hover:opacity-100", isActive ? "opacity-100" : "opacity-75"]
                }))}${_scopeId}></svg>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(` ${ssrInterpolate(link.title)}</div>`);
              _push2(ssrRenderComponent(_component_Link, {
                key,
                rel: "prefetch",
                href: link.path
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", {
                  class: [isActive ? ["sm:bg-green-50", "text-blue-800", "dark:sm:bg-green-800/10 dark:text-blue-50"] : [], "md:px-3 md:py-2 px-1 py-1 rounded nav"]
                }, [
                  link.icon ? (openBlock(), createBlock("svg", mergeProps({ key: 0 }, link.icon, {
                    class: ["hidden sm:inline-block text mr-2 mb-1 transition opacity-75 group-hover:opacity-100", isActive ? "opacity-100" : "opacity-75"]
                  }), null, 16)) : createCommentVNode("", true),
                  createTextVNode(" " + toDisplayString(link.title), 1)
                ], 2),
                (openBlock(), createBlock(_component_Link, {
                  key,
                  rel: "prefetch",
                  href: link.path
                }, null, 8, ["href"]))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav><div class="md:space-x-2 space-x-1 text-gray-500 flex items-center">`);
      _push(ssrRenderComponent(_component_SocialIcons, { class: "hidden sm:flex md:space-x-2 space-x-1" }, null, _parent));
      _push(ssrRenderComponent(_component_ColorModeSwitch, null, null, _parent));
      _push(`</div></div></div></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const siteMeta = useSiteMeta();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Html = resolveComponent("Html");
      const _component_Head = resolveComponent("Head");
      const _component_Meta = resolveComponent("Meta");
      const _component_SchemaOrgPerson = SchemaOrgPerson;
      const _component_SchemaOrgWebSite = SchemaOrgWebSite;
      const _component_SchemaOrgWebPage = SchemaOrgWebPage;
      const _component_Body = resolveComponent("Body");
      const _component_Header = _sfc_main$1;
      const _component_NuxtPage = resolveComponent("NuxtPage");
      const _component_SocialIcons = __nuxt_component_4;
      _push(ssrRenderComponent(_component_Html, mergeProps({
        lang: unref(siteMeta).lang,
        dir: "ltr"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Head, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Meta, {
                    property: "og:image",
                    content: `${unref(siteMeta).host}/cover.png`
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SchemaOrgPerson, {
                    name: unref(siteMeta).name,
                    image: "https://res.cloudinary.com/dl6o1xpyq/image/upload/f_jpg,q_auto:best,dpr_auto,w_240,h_240/images/harlan-wilton",
                    "same-as": unref(siteMeta).sameAs
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SchemaOrgWebSite, {
                    name: unref(siteMeta).name,
                    image: unref(siteMeta).image,
                    description: unref(siteMeta).description
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SchemaOrgWebPage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Meta, {
                      property: "og:image",
                      content: `${unref(siteMeta).host}/cover.png`
                    }, null, 8, ["content"]),
                    createVNode(_component_SchemaOrgPerson, {
                      name: unref(siteMeta).name,
                      image: "https://res.cloudinary.com/dl6o1xpyq/image/upload/f_jpg,q_auto:best,dpr_auto,w_240,h_240/images/harlan-wilton",
                      "same-as": unref(siteMeta).sameAs
                    }, null, 8, ["name", "same-as"]),
                    createVNode(_component_SchemaOrgWebSite, {
                      name: unref(siteMeta).name,
                      image: unref(siteMeta).image,
                      description: unref(siteMeta).description
                    }, null, 8, ["name", "image", "description"]),
                    createVNode(_component_SchemaOrgWebPage)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Body, { class: "text-gray-800 dark:text-gray-100 antialiased" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Header, null, null, _parent3, _scopeId2));
                  _push3(`<main class="lg:px-0 md:max-w-700px md:pb-20 md:px-8 sm:pb-16 sm:px-6 mx-auto max-w-full px-4 py-7 pb-10 l"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtPage, { class: "page-enter-active" }, null, _parent3, _scopeId2));
                  _push3(`</main><footer class="px-5 sm:px-7 md:px-10 text-center text-gray-400 text-sm my-5"${_scopeId2}><div class="flex justify-center mb-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_SocialIcons, null, null, _parent3, _scopeId2));
                  _push3(`</div><p class="mb-3"${_scopeId2}> \xA9 2022-PRESENT ${ssrInterpolate(unref(siteMeta).name)}. All rights reserved. </p></footer>`);
                } else {
                  return [
                    createVNode(_component_Header),
                    createVNode("main", { class: "lg:px-0 md:max-w-700px md:pb-20 md:px-8 sm:pb-16 sm:px-6 mx-auto max-w-full px-4 py-7 pb-10 l" }, [
                      createVNode(_component_NuxtPage, { class: "page-enter-active" })
                    ]),
                    createVNode("footer", { class: "px-5 sm:px-7 md:px-10 text-center text-gray-400 text-sm my-5" }, [
                      createVNode("div", { class: "flex justify-center mb-3" }, [
                        createVNode(_component_SocialIcons)
                      ]),
                      createVNode("p", { class: "mb-3" }, " \xA9 2022-PRESENT " + toDisplayString(unref(siteMeta).name) + ". All rights reserved. ", 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Head, null, {
                default: withCtx(() => [
                  createVNode(_component_Meta, {
                    property: "og:image",
                    content: `${unref(siteMeta).host}/cover.png`
                  }, null, 8, ["content"]),
                  createVNode(_component_SchemaOrgPerson, {
                    name: unref(siteMeta).name,
                    image: "https://res.cloudinary.com/dl6o1xpyq/image/upload/f_jpg,q_auto:best,dpr_auto,w_240,h_240/images/harlan-wilton",
                    "same-as": unref(siteMeta).sameAs
                  }, null, 8, ["name", "same-as"]),
                  createVNode(_component_SchemaOrgWebSite, {
                    name: unref(siteMeta).name,
                    image: unref(siteMeta).image,
                    description: unref(siteMeta).description
                  }, null, 8, ["name", "image", "description"]),
                  createVNode(_component_SchemaOrgWebPage)
                ]),
                _: 1
              }),
              createVNode(_component_Body, { class: "text-gray-800 dark:text-gray-100 antialiased" }, {
                default: withCtx(() => [
                  createVNode(_component_Header),
                  createVNode("main", { class: "lg:px-0 md:max-w-700px md:pb-20 md:px-8 sm:pb-16 sm:px-6 mx-auto max-w-full px-4 py-7 pb-10 l" }, [
                    createVNode(_component_NuxtPage, { class: "page-enter-active" })
                  ]),
                  createVNode("footer", { class: "px-5 sm:px-7 md:px-10 text-center text-gray-400 text-sm my-5" }, [
                    createVNode("div", { class: "flex justify-center mb-3" }, [
                      createVNode(_component_SocialIcons)
                    ]),
                    createVNode("p", { class: "mb-3" }, " \xA9 2022-PRESENT " + toDisplayString(unref(siteMeta).name) + ". All rights reserved. ", 1)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main$6);
    vueApp.component("App", _sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { callWithNuxt as A, throwError as B, useContentHead as C, SchemaOrgWebPage as D, useMetaTags as E, SchemaOrgArticle as F, SchemaOrgBreadcrumb as S, __nuxt_component_0$3 as _, useRoutesContent as a, _export_sfc as b, __nuxt_component_0$2 as c, useUnwrap as d, entry$1 as default, identity as e, isFunction as f, isNumber as g, useTimeoutFn as h, isClient as i, isString as j, clamp as k, dayNth as l, usePostList as m, noop as n, useProjects as o, useHead as p, useAsyncData as q, resolveUnref as r, queryContent as s, tryOnScopeDispose as t, useRoute as u, useRuntimeConfig as v, withContentBase as w, jsonStringify as x, useCookie as y, useNuxtApp as z };
//# sourceMappingURL=server.mjs.map
