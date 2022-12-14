globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, createError, lazyEventHandler, useQuery, useCookie, defineLazyEventHandler, useBody, createApp, createRouter } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ohmyfetch';
import { createRouter as createRouter$1 } from 'radix3';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase, kebabCase, pascalCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, withLeadingSlash, withoutTrailingSlash, joinURL, withBase } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import overlay from 'unstorage/drivers/overlay';
import memory$1 from 'unstorage/drivers/memory';
import { promises } from 'fs';
import { dirname, resolve, extname } from 'pathe';
import { fileURLToPath } from 'url';
import { fileURLToPath as fileURLToPath$1 } from 'node:url';
import { createIPX, createIPXMiddleware } from 'ipx';
import { visit } from 'unist-util-visit';
import defu from 'defu';
import remarkEmoji from 'remark-emoji';
import rehypeSlug from 'rehype-slug';
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';
import rehypeSortAttributeValues from 'rehype-sort-attribute-values';
import rehypeSortAttributes from 'rehype-sort-attributes';
import rehypeRaw from 'rehype-raw';
import yaml from 'js-yaml';
import flat from 'flat';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import { stringifyEntitiesLight } from 'stringify-entities';
import { parseEntities } from 'parse-entities';
import { markdownLineEnding, markdownSpace, asciiAlpha, markdownLineEndingOrSpace, asciiAlphanumeric } from 'micromark-util-character';
import { factorySpace } from 'micromark-factory-space';
import { factoryWhitespace } from 'micromark-factory-whitespace';
import { codeFenced } from 'micromark-core-commonmark';
import { all } from 'mdast-util-to-hast';
import { detab } from 'detab';
import { u } from 'unist-builder';
import { encode } from 'mdurl';
import { position } from 'unist-util-position';
import htmlTags from 'html-tags';
import slugify from 'slugify';
import { loadNodeIcon } from '@iconify/utils/lib/loader/node-loader';
import * as cheerio from 'cheerio';
import { getHighlighter, BUNDLED_LANGUAGES, BUNDLED_THEMES } from 'shiki-es';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"public":{"content":{"base":"_content","tags":{"p":"prose-p","a":"prose-a","blockquote":"prose-blockquote","code-inline":"prose-code-inline","code":"prose-code","em":"prose-em","h1":"prose-h1","h2":"prose-h2","h3":"prose-h3","h4":"prose-h4","h5":"prose-h5","h6":"prose-h6","hr":"prose-hr","img":"prose-img","ul":"prose-ul","ol":"prose-ol","li":"prose-li","strong":"prose-strong","table":"prose-table","thead":"prose-thead","tbody":"prose-tbody","td":"prose-td","th":"prose-th","tr":"prose-tr"},"highlight":{"theme":"dracula"},"wsUrl":""}},"ipx":{"dir":"","domains":["avatars0.githubusercontent.com"],"sharp":{},"alias":{}},"content":{"cacheVersion":2,"cacheIntegerity":"ikKR8xoQdz","transformers":["/Users/bon/Documents/my-workspace/nuxt-blog/modules/runtime/content/code-file-name","/Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/server/transformers/markdown.mjs","/Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/server/transformers/yaml.mjs","/Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/server/transformers/json.mjs","/Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/server/transformers/csv.mjs","/Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/server/transformers/path-meta.mjs","/Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/server/transformers/shiki.mjs","/Users/bon/Documents/my-workspace/nuxt-blog/modules/runtime/content/md-icons","/Users/bon/Documents/my-workspace/nuxt-blog/modules/runtime/content/project-icons","/Users/bon/Documents/my-workspace/nuxt-blog/modules/runtime/content/breadcrumbs","/Users/bon/Documents/my-workspace/nuxt-blog/modules/runtime/content/nuxt-image","/Users/bon/Documents/my-workspace/nuxt-blog/modules/runtime/content/storage-meta","/Users/bon/Documents/my-workspace/nuxt-blog/modules/runtime/content/read-time","/Users/bon/Documents/my-workspace/nuxt-blog/modules/runtime/content/meta-normaliser"],"base":"_content","watch":true,"sources":["content"],"ignores":["\\.","-"],"locales":[],"highlight":{"theme":"dracula"},"markdown":{"tags":{"p":"prose-p","a":"prose-a","blockquote":"prose-blockquote","code-inline":"prose-code-inline","code":"prose-code","em":"prose-em","h1":"prose-h1","h2":"prose-h2","h3":"prose-h3","h4":"prose-h4","h5":"prose-h5","h6":"prose-h6","hr":"prose-hr","img":"prose-img","ul":"prose-ul","ol":"prose-ol","li":"prose-li","strong":"prose-strong","table":"prose-table","thead":"prose-thead","tbody":"prose-tbody","td":"prose-td","th":"prose-th","tr":"prose-tr"},"rehypePlugins":[],"remarkPlugins":[]},"yaml":{},"csv":{},"navigation":{"fields":[]}}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const _assets = {
  ["nitro:bundled:cache:content:parsed:content:pages:1.home.md"]: {
    import: () => import('../raw/1.home.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"2b79-IbPmEsBmnRvlETUDrHra5gmf28A\"","mtime":"2022-10-06T07:35:51.102Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:pages:blog.md"]: {
    import: () => import('../raw/blog.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"fb6-YOSSnMkJnpz/60L+VjzgUrItmgM\"","mtime":"2022-10-06T07:35:51.104Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:posts:how-the-heck-does-vite-work-2.md"]: {
    import: () => import('../raw/how-the-heck-does-vite-work-2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"20123-movSxMmXdaerTA0pVA9QubKBaY8\"","mtime":"2022-10-06T07:35:51.104Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:posts:how-the-heck-does-vite-work.md"]: {
    import: () => import('../raw/how-the-heck-does-vite-work.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"20117-hsPYRrba59dL9dHDxvKcDuBTCXg\"","mtime":"2022-10-06T07:35:51.104Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:posts:modern-package-development.md"]: {
    import: () => import('../raw/modern-package-development.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"18aec-A/3DguzVxd7MvGPiJxkxUlIz1S4\"","mtime":"2022-10-06T07:35:51.104Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:posts:scale-your-vue-components.md"]: {
    import: () => import('../raw/scale-your-vue-components.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"26feb-RAHLVvoPqf1B9UxIM72DqI9dRoM\"","mtime":"2022-10-06T07:35:51.104Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:posts:vue-automatic-component-imports.md"]: {
    import: () => import('../raw/vue-automatic-component-imports.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"33627-UWSB3DteU6dKElmCEg6LSkqnbtE\"","mtime":"2022-10-06T07:35:51.104Z"}
  }
};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const bundledStorage = ["/cache/content"];
for (const base of bundledStorage) {
  storage.mount(base, overlay({
    layers: [
      memory$1(),
      // TODO
      // prefixStorage(storage, base),
      prefixStorage(storage, 'assets:nitro:bundled:' + base)
    ]
  }));
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const script = "const w=window,de=document.documentElement,knownColorSchemes=[\"dark\",\"light\"],preference=window.localStorage.getItem(\"nuxt-color-mode\")||\"system\";let value=preference===\"system\"?getColorScheme():preference;const forcedColorMode=de.getAttribute(\"data-color-mode-forced\");forcedColorMode&&(value=forcedColorMode),addColorScheme(value),w[\"__NUXT_COLOR_MODE__\"]={preference,value,getColorScheme,addColorScheme,removeColorScheme};function addColorScheme(e){const o=\"\"+e+\"\",t=\"\";de.classList?de.classList.add(o):de.className+=\" \"+o,t&&de.setAttribute(\"data-\"+t,e)}function removeColorScheme(e){const o=\"\"+e+\"\",t=\"\";de.classList?de.classList.remove(o):de.className=de.className.replace(new RegExp(o,\"g\"),\"\"),t&&de.removeAttribute(\"data-\"+t)}function prefersColorScheme(e){return w.matchMedia(\"(prefers-color-scheme\"+e+\")\")}function getColorScheme(){if(w.matchMedia&&prefersColorScheme(\"\").media!==\"not all\"){for(const e of knownColorSchemes)if(prefersColorScheme(\":\"+e).matches)return e}return\"dark\"}\n";

const _qFmlfy9Eo8 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _qFmlfy9Eo8
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.req.url?.startsWith("/__nuxt_error");
  let html = !isErrorPage ? await $fetch(withQuery("/__nuxt_error", errorObject)).catch(() => null) : null;
  if (!html) {
    const { template } = await import('../error-500.mjs');
    html = template(errorObject);
  }
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/_payload.js": {
    "type": "application/javascript",
    "etag": "\"1a03-FVk5VhCXmELcZrSdFqtxCXJo2es\"",
    "mtime": "2022-10-06T07:35:50.488Z",
    "size": 6659,
    "path": "../public/_payload.js"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3c2e-aCNy8nxFlmfSyKlPzCn7e70CMtk\"",
    "mtime": "2022-10-06T07:35:43.343Z",
    "size": 15406,
    "path": "../public/favicon.ico"
  },
  "/feed.atom": {
    "type": "application/atom+xml",
    "etag": "\"26fac-VejSlt5hd6MJAQcvHgxejlEJMSc\"",
    "mtime": "2022-10-06T07:35:50.370Z",
    "size": 159660,
    "path": "../public/feed.atom"
  },
  "/feed.json": {
    "type": "application/json",
    "etag": "\"2711b-I9ohwPfSQKOl4OMpxKe5Xuzm9Go\"",
    "mtime": "2022-10-06T07:35:49.805Z",
    "size": 160027,
    "path": "../public/feed.json"
  },
  "/feed.xml": {
    "type": "application/xml",
    "etag": "\"27287-cHLdnXMffUhALz5KYQSuc4tDIqo\"",
    "mtime": "2022-10-06T07:35:49.273Z",
    "size": 160391,
    "path": "../public/feed.xml"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"c3ed-R0UY8QJKtL4FH0EpTacH/kYsXXI\"",
    "mtime": "2022-10-06T07:35:48.485Z",
    "size": 50157,
    "path": "../public/index.html"
  },
  "/logo.webp": {
    "type": "image/webp",
    "etag": "\"e2b4-Oew84PR1wU/hSi5qUUtYCiH+Tq4\"",
    "mtime": "2022-10-06T07:35:43.342Z",
    "size": 58036,
    "path": "../public/logo.webp"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
    "mtime": "2022-10-06T07:35:43.342Z",
    "size": 23,
    "path": "../public/robots.txt"
  },
  "/_nuxt/Breadcrumbs.779fa518.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"64-smvumS9INCicCmYGvi60y6BBncs\"",
    "mtime": "2022-10-06T07:35:43.341Z",
    "size": 100,
    "path": "../public/_nuxt/Breadcrumbs.779fa518.css"
  },
  "/_nuxt/Breadcrumbs.919cd111.js": {
    "type": "application/javascript",
    "etag": "\"5a0-Q+le0mAyavjIr0E7eGQVAtraIKA\"",
    "mtime": "2022-10-06T07:35:43.341Z",
    "size": 1440,
    "path": "../public/_nuxt/Breadcrumbs.919cd111.js"
  },
  "/_nuxt/CodeBlock.c6ff3d03.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"38b-/AWI9eRZMsXYPvU805hOZ7TsiJw\"",
    "mtime": "2022-10-06T07:35:43.340Z",
    "size": 907,
    "path": "../public/_nuxt/CodeBlock.c6ff3d03.css"
  },
  "/_nuxt/CodeBlock.c9f5741c.js": {
    "type": "application/javascript",
    "etag": "\"137-LviAQJVw9dW8vssBcDgYLic+9JE\"",
    "mtime": "2022-10-06T07:35:43.340Z",
    "size": 311,
    "path": "../public/_nuxt/CodeBlock.c9f5741c.js"
  },
  "/_nuxt/ContentDoc.8ec1f5ff.js": {
    "type": "application/javascript",
    "etag": "\"65b-DFyGB4GSpe1egvZr7O2XngGFoI4\"",
    "mtime": "2022-10-06T07:35:43.340Z",
    "size": 1627,
    "path": "../public/_nuxt/ContentDoc.8ec1f5ff.js"
  },
  "/_nuxt/ContentList.c540184b.js": {
    "type": "application/javascript",
    "etag": "\"31d-xUk5UuDTjTIb+7dmI21CrbwSXWs\"",
    "mtime": "2022-10-06T07:35:43.340Z",
    "size": 797,
    "path": "../public/_nuxt/ContentList.c540184b.js"
  },
  "/_nuxt/ContentNavigation.269c0d71.js": {
    "type": "application/javascript",
    "etag": "\"3bc-SKm1Jj10PjPkog1GMP5F2HlAhns\"",
    "mtime": "2022-10-06T07:35:43.340Z",
    "size": 956,
    "path": "../public/_nuxt/ContentNavigation.269c0d71.js"
  },
  "/_nuxt/ContentQuery.b465a54e.js": {
    "type": "application/javascript",
    "etag": "\"81d-gFj5VC4YY1gWGbqHc+yy0U0GK18\"",
    "mtime": "2022-10-06T07:35:43.339Z",
    "size": 2077,
    "path": "../public/_nuxt/ContentQuery.b465a54e.js"
  },
  "/_nuxt/ContentRenderer.4ce3d3ed.js": {
    "type": "application/javascript",
    "etag": "\"4a4-vHufOCEvnDJb2prLvpFkJ/jeoPQ\"",
    "mtime": "2022-10-06T07:35:43.339Z",
    "size": 1188,
    "path": "../public/_nuxt/ContentRenderer.4ce3d3ed.js"
  },
  "/_nuxt/Image.bdba113e.js": {
    "type": "application/javascript",
    "etag": "\"3a4-vfxH7jmsXkhnFA7MOvsLB9K60+E\"",
    "mtime": "2022-10-06T07:35:43.339Z",
    "size": 932,
    "path": "../public/_nuxt/Image.bdba113e.js"
  },
  "/_nuxt/List.06b929f3.js": {
    "type": "application/javascript",
    "etag": "\"570-FVKkwhMGs57KLgAFGLcVc42EmPM\"",
    "mtime": "2022-10-06T07:35:43.339Z",
    "size": 1392,
    "path": "../public/_nuxt/List.06b929f3.js"
  },
  "/_nuxt/List.b14548c2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"33-aCU1FvY5SCbRZy9nA/dfzKX4hSc\"",
    "mtime": "2022-10-06T07:35:43.338Z",
    "size": 51,
    "path": "../public/_nuxt/List.b14548c2.css"
  },
  "/_nuxt/Markdown.5a642b9b.js": {
    "type": "application/javascript",
    "etag": "\"33d-MP7HHjPtfkcs/Vvr7SCosC9JdTs\"",
    "mtime": "2022-10-06T07:35:43.337Z",
    "size": 829,
    "path": "../public/_nuxt/Markdown.5a642b9b.js"
  },
  "/_nuxt/MarkdownRenderer.41e3ea65.js": {
    "type": "application/javascript",
    "etag": "\"542e-rbsvs1COcr6dX+FQxBng0oLNpSA\"",
    "mtime": "2022-10-06T07:35:43.336Z",
    "size": 21550,
    "path": "../public/_nuxt/MarkdownRenderer.41e3ea65.js"
  },
  "/_nuxt/PageRenderer.3a925081.js": {
    "type": "application/javascript",
    "etag": "\"22a-/rvjBN2stYtG3TAWeN5w5/YVuBI\"",
    "mtime": "2022-10-06T07:35:43.335Z",
    "size": 554,
    "path": "../public/_nuxt/PageRenderer.3a925081.js"
  },
  "/_nuxt/PostList.12f31451.js": {
    "type": "application/javascript",
    "etag": "\"16dd-Iqkn7aR0QGLA1pzueNhvTsEZ99w\"",
    "mtime": "2022-10-06T07:35:43.335Z",
    "size": 5853,
    "path": "../public/_nuxt/PostList.12f31451.js"
  },
  "/_nuxt/PostList.ef6fb522.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"95-9GA3o64xa7f1jvALHAWzd6/IyIM\"",
    "mtime": "2022-10-06T07:35:43.335Z",
    "size": 149,
    "path": "../public/_nuxt/PostList.ef6fb522.css"
  },
  "/_nuxt/PostRenderer.64634003.js": {
    "type": "application/javascript",
    "etag": "\"2484-oGB/BsVwavW+UizpjEI5kvZ1mEk\"",
    "mtime": "2022-10-06T07:35:43.334Z",
    "size": 9348,
    "path": "../public/_nuxt/PostRenderer.64634003.js"
  },
  "/_nuxt/ProjectList.2d4b00e0.js": {
    "type": "application/javascript",
    "etag": "\"4f3-Au2tbP5W3nE21GWUGKEy6PGDAaM\"",
    "mtime": "2022-10-06T07:35:43.334Z",
    "size": 1267,
    "path": "../public/_nuxt/ProjectList.2d4b00e0.js"
  },
  "/_nuxt/ProjectList.4b7eed64.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2b-p+OOLvceLk6C/3M3GJ4vkG731Nk\"",
    "mtime": "2022-10-06T07:35:43.333Z",
    "size": 43,
    "path": "../public/_nuxt/ProjectList.4b7eed64.css"
  },
  "/_nuxt/Prose.34e9590c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"60a-Kb45nYoYhP8FDjRpPiRRb+X5eho\"",
    "mtime": "2022-10-06T07:35:43.333Z",
    "size": 1546,
    "path": "../public/_nuxt/Prose.34e9590c.css"
  },
  "/_nuxt/Prose.9fae3661.js": {
    "type": "application/javascript",
    "etag": "\"101-5o0mSDDfq+wKgkvk6o4fx6of47k\"",
    "mtime": "2022-10-06T07:35:43.333Z",
    "size": 257,
    "path": "../public/_nuxt/Prose.9fae3661.js"
  },
  "/_nuxt/ProseA.ee74c505.js": {
    "type": "application/javascript",
    "etag": "\"13d-KD3RdoEwoNkSF9XSdRDH1wE1UPQ\"",
    "mtime": "2022-10-06T07:35:43.332Z",
    "size": 317,
    "path": "../public/_nuxt/ProseA.ee74c505.js"
  },
  "/_nuxt/ProseBlockquote.0b646abe.js": {
    "type": "application/javascript",
    "etag": "\"c2-sOZXc35JpXXbpfdvUc5Bp94xxI0\"",
    "mtime": "2022-10-06T07:35:43.332Z",
    "size": 194,
    "path": "../public/_nuxt/ProseBlockquote.0b646abe.js"
  },
  "/_nuxt/ProseCode.9a77c96e.js": {
    "type": "application/javascript",
    "etag": "\"13f-OOAP4jV6sPaeDWNmRr48/c8a/ew\"",
    "mtime": "2022-10-06T07:35:43.331Z",
    "size": 319,
    "path": "../public/_nuxt/ProseCode.9a77c96e.js"
  },
  "/_nuxt/ProseCode.e63e49c6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2e-GbvrqT5j9gSWlpa8e36U/Kv6Zx0\"",
    "mtime": "2022-10-06T07:35:43.331Z",
    "size": 46,
    "path": "../public/_nuxt/ProseCode.e63e49c6.css"
  },
  "/_nuxt/ProseCodeInline.5ce1b789.js": {
    "type": "application/javascript",
    "etag": "\"bc-1kzDL4fASyy4imxojgzg35p2DME\"",
    "mtime": "2022-10-06T07:35:43.331Z",
    "size": 188,
    "path": "../public/_nuxt/ProseCodeInline.5ce1b789.js"
  },
  "/_nuxt/ProseEm.4a06c0a4.js": {
    "type": "application/javascript",
    "etag": "\"ba-QKU96uadY9fMS6m31bKUbe7W3NU\"",
    "mtime": "2022-10-06T07:35:43.331Z",
    "size": 186,
    "path": "../public/_nuxt/ProseEm.4a06c0a4.js"
  },
  "/_nuxt/ProseH1.2aa3e91e.js": {
    "type": "application/javascript",
    "etag": "\"ba-DZimPkJarQT8dgPCKmu++27fILg\"",
    "mtime": "2022-10-06T07:35:43.331Z",
    "size": 186,
    "path": "../public/_nuxt/ProseH1.2aa3e91e.js"
  },
  "/_nuxt/ProseH2.00e111b7.js": {
    "type": "application/javascript",
    "etag": "\"134-eD+ruo/4DVN1BzZAViI2AzVaVgw\"",
    "mtime": "2022-10-06T07:35:43.331Z",
    "size": 308,
    "path": "../public/_nuxt/ProseH2.00e111b7.js"
  },
  "/_nuxt/ProseH3.6182eb41.js": {
    "type": "application/javascript",
    "etag": "\"134-dWDTu9S2xaR9gMq8fr3biey7riQ\"",
    "mtime": "2022-10-06T07:35:43.330Z",
    "size": 308,
    "path": "../public/_nuxt/ProseH3.6182eb41.js"
  },
  "/_nuxt/ProseH4.9543ca65.js": {
    "type": "application/javascript",
    "etag": "\"134-6SF8rZgC3SV9CNTw5HJhEgXHR2g\"",
    "mtime": "2022-10-06T07:35:43.330Z",
    "size": 308,
    "path": "../public/_nuxt/ProseH4.9543ca65.js"
  },
  "/_nuxt/ProseH5.71eb68b2.js": {
    "type": "application/javascript",
    "etag": "\"ba-w8uRx9nwlxr6WN3t8xEs9w7T9+E\"",
    "mtime": "2022-10-06T07:35:43.330Z",
    "size": 186,
    "path": "../public/_nuxt/ProseH5.71eb68b2.js"
  },
  "/_nuxt/ProseH6.bf1c4940.js": {
    "type": "application/javascript",
    "etag": "\"ba-9YMi1r7gSzdJ6EdrGvtCC0qElEk\"",
    "mtime": "2022-10-06T07:35:43.330Z",
    "size": 186,
    "path": "../public/_nuxt/ProseH6.bf1c4940.js"
  },
  "/_nuxt/ProseHr.c4230d43.js": {
    "type": "application/javascript",
    "etag": "\"96-kbWgp5Iyr6ctPVKVjFtc7b7gG1I\"",
    "mtime": "2022-10-06T07:35:43.330Z",
    "size": 150,
    "path": "../public/_nuxt/ProseHr.c4230d43.js"
  },
  "/_nuxt/ProseImg.4d4e41cd.js": {
    "type": "application/javascript",
    "etag": "\"185-3JGB7C2Z0ee0FysNTRbWOH6qc4o\"",
    "mtime": "2022-10-06T07:35:43.329Z",
    "size": 389,
    "path": "../public/_nuxt/ProseImg.4d4e41cd.js"
  },
  "/_nuxt/ProseLi.4530f5e1.js": {
    "type": "application/javascript",
    "etag": "\"ba-7abM/7XKFxABysPwDCWO3CWo3XA\"",
    "mtime": "2022-10-06T07:35:43.329Z",
    "size": 186,
    "path": "../public/_nuxt/ProseLi.4530f5e1.js"
  },
  "/_nuxt/ProseOl.959ea4bb.js": {
    "type": "application/javascript",
    "etag": "\"ba-sLbTtzKBN2/WaGBUYcmMS+vFor8\"",
    "mtime": "2022-10-06T07:35:43.329Z",
    "size": 186,
    "path": "../public/_nuxt/ProseOl.959ea4bb.js"
  },
  "/_nuxt/ProseP.642477b2.js": {
    "type": "application/javascript",
    "etag": "\"b9-5kYjn2f/xCvtHn/8gkstk1lNoIM\"",
    "mtime": "2022-10-06T07:35:43.329Z",
    "size": 185,
    "path": "../public/_nuxt/ProseP.642477b2.js"
  },
  "/_nuxt/ProseStrong.b6df79ac.js": {
    "type": "application/javascript",
    "etag": "\"be-xn/bZhAjCTfvqe3rdryj1eNc/f0\"",
    "mtime": "2022-10-06T07:35:43.329Z",
    "size": 190,
    "path": "../public/_nuxt/ProseStrong.b6df79ac.js"
  },
  "/_nuxt/ProseTable.7793a8b2.js": {
    "type": "application/javascript",
    "etag": "\"bd-OW9Cdz8vOYW98KE3jUODn2LCx2s\"",
    "mtime": "2022-10-06T07:35:43.329Z",
    "size": 189,
    "path": "../public/_nuxt/ProseTable.7793a8b2.js"
  },
  "/_nuxt/ProseTbody.ad939977.js": {
    "type": "application/javascript",
    "etag": "\"bd-fB3TDcUYofjY0De3u0MSyBwStho\"",
    "mtime": "2022-10-06T07:35:43.329Z",
    "size": 189,
    "path": "../public/_nuxt/ProseTbody.ad939977.js"
  },
  "/_nuxt/ProseTd.131a41e1.js": {
    "type": "application/javascript",
    "etag": "\"ba-FJMQfB1IAEj00VSu0DYCAI9nF58\"",
    "mtime": "2022-10-06T07:35:43.328Z",
    "size": 186,
    "path": "../public/_nuxt/ProseTd.131a41e1.js"
  },
  "/_nuxt/ProseTh.c2ad1132.js": {
    "type": "application/javascript",
    "etag": "\"ba-U6bykTnZ/0V7p16UfrFtalS2I3Y\"",
    "mtime": "2022-10-06T07:35:43.328Z",
    "size": 186,
    "path": "../public/_nuxt/ProseTh.c2ad1132.js"
  },
  "/_nuxt/ProseThead.39eda21b.js": {
    "type": "application/javascript",
    "etag": "\"bd-c5QUDXBfRdAMmineKlr7aq9/3Us\"",
    "mtime": "2022-10-06T07:35:43.328Z",
    "size": 189,
    "path": "../public/_nuxt/ProseThead.39eda21b.js"
  },
  "/_nuxt/ProseTr.0b8b3200.js": {
    "type": "application/javascript",
    "etag": "\"b5-M1XjoIA0mFp+TvXnKYgVcQkvNEs\"",
    "mtime": "2022-10-06T07:35:43.328Z",
    "size": 181,
    "path": "../public/_nuxt/ProseTr.0b8b3200.js"
  },
  "/_nuxt/ProseUl.854c587a.js": {
    "type": "application/javascript",
    "etag": "\"ba-27uFoeR9BId6Cn0jvc3QPXlQ4eM\"",
    "mtime": "2022-10-06T07:35:43.328Z",
    "size": 186,
    "path": "../public/_nuxt/ProseUl.854c587a.js"
  },
  "/_nuxt/SubTitle.3bf7e9fe.js": {
    "type": "application/javascript",
    "etag": "\"13b-qr006V9TlcvNfgX5hwgW7H8H884\"",
    "mtime": "2022-10-06T07:35:43.328Z",
    "size": 315,
    "path": "../public/_nuxt/SubTitle.3bf7e9fe.js"
  },
  "/_nuxt/SubTitle.b7dd73da.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"60-4zE3E2WLhnAJTyiKFONdFKrvne0\"",
    "mtime": "2022-10-06T07:35:43.327Z",
    "size": 96,
    "path": "../public/_nuxt/SubTitle.b7dd73da.css"
  },
  "/_nuxt/Tip.2caf9eb4.js": {
    "type": "application/javascript",
    "etag": "\"482-erMF1LOd7xcJv4ijzNyCgwQ+uX4\"",
    "mtime": "2022-10-06T07:35:43.327Z",
    "size": 1154,
    "path": "../public/_nuxt/Tip.2caf9eb4.js"
  },
  "/_nuxt/WindiIcon.ca53f803.js": {
    "type": "application/javascript",
    "etag": "\"c48-nPr862ZUY7aFtVU05Htpz/A6upg\"",
    "mtime": "2022-10-06T07:35:43.326Z",
    "size": 3144,
    "path": "../public/_nuxt/WindiIcon.ca53f803.js"
  },
  "/_nuxt/_...slug_.e949f77a.js": {
    "type": "application/javascript",
    "etag": "\"4cb-rqK7PkOevkgok0VcZElASFp/GuQ\"",
    "mtime": "2022-10-06T07:35:43.326Z",
    "size": 1227,
    "path": "../public/_nuxt/_...slug_.e949f77a.js"
  },
  "/_nuxt/entry.dc16a0f8.js": {
    "type": "application/javascript",
    "etag": "\"2aa24-l5yJXAklBauHFy1zRXnD2DHIFcc\"",
    "mtime": "2022-10-06T07:35:43.326Z",
    "size": 174628,
    "path": "../public/_nuxt/entry.dc16a0f8.js"
  },
  "/_nuxt/entry.f084df7e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"78cb-KeW2klQeuXFj9vr/QiejNNjDdgk\"",
    "mtime": "2022-10-06T07:35:43.326Z",
    "size": 30923,
    "path": "../public/_nuxt/entry.f084df7e.css"
  },
  "/_nuxt/error-404.218b3538.js": {
    "type": "application/javascript",
    "etag": "\"8a9-DETasqkTID3tMQmpzt2Gb5BjlzE\"",
    "mtime": "2022-10-06T07:35:43.325Z",
    "size": 2217,
    "path": "../public/_nuxt/error-404.218b3538.js"
  },
  "/_nuxt/error-404.eac13d93.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-z4FmjT6V+NiGXmPANAjf7kIiTvo\"",
    "mtime": "2022-10-06T07:35:43.325Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.eac13d93.css"
  },
  "/_nuxt/error-500.1e9fe12c.js": {
    "type": "application/javascript",
    "etag": "\"757-juWASSOZTKly9JvD44buf+yD0Ms\"",
    "mtime": "2022-10-06T07:35:43.325Z",
    "size": 1879,
    "path": "../public/_nuxt/error-500.1e9fe12c.js"
  },
  "/_nuxt/error-500.a37da814.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-iq+AEyZ8RZl/2cVg9LNkvdpGuhA\"",
    "mtime": "2022-10-06T07:35:43.325Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.a37da814.css"
  },
  "/_nuxt/error-component.8eaf9edb.js": {
    "type": "application/javascript",
    "etag": "\"465-C1iyQQ/cMSKnPreHcMTDOGbBHsY\"",
    "mtime": "2022-10-06T07:35:43.324Z",
    "size": 1125,
    "path": "../public/_nuxt/error-component.8eaf9edb.js"
  },
  "/_nuxt/web-socket.d4002bae.js": {
    "type": "application/javascript",
    "etag": "\"32b-V3+zPR1xR3FCZxEdYXQ+WeZ+5Vg\"",
    "mtime": "2022-10-06T07:35:43.323Z",
    "size": 811,
    "path": "../public/_nuxt/web-socket.d4002bae.js"
  },
  "/blog/_payload.js": {
    "type": "application/javascript",
    "etag": "\"279e-l3fHhww2p0iJ1yknx3Wobw/Vykc\"",
    "mtime": "2022-10-06T07:35:51.000Z",
    "size": 10142,
    "path": "../public/blog/_payload.js"
  },
  "/blog/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"d8d3-0tTAfKM1BhOw4mhGhPFJcDAdMt8\"",
    "mtime": "2022-10-06T07:35:50.487Z",
    "size": 55507,
    "path": "../public/blog/index.html"
  },
  "/api/_content/cache": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"2f-GhJGB3SmDWQvSAg/w0Qqe9xrVHY\"",
    "mtime": "2022-10-06T07:35:50.385Z",
    "size": 47,
    "path": "../public/api/_content/cache"
  },
  "/blog/how-the-heck-does-vite-work/_payload.js": {
    "type": "application/javascript",
    "etag": "\"1836e-yG2AvwEReNUEcSM9lpp5GhuTIeQ\"",
    "mtime": "2022-10-06T07:35:51.076Z",
    "size": 99182,
    "path": "../public/blog/how-the-heck-does-vite-work/_payload.js"
  },
  "/blog/how-the-heck-does-vite-work/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1cb7c-iRqi7rzidwNzFCp5Ns1GlgrxITg\"",
    "mtime": "2022-10-06T07:35:50.999Z",
    "size": 117628,
    "path": "../public/blog/how-the-heck-does-vite-work/index.html"
  },
  "/blog/how-the-heck-does-vite-work-2/_payload.js": {
    "type": "application/javascript",
    "etag": "\"18370-gQKUcs6PyhyFJlFb8B75Vz0t7Xc\"",
    "mtime": "2022-10-06T07:35:51.061Z",
    "size": 99184,
    "path": "../public/blog/how-the-heck-does-vite-work-2/_payload.js"
  },
  "/blog/how-the-heck-does-vite-work-2/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1cbb4-NCP/Aq2ennr9EVPJZU/4h0CgYVI\"",
    "mtime": "2022-10-06T07:35:50.904Z",
    "size": 117684,
    "path": "../public/blog/how-the-heck-does-vite-work-2/index.html"
  },
  "/blog/modern-package-development/_payload.js": {
    "type": "application/javascript",
    "etag": "\"ecdc-IiODEpV4WVHTOzKkS5a/sKXuxR4\"",
    "mtime": "2022-10-06T07:35:51.015Z",
    "size": 60636,
    "path": "../public/blog/modern-package-development/_payload.js"
  },
  "/blog/modern-package-development/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"167cb-weLGYiuPpjRh5ttfHocDYPACplI\"",
    "mtime": "2022-10-06T07:35:50.600Z",
    "size": 92107,
    "path": "../public/blog/modern-package-development/index.html"
  },
  "/blog/scale-your-vue-components/_payload.js": {
    "type": "application/javascript",
    "etag": "\"16b65-V33gqQa9aXCb4KQ1FPPhdXNROMU\"",
    "mtime": "2022-10-06T07:35:51.033Z",
    "size": 93029,
    "path": "../public/blog/scale-your-vue-components/_payload.js"
  },
  "/blog/scale-your-vue-components/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1a5e2-wS/TFRIYgl+eutL/EDyjGLLj+vE\"",
    "mtime": "2022-10-06T07:35:50.696Z",
    "size": 108002,
    "path": "../public/blog/scale-your-vue-components/index.html"
  },
  "/blog/vue-automatic-component-imports/_payload.js": {
    "type": "application/javascript",
    "etag": "\"239c2-YIgdYixfwoE5+zZHWyozetkDVMw\"",
    "mtime": "2022-10-06T07:35:51.047Z",
    "size": 145858,
    "path": "../public/blog/vue-automatic-component-imports/_payload.js"
  },
  "/blog/vue-automatic-component-imports/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"2239e-f+BulacjY0shi0VetfIve0NCPOU\"",
    "mtime": "2022-10-06T07:35:50.813Z",
    "size": 140190,
    "path": "../public/blog/vue-automatic-component-imports/index.html"
  },
  "/api/_content/query/9mdBK1c9Fp": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"e47-bwp6Sus9h4PJZEQ2rf5w+6MCRtE\"",
    "mtime": "2022-10-06T07:35:50.503Z",
    "size": 3655,
    "path": "../public/api/_content/query/9mdBK1c9Fp"
  },
  "/api/_content/query/BfINddD2BC": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"2008b-DLcy51ZhHI+kJA2cw8ZhItq2MSI\"",
    "mtime": "2022-10-06T07:35:51.074Z",
    "size": 131211,
    "path": "../public/api/_content/query/BfINddD2BC"
  },
  "/api/_content/query/Fka0HWkol3": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"c2a-RmyzyJOaKUeEUdDC6bpPexrqnOg\"",
    "mtime": "2022-10-06T07:35:50.515Z",
    "size": 3114,
    "path": "../public/api/_content/query/Fka0HWkol3"
  },
  "/api/_content/query/SUKn7al3Ks": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"33587-+W2VWjRVcI7WfcLUgQVmDZbrH8U\"",
    "mtime": "2022-10-06T07:35:51.046Z",
    "size": 210311,
    "path": "../public/api/_content/query/SUKn7al3Ks"
  },
  "/api/_content/query/cu9r2FTjhv": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"12b39-2XzfviTwGFgwSNGR/fII8Zn3+TE\"",
    "mtime": "2022-10-06T07:35:51.014Z",
    "size": 76601,
    "path": "../public/api/_content/query/cu9r2FTjhv"
  },
  "/api/_content/query/dTPoIIoCI7": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"507-FAWCxcBZH5sgqs6b4jgZ6At8YhM\"",
    "mtime": "2022-10-06T07:35:50.404Z",
    "size": 1287,
    "path": "../public/api/_content/query/dTPoIIoCI7"
  },
  "/api/_content/query/mZo5NHyZwS": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"2008b-DLcy51ZhHI+kJA2cw8ZhItq2MSI\"",
    "mtime": "2022-10-06T07:35:51.060Z",
    "size": 131211,
    "path": "../public/api/_content/query/mZo5NHyZwS"
  },
  "/api/_content/query/ptJYCHtXWr": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1743-65S4DAON5E+6Ne5vtuHVljQu3f4\"",
    "mtime": "2022-10-06T07:35:50.417Z",
    "size": 5955,
    "path": "../public/api/_content/query/ptJYCHtXWr"
  },
  "/api/_content/query/w778yD79e0": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1ec73-IPdnGqHeMwfjUwJXIzS7mKdGPDA\"",
    "mtime": "2022-10-06T07:35:51.032Z",
    "size": 126067,
    "path": "../public/api/_content/query/w778yD79e0"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size) {
    event.res.setHeader("Content-Length", asset.size);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

const _KsAI0q = lazyEventHandler(() => {
  const ipxOptions = {
    ...useRuntimeConfig().ipx || {},
    dir: fileURLToPath$1(new URL("../public", globalThis._importMeta_.url))
  };
  const ipx = createIPX(ipxOptions);
  const middleware = createIPXMiddleware(ipx);
  return eventHandler(async (event) => {
    event.req.url = withLeadingSlash(event.context.params._);
    await middleware(event.req, event.res);
  });
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
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
    findSurround: (query2, options) => fetcher({ ...params, surround: { query: query2, ...options } }),
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    $not: (item, condition) => !match(item, condition),
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    $in: (item, condition) => ensureArray(condition).some((cond) => match(item, cond)),
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    $type: (item, condition) => typeof item === String(condition),
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    $lt: (item, condition) => {
      return item < condition;
    },
    $lte: (item, condition) => {
      return item <= condition;
    },
    $gt: (item, condition) => {
      return item > condition;
    },
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before || 1;
    after = after || 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const pipelines = [
    (data, params) => data.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery))),
    (data, params) => ensureArray(params.sort).forEach((options) => sortList(data, options)),
    (data, params) => params.surround ? surround(data, params.surround) : data,
    (data, params) => params.skip ? data.slice(params.skip) : data,
    (data, params) => params.limit ? data.slice(0, params.limit) : data,
    (data, params) => apply(withoutKeys(params.without))(data),
    (data, params) => apply(withKeys(params.only))(data),
    (data, params) => params.first ? data[0] : data
  ];
  return async (params) => {
    const data = await getContentsList();
    return pipelines.reduce(($data, pipe) => pipe($data, params) || $data, data);
  };
}

