import __nuxt_component_0 from "./Markdown.9a5e26d7.js";
import { d as useUnwrap, b as _export_sfc } from "../server.mjs";
import { openBlock, createElementBlock, createElementVNode, defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
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
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "m9 12l2 2l4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806a3.42 3.42 0 0 1 4.438 0a3.42 3.42 0 0 0 1.946.806a3.42 3.42 0 0 1 3.138 3.138a3.42 3.42 0 0 0 .806 1.946a3.42 3.42 0 0 1 0 4.438a3.42 3.42 0 0 0-.806 1.946a3.42 3.42 0 0 1-3.138 3.138a3.42 3.42 0 0 0-1.946.806a3.42 3.42 0 0 1-4.438 0a3.42 3.42 0 0 0-1.946-.806a3.42 3.42 0 0 1-3.138-3.138a3.42 3.42 0 0 0-.806-1.946a3.42 3.42 0 0 1 0-4.438a3.42 3.42 0 0 0 .806-1.946a3.42 3.42 0 0 1 3.138-3.138Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_0 = { name: "heroicons-outline-badge-check", render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "List",
  __ssrInlineRender: true,
  props: {
    checked: Boolean
  },
  setup(__props) {
    const { flatUnwrap } = useUnwrap();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i_heroicons_outline_badge_check = __unplugin_components_0;
      const _component_Markdown = __nuxt_component_0;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "!p-0 !list-none" }, _attrs))} data-v-10123542><!--[-->`);
      ssrRenderList(unref(flatUnwrap)(_ctx.$slots.default(), ["ul"]), (item, index) => {
        _push(`<li class="!pl-0 flex space-x-2" data-v-10123542>`);
        if (__props.checked) {
          _push(ssrRenderComponent(_component_i_heroicons_outline_badge_check, { class: "flex-shrink-0 w-6 h-6 !mt-1 text-emerald-500" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<span data-v-10123542>`);
        _push(ssrRenderComponent(_component_Markdown, {
          use: () => item,
          unwrap: "li"
        }, null, _parent));
        _push(`</span></li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const List_vue_vue_type_style_index_0_scoped_10123542_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const List = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-10123542"]]);
export {
  List as default
};
//# sourceMappingURL=List.00d821bb.js.map
