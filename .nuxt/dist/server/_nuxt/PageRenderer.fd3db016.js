import __nuxt_component_3 from "./Prose.3b01a91f.js";
import { defineComponent, computed, unref, createVNode, resolveDynamicComponent, withCtx, useSSRContext } from "vue";
import { D as SchemaOrgWebPage } from "../server.mjs";
import __nuxt_component_4 from "./ContentRenderer.db5b5b9b.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode } from "vue/server-renderer";
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
import "./MarkdownRenderer.5d536282.js";
import "scule";
import "property-information";
import "html-tags";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageRenderer",
  __ssrInlineRender: true,
  props: {
    page: Object
  },
  setup(__props) {
    const props = __props;
    const contentComponent = computed(() => props.page.prose !== false ? __nuxt_component_3 : "div");
    const schema = computed(() => props.page.schema || {});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SchemaOrgWebPage = SchemaOrgWebPage;
      const _component_ContentRenderer = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SchemaOrgWebPage, unref(schema), null, _parent));
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(contentComponent)), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ContentRenderer, { value: __props.page }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ContentRenderer, { value: __props.page }, null, 8, ["value"])
            ];
          }
        }),
        _: 1
      }), _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageRenderer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=PageRenderer.fd3db016.js.map