const _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47modules_47runtime_47content_47code_45file_45name = {
  name: "code-file-name",
  extentions: [".md"],
  async transform(content) {
    visit(
      content.body,
      (node) => {
        var _a, _b;
        return (node == null ? void 0 : node.tag) === "code" && (((_a = node == null ? void 0 : node.props) == null ? void 0 : _a.filename) || ((_b = node == null ? void 0 : node.props) == null ? void 0 : _b.language));
      },
      (node, index, parent) => {
        var _a;
        const children = [];
        if (node.props.filename) {
          children.push({
            type: "element",
            tag: "span",
            props: {
              class: "code-block__filename"
            },
            children: [
              { type: "text", value: (_a = node == null ? void 0 : node.props) == null ? void 0 : _a.filename }
            ]
          });
        }
        children.push(node);
        parent.children.splice(index, 1, ...[
          {
            type: "element",
            tag: "CodeBlock",
            props: {
              "data-language": node.props.language,
              "class": [
                "code-block",
                node.props.filename ? "code-block--with-filename" : ""
              ].join(" ")
            },
            children
          }
        ]);
      }
    );
    return content;
  }
};

const FRONTMATTER_DELIMITER = "---";
function stringifyFrontMatter(data, content = "") {
  data = flat.flatten(data, {
    safe: true
  });
  return [
    FRONTMATTER_DELIMITER,
    yaml.dump(data, { lineWidth: -1 }),
    FRONTMATTER_DELIMITER,
    content
  ].join("\n");
}
function parseFrontMatter(content) {
  let data = {};
  if (content.startsWith(FRONTMATTER_DELIMITER)) {
    const idx = content.indexOf("\n" + FRONTMATTER_DELIMITER);
    if (idx !== -1) {
      const frontmatter = content.slice(4, idx);
      if (frontmatter) {
        data = yaml.load(frontmatter);
        content = content.slice(idx + 4);
      }
    }
  }
  return {
    content,
    data: flat.unflatten(data || {}, {})
  };
}

