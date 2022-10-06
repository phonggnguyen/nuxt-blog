import __nuxt_component_3 from './Prose.3b01a91f.mjs';
import { defineComponent, computed, unref, createVNode, resolveDynamicComponent, withCtx, useSSRContext } from 'vue';
import { D as SchemaOrgWebPage } from '../server.mjs';
import __nuxt_component_4 from './ContentRenderer.db5b5b9b.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode } from 'vue/server-renderer';
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
import './MarkdownRenderer.5d536282.mjs';
import 'property-information';

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

export { _sfc_main as default };
//# sourceMappingURL=PageRenderer.fd3db016.mjs.map
