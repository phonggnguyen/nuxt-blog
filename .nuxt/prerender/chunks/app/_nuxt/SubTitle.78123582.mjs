import { mergeProps, useSSRContext } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/vue@3.2.40/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/vue@3.2.40/node_modules/vue/server-renderer/index.mjs';
import { b as _export_sfc } from '../server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h2${ssrRenderAttrs(mergeProps({ class: "mb-5 bg-gradient-to-b from-emerald-500 to-teal-600 inline-block font-semibold text-lg" }, _attrs))} data-v-5955d667>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h2>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SubTitle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5955d667"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=SubTitle.78123582.mjs.map