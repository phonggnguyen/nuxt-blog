import { defineComponent, withAsyncContext, unref, useSSRContext, defineAsyncComponent } from 'vue';
import { a as useRoutesContent, z as useNuxtApp, A as callWithNuxt, u as useRoute, B as throwError, C as useContentHead } from '../server.mjs';
import { createError } from 'h3';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'destr';
import 'defu';
import 'zhead';
import '@vueuse/schema-org';
import 'schema-org-graph-js';
import 'ohash';
import 'cookie-es';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'fs';
import 'pathe';
import 'url';
import 'node:url';
import 'ipx';
import 'unist-util-visit';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'js-yaml';
import 'flat';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'stringify-entities';
import 'parse-entities';
import 'micromark-util-character';
import 'micromark-factory-space';
import 'micromark-factory-whitespace';
import 'micromark-core-commonmark';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'unist-util-position';
import 'html-tags';
import 'slugify';
import '@iconify/utils/lib/loader/node-loader';
import 'cheerio';
import 'shiki-es';

const __nuxt_component_0_lazy = /* @__PURE__ */ defineAsyncComponent(() => import('./PageRenderer.fd3db016.mjs').then((m) => m.default || m));
const __nuxt_component_1_lazy = /* @__PURE__ */ defineAsyncComponent(() => import('./PostRenderer.55574ae0.mjs').then((m) => m.default || m));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const routesContentQuery = ([__temp, __restore] = withAsyncContext(() => useRoutesContent()), __temp = await __temp, __restore(), __temp);
    const { data: pageContent, error } = routesContentQuery;
    if (error.value) {
      const nuxtApp = useNuxtApp();
      callWithNuxt(nuxtApp, throwError, [createError({
        statusCode: 404,
        statusMessage: `Page not found: ${useRoute().path}`
      })]);
      if (nuxtApp.ssrContext)
        nuxtApp.ssrContext.res.statusCode = 404;
    } else {
      useContentHead(pageContent);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_LazyPageRenderer = __nuxt_component_0_lazy;
      const _component_LazyPostRenderer = __nuxt_component_1_lazy;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (((_a = unref(pageContent)) == null ? void 0 : _a.renderer) === "page") {
        _push(ssrRenderComponent(_component_LazyPageRenderer, { page: unref(pageContent) }, null, _parent));
      } else if (((_b = unref(pageContent)) == null ? void 0 : _b.renderer) === "post") {
        _push(ssrRenderComponent(_component_LazyPostRenderer, { post: unref(pageContent) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_.6047544b.mjs.map