function flattenNodeText(node) {
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = ["h2", "h3", "h4"].reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

function track(options_) {
  const options = options_ || {};
  const now = options.now || {};
  let lineShift = options.lineShift || 0;
  let line = now.line || 1;
  let column = now.column || 1;
  return { move, current, shift };
  function current() {
    return { now: { line, column }, lineShift };
  }
  function shift(value) {
    lineShift += value;
  }
  function move(value = "") {
    const chunks = value.split(/\r?\n|\r/g);
    const tail = chunks[chunks.length - 1];
    line += chunks.length - 1;
    column = chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift;
    return value;
  }
}
function containerFlow(parent, context, safeOptions = {}) {
  const indexStack = context.indexStack;
  const children = parent.children || [];
  const tracker = track(safeOptions);
  const results = [];
  let index = -1;
  indexStack.push(-1);
  while (++index < children.length) {
    const child = children[index];
    indexStack[indexStack.length - 1] = index;
    results.push(tracker.move(context.handle(child, parent, context, {
      before: "\n",
      after: "\n",
      ...tracker.current()
    })));
    if (child.type !== "list") {
      context.bulletLastUsed = void 0;
    }
    if (index < children.length - 1) {
      results.push(tracker.move(between(child, children[index + 1])));
    }
  }
  indexStack.pop();
  return results.join("");
  function between(left, right) {
    let index2 = context.join.length;
    while (index2--) {
      const result = context.join[index2](left, right, parent, context);
      if (result === true || result === 1) {
        break;
      }
      if (typeof result === "number") {
        return "\n".repeat(1 + result);
      }
      if (result === false) {
        return "\n\n<!---->\n\n";
      }
    }
    return "\n\n";
  }
}
function containerPhrasing(parent, context, safeOptions) {
  const indexStack = context.indexStack;
  const children = parent.children || [];
  const results = [];
  let index = -1;
  let before = safeOptions.before;
  indexStack.push(-1);
  let tracker = track(safeOptions);
  while (++index < children.length) {
    const child = children[index];
    let after;
    indexStack[indexStack.length - 1] = index;
    if (index + 1 < children.length) {
      let handle = context.handle.handlers[children[index + 1].type];
      if (handle && handle.peek) {
        handle = handle.peek;
      }
      after = handle ? handle(children[index + 1], parent, context, {
        before: "",
        after: "",
        ...tracker.current()
      }).charAt(0) : "";
    } else {
      after = safeOptions.after;
    }
    if (results.length > 0 && (before === "\r" || before === "\n") && child.type === "html") {
      results[results.length - 1] = results[results.length - 1].replace(/(\r?\n|\r)$/, " ");
      before = " ";
      tracker = track(safeOptions);
      tracker.move(results.join(""));
    }
    results.push(tracker.move(context.handle(child, parent, context, {
      ...tracker.current(),
      before,
      after
    })));
    before = results[results.length - 1].slice(-1);
  }
  indexStack.pop();
  return results.join("");
}
function checkQuote(context) {
  const marker = context.options.quote || '"';
  if (marker !== '"' && marker !== "'") {
    throw new Error("Cannot serialize title with `" + marker + "` for `options.quote`, expected `\"`, or `'`");
  }
  return marker;
}

const own = {}.hasOwnProperty;
const shortcut = /^[^\t\n\r "#'.<=>`}]+$/;
const baseFense = 2;
const toMarkdown = {
  unsafe: [
    {
      character: "\r",
      inConstruct: ["leafComponentLabel", "containerComponentLabel"]
    },
    {
      character: "\n",
      inConstruct: ["leafComponentLabel", "containerComponentLabel"]
    },
    {
      before: "[^:]",
      character: ":",
      after: "[A-Za-z]",
      inConstruct: ["phrasing"]
    },
    { atBreak: true, character: ":", after: ":" }
  ],
  handlers: {
    containerComponent: containerComponent$1,
    textComponent,
    componentContainerSection
  }
};
function componentContainerSection(node, _, context) {
  context.indexStack = context.stack;
  return `#${node.name}

${content(node, context)}`;
}
function textComponent(node, _, context) {
  context.indexStack = context.stack;
  const exit = context.enter(node.type);
  let value = ":" + (node.name || "") + label$3(node, context) + attributes$3(node, context);
  value += "\n" + content(node, context);
  exit();
  return value;
}
let nest = 0;
function containerComponent$1(node, _, context) {
  context.indexStack = context.stack;
  const prefix = ":".repeat(baseFense + nest);
  nest += 1;
  const exit = context.enter(node.type);
  let value = prefix + (node.name || "") + label$3(node, context) + attributes$3(node, context);
  let subvalue;
  if (node.fmAttributes) {
    value += "\n" + stringifyFrontMatter(node.fmAttributes).trim();
  }
  if (node.type === "containerComponent") {
    subvalue = content(node, context);
    if (subvalue) {
      value += "\n" + subvalue;
    }
    value += "\n" + prefix;
    if (nest > 1) {
      value = value.split("\n").map((line) => "  " + line).join("\n");
    }
  }
  nest -= 1;
  exit();
  return value;
}
containerComponent$1.peek = function peekComponent() {
  return ":";
};
function label$3(node, context) {
  let label2 = node;
  if (node.type === "containerComponent") {
    if (!inlineComponentLabel(node)) {
      return "";
    }
    label2 = node.children[0];
  }
  const exit = context.enter("label");
  const subexit = context.enter(node.type + "Label");
  const value = containerPhrasing(label2, context, { before: "[", after: "]" });
  subexit();
  exit();
  return value ? "[" + value + "]" : "";
}
function attributes$3(node, context) {
  const quote = checkQuote(context);
  const subset = node.type === "textComponent" ? [quote] : [quote, "\n", "\r"];
  const attrs = node.attributes || {};
  const values = [];
  let id;
  let classesFull = "";
  let classes = "";
  let value;
  let key;
  let index;
  for (key in attrs) {
    if (own.call(attrs, key) && attrs[key] != null) {
      value = String(attrs[key]);
      if (key === "id") {
        id = shortcut.test(value) ? "#" + value : quoted("id", value);
      } else if (key === "class") {
        value = value.split(/[\t\n\r ]+/g);
        classesFull = [];
        classes = [];
        index = -1;
        while (++index < value.length) {
          (shortcut.test(value[index]) ? classes : classesFull).push(value[index]);
        }
        classesFull = classesFull.length ? quoted("class", classesFull.join(" ")) : "";
        classes = classes.length ? "." + classes.join(".") : "";
      } else if (key.startsWith(":") && value === "true") {
        values.push(key.slice(1));
      } else {
        values.push(quoted(key, value));
      }
    }
  }
  if (classesFull) {
    values.unshift(classesFull);
  }
  if (classes) {
    values.unshift(classes);
  }
  if (id) {
    values.unshift(id);
  }
  return values.length ? "{" + values.join(" ") + "}" : "";
  function quoted(key2, value2) {
    return key2 + "=" + quote + stringifyEntitiesLight(value2, { subset }) + quote;
  }
}
function content(node, context) {
  const content2 = inlineComponentLabel(node) ? Object.assign({}, node, { children: node.children.slice(1) }) : node;
  return containerFlow(content2, context);
}
function inlineComponentLabel(node) {
  return node.children && node.children[0] && node.children[0].data && node.children[0].data.componentLabel;
}

const canContainEols = ["textComponent"];
const enter = {
  componentContainer: enterContainer,
  componentContainerSection: enterContainerSection,
  componentContainerDataSection: enterContainerDataSection,
  componentContainerAttributes: enterAttributes,
  componentContainerLabel: enterContainerLabel,
  componentLeaf: enterLeaf,
  componentLeafAttributes: enterAttributes,
  componentText: enterText,
  textSpan: enterTextSpan,
  componentTextAttributes: enterAttributes
};
const exit = {
  componentContainerSectionTitle: exitContainerSectionTitle,
  listUnordered: conditionalExit,
  listOrdered: conditionalExit,
  listItem: conditionalExit,
  componentContainerSection: exitContainerSection,
  componentContainerDataSection: exitContainerDataSection,
  componentContainer: exitContainer,
  componentContainerAttributeClassValue: exitAttributeClassValue,
  componentContainerAttributeIdValue: exitAttributeIdValue,
  componentContainerAttributeName: exitAttributeName,
  componentContainerAttributeValue: exitAttributeValue,
  componentContainerAttributes: exitAttributes,
  componentContainerLabel: exitContainerLabel,
  componentContainerName: exitName,
  componentContainerAttributeInitializerMarker() {
    const attributes = this.getData("componentAttributes");
    attributes[attributes.length - 1][1] = "";
  },
  componentLeaf: exitToken,
  componentLeafAttributeClassValue: exitAttributeClassValue,
  componentLeafAttributeIdValue: exitAttributeIdValue,
  componentLeafAttributeName: exitAttributeName,
  componentLeafAttributeValue: exitAttributeValue,
  componentLeafAttributes: exitAttributes,
  componentLeafName: exitName,
  componentText: exitToken,
  textSpan: exitToken,
  componentTextAttributeClassValue: exitAttributeClassValue,
  componentTextAttributeIdValue: exitAttributeIdValue,
  componentTextAttributeName: exitAttributeName,
  componentTextAttributeValue: exitAttributeValue,
  componentTextAttributes: exitAttributes,
  componentTextName: exitName
};
function enterContainer(token) {
  enterToken.call(this, "containerComponent", token);
}
function exitContainer(token) {
  const container = this.stack[this.stack.length - 1];
  if (container.children.length > 1) {
    const dataSection = container.children.find((child) => child.rawData);
    container.rawData = dataSection?.rawData;
  }
  container.children = container.children.flatMap((child) => {
    if (child.rawData) {
      return [];
    }
    if (child.name === "default" || !child.name) {
      return child.children;
    }
    child.data = {
      hName: "component-slot",
      hProperties: {
        ...child.attributes,
        [`v-slot:${child.name}`]: ""
      }
    };
    return child;
  });
  this.exit(token);
}
function enterContainerSection(token) {
  enterToken.call(this, "componentContainerSection", token);
}
function enterContainerDataSection(token) {
  enterToken.call(this, "componentContainerDataSection", token);
}
function exitContainerSection(token) {
  this.exit(token);
}
function exitContainerDataSection(token) {
  let section = this.stack[this.stack.length - 1];
  while (section.type === "listItem" || section.type === "list") {
    const [stackToken] = this.tokenStack[this.tokenStack.length - 1];
    this.exit(stackToken);
    section = this.stack[this.stack.length - 1];
  }
  if (section.type === "componentContainerDataSection") {
    section.rawData = this.sliceSerialize(token);
    this.exit(token);
  }
}
function exitContainerSectionTitle(token) {
  this.stack[this.stack.length - 1].name = this.sliceSerialize(token);
}
function enterLeaf(token) {
  enterToken.call(this, "leafComponent", token);
}
function enterTextSpan(token) {
  this.enter({ type: "textComponent", name: "span", attributes: {}, children: [] }, token);
}
function enterText(token) {
  enterToken.call(this, "textComponent", token);
}
function enterToken(type, token) {
  this.enter({ type, name: "", attributes: {}, children: [] }, token);
}
function exitName(token) {
  this.stack[this.stack.length - 1].name = this.sliceSerialize(token);
}
function enterContainerLabel(token) {
  this.enter({ type: "paragraph", data: { componentLabel: true }, children: [] }, token);
}
function exitContainerLabel(token) {
  this.exit(token);
}
function enterAttributes() {
  this.setData("componentAttributes", []);
  this.buffer();
}
function exitAttributeIdValue(token) {
  this.getData("componentAttributes").push(["id", parseEntities(this.sliceSerialize(token))]);
}
function exitAttributeClassValue(token) {
  this.getData("componentAttributes").push(["class", parseEntities(this.sliceSerialize(token))]);
}
function exitAttributeValue(token) {
  const attributes = this.getData("componentAttributes");
  attributes[attributes.length - 1][1] = parseEntities(this.sliceSerialize(token));
}
function exitAttributeName(token) {
  this.getData("componentAttributes").push([this.sliceSerialize(token), true]);
}
function exitAttributes() {
  const attributes = this.getData("componentAttributes");
  const cleaned = {};
  let index = -1;
  let attribute;
  while (++index < attributes.length) {
    attribute = attributes[index];
    const name = kebabCase(attribute[0]);
    if (name === "class" && cleaned.class) {
      cleaned.class += " " + attribute[1];
    } else {
      cleaned[name] = attribute[1];
    }
  }
  this.setData("componentAttributes");
  this.resume();
  let stackTop = this.stack[this.stack.length - 1];
  if (stackTop.type === "paragraph") {
    stackTop = stackTop.children[stackTop.children.length - 1];
  }
  stackTop.attributes = cleaned;
}
function exitToken(token) {
  this.exit(token);
}
function conditionalExit(token) {
  const [section] = this.tokenStack[this.tokenStack.length - 1];
  if (section.type === token.type) {
    this.exit(token);
  }
}
const fromMarkdown = {
  canContainEols,
  enter,
  exit
};

const ContainerSequenceSize = 2;
const SectionSequenceSize = 3;
const slotSeparatorCode = 35;
const slotSeparatorLength = 1;
const Codes = {
  EOF: null,
  quotationMark: 34,
  hash: 35,
  apostrophe: 39,
  backTick: 96,
  backSlash: 92,
  colon: 58,
  LessThan: 60,
  equals: 61,
  greaterThan: 62,
  dash: 45,
  dot: 46,
  space: 32,
  openingSquareBracket: 91,
  closingSquareBracket: 93,
  openingCurlyBracket: 123,
  closingCurlyBracket: 125,
  openingParentheses: 40,
  closingParentheses: 41,
  underscore: 95,
  uppercaseX: 88,
  lowercaseX: 120
};

function createLabel(effects, ok, nok, type, markerType, stringType, disallowEol) {
  let size = 0;
  let balance = 0;
  return start;
  function start(code) {
    if (code !== Codes.openingSquareBracket) {
      throw new Error("expected `[`");
    }
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    return afterStart;
  }
  function afterStart(code) {
    if (code === Codes.closingSquareBracket) {
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok;
    }
    effects.enter(stringType);
    return atBreak(code);
  }
  function atBreak(code) {
    if (code === Codes.EOF || size > 999) {
      return nok(code);
    }
    if (code === Codes.closingSquareBracket && !balance--) {
      return atClosingBrace(code);
    }
    if (markdownLineEnding(code)) {
      if (disallowEol) {
        return nok(code);
      }
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return atBreak;
    }
    effects.enter("chunkText", { contentType: "text" });
    return label(code);
  }
  function label(code) {
    if (code === Codes.EOF || markdownLineEnding(code) || size > 999) {
      effects.exit("chunkText");
      return atBreak(code);
    }
    if (code === Codes.openingSquareBracket && ++balance > 3) {
      return nok(code);
    }
    if (code === Codes.closingSquareBracket && !balance--) {
      effects.exit("chunkText");
      return atClosingBrace(code);
    }
    effects.consume(code);
    return code === Codes.backSlash ? labelEscape : label;
  }
  function atClosingBrace(code) {
    effects.exit(stringType);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    effects.exit(type);
    return ok;
  }
  function labelEscape(code) {
    if (code === Codes.openingSquareBracket || code === Codes.backSlash || code === Codes.closingSquareBracket) {
      effects.consume(code);
      size++;
      return label;
    }
    return label(code);
  }
}

const label$2 = { tokenize: tokenizeLabel$2, partial: true };
const gfmCheck = { tokenize: checkGfmTaskCheckbox, partial: true };
function tokenize$4(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    if (code !== Codes.openingSquareBracket) {
      throw new Error("expected `[`");
    }
    if (self.previous === Codes.EOF && self._gfmTasklistFirstContentOfListItem) {
      return effects.check(gfmCheck, nok, attemptLabel)(code);
    }
    return attemptLabel(code);
  }
  function attemptLabel(code) {
    effects.enter("textSpan");
    return effects.attempt(label$2, exit, nok)(code);
  }
  function exit(code) {
    if (code === Codes.openingParentheses || code === Codes.openingSquareBracket) {
      return nok(code);
    }
    effects.exit("textSpan");
    return ok(code);
  }
}
function tokenizeLabel$2(effects, ok, nok) {
  return createLabel(effects, ok, nok, "componentTextLabel", "componentTextLabelMarker", "componentTextLabelString");
}
const tokenizeSpan = {
  tokenize: tokenize$4
};
function checkGfmTaskCheckbox(effects, ok, nok) {
  return enter;
  function enter(code) {
    effects.enter("formGfmTaskCheckbox");
    effects.consume(code);
    return check;
  }
  function check(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return check;
    }
    if (code === Codes.uppercaseX || code === Codes.lowercaseX) {
      effects.consume(code);
      return check;
    }
    if (code === Codes.closingSquareBracket) {
      effects.exit("formGfmTaskCheckbox");
      return ok(code);
    }
    return nok(code);
  }
}

