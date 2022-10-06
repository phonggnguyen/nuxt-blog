import { useSSRContext, defineComponent, computed, unref, withCtx, createVNode, mergeProps, openBlock, createElementBlock, createElementVNode } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/vue@3.2.40/node_modules/vue/index.mjs';
import { l as dayNth, E as useMetaTags, F as SchemaOrgArticle } from '../server.mjs';
import __nuxt_component_1 from './Breadcrumbs.1630eadf.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/vue@3.2.40/node_modules/vue/server-renderer/index.mjs';
import __nuxt_component_3 from './Prose.3b01a91f.mjs';
import __nuxt_component_4 from './ContentRenderer.db5b5b9b.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/ohmyfetch@0.4.19/node_modules/ohmyfetch/dist/node.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/ufo@0.8.5/node_modules/ufo/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/hookable@5.3.0/node_modules/hookable/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/unctx@1.2.0/node_modules/unctx/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/vue-router@4.1.5_vue@3.2.40/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/h3@0.7.21/node_modules/h3/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/defu@6.1.0/node_modules/defu/dist/defu.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/zhead@0.8.5/node_modules/zhead/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/@vueuse+schema-org@1.1.0-beta.4_typescript@4.8.4/node_modules/@vueuse/schema-org/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/schema-org-graph-js@0.5.1_typescript@4.8.4/node_modules/schema-org-graph-js/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/ohash@0.1.5/node_modules/ohash/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/node-fetch-native@0.1.7/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/radix3@0.1.2/node_modules/radix3/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/unenv@0.6.2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/scule@0.2.1/node_modules/scule/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/unstorage@0.4.2/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/unstorage@0.4.2/node_modules/unstorage/dist/drivers/fs.mjs';
import 'node:url';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/ipx@0.9.11/node_modules/ipx/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/pathe@0.3.8/node_modules/pathe/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/unist-util-visit@4.1.1/node_modules/unist-util-visit/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/remark-emoji@3.0.2/node_modules/remark-emoji/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/rehype-slug@5.0.1/node_modules/rehype-slug/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/remark-squeeze-paragraphs@5.0.1/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/rehype-external-links@1.0.1/node_modules/rehype-external-links/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/remark-gfm@3.0.1/node_modules/remark-gfm/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/rehype-sort-attribute-values@4.0.0/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/rehype-sort-attributes@4.0.0/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/rehype-raw@6.1.1/node_modules/rehype-raw/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/js-yaml@4.1.0/node_modules/js-yaml/dist/js-yaml.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/flat@5.0.2/node_modules/flat/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/unified@10.1.2/node_modules/unified/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/remark-parse@10.0.1/node_modules/remark-parse/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/remark-rehype@10.1.0/node_modules/remark-rehype/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/stringify-entities@4.0.3/node_modules/stringify-entities/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/parse-entities@4.0.0/node_modules/parse-entities/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/micromark-util-character@1.1.0/node_modules/micromark-util-character/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/micromark-factory-space@1.0.0/node_modules/micromark-factory-space/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/micromark-factory-whitespace@1.0.0/node_modules/micromark-factory-whitespace/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/detab@3.0.1/node_modules/detab/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/unist-builder@3.0.0/node_modules/unist-builder/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/mdurl@1.0.1/node_modules/mdurl/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/unist-util-position@4.0.3/node_modules/unist-util-position/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/html-tags@3.2.0/node_modules/html-tags/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/slugify@1.6.5/node_modules/slugify/slugify.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/@iconify+utils@2.0.0/node_modules/@iconify/utils/lib/loader/node-loader.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/cheerio@1.0.0-rc.10/node_modules/cheerio/lib/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/shiki-es@0.1.2/node_modules/shiki-es/dist/shiki.node.mjs';
import './MarkdownRenderer.5d536282.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/index.js';

