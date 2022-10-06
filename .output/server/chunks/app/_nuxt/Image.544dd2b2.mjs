import { b as _export_sfc, c as __nuxt_component_0$2 } from '../server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'destr';
import 'h3';
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
      const _component_nuxt_img = __nuxt_component_0$2;
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Image.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Image = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d8f2bc45"]]);

export { Image as default };
//# sourceMappingURL=Image.544dd2b2.mjs.map
