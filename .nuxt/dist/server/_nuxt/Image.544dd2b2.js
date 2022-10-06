import { c as __nuxt_component_0, b as _export_sfc } from "../server.mjs";
import { defineComponent, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "Image",
  __ssrInlineRender: true,
  props: {
    alt: null,
    src: null,
    lazy: { type: [Boolean, String], default: true },
    width: null
  },
  setup(__props) {
    const props = __props;
    const shiftLargeImgStyles = computed(() => {
      if (!props.width)
        return {};
      if (props.width <= 700) {
        return {
          width: `${props.width}px`
        };
      }
      const transformX = `-${Math.round((props.width - 700) / 2)}px`;
      return {
        "width": `${props.width}px`,
        "--tw-translate-x": transformX
      };
    });
    const loadingType = computed(() => {
      return props.lazy === true || props.lazy === "true" ? "lazy" : "eager";
    });
    const src = props.src.replace(".png", "").replace(".jpeg", "");
    const provider = props.src.startsWith("https://") ? "" : "cloudinary";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0;
      _push(`<figure${ssrRenderAttrs(mergeProps({ style: unref(shiftLargeImgStyles) }, _attrs))} data-v-d8f2bc45>`);
      _push(ssrRenderComponent(_component_nuxt_img, mergeProps(_ctx.$attrs, {
        alt: __props.alt,
        width: __props.width,
        src: unref(src),
        loading: unref(loadingType),
        provider: unref(provider)
      }), null, _parent));
      if (__props.alt) {
        _push(`<figcaption class="text-center" data-v-d8f2bc45>${ssrInterpolate(__props.alt)}</figcaption>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</figure>`);
    };
  }
});
const Image_vue_vue_type_style_index_0_scoped_d8f2bc45_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Image.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Image = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d8f2bc45"]]);
export {
  Image as default
};
//# sourceMappingURL=Image.544dd2b2.js.map
