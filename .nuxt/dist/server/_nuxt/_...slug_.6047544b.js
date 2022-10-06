import { defineComponent, withAsyncContext, unref, defineAsyncComponent, useSSRContext } from "vue";
import { a as useRoutesContent, z as useNuxtApp, A as callWithNuxt, u as useRoute, B as throwError, C as useContentHead } from "../server.mjs";
import "vue-router";
import { createError } from "h3";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "defu";
import "zhead";
import "@vueuse/schema-org";
import "schema-org-graph-js";
import "ohash";
import "cookie-es";
const __nuxt_component_0_lazy = /* @__PURE__ */ defineAsyncComponent(() => import("./PageRenderer.fd3db016.js").then((m) => m.default || m));
const __nuxt_component_1_lazy = /* @__PURE__ */ defineAsyncComponent(() => import("./PostRenderer.55574ae0.js").then((m) => m.default || m));
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
export {
  _sfc_main as default
};
//# sourceMappingURL=_...slug_.6047544b.js.map
