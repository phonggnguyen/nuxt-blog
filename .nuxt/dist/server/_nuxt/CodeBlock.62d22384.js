import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
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
const CodeBlock_vue_vue_type_style_index_0_scoped_c4035ab8_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "code-block transform relative my-12 !py-0 max-h-700px overflow-y-auto" }, _attrs))} data-v-c4035ab8>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/CodeBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CodeBlock = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c4035ab8"]]);
export {
  CodeBlock as default
};
//# sourceMappingURL=CodeBlock.62d22384.js.map