function createAttributes(effects, ok, nok, attributesType, attributesMarkerType, attributeType, attributeIdType, attributeClassType, attributeNameType, attributeInitializerType, attributeValueLiteralType, attributeValueType, attributeValueMarker, attributeValueData, disallowEol) {
  let type;
  let marker;
  return start;
  function start(code) {
    effects.enter(attributesType);
    effects.enter(attributesMarkerType);
    effects.consume(code);
    effects.exit(attributesMarkerType);
    return between;
  }
  function between(code) {
    if (code === Codes.hash) {
      type = attributeIdType;
      return shortcutStart(code);
    }
    if (code === Codes.dot) {
      type = attributeClassType;
      return shortcutStart(code);
    }
    if (code === Codes.colon || code === Codes.underscore || asciiAlpha(code)) {
      effects.enter(attributeType);
      effects.enter(attributeNameType);
      effects.consume(code);
      return code === Codes.colon ? bindAttributeName : name;
    }
    if (disallowEol && markdownSpace(code)) {
      return factorySpace(effects, between, "whitespace")(code);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return factoryWhitespace(effects, between)(code);
    }
    return end(code);
  }
  function shortcutStart(code) {
    effects.enter(attributeType);
    effects.enter(type);
    effects.enter(type + "Marker");
    effects.consume(code);
    effects.exit(type + "Marker");
    return shortcutStartAfter;
  }
  function shortcutStartAfter(code) {
    if (code === Codes.EOF || code === Codes.quotationMark || code === Codes.hash || code === Codes.apostrophe || code === Codes.dot || code === Codes.LessThan || code === Codes.equals || code === Codes.greaterThan || code === Codes.backTick || code === Codes.closingCurlyBracket || markdownLineEndingOrSpace(code)) {
      return nok(code);
    }
    effects.enter(type + "Value");
    effects.consume(code);
    return shortcut;
  }
  function shortcut(code) {
    if (code === Codes.EOF || code === Codes.quotationMark || code === Codes.apostrophe || code === Codes.LessThan || code === Codes.equals || code === Codes.greaterThan || code === Codes.backTick) {
      return nok(code);
    }
    if (code === Codes.hash || code === Codes.dot || code === Codes.closingCurlyBracket || markdownLineEndingOrSpace(code)) {
      effects.exit(type + "Value");
      effects.exit(type);
      effects.exit(attributeType);
      return between(code);
    }
    effects.consume(code);
    return shortcut;
  }
  function bindAttributeName(code) {
    if (code === Codes.dash || asciiAlphanumeric(code)) {
      effects.consume(code);
      return bindAttributeName;
    }
    effects.exit(attributeNameType);
    if (disallowEol && markdownSpace(code)) {
      return factorySpace(effects, bindAttributeNameAfter, "whitespace")(code);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return factoryWhitespace(effects, bindAttributeNameAfter)(code);
    }
    return bindAttributeNameAfter(code);
  }
  function bindAttributeNameAfter(code) {
    if (code === Codes.equals) {
      effects.enter(attributeInitializerType);
      effects.consume(code);
      effects.exit(attributeInitializerType);
      return valueBefore;
    }
    effects.exit(attributeType);
    return nok(code);
  }
  function name(code) {
    if (code === Codes.dash || code === Codes.dot || code === Codes.colon || code === Codes.underscore || asciiAlphanumeric(code)) {
      effects.consume(code);
      return name;
    }
    effects.exit(attributeNameType);
    if (disallowEol && markdownSpace(code)) {
      return factorySpace(effects, nameAfter, "whitespace")(code);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return factoryWhitespace(effects, nameAfter)(code);
    }
    return nameAfter(code);
  }
  function nameAfter(code) {
    if (code === Codes.equals) {
      effects.enter(attributeInitializerType);
      effects.consume(code);
      effects.exit(attributeInitializerType);
      return valueBefore;
    }
    effects.exit(attributeType);
    return between(code);
  }
  function valueBefore(code) {
    if (code === Codes.EOF || code === Codes.LessThan || code === Codes.equals || code === Codes.greaterThan || code === Codes.backTick || code === Codes.closingCurlyBracket || disallowEol && markdownLineEnding(code)) {
      return nok(code);
    }
    if (code === Codes.quotationMark || code === Codes.apostrophe) {
      effects.enter(attributeValueLiteralType);
      effects.enter(attributeValueMarker);
      effects.consume(code);
      effects.exit(attributeValueMarker);
      marker = code;
      return valueQuotedStart;
    }
    if (disallowEol && markdownSpace(code)) {
      return factorySpace(effects, valueBefore, "whitespace")(code);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return factoryWhitespace(effects, valueBefore)(code);
    }
    effects.enter(attributeValueType);
    effects.enter(attributeValueData);
    effects.consume(code);
    marker = void 0;
    return valueUnquoted;
  }
  function valueUnquoted(code) {
    if (code === Codes.EOF || code === Codes.quotationMark || code === Codes.apostrophe || code === Codes.LessThan || code === Codes.equals || code === Codes.greaterThan || code === Codes.backTick) {
      return nok(code);
    }
    if (code === Codes.closingCurlyBracket || markdownLineEndingOrSpace(code)) {
      effects.exit(attributeValueData);
      effects.exit(attributeValueType);
      effects.exit(attributeType);
      return between(code);
    }
    effects.consume(code);
    return valueUnquoted;
  }
  function valueQuotedStart(code) {
    if (code === marker) {
      effects.enter(attributeValueMarker);
      effects.consume(code);
      effects.exit(attributeValueMarker);
      effects.exit(attributeValueLiteralType);
      effects.exit(attributeType);
      return valueQuotedAfter;
    }
    effects.enter(attributeValueType);
    return valueQuotedBetween(code);
  }
  function valueQuotedBetween(code) {
    if (code === marker) {
      effects.exit(attributeValueType);
      return valueQuotedStart(code);
    }
    if (code === Codes.EOF) {
      return nok(code);
    }
    if (markdownLineEnding(code)) {
      return disallowEol ? nok(code) : factoryWhitespace(effects, valueQuotedBetween)(code);
    }
    effects.enter(attributeValueData);
    effects.consume(code);
    return valueQuoted;
  }
  function valueQuoted(code) {
    if (code === marker || code === Codes.EOF || markdownLineEnding(code)) {
      effects.exit(attributeValueData);
      return valueQuotedBetween(code);
    }
    effects.consume(code);
    return valueQuoted;
  }
  function valueQuotedAfter(code) {
    return code === Codes.closingCurlyBracket || markdownLineEndingOrSpace(code) ? between(code) : end(code);
  }
  function end(code) {
    if (code === Codes.closingCurlyBracket) {
      effects.enter(attributesMarkerType);
      effects.consume(code);
      effects.exit(attributesMarkerType);
      effects.exit(attributesType);
      return ok;
    }
    return nok(code);
  }
}

const attributes$2 = { tokenize: tokenizeAttributes$2, partial: true };
const validEvents = [
  "textSpan",
  "attentionSequence",
  "codeText",
  "link",
  "image"
];
function tokenize$3(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    if (code !== Codes.openingCurlyBracket) {
      throw new Error("expected `{`");
    }
    const event = self.events[self.events.length - 1];
    if (markdownLineEnding(self.previous) || !event || !validEvents.includes(event[1].type)) {
      return nok;
    }
    return effects.attempt(attributes$2, ok, nok)(code);
  }
}
function tokenizeAttributes$2(effects, ok, nok) {
  return createAttributes(effects, ok, nok, "componentTextAttributes", "componentTextAttributesMarker", "componentTextAttribute", "componentTextAttributeId", "componentTextAttributeClass", "componentTextAttributeName", "componentTextAttributeInitializerMarker", "componentTextAttributeValueLiteral", "componentTextAttributeValue", "componentTextAttributeValueMarker", "componentTextAttributeValueData");
}
const tokenizeAttribute = {
  tokenize: tokenize$3
};

function createName(effects, ok, nok, nameType) {
  const self = this;
  return start;
  function start(code) {
    if (asciiAlpha(code)) {
      effects.enter(nameType);
      effects.consume(code);
      return name;
    }
    return nok(code);
  }
  function name(code) {
    if (code === Codes.dash || code === Codes.underscore || asciiAlphanumeric(code)) {
      effects.consume(code);
      return name;
    }
    effects.exit(nameType);
    return self.previous === Codes.underscore ? nok(code) : ok(code);
  }
}

const label$1 = { tokenize: tokenizeLabel$1, partial: true };
const attributes$1 = { tokenize: tokenizeAttributes$1, partial: true };
function previous(code) {
  return code !== Codes.colon || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenize$2(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    if (code !== Codes.colon) {
      throw new Error("expected `:`");
    }
    if (self.previous !== null && !markdownLineEndingOrSpace(self.previous) && ![Codes.openingSquareBracket].includes(self.previous)) {
      return nok(code);
    }
    if (!previous.call(self, self.previous)) {
      throw new Error("expected correct previous");
    }
    effects.enter("componentText");
    effects.enter("componentTextMarker");
    effects.consume(code);
    effects.exit("componentTextMarker");
    return createName.call(self, effects, afterName, nok, "componentTextName");
  }
  function afterName(code) {
    if (code === Codes.colon) {
      return nok(code);
    }
    if (code === Codes.openingSquareBracket) {
      return effects.attempt(label$1, afterLabel, afterLabel)(code);
    }
    if (code === Codes.openingCurlyBracket) {
      return effects.attempt(attributes$1, afterAttributes, afterAttributes)(code);
    }
    return exit(code);
  }
  function afterAttributes(code) {
    if (code === Codes.openingSquareBracket) {
      return effects.attempt(label$1, afterLabel, afterLabel)(code);
    }
    return exit(code);
  }
  function afterLabel(code) {
    if (code === Codes.openingCurlyBracket) {
      return effects.attempt(attributes$1, exit, exit)(code);
    }
    return exit(code);
  }
  function exit(code) {
    if (!markdownLineEndingOrSpace(code) && code !== null && ![Codes.closingSquareBracket].includes(code)) {
      return nok(code);
    }
    effects.exit("componentText");
    return ok(code);
  }
}
function tokenizeLabel$1(effects, ok, nok) {
  return createLabel(effects, ok, nok, "componentTextLabel", "componentTextLabelMarker", "componentTextLabelString");
}
function tokenizeAttributes$1(effects, ok, nok) {
  return createAttributes(effects, ok, nok, "componentTextAttributes", "componentTextAttributesMarker", "componentTextAttribute", "componentTextAttributeId", "componentTextAttributeClass", "componentTextAttributeName", "componentTextAttributeInitializerMarker", "componentTextAttributeValueLiteral", "componentTextAttributeValue", "componentTextAttributeValueMarker", "componentTextAttributeValueData");
}
const tokenizeInline = {
  tokenize: tokenize$2,
  previous
};

function sizeChunks(chunks) {
  let index = -1;
  let size = 0;
  while (++index < chunks.length) {
    size += typeof chunks[index] === "string" ? chunks[index].length : 1;
  }
  return size;
}
function prefixSize(events, type) {
  const tail = events[events.length - 1];
  if (!tail || tail[1].type !== type) {
    return 0;
  }
  return sizeChunks(tail[2].sliceStream(tail[1]));
}
function linePrefixSize(events) {
  let size = 0;
  let index = events.length - 1;
  let tail = events[index];
  while (index >= 0 && tail && tail[1].type === "linePrefix" && tail[0] === "exit") {
    size += sizeChunks(tail[2].sliceStream(tail[1]));
    index -= 1;
    tail = events[index];
  }
  return size;
}
const useTokenState = (tokenName) => {
  const token = {
    isOpen: false,
    enter: (effects) => {
      const initialState = token.isOpen;
      token.exit(effects);
      effects.enter(tokenName);
      token.isOpen = true;
      return () => {
        token.isOpen = initialState;
      };
    },
    enterOnce: (effects) => {
      const initialState = token.isOpen;
      if (!token.isOpen) {
        effects.enter(tokenName);
        token.isOpen = true;
      }
      return () => {
        token.isOpen = initialState;
      };
    },
    exit: (effects) => {
      const initialState = token.isOpen;
      if (token.isOpen) {
        effects.exit(tokenName);
        token.isOpen = false;
      }
      return () => {
        token.isOpen = initialState;
      };
    }
  };
  return token;
};

function tokenizeFrontMatter(effects, ok, _nok, next, initialPrefix) {
  let previous;
  return effects.attempt({
    tokenize: tokenizeDataSection,
    partial: true
  }, dataSectionOpen, next);
  function tokenizeDataSection(effects2, ok2, nok) {
    const self = this;
    let size = 0;
    let sectionIndentSize = 0;
    return closingPrefixAfter;
    function dataLineFirstSpaces(code) {
      if (markdownSpace(code)) {
        effects2.consume(code);
        sectionIndentSize += 1;
        return dataLineFirstSpaces;
      }
      effects2.exit("space");
      return closingPrefixAfter(code);
    }
    function closingPrefixAfter(code) {
      if (markdownSpace(code)) {
        effects2.enter("space");
        return dataLineFirstSpaces(code);
      }
      if (sectionIndentSize === 0) {
        sectionIndentSize = linePrefixSize(self.events);
      }
      effects2.enter("componentContainerSectionSequence");
      return closingSectionSequence(code);
    }
    function closingSectionSequence(code) {
      if (code === Codes.dash || markdownSpace(code)) {
        effects2.consume(code);
        size++;
        return closingSectionSequence;
      }
      if (size < SectionSequenceSize) {
        return nok(code);
      }
      if (sectionIndentSize !== initialPrefix) {
        return nok(code);
      }
      if (!markdownLineEnding(code)) {
        return nok(code);
      }
      effects2.exit("componentContainerSectionSequence");
      return factorySpace(effects2, ok2, "whitespace")(code);
    }
  }
  function dataSectionOpen(code) {
    effects.enter("componentContainerDataSection");
    return effects.attempt({
      tokenize: tokenizeDataSection,
      partial: true
    }, dataSectionClose, dataChunkStart)(code);
  }
  function dataChunkStart(code) {
    if (code === null) {
      effects.exit("componentContainerDataSection");
      effects.exit("componentContainer");
      return ok(code);
    }
    const token = effects.enter("chunkDocument", {
      contentType: "document",
      previous
    });
    if (previous) {
      previous.next = token;
    }
    previous = token;
    return dataContentContinue(code);
  }
  function dataContentContinue(code) {
    if (code === null) {
      effects.exit("chunkDocument");
      effects.exit("componentContainerDataSection");
      effects.exit("componentContainer");
      return ok(code);
    }
    if (markdownLineEnding(code)) {
      effects.consume(code);
      effects.exit("chunkDocument");
      return effects.attempt({
        tokenize: tokenizeDataSection,
        partial: true
      }, dataSectionClose, dataChunkStart);
    }
    effects.consume(code);
    return dataContentContinue;
  }
  function dataSectionClose(code) {
    effects.exit("componentContainerDataSection");
    return factorySpace(effects, next, "whitespace")(code);
  }
}

