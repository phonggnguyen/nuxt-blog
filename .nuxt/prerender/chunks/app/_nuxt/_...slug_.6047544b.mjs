import { defineComponent, withAsyncContext, unref, useSSRContext, defineAsyncComponent } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/vue@3.2.40/node_modules/vue/index.mjs';
import { a as useRoutesContent, z as useNuxtApp, A as callWithNuxt, u as useRoute, B as throwError, C as useContentHead } from '../server.mjs';
import { createError } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/h3@0.7.21/node_modules/h3/dist/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/vue@3.2.40/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/ohmyfetch@0.4.19/node_modules/ohmyfetch/dist/node.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/ufo@0.8.5/node_modules/ufo/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/hookable@5.3.0/node_modules/hookable/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/unctx@1.2.0/node_modules/unctx/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/vue-router@4.1.5_vue@3.2.40/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/defu@6.1.0/node_modules/defu/dist/defu.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/zhead@0.8.5/node_modules/zhead/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/@vueuse+schema-org@1.1.0-beta.4_typescript@4.8.4/node_modules/@vueuse/schema-org/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/schema-org-graph-js@0.5.1_typescript@4.8.4/node_modules/schema-org-graph-js/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/ohash@0.1.5/node_modules/ohash/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
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