const _hoisted_1$4 = {
  viewBox: "0 0 256 290",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#FFF",
  d: "m128 .048l128 72.405V217.31l-128 72.405L0 217.31V72.453z"
}, null, -1);
const _hoisted_3$4 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#8ED6FB",
  d: "m233.153 212.287l-100.902 57.14V224.99l62.889-34.632l38.013 21.929Zm6.907-6.231V86.654l-36.902 21.3v76.8l36.902 21.302Zm-217.6 6.23l100.903 57.094v-44.438l-62.889-34.584l-38.014 21.929Zm-6.907-6.23V86.654l36.903 21.3v76.8l-36.903 21.302Zm4.3-127.13l103.51-58.543v42.99L57.045 99.84l-.532.29l-36.66-21.205Zm215.86 0L132.251 20.382v42.99l66.27 36.515l.531.29l36.661-21.253Z"
}, null, -1);
const _hoisted_4$3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#1C78C0",
  d: "m123.363 214.847l-62.02-34.15v-67.574l62.02 35.792v65.932Zm8.888 0l62.02-34.101v-67.623l-62.02 35.792v65.932ZM65.497 105.298l62.31-34.246l62.26 34.246l-62.26 35.937l-62.31-35.937Z"
}, null, -1);
const _hoisted_5$2 = [
  _hoisted_2$4,
  _hoisted_3$4,
  _hoisted_4$3
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_5$2);
}
const __unplugin_components_4 = { name: "logos-webpack", render: render$4 };
const _hoisted_1$3 = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#3178C6",
  d: "M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"
}, null, -1);
const _hoisted_3$3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#FFF",
  d: "M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179c6.133 1.151 12.597 1.726 19.393 1.726c6.622 0 12.914-.633 18.874-1.899c5.96-1.266 11.187-3.352 15.678-6.257c4.492-2.906 8.048-6.704 10.669-11.394c2.62-4.689 3.93-10.486 3.93-17.391c0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898c-3.945-2.33-8.394-4.531-13.347-6.602c-3.628-1.497-6.881-2.949-9.761-4.359c-2.879-1.41-5.327-2.848-7.342-4.316c-2.016-1.467-3.571-3.021-4.665-4.661c-1.094-1.64-1.641-3.495-1.641-5.567c0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547c2.591-.604 5.471-.906 8.638-.906c2.304 0 4.737.173 7.299.518c2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719a41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582c-4.981-.777-10.697-1.165-17.147-1.165c-6.565 0-12.784.705-18.658 2.115c-5.874 1.409-11.043 3.61-15.506 6.602c-4.463 2.993-7.99 6.805-10.582 11.437c-2.591 4.632-3.887 10.17-3.887 16.615c0 8.228 2.375 15.248 7.127 21.06c4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66c2.39 1.611 4.276 3.366 5.658 5.265c1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97c-1.756 1.122-3.945 1.999-6.565 2.632c-2.62.633-5.687.95-9.2.95c-5.989 0-11.92-1.05-17.794-3.151c-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z"
}, null, -1);
const _hoisted_4$2 = [
  _hoisted_2$3,
  _hoisted_3$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_4$2);
}
const __unplugin_components_3 = { name: "logos-typescript-icon", render: render$3 };
const _hoisted_1$2 = {
  viewBox: "0 0 256 257",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = ["id"];
const _hoisted_3$2 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#41D1FF"
}, null, -1);
const _hoisted_4$1 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#BD34FE"
}, null, -1);
const _hoisted_5$1 = [
  _hoisted_3$2,
  _hoisted_4$1
];
const _hoisted_6 = ["id"];
const _hoisted_7 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFEA83"
}, null, -1);
const _hoisted_8 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "8.333%",
  "stop-color": "#FFDD35"
}, null, -1);
const _hoisted_9 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#FFA800"
}, null, -1);
const _hoisted_10 = [
  _hoisted_7,
  _hoisted_8,
  _hoisted_9
];
const _hoisted_11 = ["fill"];
const _hoisted_12 = ["fill"];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [
    createElementVNode("defs", null, [
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDa"],
        x1: "-.828%",
        x2: "57.636%",
        y1: "7.652%",
        y2: "78.411%"
      }, _hoisted_5$1, 8, _hoisted_2$2),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDb"],
        x1: "43.376%",
        x2: "50.316%",
        y1: "2.242%",
        y2: "89.03%"
      }, _hoisted_10, 8, _hoisted_6)
    ]),
    createElementVNode("path", {
      fill: "url(#" + _ctx.idMap["svgIDa"] + ")",
      d: "M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
    }, null, 8, _hoisted_11),
    createElementVNode("path", {
      fill: "url(#" + _ctx.idMap["svgIDb"] + ")",
      d: "M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
    }, null, 8, _hoisted_12)
  ]);
}
const __unplugin_components_2 = { name: "logos-vitejs", render: render$2, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "svgIDa": "uicons-" + __randId(), "svgIDb": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1$1 = {
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#41b883",
  d: "M24.4 3.925H30l-14 24.15L2 3.925h10.71l3.29 5.6l3.22-5.6Z"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#41b883",
  d: "m2 3.925l14 24.15l14-24.15h-5.6L16 18.415L7.53 3.925Z"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#35495e",
  d: "M7.53 3.925L16 18.485l8.4-14.56h-5.18L16 9.525l-3.29-5.6Z"
}, null, -1);
const _hoisted_5 = [
  _hoisted_2$1,
  _hoisted_3$1,
  _hoisted_4
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_5);
}
const __unplugin_components_1 = { name: "vscode-icons-file-type-vue", render: render$1 };
const _hoisted_1 = {
  viewBox: "0 0 256 250",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#161614",
  d: "M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_0 = { name: "logos-github-icon", render };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Tag",
  __ssrInlineRender: true,
  props: {
    tag: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i_logos_github_icon = __unplugin_components_0;
      const _component_i_vscode_icons_file_type_vue = __unplugin_components_1;
      const _component_i_logos_vitejs = __unplugin_components_2;
      const _component_i_logos_typescript_icon = __unplugin_components_3;
      const _component_i_logos_webpack = __unplugin_components_4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.tag === "github") {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_i_logos_github_icon, {
          class: "inline-block mr-1",
          height: "15"
        }, null, _parent));
        _push(`<span class="opacity-75">GitHub</span><!--]-->`);
      } else if (__props.tag === "vue") {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_i_vscode_icons_file_type_vue, {
          class: "inline-block mr-1",
          height: "15"
        }, null, _parent));
        _push(`<span class="opacity-75">Vue</span><!--]-->`);
      } else if (__props.tag === "vite") {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_i_logos_vitejs, {
          class: "inline-block mr-1",
          height: "15"
        }, null, _parent));
        _push(`<span class="opacity-75">Vite</span><!--]-->`);
      } else if (__props.tag === "typescript") {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_i_logos_typescript_icon, {
          class: "inline-block mr-1",
          height: "15"
        }, null, _parent));
        _push(`<span class="opacity-75">TypeScript</span><!--]-->`);
      } else if (__props.tag === "webpack") {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_i_logos_webpack, {
          class: "inline-block mr-1",
          height: "15"
        }, null, _parent));
        _push(`<span class="opacity-75">webpack</span><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tag.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TagList",
  __ssrInlineRender: true,
  props: {
    tags: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Tag = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center space-x-4" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.tags, (tag) => {
        _push(ssrRenderComponent(_component_Tag, {
          key: tag,
          tag
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TagList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PostRenderer",
  __ssrInlineRender: true,
  props: {
    post: Object
  },
  setup(__props) {
    const props = __props;
    const formatPublishedDate = (options) => new Intl.DateTimeFormat("en", options).format(new Date(props.post.publishedAt));
    const year = formatPublishedDate({ year: "numeric" });
    const month = formatPublishedDate({ month: "short" });
    const day = dayNth(formatPublishedDate({ day: "numeric" }));
    const schema = computed(() => props.post.schema || {});
    useMetaTags({
      twitterLabel1: "Written on",
      twitterData1: `${month} ${day}, ${year}`,
      twitterLabel2: "Reading time",
      twitterData2: `${props.post.readingMins} mins`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SchemaOrgArticle = SchemaOrgArticle;
      const _component_Breadcrumbs = __nuxt_component_1;
      const _component_TagList = _sfc_main$1;
      const _component_Prose = __nuxt_component_3;
      const _component_ContentRenderer = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SchemaOrgArticle, { ...unref(schema) }, null, _parent));
      _push(ssrRenderComponent(_component_Breadcrumbs, { class: "mb-2" }, null, _parent));
      _push(`<h1 class="!text-3xl font-header font-bold !leading-11 !md:text-4xl !md:leading-14 mb-7">${ssrInterpolate(__props.post.title)}</h1>`);
      _push(ssrRenderComponent(_component_TagList, {
        tags: __props.post.tags,
        class: "mb-5"
      }, null, _parent));
      _push(`<div class="sm:flex sm:space-x-7 sm:mb-10 sm:text-lg sm:space-y-0 opacity-80 space-y-3 items-center"><div> Published ${ssrInterpolate(unref(month))} ${ssrInterpolate(unref(day))} ${ssrInterpolate(unref(year))}</div><div class="opacity-50 text-xs hidden sm:block"> \u25CF </div><div>${ssrInterpolate(__props.post.readingMins)} minute read </div></div>`);
      _push(ssrRenderComponent(_component_Prose, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ContentRenderer, {
              value: __props.post,
              class: "max-w-none"
            }, {
              "not-found": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-2xl"${_scopeId2}> Page not found </h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-2xl" }, " Page not found ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ContentRenderer, {
                value: __props.post,
                class: "max-w-none"
              }, {
                "not-found": withCtx(() => [
                  createVNode("h1", { class: "text-2xl" }, " Page not found ")
                ]),
                _: 1
              }, 8, ["value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PostRenderer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=PostRenderer.55574ae0.mjs.map