const label = { tokenize: tokenizeLabel, partial: true };
const attributes = { tokenize: tokenizeAttributes, partial: true };
function tokenize$1(effects, ok, nok) {
  const self = this;
  const initialPrefix = linePrefixSize(this.events);
  let sizeOpen = 0;
  let previous;
  const childContainersSequenceSize = [];
  let containerFirstLine = true;
  const section = useTokenState("componentContainerSection");
  return start;
  function start(code) {
    if (code !== Codes.colon) {
      throw new Error("expected `:`");
    }
    effects.enter("componentContainer");
    effects.enter("componentContainerFence");
    effects.enter("componentContainerSequence");
    return sequenceOpen(code);
  }
  function tokenizeSectionClosing(effects2, ok2, nok2) {
    let size = 0;
    let sectionIndentSize = 0;
    let revertSectionState;
    return closingPrefixAfter;
    function closingPrefixAfter(code) {
      sectionIndentSize = linePrefixSize(self.events);
      revertSectionState = section.exit(effects2);
      effects2.enter("componentContainerSectionSequence");
      return closingSectionSequence(code);
    }
    function closingSectionSequence(code) {
      if (code === slotSeparatorCode) {
        effects2.consume(code);
        size++;
        return closingSectionSequence;
      }
      if (size !== slotSeparatorLength) {
        revertSectionState();
        return nok2(code);
      }
      if (sectionIndentSize !== initialPrefix) {
        revertSectionState();
        return nok2(code);
      }
      if (!asciiAlpha(code)) {
        revertSectionState();
        return nok2(code);
      }
      effects2.exit("componentContainerSectionSequence");
      return factorySpace(effects2, ok2, "whitespace")(code);
    }
  }
  function sectionOpen(code) {
    section.enter(effects);
    if (markdownLineEnding(code)) {
      return factorySpace(effects, lineStart, "whitespace")(code);
    }
    effects.enter("componentContainerSectionTitle");
    return sectionTitle(code);
  }
  function sectionTitle(code) {
    if (markdownLineEnding(code)) {
      effects.exit("componentContainerSectionTitle");
      return factorySpace(effects, lineStart, "linePrefix", 4)(code);
    }
    effects.consume(code);
    return sectionTitle;
  }
  function sequenceOpen(code) {
    if (code === Codes.colon) {
      effects.consume(code);
      sizeOpen++;
      return sequenceOpen;
    }
    if (sizeOpen < ContainerSequenceSize) {
      return nok(code);
    }
    effects.exit("componentContainerSequence");
    return createName.call(self, effects, afterName, nok, "componentContainerName")(code);
  }
  function afterName(code) {
    return code === Codes.openingSquareBracket ? effects.attempt(label, afterLabel, afterLabel)(code) : afterLabel(code);
  }
  function afterLabel(code) {
    return code === Codes.openingCurlyBracket ? effects.attempt(attributes, afterAttributes, afterAttributes)(code) : afterAttributes(code);
  }
  function afterAttributes(code) {
    return factorySpace(effects, openAfter, "whitespace")(code);
  }
  function openAfter(code) {
    effects.exit("componentContainerFence");
    if (code === null) {
      effects.exit("componentContainer");
      return ok(code);
    }
    if (markdownLineEnding(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return self.interrupt ? ok : contentStart;
    }
    return nok(code);
  }
  function contentStart(code) {
    if (code === null) {
      effects.exit("componentContainer");
      return ok(code);
    }
    if (containerFirstLine && (code === Codes.dash || markdownSpace(code))) {
      containerFirstLine = false;
      return tokenizeFrontMatter(effects, ok, nok, contentStart, initialPrefix)(code);
    }
    effects.enter("componentContainerContent");
    return lineStart(code);
  }
  function lineStartAfterPrefix(code) {
    if (code === null) {
      return after(code);
    }
    if (!childContainersSequenceSize.length && (code === slotSeparatorCode || code === Codes.space)) {
      return effects.attempt({ tokenize: tokenizeSectionClosing, partial: true }, sectionOpen, chunkStart)(code);
    }
    if (code === Codes.colon) {
      return effects.attempt({ tokenize: tokenizeClosingFence, partial: true }, after, chunkStart)(code);
    }
    return chunkStart(code);
  }
  function lineStart(code) {
    if (code === null) {
      return after(code);
    }
    return initialPrefix ? factorySpace(effects, lineStartAfterPrefix, "linePrefix", initialPrefix + 1)(code) : lineStartAfterPrefix(code);
  }
  function chunkStart(code) {
    if (code === null) {
      return after(code);
    }
    section.enterOnce(effects);
    const token = effects.enter("chunkDocument", {
      contentType: "document",
      previous
    });
    if (previous) {
      previous.next = token;
    }
    previous = token;
    return contentContinue(code);
  }
  function contentContinue(code) {
    if (code === null) {
      effects.exit("chunkDocument");
      return after(code);
    }
    if (markdownLineEnding(code)) {
      effects.consume(code);
      effects.exit("chunkDocument");
      return lineStart;
    }
    effects.consume(code);
    return contentContinue;
  }
  function after(code) {
    section.exit(effects);
    effects.exit("componentContainerContent");
    effects.exit("componentContainer");
    return ok(code);
  }
  function tokenizeClosingFence(effects2, ok2, nok2) {
    let size = 0;
    return factorySpace(effects2, closingPrefixAfter, "linePrefix", 4);
    function closingPrefixAfter(code) {
      effects2.enter("componentContainerFence");
      effects2.enter("componentContainerSequence");
      return closingSequence(code);
    }
    function closingSequence(code) {
      if (code === Codes.colon) {
        effects2.consume(code);
        size++;
        return closingSequence;
      }
      if (childContainersSequenceSize.length) {
        if (size === childContainersSequenceSize[childContainersSequenceSize.length - 1]) {
          childContainersSequenceSize.pop();
        }
        return nok2(code);
      }
      if (size !== sizeOpen) {
        return nok2(code);
      }
      effects2.exit("componentContainerSequence");
      return factorySpace(effects2, closingSequenceEnd, "whitespace")(code);
    }
    function closingSequenceEnd(code) {
      if (code === null || markdownLineEnding(code)) {
        effects2.exit("componentContainerFence");
        return ok2(code);
      }
      childContainersSequenceSize.push(size);
      return nok2(code);
    }
  }
}
function tokenizeLabel(effects, ok, nok) {
  return createLabel(effects, ok, nok, "componentContainerLabel", "componentContainerLabelMarker", "componentContainerLabelString", true);
}
function tokenizeAttributes(effects, ok, nok) {
  return createAttributes(effects, ok, nok, "componentContainerAttributes", "componentContainerAttributesMarker", "componentContainerAttribute", "componentContainerAttributeId", "componentContainerAttributeClass", "componentContainerAttributeName", "componentContainerAttributeInitializerMarker", "componentContainerAttributeValueLiteral", "componentContainerAttributeValue", "componentContainerAttributeValueMarker", "componentContainerAttributeValueData", true);
}
const tokenizeContainer = {
  tokenize: tokenize$1,
  concrete: true
};

function tokenize(effects, ok, nok) {
  const self = this;
  return factorySpace(effects, lineStart, "linePrefix");
  function lineStart(code) {
    if (prefixSize(self.events, "linePrefix") < 4) {
      return nok(code);
    }
    switch (code) {
      case Codes.backTick:
        return codeFenced.tokenize.call(self, effects, ok, nok)(code);
      case Codes.colon:
        return tokenizeContainer.tokenize.call(self, effects, ok, nok)(code);
      default:
        return nok(code);
    }
  }
}
const tokenizeContainerIndented = {
  tokenize
};

function micromarkComponentsExtension() {
  return {
    text: {
      [Codes.colon]: tokenizeInline,
      [Codes.openingSquareBracket]: [tokenizeSpan],
      [Codes.openingCurlyBracket]: tokenizeAttribute
    },
    flow: {
      [Codes.colon]: [tokenizeContainer]
    },
    flowInitial: {
      "-2": tokenizeContainerIndented,
      "-1": tokenizeContainerIndented,
      [Codes.space]: tokenizeContainerIndented
    }
  };
}

const toFrontMatter = (yamlString) => `---
${yamlString}
---`;
const remarkMDC = (function({ components = [] } = {}) {
  const data = this.data();
  add("micromarkExtensions", micromarkComponentsExtension());
  add("fromMarkdownExtensions", fromMarkdown);
  add("toMarkdownExtensions", toMarkdown);
  function add(field, value) {
    if (!data[field]) {
      data[field] = [];
    }
    data[field].push(value);
  }
  if (components.length) {
    return async (tree, { data: data2 }) => {
      const jobs = [];
      visit(tree, ["textComponent", "leafComponent", "containerComponent"], (node) => {
        bindNode(node);
        const { instance: handler, options } = components.find((c) => c.name === node.name) || {};
        if (handler) {
          jobs.push(handler(options)(node, data2));
        }
      });
      await Promise.all(jobs);
      return tree;
    };
  }
  return (tree) => {
    visit(tree, ["textComponent", "leafComponent", "containerComponent"], (node) => {
      bindNode(node);
    });
  };
});
function bindNode(node) {
  const nodeData = node.data || (node.data = {});
  node.fmAttributes = getNodeData(node);
  nodeData.hName = kebabCase(node.name);
  nodeData.hProperties = bindData({
    ...node.attributes,
    ...node.fmAttributes
  });
}
function getNodeData(node) {
  if (!node.rawData) {
    return {};
  }
  const yaml = node.rawData.replace(/\s-+$/, "");
  const { data } = parseFrontMatter(toFrontMatter(yaml));
  return data;
}
function bindData(data) {
  const entries = Object.entries(data).map(([key, value]) => {
    if (key.startsWith(":")) {
      return [key, value];
    }
    if (typeof value === "string") {
      return [key, value];
    }
    return [`:${key}`, JSON.stringify(value)];
  });
  return Object.fromEntries(entries);
}

function emphasis(h, node) {
  return h(node, "em", node.attributes, all(h, node));
}

function parseThematicBlock(lang) {
  if (!lang) {
    return {
      language: void 0,
      highlights: void 0,
      fileName: void 0
    };
  }
  const language = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokens = lang.match(/{([^}]+)}/);
  const filenameTokens = lang.match(/\[(.+)\]/);
  return {
    language: language ? language[0] : void 0,
    highlights: parseHighlightedLines(highlightTokens && highlightTokens[1]),
    filename: Array.isArray(filenameTokens) ? filenameTokens[1] : void 0
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}
function wrap(nodes, loose = false) {
  const result = [];
  let index = -1;
  if (loose) {
    result.push(u("text", "\n"));
  }
  while (++index < nodes.length) {
    if (index) {
      result.push(u("text", "\n"));
    }
    result.push(nodes[index]);
  }
  if (loose && nodes.length > 0) {
    result.push(u("text", "\n"));
  }
  return result;
}

const code = (h, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename } = parseThematicBlock(lang);
  const code = node.value ? detab(node.value + "\n") : "";
  return h(node.position, "code", {
    language,
    filename,
    highlights,
    code
  }, [h(node, "pre", {}, [h(node, "code", { __ignoreMap: "" }, [u("text", code)])])]);
};

function html(h, node) {
  const tagName = getTagName(node.value);
  if (tagName) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (tagName === "code") {
    node.value = node.value.replace(tagName, "code-inline");
  }
  return h.dangerous ? h.augment(node, u("raw", node.value)) : null;
}

function heading(h, node) {
  return h(node, "h" + node.depth, all(h, node));
}

function link(h, node) {
  const props = {
    ...node.attributes || {},
    href: encode(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "a", props, all(h, node));
}

function list(h, node) {
  const props = {};
  const name = `${node.ordered ? "ol" : "ul"}`;
  if (typeof node.start === "number" && node.start !== 1) {
    props.start = node.start;
  }
  return h(node, name, props, wrap(all(h, node), true));
}

function listItem(h, node, parent) {
  const result = all(h, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  const props = {};
  let wrapped = [];
  let index;
  let child;
  if (typeof node.checked === "boolean") {
    result.unshift(h({}, "input", {
      type: "checkbox",
      checked: node.checked,
      disabled: true
    }));
    props.className = ["task-list-item"];
  }
  const length = result.length;
  index = -1;
  while (++index < length) {
    child = result[index];
    if (child.tagName === "p" && !loose) {
      wrapped = wrapped.concat(child.children || []);
    } else {
      wrapped.push(child);
    }
  }
  return h(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  const length = children.length;
  let index = -1;
  while (!loose && ++index < length) {
    loose = listItemLoose(children[index]);
  }
  return loose;
}
function listItemLoose(node) {
  const spread = node.spread;
  const children = node.children || [];
  return spread === void 0 || spread === null ? children.length > 1 : spread;
}

function table(h, node) {
  const rows = node.children;
  const align = node.align || [];
  const result = rows.map((row, index) => {
    const childres = row.children;
    const name = index === 0 ? "th" : "td";
    let pos = node.align ? align.length : childres.length;
    const out = [];
    while (pos--) {
      const cell = childres[pos];
      out[pos] = h(cell, name, { align: align[pos] }, cell ? all(h, cell) : []);
    }
    return h(row, "tr", wrap(out, true));
  });
  const body = result[1] && h({
    start: position(result[1]).start,
    end: position(result[result.length - 1]).end
  }, "tbody", wrap(result.slice(1), true));
  return h(node, "table", wrap([h(result[0].position, "thead", wrap([result[0]], true))].concat(body || []), true));
}

function paragraph(h, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return all(h, node);
    }
  }
  return h(node, "p", all(h, node));
}

function image(h, node) {
  const props = {
    ...node.attributes,
    src: encode(node.url),
    alt: node.alt
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "img", props);
}

function blockquote(h, node) {
  return h(node, "blockquote", wrap(all(h, node), true));
}

function strong(h, node) {
  return h(node, "strong", node.attributes, all(h, node));
}

function inlineCode(h, node) {
  return h(node, "code-inline", node.attributes, [
    u("text", node.value.replace(/\r?\n|\r/g, " "))
  ]);
}

function thematicBreak(h, node) {
  return h(node, "hr");
}

function containerComponent(h, node) {
  const hast = h(node, node.tagName, node.attributes, all(h, node));
  hast.attributes = node.attributes;
  hast.fmAttributes = node.fmAttributes;
  return hast;
}

const handlers$1 = {
  emphasis,
  code,
  paragraph,
  html,
  link,
  list,
  listItem,
  heading,
  table,
  image,
  blockquote,
  strong,
  inlineCode,
  thematicBreak,
  containerComponent
};

function compiler(_options) {
  function parseAsJSON(node) {
    if (Array.isArray(node)) {
      return node.map(parseAsJSON).filter(Boolean);
    }
    if (node.type === "element") {
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children.flatMap((child) => {
          if (child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {}
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      return {
        type: "element",
        tag: node.tagName,
        props: node.properties,
        children: parseAsJSON(node.children || [])
      };
    }
    if (node.type === "text") {
      if (node.value === "\n") {
        return null;
      }
      return {
        type: "text",
        value: node.value
      };
    }
    if (node.type === "comment") {
      return null;
    }
    node.children = parseAsJSON(node.children || []);
    return node;
  }
  this.Compiler = function(root) {
    return {
      type: "root",
      children: parseAsJSON(root.children || [])
    };
  };
}

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

const usePlugins = (plugins, stream) => plugins.reduce((stream2, plugin) => stream2.use(plugin[0] || plugin, plugin[1] || void 0), stream);
function generateBody(content, options) {
  const rehypeOptions = {
    handlers: handlers$1,
    allowDangerousHtml: true
  };
  return new Promise((resolve, reject) => {
    const stream = unified().use(remarkParse);
    if (options.mdc) {
      stream.use(remarkMDC);
    }
    usePlugins(options.remarkPlugins, stream);
    stream.use(remark2rehype, rehypeOptions);
    usePlugins(options.rehypePlugins, stream);
    stream.use(compiler, options);
    stream.process({
      value: content,
      data: options.data
    }, (error, file) => {
      if (error) {
        return reject(error);
      }
      Object.assign(options.data, file?.data || {});
      resolve(file?.result);
    });
  });
}
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type !== "text");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const useDefaultOptions = () => ({
  mdc: true,
  toc: {
    depth: 2,
    searchDepth: 2
  },
  tags: {},
  remarkPlugins: [
    remarkEmoji,
    remarkSqueezeParagraphs,
    remarkGfm
  ],
  rehypePlugins: [
    rehypeSlug,
    rehypeExternalLinks,
    rehypeSortAttributeValues,
    rehypeSortAttributes,
    [rehypeRaw, { passThrough: ["element"] }]
  ]
});
async function parse(file, userOptions = {}) {
  const options = defu(userOptions, useDefaultOptions());
  const { content, data } = await parseFrontMatter(file);
  const body = await generateBody(content, { ...options, data });
  let toc;
  if (data.toc !== false) {
    const tocOption = defu(data.toc || {}, options.toc);
    toc = generateToc(body, tocOption);
  }
  const excerptString = useExcerpt(content);
  const excerpt = excerptString ? await generateBody(excerptString, { ...options, data }) : void 0;
  const heading = contentHeading(body);
  return {
    body: {
      ...body,
      toc
    },
    meta: {
      _empty: content.trim().length === 0,
      title: heading.title,
      description: heading.description,
      excerpt,
      ...data
    }
  };
}
function useExcerpt(content, delimiter = /<!--\s*?more\s*?-->/i) {
  if (!delimiter) {
    return "";
  }
  let idx = -1;
  const match = delimiter.exec(content);
  if (match) {
    idx = match.index;
  }
  if (idx !== -1) {
    return content.slice(0, idx);
  }
  return content;
}

const importPlugin = async (p) => [
  await import(p[0]).then((res) => res.default || res),
  typeof p[1] === "object" ? { ...p[1] } : p[1]
];
const _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47markdown_46mjs = {
  name: "markdown",
  extentions: [".md"],
  parse: async (_id, content) => {
    const config = { ...useRuntimeConfig().content?.markdown || {} };
    config.rehypePlugins = await Promise.all((config.rehypePlugins || []).map(importPlugin));
    config.remarkPlugins = await Promise.all((config.remarkPlugins || []).map(importPlugin));
    const parsed = await parse(content, config);
    return {
      ...parsed.meta,
      body: parsed.body,
      _type: "markdown",
      _id
    };
  }
};

const _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47yaml_46mjs = {
  name: "Yaml",
  extentions: [".yml", ".yaml"],
  parse: async (_id, content) => {
    const { data } = await parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
};

const _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47json_46mjs = {
  name: "Json",
  extentions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed = content;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('json5').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr(content);
      }
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
};

const _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47csv_46mjs = {
  name: "csv",
  extentions: [".csv"],
  parse: async (_id, content) => {
    const config = { ...useRuntimeConfig().content?.csv || {} };
    const csvToJson = await import('csvtojson').then((m) => m.default || m);
    const parsed = await csvToJson({ output: "json", ...config }).fromString(content);
    return {
      _id,
      _type: "csv",
      body: parsed
    };
  }
};

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (_id) => {
  const [_source, ...parts] = _id.split(":");
  const [, filename, _extension] = parts[parts.length - 1].match(/(.*)\.([^.]+)$/);
  parts[parts.length - 1] = filename;
  const _path = parts.join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path
  };
};
const _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47path_45meta_46mjs = {
  name: "path-meta",
  extentions: [".*"],
  transform(content) {
    const { locales, defaultLocale } = useRuntimeConfig().content || {};
    const { _source, _file, _path, _extension } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = parts.join("/");
    return {
      _path: generatePath(filePath),
      _draft: isDraft(filePath),
      _partial: isPartial(filePath),
      _locale,
      ...content,
      title: content.title || generateTitle(refineUrlPart(parts[parts.length - 1])),
      _source,
      _file,
      _extension
    };
  }
};
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path) => withLeadingSlash(withoutTrailingSlash(path.split("/").map((part) => slugify(refineUrlPart(part), { lower: true })).join("/")));
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index/, "").replace(/\.draft/, "");
}

