import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { b as _export_sfc } from "../server.mjs";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "destr";
import "h3";
import "defu";
import "zhead";
import "@vueuse/schema-org";
import "schema-org-graph-js";
import "ohash";
import "cookie-es";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<hr${ssrRenderAttrs(_attrs)}>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseHr = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ProseHr as default
};
//# sourceMappingURL=ProseHr.207d6d4e.js.map