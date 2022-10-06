import __nuxt_component_0 from './Markdown.9a5e26d7.mjs';
import { mergeProps, useSSRContext, openBlock, createElementBlock, createElementVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { b as _export_sfc } from '../server.mjs';
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

const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-dasharray": "46",
  "stroke-dashoffset": "46",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M12 17H9V14.1973C7.2066 13.1599 6 11.2208 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 11.2208 16.7934 13.1599 15 14.1973V17z"
}, [
  /* @__PURE__ */ createElementVNode("animate", {
    fill: "freeze",
    attributeName: "stroke-dashoffset",
    dur: "0.4s",
    values: "46;0"
  })
], -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("rect", {
  width: "6",
  height: "0",
  x: "9",
  y: "20",
  fill: "currentColor",
  rx: "1"
}, [
  /* @__PURE__ */ createElementVNode("animate", {
    fill: "freeze",
    attributeName: "height",
    begin: "0.5s",
    dur: "0.2s",
    values: "0;2"
  })
], -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_4);
}
const __unplugin_components_0 = { name: "line-md-lightbulb", render };
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_i_line_md_lightbulb = __unplugin_components_0;
  const _component_Markdown = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 my-4 rounded-md bg-blue-100 dark:bg-blue-700" }, _attrs))}><div class="flex"><div>`);
  _push(ssrRenderComponent(_component_i_line_md_lightbulb, { class: "icon mt-1" }, null, _parent));
  _push(`</div><div class="ml-3">`);
  _push(ssrRenderComponent(_component_Markdown, {
    use: _ctx.$slots.default,
    unwrap: "p"
  }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Tip.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Tip = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Tip as default };
//# sourceMappingURL=Tip.2fd789f0.mjs.map