const withContentBase = (url) => {
  return withBase(url, `/api/${useRuntimeConfig().public.content.base}`);
};
const _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47shiki_46mjs = {
  name: "markdown",
  extentions: [".md"],
  transform: async (content) => {
    const codeBlocks = [];
    visit(content.body, (node) => node.tag === "code" && node?.props.code, (node) => {
      codeBlocks.push(node);
    });
    await Promise.all(codeBlocks.map(highlightBlock));
    const inlineCodes = [];
    visit(content.body, (node) => node.tag === "code-inline" && (node.props?.lang || node.props?.language), (node) => {
      inlineCodes.push(node);
    });
    await Promise.all(inlineCodes.map(highlightInline));
    return content;
  }
};
const tokenSpan = ({ content, color }) => ({
  type: "element",
  tag: "span",
  props: { style: { color } },
  children: [{ type: "text", value: content }]
});
const highlightInline = async (node) => {
  const code = node.children[0].value;
  const lines = await $fetch(withContentBase("highlight"), {
    method: "POST",
    body: {
      code,
      lang: node.props.lang || node.props.language
    }
  });
  node.children = lines[0].map(tokenSpan);
  node.props = node.props || {};
  node.props.class = "colored";
  return node;
};
const highlightBlock = async (node) => {
  const { code, language: lang, highlights = [] } = node.props;
  const lines = await $fetch(withContentBase("highlight"), {
    method: "POST",
    body: {
      code,
      lang
    }
  });
  const innerCodeNode = node.children[0].children[0];
  innerCodeNode.children = lines.map((line, lineIndex) => ({
    type: "element",
    tag: "span",
    props: { class: ["line", highlights.includes(lineIndex + 1) ? "highlight" : ""].join(" ").trim() },
    children: line.map(tokenSpan)
  }));
  return node;
};

const collections = ["mdi", "mdi-light", "ic", "ph", "icon-park-outline", "icon-park", "uil", "bx", "ri", "la", "iconoir", "jam", "ion", "bi", "clarity", "carbon", "cil", "gg", "tabler", "teenyicons", "fa-solid", "fa-regular", "vaadin", "icomoon-free", "eva", "pixelarticons", "majesticons", "ci", "eos-icons", "dashicons", "entypo", "zondicons", "flat-color-icons", "octicon", "codicon", "ant-design", "lucide", "fe", "radix-icons", "line-md", "system-uicons", "akar-icons", "uiw", "uim", "uit", "uis", "gridicons", "mono-icons", "heroicons-outline", "heroicons-solid", "file-icons", "mi", "ps", "el", "foundation", "typcn", "subway", "raphael", "icons8", "wpf", "iwwa", "topcoat", "ei", "bytesize", "fluent", "grommet-icons", "pepicons", "maki", "oi", "et", "vscode-icons", "fontisto", "fa", "zmdi", "whh", "si-glyph", "ls", "simple-line-icons", "flat-ui", "vs", "websymbol", "il", "bpmn", "fontelico", "feather", "noto", "noto-v1", "twemoji", "openmoji", "emojione", "emojione-monotone", "emojione-v1", "fxemoji", "logos", "cib", "simple-icons", "fa-brands", "brandico", "entypo-social", "cryptocurrency", "gis", "map", "geo", "cif", "fad", "wi", "healthicons", "medical-icon", "ep"];
const iconCache = {};
const iconCollections = collections.sort((a, b) => b.length - a.length);
const tagIsIcon = (tag) => !!iconCollections.find((i) => {
  if (!tag || !tag.startsWith("i-"))
    return false;
  return tag.substring(2).startsWith(`${i}-`);
});
const normaliseSvgAttrs = (svg, icon) => {
  if (!svg)
    return false;
  const $ = cheerio.load(svg);
  return {
    ...$("svg").attr(),
    "aria-hidden": true,
    "title": icon,
    "innerHTML": $("svg").html()
  };
};
const loadIconForTag = async (tag) => {
  if (tag.startsWith("i-emojione-v-1"))
    tag = tag.replace("i-emojione-v-1", "i-emojione-v1");
  if (iconCache[tag])
    return iconCache[tag];
  const collection = iconCollections.find((i) => tag.substring(2).startsWith(`${i}-`));
  const icon = tag.substring(2).slice(collection.length + 1);
  const svg = await loadNodeIcon(collection, icon, {
    addXmlNs: false,
    autoInstall: true
  });
  if (!svg)
    console.warn(`Failed to find icon \`${icon}\` in collection \`${collection}\`.`);
  const res = {
    svgRaw: svg,
    svg: normaliseSvgAttrs(svg, icon),
    icon,
    collection
  };
  iconCache[tag] = res;
  return res;
};

const map = {};
const _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47modules_47runtime_47content_47md_45icons = {
  name: "md-icons",
  extentions: [".md"],
  async transform(content) {
    if (content.icon && tagIsIcon(content.icon))
      content.icon = (await loadIconForTag(content.icon)).svg;
    const tags = /* @__PURE__ */ new Set();
    visit(
      content.body,
      (node) => tagIsIcon(node.tag),
      (node) => {
        tags.add(node.tag);
      }
    );
    for (const name of tags) {
      if (map[name])
        continue;
      const { svg } = await loadIconForTag(name);
      if (!svg) {
        map[name] = {
          width: "0",
          height: "0",
          innerHTML: ""
        };
        continue;
      }
      map[name] = svg;
    }
    visit(
      content.body,
      (node) => tags.has(node.tag),
      (node) => {
        node.props = {
          ...node.props,
          ...map[node.tag]
        };
        node.props.style = {
          ...node.props.style,
          "display": "inline-block",
          "vertical-align": "text-bottom"
        };
        node.tag = "svg";
      }
    );
    return content;
  }
};

const _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47modules_47runtime_47content_47project_45icons = {
  name: "project-icons",
  extentions: [".json"],
  async transform(content) {
    if (content._file !== "projects.json")
      return content;
    for (const ecosystem of content.body) {
      for (const project of ecosystem.projects) {
        if (tagIsIcon(project.icon))
          project.icon = (await loadIconForTag(project.icon)).svgRaw;
      }
    }
    return content;
  }
};

const _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47modules_47runtime_47content_47breadcrumbs = {
  name: "breadcrumbs",
  extentions: [".md"],
  async transform(content) {
    let insertedBreadcrumbs = false;
    visit(
      content.body,
      (node) => (node == null ? void 0 : node.tag) === "h1",
      (node, index, parent) => {
        if (insertedBreadcrumbs)
          return;
        parent.children.splice(index, 0, ...[
          {
            type: "element",
            tag: "Breadcrumbs"
          }
        ]);
        insertedBreadcrumbs = true;
      }
    );
    return content;
  }
};

const MaxWidth = 900;
const MaxHeight = 700;
const computeSizes = (width, height, maxHeight) => {
  maxHeight = maxHeight || (height > MaxHeight ? MaxHeight : height);
  const ar = width / height;
  if (width > MaxWidth) {
    width = MaxWidth;
    height = Math.round(width / ar);
  }
  if (height > maxHeight) {
    height = maxHeight;
    width = Math.round(height * ar);
  }
  const px = (size) => `${size}px`;
  const sizes = [
    `md:${px(width)}`,
    "sm:95vw",
    "xs:95vw"
  ].join(" ");
  return {
    height,
    width,
    sizes
  };
};

const _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47modules_47runtime_47content_47nuxt_45image = {
  name: "nuxt-image",
  extentions: [".md"],
  async transform(content) {
    visit(
      content.body,
      (node) => {
        var _a;
        return (node == null ? void 0 : node.tag) === "p" && ((_a = node.children) == null ? void 0 : _a.every((c) => c.tag === "img"));
      },
      (node, index, parent) => {
        parent.children.splice(index, 1, ...node.children);
        return index;
      }
    );
    visit(
      content.body,
      (node) => (node == null ? void 0 : node.tag) === "img",
      (node) => {
        node.tag = "Image";
        const intKeys = ["height", "width", "max-height"];
        intKeys.forEach((k) => {
          if (node.props[k])
            node.props[k] = parseInt(node.props[k]);
        });
        if (node.props.height && node.props.width) {
          node.props = {
            ...node.props,
            ...computeSizes(node.props.width, node.props.height, node.props["max-height"])
          };
        }
      }
    );
    return content;
  }
};

const contentStorage = prefixStorage(useStorage(), "content:source");
const _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47modules_47runtime_47content_47storage_45meta = {
  name: "storage-meta",
  extentions: [".*"],
  async transform(content) {
    content.storageMeta = { ...await contentStorage.getMeta(content._id) };
    return content;
  }
};

function calculateReadingMins(text) {
  const wordsPerMinute = 220;
  const words = text.trim().split(" ").length;
  return Math.ceil(words / wordsPerMinute);
}
const TEXT_NODES = [
  "p",
  "a",
  "blockquote",
  "code-inline",
  "code",
  "em",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "ul",
  "ol",
  "li",
  "strong",
  "table",
  "thead",
  "tbody",
  "td",
  "th",
  "tr"
];
const _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47modules_47runtime_47content_47read_45time = {
  name: "read-time",
  extentions: [".md"],
  async transform(content) {
    const textNodes = [];
    visit(
      content.body,
      (node) => {
        return (node == null ? void 0 : node.tag) && TEXT_NODES.includes(node == null ? void 0 : node.tag);
      },
      (node) => {
        textNodes.push(
          ...[...node.children, node].filter((n) => n.type === "text").map((n) => n.value.trim())
        );
      }
    );
    content.readingMins = calculateReadingMins(textNodes.join(" "));
    return content;
  }
};

const _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47modules_47runtime_47content_47meta_45normaliser = {
  name: "meta-normaliser",
  extentions: [".md"],
  async transform(content) {
    if (content._path.startsWith("/pages/")) {
      content.path = content._path.replace("/pages/", "/");
      if (content.path === "/home")
        content.path = "/";
      content.renderer = "page";
    } else if (content._path.startsWith("/posts/")) {
      content.path = content._path.replace("/posts/", "/blog/");
      content.renderer = "post";
    }
    content.schemaOrg = content.schemaOrg || {};
    if (!content.publishedAt) {
      content.publishedAt = content.storageMeta.atime;
      content.schemaOrg.publishedAt = content.publishedAt;
    }
    if (!content.modifiedAt) {
      content.modifiedAt = content.storageMeta.mtime;
      content.schemaOrg.modifiedAt = content.modifiedAt;
    }
    return content;
  }
};

const transformers = [_47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47modules_47runtime_47content_47code_45file_45name, _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47markdown_46mjs, _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47yaml_46mjs, _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47json_46mjs, _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47csv_46mjs, _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47path_45meta_46mjs, _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47shiki_46mjs, _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47modules_47runtime_47content_47md_45icons, _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47modules_47runtime_47content_47project_45icons, _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47modules_47runtime_47content_47breadcrumbs, _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47modules_47runtime_47content_47nuxt_45image, _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47modules_47runtime_47content_47storage_45meta, _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47modules_47runtime_47content_47read_45time, _47Users_47bon_47Documents_47my_45workspace_47nuxt_45blog_47modules_47runtime_47content_47meta_45normaliser];
const getParser = (ext) => transformers.find(p => ext.match(new RegExp(p.extentions.join("|"),  "i")) && p.parse);
const getTransformers = (ext) => transformers.filter(p => ext.match(new RegExp(p.extentions.join("|"),  "i")) && p.transform);

async function parseContent(id, content) {
  const nitroApp = useNitroApp();
  const file = { _id: id, body: content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const ext = extname(id);
  const plugin = getParser(ext);
  if (!plugin) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parsed = await plugin.parse(file._id, file.body);
  const transformers = getTransformers(ext);
  const result = await transformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    return cur.transform(next);
  }, Promise.resolve(parsed));
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
}

const isPreview = (event) => {
  const previewToken = useQuery(event).previewToken || useCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = useQuery(event).previewToken || useCookie(event, "previewToken");
  return { key };
};

const sourceStorage = prefixStorage(useStorage(), "content:source");
prefixStorage(useStorage(), "cache:content");
const cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
const contentConfig = useRuntimeConfig().content;
const contentIgnores = contentConfig.ignores.map((p) => typeof p === "string" ? new RegExp(`^${p}`) : p);
const contentIgnorePredicate = (key) => !key.startsWith("preview:") && !contentIgnores.some((prefix) => key.split(":").some((k) => prefix.test(k)));
const getContentsIds = async (event, prefix) => {
  let keys = [];
  {
    keys = await cacheParsedStorage.getKeys(prefix);
  }
  if (keys.length === 0) {
    keys = await sourceStorage.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await sourceStorage.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(previewKeys.map(async (key2) => {
        const meta = await sourceStorage.getMeta(key2);
        if (meta?.__deleted) {
          keysSet.delete(key2.substring(previewPrefix.length));
        } else {
          keysSet.add(key2.substring(previewPrefix.length));
        }
      }));
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
const getContentsList = async (event, prefix) => {
  const keys = await getContentsIds(event, prefix);
  const contents = await Promise.all(keys.map((key) => getContent(event, key)));
  return contents;
};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await sourceStorage.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cacheParsedStorage.getItem(id);
  if (cached) {
    return cached.parsed;
  }
  const meta = await sourceStorage.getMeta(id);
  const hash$1 = hash({
    meta,
    version: contentConfig.cacheVersion,
    integerity: contentConfig.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  const body = await sourceStorage.getItem(id);
  if (body === null) {
    return { _id: contentId, body: null };
  }
  const parsed = await parseContent(contentId, body);
  await cacheParsedStorage.setItem(id, { parsed, hash: hash$1 }).catch(() => {
  });
  return parsed;
};
function serverQueryContent(event, path, ...pathParts) {
  let params = path || {};
  if (typeof path === "string") {
    path = withLeadingSlash(joinURL(path, ...pathParts));
    path = path.replace(/[-[\]{}()*+.,^$\s]/g, "\\$&");
    params = {
      where: [{ _path: new RegExp(`^${path}`) }]
    };
  }
  const pipelineFetcher = createPipelineFetcher(() => getContentsList(event));
  if (!params.sort?.length) {
    params.sort = [{ _file: 1, $numeric: true }];
  }
  return createQuery(pipelineFetcher, params);
}

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const memory = {};
const getContentQuery = (event) => {
  const { qid } = event.context.params;
  const query = useQuery(event) || {};
  if (qid && query._params) {
    memory[qid] = parseQueryParams(query._params);
    return memory[qid];
  }
  if (memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseQueryParams(query._params);
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  query.where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      query.where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = query.sort.split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, +order];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where[key] = query[key];
  }
  return query;
};

const _jiLlKa = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  const contents = await serverQueryContent(event, query).find();
  if (query.first && Array.isArray(contents) && contents.length === 0) {
    throw createError({
      statusMessage: "Document not found!",
      statusCode: 404,
      data: {
        description: "Could not find document for the given query.",
        query
      }
    });
  }
  return contents;
});

const _c5ULZJ = defineEventHandler(async (event) => {
  const now = Date.now();
  await serverQueryContent(event).find();
  return {
    generatedAt: now,
    generateTime: Date.now() - now
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().content;
  const pickNavigationFields = pick(["title", ...navigation.fields]);
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1].match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => {
      return {
        title: content2.title,
        _path: content2._path,
        _file: content2._file,
        children: [],
        ...pickNavigationFields(content2),
        ...content2._draft ? { _draft: true } : {}
      };
    };
    const navItem = getNavItem(content);
    if (isIndex) {
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      Object.assign(navItem, pickNavigationFields(configs[navItem._path]));
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        const conf = configs[currentPathPart];
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}

const _QtP3qP = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  const contents = await serverQueryContent(event, query).where({
    _partial: false
  }).find();
  const dirConfigs = await serverQueryContent(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = dirConfigs.reduce((configs2, conf) => {
    if (conf.title.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents, configs);
});

var information_for_contributors = [
	"This file has been converted from https://github.com/docusgen/vscode-extension/blob/main/syntaxes/mdc.tmLanguage.json",
	"If you want to provide a fix or improvement, please create a pull request against the original repository.",
	"Once accepted there, we are happy to receive an update request."
];
var version = "https://github.com/docusgen/vscode-extension/blob/1303abd16342880a42a4d143a660da049c79ea6c/syntaxes/mdc.tmLanguage.json";
var name = "markdown";
var injectionSelector = "L:text.html.markdown";
var scopeName = "text.markdown.mdc";
var patterns = [
	{
		include: "text.html.markdown#frontMatter"
	},
	{
		include: "#component_block"
	},
	{
		include: "#block"
	}
];
var repository = {
	block: {
		comment: "Same as `text.html.markdown#block`, but without `raw_block`",
		patterns: [
			{
				include: "#component_block"
			},
			{
				include: "text.html.markdown#separator"
			},
			{
				include: "#heading"
			},
			{
				include: "#blockquote"
			},
			{
				include: "#lists"
			},
			{
				include: "#paragraph"
			},
			{
				include: "text.html.markdown#fenced_code_block"
			},
			{
				include: "text.html.markdown#link-def"
			},
			{
				include: "text.html.markdown#html"
			}
		]
	},
	inline: {
		patterns: [
			{
				include: "#component_inline"
			},
			{
				include: "#span"
			},
			{
				include: "#markdown_attributes"
			}
		]
	},
	markdown_attributes: {
		match: "(?x)([^ ])(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
		name: "markup.component.attribute",
		captures: {
			"4": {
				patterns: [
					{
						include: "#attribute"
					}
				]
			}
		}
	},
	span: {
		match: "(?x)\n  (\\[)           # Open\n    ([^]]*)\n  (\\])\n  (               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )?",
		name: "markup.component.span",
		captures: {
			"2": {
				name: "string.other.link.description.title.markdown"
			},
			"4": {
				patterns: [
					{
						include: "#attributes"
					}
				]
			}
		}
	},
	attributes: {
		match: "(?x)(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
		name: "markup.attributes",
		captures: {
			"3": {
				patterns: [
					{
						include: "#attribute"
					}
				]
			}
		}
	},
	component_inline: {
		match: "(?x)\n  (^|\\G|\\s+)\n  (:)           # component colon\n  (?i:             # component name\n    (\\w[\\w\\d-]*)\n  )\n  (\n      ({[^}]*})        # attributes\n      (\\[[^\\]]*\\]?) # slot\n      # reverse order\n    | (\\[[^\\]]*\\])  # slot\n      ({[^}]*})?       # attributes\n  )?",
		name: "markup.component.inline",
		captures: {
			"2": {
				name: "punctuation.definition.tag.start.component"
			},
			"3": {
				name: "entity.name.tag.component"
			},
			"5": {
				patterns: [
					{
						include: "#attributes"
					}
				]
			},
			"6": {
				patterns: [
					{
						include: "#span"
					}
				]
			},
			"7": {
				patterns: [
					{
						include: "#span"
					}
				]
			},
			"8": {
				patterns: [
					{
						include: "#attributes"
					}
				]
			}
		}
	},
	component_block: {
		begin: "(?x)\n  (^|\\G)(\\s*)\n  (:{2,})     # component colons\n  (?i:\n    (\\w[\\w\\d-]+)   # component name\n    (                 # folowing spaces or attributes\n        \\s*\n      | {([^{]*)}\n    )\n    $\n  )",
		name: "markup.component.block",
		end: "(^|\\G)(\\2)(\\3)\\s*$",
		beginCaptures: {
			"4": {
				name: "entity.name.tag.component"
			},
			"5": {
				patterns: [
					{
						include: "#attribute"
					}
				]
			}
		},
		patterns: [
			{
				include: "#content"
			}
		]
	},
	content: {
		begin: "(^|\\G)(\\s*)(.*)",
		"while": "(^|\\G)(?!\\s*([:]{2,})\\s*$)",
		contentName: "meta.embedded.block.component",
		patterns: [
			{
				begin: "(^|\\G)(\\s*)(-{3})(\\s*)$",
				end: "(^|\\G)(\\s*(-{3})(\\s*)$)",
				patterns: [
					{
						include: "source.yaml"
					}
				]
			},
			{
				match: "^(\\s*)(#[\\w\\-\\_]*)\\s*(<!--(.*)-->)?$",
				captures: {
					"2": {
						name: "entity.other.attribute-name.html"
					},
					"3": {
						name: "comment.block.html"
					}
				}
			},
			{
				comment: "Block Repository created to disable 4-space raw block inside components",
				include: "#block"
			}
		]
	},
	attribute: {
		patterns: [
			{
				match: "(?x)\n  (\n    ([^=><\\s]*)  # attribute name\n    (             # attribute value\n        =[\"]([^\"]*)([\"])|[']([^']*)(['])\n      | =[^\\s'\"]*\n    )?\n    \\s*\n  )",
				captures: {
					"2": {
						name: "entity.other.attribute-name.html"
					},
					"3": {
						patterns: [
							{
								include: "#attribute-interior"
							}
						]
					}
				}
			}
		]
	},
	"attribute-interior": {
		comment: "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L376",
		patterns: [
			{
				begin: "=",
				beginCaptures: {
					"0": {
						name: "punctuation.separator.key-value.html"
					}
				},
				end: "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
				patterns: [
					{
						match: "([^\\s\"'=<>`/]|/(?!>))+",
						name: "string.unquoted.html"
					},
					{
						begin: "\"",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.string.begin.html"
							}
						},
						end: "\"",
						endCaptures: {
							"0": {
								name: "punctuation.definition.string.end.html"
							}
						},
						name: "string.quoted.double.html",
						patterns: [
							{
								include: "#entities"
							}
						]
					},
					{
						begin: "'",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.string.begin.html"
							}
						},
						end: "'",
						endCaptures: {
							"0": {
								name: "punctuation.definition.string.end.html"
							}
						},
						name: "string.quoted.single.html",
						patterns: [
							{
								include: "#entities"
							}
						]
					},
					{
						match: "=",
						name: "invalid.illegal.unexpected-equals-sign.html"
					}
				]
			}
		]
	},
	entities: {
		comment: "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L532",
		patterns: [
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.html"
					},
					"912": {
						name: "punctuation.definition.entity.html"
					}
				},
				comment: "Yes this is a bit ridiculous, there are quite a lot of these",
				match: "(?x)\n\t\t\t\t\t\t(&)\t(?=[a-zA-Z])\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t(a(s(ymp(eq)?|cr|t)|n(d(slope|d|v|and)?|g(s(t|ph)|zarr|e|le|rt(vb(d)?)?|msd(a(h|c|d|e|f|a|g|b))?)?)|c(y|irc|d|ute|E)?|tilde|o(pf|gon)|uml|p(id|os|prox(eq)?|e|E|acir)?|elig|f(r)?|w(conint|int)|l(pha|e(ph|fsym))|acute|ring|grave|m(p|a(cr|lg))|breve)|A(s(sign|cr)|nd|MP|c(y|irc)|tilde|o(pf|gon)|uml|pplyFunction|fr|Elig|lpha|acute|ring|grave|macr|breve))\n\t\t\t\t\t\t  | (B(scr|cy|opf|umpeq|e(cause|ta|rnoullis)|fr|a(ckslash|r(v|wed))|reve)|b(s(cr|im(e)?|ol(hsub|b)?|emi)|n(ot|e(quiv)?)|c(y|ong)|ig(s(tar|qcup)|c(irc|up|ap)|triangle(down|up)|o(times|dot|plus)|uplus|vee|wedge)|o(t(tom)?|pf|wtie|x(h(d|u|D|U)?|times|H(d|u|D|U)?|d(R|l|r|L)|u(R|l|r|L)|plus|D(R|l|r|L)|v(R|h|H|l|r|L)?|U(R|l|r|L)|V(R|h|H|l|r|L)?|minus|box))|Not|dquo|u(ll(et)?|mp(e(q)?|E)?)|prime|e(caus(e)?|t(h|ween|a)|psi|rnou|mptyv)|karow|fr|l(ock|k(1(2|4)|34)|a(nk|ck(square|triangle(down|left|right)?|lozenge)))|a(ck(sim(eq)?|cong|prime|epsilon)|r(vee|wed(ge)?))|r(eve|vbar)|brk(tbrk)?))\n\t\t\t\t\t\t  | (c(s(cr|u(p(e)?|b(e)?))|h(cy|i|eck(mark)?)|ylcty|c(irc|ups(sm)?|edil|a(ps|ron))|tdot|ir(scir|c(eq|le(d(R|circ|S|dash|ast)|arrow(left|right)))?|e|fnint|E|mid)?|o(n(int|g(dot)?)|p(y(sr)?|f|rod)|lon(e(q)?)?|m(p(fn|le(xes|ment))?|ma(t)?))|dot|u(darr(l|r)|p(s|c(up|ap)|or|dot|brcap)?|e(sc|pr)|vee|wed|larr(p)?|r(vearrow(left|right)|ly(eq(succ|prec)|vee|wedge)|arr(m)?|ren))|e(nt(erdot)?|dil|mptyv)|fr|w(conint|int)|lubs(uit)?|a(cute|p(s|c(up|ap)|dot|and|brcup)?|r(on|et))|r(oss|arr))|C(scr|hi|c(irc|onint|edil|aron)|ircle(Minus|Times|Dot|Plus)|Hcy|o(n(tourIntegral|int|gruent)|unterClockwiseContourIntegral|p(f|roduct)|lon(e)?)|dot|up(Cap)?|OPY|e(nterDot|dilla)|fr|lo(seCurly(DoubleQuote|Quote)|ckwiseContourIntegral)|a(yleys|cute|p(italDifferentialD)?)|ross))\n\t\t\t\t\t\t  | (d(s(c(y|r)|trok|ol)|har(l|r)|c(y|aron)|t(dot|ri(f)?)|i(sin|e|v(ide(ontimes)?|onx)?|am(s|ond(suit)?)?|gamma)|Har|z(cy|igrarr)|o(t(square|plus|eq(dot)?|minus)?|ublebarwedge|pf|wn(harpoon(left|right)|downarrows|arrow)|llar)|d(otseq|a(rr|gger))?|u(har|arr)|jcy|e(lta|g|mptyv)|f(isht|r)|wangle|lc(orn|rop)|a(sh(v)?|leth|rr|gger)|r(c(orn|rop)|bkarow)|b(karow|lac)|Arr)|D(s(cr|trok)|c(y|aron)|Scy|i(fferentialD|a(critical(Grave|Tilde|Do(t|ubleAcute)|Acute)|mond))|o(t(Dot|Equal)?|uble(Right(Tee|Arrow)|ContourIntegral|Do(t|wnArrow)|Up(DownArrow|Arrow)|VerticalBar|L(ong(RightArrow|Left(RightArrow|Arrow))|eft(RightArrow|Tee|Arrow)))|pf|wn(Right(TeeVector|Vector(Bar)?)|Breve|Tee(Arrow)?|arrow|Left(RightVector|TeeVector|Vector(Bar)?)|Arrow(Bar|UpArrow)?))|Zcy|el(ta)?|D(otrahd)?|Jcy|fr|a(shv|rr|gger)))\n\t\t\t\t\t\t  | (e(s(cr|im|dot)|n(sp|g)|c(y|ir(c)?|olon|aron)|t(h|a)|o(pf|gon)|dot|u(ro|ml)|p(si(v|lon)?|lus|ar(sl)?)|e|D(ot|Dot)|q(s(im|lant(less|gtr))|c(irc|olon)|u(iv(DD)?|est|als)|vparsl)|f(Dot|r)|l(s(dot)?|inters|l)?|a(ster|cute)|r(Dot|arr)|g(s(dot)?|rave)?|x(cl|ist|p(onentiale|ectation))|m(sp(1(3|4))?|pty(set|v)?|acr))|E(s(cr|im)|c(y|irc|aron)|ta|o(pf|gon)|NG|dot|uml|TH|psilon|qu(ilibrium|al(Tilde)?)|fr|lement|acute|grave|x(ists|ponentialE)|m(pty(SmallSquare|VerySmallSquare)|acr)))\n\t\t\t\t\t\t  | (f(scr|nof|cy|ilig|o(pf|r(k(v)?|all))|jlig|partint|emale|f(ilig|l(ig|lig)|r)|l(tns|lig|at)|allingdotseq|r(own|a(sl|c(1(2|8|3|4|5|6)|78|2(3|5)|3(8|4|5)|45|5(8|6)))))|F(scr|cy|illed(SmallSquare|VerySmallSquare)|o(uriertrf|pf|rAll)|fr))\n\t\t\t\t\t\t  | (G(scr|c(y|irc|edil)|t|opf|dot|T|Jcy|fr|amma(d)?|reater(Greater|SlantEqual|Tilde|Equal(Less)?|FullEqual|Less)|g|breve)|g(s(cr|im(e|l)?)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|irc)|t(c(c|ir)|dot|quest|lPar|r(sim|dot|eq(qless|less)|less|a(pprox|rr)))?|imel|opf|dot|jcy|e(s(cc|dot(o(l)?)?|l(es)?)?|q(slant|q)?|l)?|v(nE|ertneqq)|fr|E(l)?|l(j|E|a)?|a(cute|p|mma(d)?)|rave|g(g)?|breve))\n\t\t\t\t\t\t  | (h(s(cr|trok|lash)|y(phen|bull)|circ|o(ok(leftarrow|rightarrow)|pf|arr|rbar|mtht)|e(llip|arts(uit)?|rcon)|ks(earow|warow)|fr|a(irsp|lf|r(dcy|r(cir|w)?)|milt)|bar|Arr)|H(s(cr|trok)|circ|ilbertSpace|o(pf|rizontalLine)|ump(DownHump|Equal)|fr|a(cek|t)|ARDcy))\n\t\t\t\t\t\t  | (i(s(cr|in(s(v)?|dot|v|E)?)|n(care|t(cal|prod|e(rcal|gers)|larhk)?|odot|fin(tie)?)?|c(y|irc)?|t(ilde)?|i(nfin|i(nt|int)|ota)?|o(cy|ta|pf|gon)|u(kcy|ml)|jlig|prod|e(cy|xcl)|quest|f(f|r)|acute|grave|m(of|ped|a(cr|th|g(part|e|line))))|I(scr|n(t(e(rsection|gral))?|visible(Comma|Times))|c(y|irc)|tilde|o(ta|pf|gon)|dot|u(kcy|ml)|Ocy|Jlig|fr|Ecy|acute|grave|m(plies|a(cr|ginaryI))?))\n\t\t\t\t\t\t  | (j(s(cr|ercy)|c(y|irc)|opf|ukcy|fr|math)|J(s(cr|ercy)|c(y|irc)|opf|ukcy|fr))\n\t\t\t\t\t\t  | (k(scr|hcy|c(y|edil)|opf|jcy|fr|appa(v)?|green)|K(scr|c(y|edil)|Hcy|opf|Jcy|fr|appa))\n\t\t\t\t\t\t  | (l(s(h|cr|trok|im(e|g)?|q(uo(r)?|b)|aquo)|h(ar(d|u(l)?)|blk)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|ub|e(il|dil)|aron)|Barr|t(hree|c(c|ir)|imes|dot|quest|larr|r(i(e|f)?|Par))?|Har|o(ng(left(arrow|rightarrow)|rightarrow|mapsto)|times|z(enge|f)?|oparrow(left|right)|p(f|lus|ar)|w(ast|bar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|r(dhar|ushar))|ur(dshar|uhar)|jcy|par(lt)?|e(s(s(sim|dot|eq(qgtr|gtr)|approx|gtr)|cc|dot(o(r)?)?|g(es)?)?|q(slant|q)?|ft(harpoon(down|up)|threetimes|leftarrows|arrow(tail)?|right(squigarrow|harpoons|arrow(s)?))|g)?|v(nE|ertneqq)|f(isht|loor|r)|E(g)?|l(hard|corner|tri|arr)?|a(ng(d|le)?|cute|t(e(s)?|ail)?|p|emptyv|quo|rr(sim|hk|tl|pl|fs|lp|b(fs)?)?|gran|mbda)|r(har(d)?|corner|tri|arr|m)|g(E)?|m(idot|oust(ache)?)|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr))|L(s(h|cr|trok)|c(y|edil|aron)|t|o(ng(RightArrow|left(arrow|rightarrow)|rightarrow|Left(RightArrow|Arrow))|pf|wer(RightArrow|LeftArrow))|T|e(ss(Greater|SlantEqual|Tilde|EqualGreater|FullEqual|Less)|ft(Right(Vector|Arrow)|Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|rightarrow|Floor|A(ngleBracket|rrow(RightArrow|Bar)?)))|Jcy|fr|l(eftarrow)?|a(ng|cute|placetrf|rr|mbda)|midot))\n\t\t\t\t\t\t  | (M(scr|cy|inusPlus|opf|u|e(diumSpace|llintrf)|fr|ap)|m(s(cr|tpos)|ho|nplus|c(y|omma)|i(nus(d(u)?|b)?|cro|d(cir|dot|ast)?)|o(dels|pf)|dash|u(ltimap|map)?|p|easuredangle|DDot|fr|l(cp|dr)|a(cr|p(sto(down|up|left)?)?|l(t(ese)?|e)|rker)))\n\t\t\t\t\t\t  | (n(s(hort(parallel|mid)|c(cue|e|r)?|im(e(q)?)?|u(cc(eq)?|p(set(eq(q)?)?|e|E)?|b(set(eq(q)?)?|e|E)?)|par|qsu(pe|be)|mid)|Rightarrow|h(par|arr|Arr)|G(t(v)?|g)|c(y|ong(dot)?|up|edil|a(p|ron))|t(ilde|lg|riangle(left(eq)?|right(eq)?)|gl)|i(s(d)?|v)?|o(t(ni(v(c|a|b))?|in(dot|v(c|a|b)|E)?)?|pf)|dash|u(m(sp|ero)?)?|jcy|p(olint|ar(sl|t|allel)?|r(cue|e(c(eq)?)?)?)|e(s(im|ear)|dot|quiv|ar(hk|r(ow)?)|xist(s)?|Arr)?|v(sim|infin|Harr|dash|Dash|l(t(rie)?|e|Arr)|ap|r(trie|Arr)|g(t|e))|fr|w(near|ar(hk|r(ow)?)|Arr)|V(dash|Dash)|l(sim|t(ri(e)?)?|dr|e(s(s)?|q(slant|q)?|ft(arrow|rightarrow))?|E|arr|Arr)|a(ng|cute|tur(al(s)?)?|p(id|os|prox|E)?|bla)|r(tri(e)?|ightarrow|arr(c|w)?|Arr)|g(sim|t(r)?|e(s|q(slant|q)?)?|E)|mid|L(t(v)?|eft(arrow|rightarrow)|l)|b(sp|ump(e)?))|N(scr|c(y|edil|aron)|tilde|o(nBreakingSpace|Break|t(R(ightTriangle(Bar|Equal)?|everseElement)|Greater(Greater|SlantEqual|Tilde|Equal|FullEqual|Less)?|S(u(cceeds(SlantEqual|Tilde|Equal)?|perset(Equal)?|bset(Equal)?)|quareSu(perset(Equal)?|bset(Equal)?))|Hump(DownHump|Equal)|Nested(GreaterGreater|LessLess)|C(ongruent|upCap)|Tilde(Tilde|Equal|FullEqual)?|DoubleVerticalBar|Precedes(SlantEqual|Equal)?|E(qual(Tilde)?|lement|xists)|VerticalBar|Le(ss(Greater|SlantEqual|Tilde|Equal|Less)?|ftTriangle(Bar|Equal)?))?|pf)|u|e(sted(GreaterGreater|LessLess)|wLine|gative(MediumSpace|Thi(nSpace|ckSpace)|VeryThinSpace))|Jcy|fr|acute))\n\t\t\t\t\t\t  | (o(s(cr|ol|lash)|h(m|bar)|c(y|ir(c)?)|ti(lde|mes(as)?)|S|int|opf|d(sold|iv|ot|ash|blac)|uml|p(erp|lus|ar)|elig|vbar|f(cir|r)|l(c(ir|ross)|t|ine|arr)|a(st|cute)|r(slope|igof|or|d(er(of)?|f|m)?|v|arr)?|g(t|on|rave)|m(i(nus|cron|d)|ega|acr))|O(s(cr|lash)|c(y|irc)|ti(lde|mes)|opf|dblac|uml|penCurly(DoubleQuote|Quote)|ver(B(ar|rac(e|ket))|Parenthesis)|fr|Elig|acute|r|grave|m(icron|ega|acr)))\n\t\t\t\t\t\t  | (p(s(cr|i)|h(i(v)?|one|mmat)|cy|i(tchfork|v)?|o(intint|und|pf)|uncsp|er(cnt|tenk|iod|p|mil)|fr|l(us(sim|cir|two|d(o|u)|e|acir|mn|b)?|an(ck(h)?|kv))|ar(s(im|l)|t|a(llel)?)?|r(sim|n(sim|E|ap)|cue|ime(s)?|o(d|p(to)?|f(surf|line|alar))|urel|e(c(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?)?|E|ap)?|m)|P(s(cr|i)|hi|cy|i|o(incareplane|pf)|fr|lusMinus|artialD|r(ime|o(duct|portion(al)?)|ecedes(SlantEqual|Tilde|Equal)?)?))\n\t\t\t\t\t\t  | (q(scr|int|opf|u(ot|est(eq)?|at(int|ernions))|prime|fr)|Q(scr|opf|UOT|fr))\n\t\t\t\t\t\t  | (R(s(h|cr)|ho|c(y|edil|aron)|Barr|ight(Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|Floor|A(ngleBracket|rrow(Bar|LeftArrow)?))|o(undImplies|pf)|uleDelayed|e(verse(UpEquilibrium|E(quilibrium|lement)))?|fr|EG|a(ng|cute|rr(tl)?)|rightarrow)|r(s(h|cr|q(uo(r)?|b)|aquo)|h(o(v)?|ar(d|u(l)?))|nmid|c(y|ub|e(il|dil)|aron)|Barr|t(hree|imes|ri(e|f|ltri)?)|i(singdotseq|ng|ght(squigarrow|harpoon(down|up)|threetimes|left(harpoons|arrows)|arrow(tail)?|rightarrows))|Har|o(times|p(f|lus|ar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|ldhar)|uluhar|p(polint|ar(gt)?)|e(ct|al(s|ine|part)?|g)|f(isht|loor|r)|l(har|arr|m)|a(ng(d|e|le)?|c(ute|e)|t(io(nals)?|ail)|dic|emptyv|quo|rr(sim|hk|c|tl|pl|fs|w|lp|ap|b(fs)?)?)|rarr|x|moust(ache)?|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr)))\n\t\t\t\t\t\t  | (s(s(cr|tarf|etmn|mile)|h(y|c(hcy|y)|ort(parallel|mid)|arp)|c(sim|y|n(sim|E|ap)|cue|irc|polint|e(dil)?|E|a(p|ron))?|t(ar(f)?|r(ns|aight(phi|epsilon)))|i(gma(v|f)?|m(ne|dot|plus|e(q)?|l(E)?|rarr|g(E)?)?)|zlig|o(pf|ftcy|l(b(ar)?)?)|dot(e|b)?|u(ng|cc(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?|p(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|hs(ol|ub)|1|n(e|E)|2|d(sub|ot)|3|plus|e(dot)?|E|larr|mult)?|m|b(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|n(e|E)|dot|plus|e(dot)?|E|rarr|mult)?)|pa(des(uit)?|r)|e(swar|ct|tm(n|inus)|ar(hk|r(ow)?)|xt|mi|Arr)|q(su(p(set(eq)?|e)?|b(set(eq)?|e)?)|c(up(s)?|ap(s)?)|u(f|ar(e|f))?)|fr(own)?|w(nwar|ar(hk|r(ow)?)|Arr)|larr|acute|rarr|m(t(e(s)?)?|i(d|le)|eparsl|a(shp|llsetminus))|bquo)|S(scr|hort(RightArrow|DownArrow|UpArrow|LeftArrow)|c(y|irc|edil|aron)?|tar|igma|H(cy|CHcy)|opf|u(c(hThat|ceeds(SlantEqual|Tilde|Equal)?)|p(set|erset(Equal)?)?|m|b(set(Equal)?)?)|OFTcy|q(uare(Su(perset(Equal)?|bset(Equal)?)|Intersection|Union)?|rt)|fr|acute|mallCircle))\n\t\t\t\t\t\t  | (t(s(hcy|c(y|r)|trok)|h(i(nsp|ck(sim|approx))|orn|e(ta(sym|v)?|re(4|fore))|k(sim|ap))|c(y|edil|aron)|i(nt|lde|mes(d|b(ar)?)?)|o(sa|p(cir|f(ork)?|bot)?|ea)|dot|prime|elrec|fr|w(ixt|ohead(leftarrow|rightarrow))|a(u|rget)|r(i(sb|time|dot|plus|e|angle(down|q|left(eq)?|right(eq)?)?|minus)|pezium|ade)|brk)|T(s(cr|trok)|RADE|h(i(nSpace|ckSpace)|e(ta|refore))|c(y|edil|aron)|S(cy|Hcy)|ilde(Tilde|Equal|FullEqual)?|HORN|opf|fr|a(u|b)|ripleDot))\n\t\t\t\t\t\t  | (u(scr|h(ar(l|r)|blk)|c(y|irc)|t(ilde|dot|ri(f)?)|Har|o(pf|gon)|d(har|arr|blac)|u(arr|ml)|p(si(h|lon)?|harpoon(left|right)|downarrow|uparrows|lus|arrow)|f(isht|r)|wangle|l(c(orn(er)?|rop)|tri)|a(cute|rr)|r(c(orn(er)?|rop)|tri|ing)|grave|m(l|acr)|br(cy|eve)|Arr)|U(scr|n(ion(Plus)?|der(B(ar|rac(e|ket))|Parenthesis))|c(y|irc)|tilde|o(pf|gon)|dblac|uml|p(si(lon)?|downarrow|Tee(Arrow)?|per(RightArrow|LeftArrow)|DownArrow|Equilibrium|arrow|Arrow(Bar|DownArrow)?)|fr|a(cute|rr(ocir)?)|ring|grave|macr|br(cy|eve)))\n\t\t\t\t\t\t  | (v(s(cr|u(pn(e|E)|bn(e|E)))|nsu(p|b)|cy|Bar(v)?|zigzag|opf|dash|prop|e(e(eq|bar)?|llip|r(t|bar))|Dash|fr|ltri|a(ngrt|r(s(igma|u(psetneq(q)?|bsetneq(q)?))|nothing|t(heta|riangle(left|right))|p(hi|i|ropto)|epsilon|kappa|r(ho)?))|rtri|Arr)|V(scr|cy|opf|dash(l)?|e(e|r(yThinSpace|t(ical(Bar|Separator|Tilde|Line))?|bar))|Dash|vdash|fr|bar))\n\t\t\t\t\t\t  | (w(scr|circ|opf|p|e(ierp|d(ge(q)?|bar))|fr|r(eath)?)|W(scr|circ|opf|edge|fr))\n\t\t\t\t\t\t  | (X(scr|i|opf|fr)|x(s(cr|qcup)|h(arr|Arr)|nis|c(irc|up|ap)|i|o(time|dot|p(f|lus))|dtri|u(tri|plus)|vee|fr|wedge|l(arr|Arr)|r(arr|Arr)|map))\n\t\t\t\t\t\t  | (y(scr|c(y|irc)|icy|opf|u(cy|ml)|en|fr|ac(y|ute))|Y(scr|c(y|irc)|opf|uml|Icy|Ucy|fr|acute|Acy))\n\t\t\t\t\t\t  | (z(scr|hcy|c(y|aron)|igrarr|opf|dot|e(ta|etrf)|fr|w(nj|j)|acute)|Z(scr|c(y|aron)|Hcy|opf|dot|e(ta|roWidthSpace)|fr|acute))\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(;)\n\t\t\t\t\t",
				name: "constant.character.entity.named.$2.html"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.html"
					},
					"3": {
						name: "punctuation.definition.entity.html"
					}
				},
				match: "(&)#[0-9]+(;)",
				name: "constant.character.entity.numeric.decimal.html"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.html"
					},
					"3": {
						name: "punctuation.definition.entity.html"
					}
				},
				match: "(&)#[xX][0-9a-fA-F]+(;)",
				name: "constant.character.entity.numeric.hexadecimal.html"
			},
			{
				match: "&(?=[a-zA-Z0-9]+;)",
				name: "invalid.illegal.ambiguous-ampersand.html"
			}
		]
	},
	heading: {
		match: "(?:^|\\G)[ ]*(#{1,6}\\s+(.*?)(\\s+#{1,6})?\\s*)$",
		captures: {
			"1": {
				patterns: [
					{
						match: "(#{6})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.6.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{5})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.5.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{4})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.4.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{3})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.3.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{2})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.2.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{1})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.1.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					}
				]
			}
		},
		name: "markup.heading.markdown",
		patterns: [
			{
				include: "text.html.markdown#inline"
			}
		]
	},
	"heading-setext": {
		patterns: [
			{
				match: "^(={3,})(?=[ \\t]*$\\n?)",
				name: "markup.heading.setext.1.markdown"
			},
			{
				match: "^(-{3,})(?=[ \\t]*$\\n?)",
				name: "markup.heading.setext.2.markdown"
			}
		]
	},
	lists: {
		patterns: [
			{
				begin: "(^|\\G)([ ]*)([*+-])([ \\t])",
				beginCaptures: {
					"3": {
						name: "punctuation.definition.list.begin.markdown"
					}
				},
				comment: "Currently does not support un-indented second lines.",
				name: "markup.list.unnumbered.markdown",
				patterns: [
					{
						include: "#block"
					},
					{
						include: "text.html.markdown#list_paragraph"
					}
				],
				"while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
			},
			{
				begin: "(^|\\G)([ ]*)([0-9]+\\.)([ \\t])",
				beginCaptures: {
					"3": {
						name: "punctuation.definition.list.begin.markdown"
					}
				},
				name: "markup.list.numbered.markdown",
				patterns: [
					{
						include: "#block"
					},
					{
						include: "text.html.markdown#list_paragraph"
					}
				],
				"while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
			}
		]
	},
	paragraph: {
		begin: "(^|\\G)[ ]*(?=\\S)",
		name: "meta.paragraph.markdown",
		patterns: [
			{
				include: "#inline"
			},
			{
				include: "text.html.markdown#inline"
			},
			{
				include: "text.html.derivative"
			},
			{
				include: "#heading-setext"
			}
		],
		"while": "(^|\\G)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=\\S))"
	},
	blockquote: {
		begin: "(^|\\G)[ ]*(>) ?",
		captures: {
			"2": {
				name: "punctuation.definition.quote.begin.markdown"
			}
		},
		name: "markup.quote.markdown",
		patterns: [
			{
				include: "#block"
			}
		],
		"while": "(^|\\G)\\s*(>) ?"
	}
};
const mdcTMLanguage = {
	information_for_contributors: information_for_contributors,
	version: version,
	name: name,
	injectionSelector: injectionSelector,
	scopeName: scopeName,
	patterns: patterns,
	repository: repository
};

const resolveLang = (lang) => BUNDLED_LANGUAGES.find((l) => l.id === lang || l.aliases?.includes(lang))?.id;
const resolveTheme = (theme) => BUNDLED_THEMES.find((t) => t === theme);
const resolveBody = (body) => {
  if (typeof body.code !== "string") {
    throw createError({ statusMessage: "Bad Request", statusCode: 400, message: "Missing code key." });
  }
  return {
    code: body.code.replace(/\n+$/, ""),
    lang: resolveLang(body.lang),
    theme: resolveTheme(body.theme)
  };
};
const _dTHQie = defineLazyEventHandler(async () => {
  const { theme, preload } = useRuntimeConfig().content.highlight;
  const highlighter = await getHighlighter({
    theme: theme || "dark-plus",
    langs: [
      ...preload || ["json", "js", "ts", "css"],
      "shell",
      "html",
      "md",
      "yaml",
      {
        id: "md",
        scopeName: "text.markdown.mdc",
        path: "mdc.tmLanguage.json",
        aliases: ["markdown"],
        grammar: mdcTMLanguage
      }
    ]
  });
  return async (event) => {
    const params = await useBody(event);
    const { code, lang, theme: theme2 } = resolveBody(params);
    if (!lang) {
      return [[{ content: code }]];
    }
    if (!highlighter.getLoadedLanguages().includes(lang)) {
      await highlighter.loadLanguage(lang);
    }
    if (theme2 && !highlighter.getLoadedThemes().includes(theme2)) {
      await highlighter.loadTheme(theme2);
    }
    const highlightedCode = highlighter.codeToThemedTokens(code, lang, theme2);
    for (const line of highlightedCode) {
      for (const token of line) {
        delete token.fontStyle;
        delete token.explanation;
      }
    }
    return highlightedCode;
  };
});

const _lazy_Gg3G7P = () => import('../sitemap.xml.mjs');
const _lazy_GwAZUp = () => import('../feed.xml.mjs');
const _lazy_YsKJSn = () => import('../feed.json.mjs');
const _lazy_feTDPr = () => import('../feed.atom.mjs');
const _lazy_6iH4B4 = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/sitemap.xml', handler: _lazy_Gg3G7P, lazy: true, middleware: false, method: undefined },
  { route: '/feed.xml', handler: _lazy_GwAZUp, lazy: true, middleware: false, method: undefined },
  { route: '/feed.json', handler: _lazy_YsKJSn, lazy: true, middleware: false, method: undefined },
  { route: '/feed.atom', handler: _lazy_feTDPr, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_6iH4B4, lazy: true, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _KsAI0q, lazy: false, middleware: false, method: undefined },
  { route: '/api/_content/query/:qid', handler: _jiLlKa, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _jiLlKa, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache', handler: _c5ULZJ, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _QtP3qP, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _QtP3qP, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/highlight', handler: _dTHQie, lazy: false, middleware: false, method: "post" },
  { route: '/**', handler: _lazy_6iH4B4, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, nitroApp.h3App.nodeHandler) : new Server$1(nitroApp.h3App.nodeHandler);
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, nodeServer as n, serverQueryContent as s, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
