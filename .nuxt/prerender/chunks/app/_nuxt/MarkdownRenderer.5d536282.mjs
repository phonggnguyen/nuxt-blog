import { defineComponent, toRefs, h, Text, resolveComponent } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/vue@3.2.40/node_modules/vue/index.mjs';
import destr from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs';
import { pascalCase } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/scule@0.2.1/node_modules/scule/dist/index.mjs';
import { find, html } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/index.js';
import htmlTags from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/html-tags@3.2.0/node_modules/html-tags/index.js';
import { v as useRuntimeConfig } from '../server.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/ohmyfetch@0.4.19/node_modules/ohmyfetch/dist/node.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/ufo@0.8.5/node_modules/ufo/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/hookable@5.3.0/node_modules/hookable/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/unctx@1.2.0/node_modules/unctx/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/vue-router@4.1.5_vue@3.2.40/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/h3@0.7.21/node_modules/h3/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/defu@6.1.0/node_modules/defu/dist/defu.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/zhead@0.8.5/node_modules/zhead/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/vue@3.2.40/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/@vueuse+schema-org@1.1.0-beta.4_typescript@4.8.4/node_modules/@vueuse/schema-org/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/schema-org-graph-js@0.5.1_typescript@4.8.4/node_modules/schema-org-graph-js/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/ohash@0.1.5/node_modules/ohash/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/node-fetch-native@0.1.7/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/radix3@0.1.2/node_modules/radix3/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/unenv@0.6.2/node_modules/unenv/runtime/fetch/index.mjs';
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
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/slugify@1.6.5/node_modules/slugify/slugify.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/@iconify+utils@2.0.0/node_modules/@iconify/utils/lib/loader/node-loader.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/cheerio@1.0.0-rc.10/node_modules/cheerio/lib/index.js';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/shiki-es@0.1.2/node_modules/shiki-es/dist/shiki.node.mjs';

const DEFAULT_SLOT = "default";
const rxOn = /^@|^v-on:/;
const rxBind = /^:|^v-bind:/;
const rxModel = /^v-model/;
const nativeInputs = ["select", "textarea", "input"];
const MarkdownRenderer = defineComponent({
  name: "ContentRendererMarkdown",
  props: {
    value: {
      type: Object,
      required: true
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    const { content: { tags = {} } } = useRuntimeConfig().public;
    const { tag: _t, value: _d, ...contentProps } = toRefs(props);
    return {
      tags,
      contentProps
    };
  },
  render(ctx) {
    var _a;
    const { tags, tag, value, contentProps } = ctx;
    if (!value) {
      return null;
    }
    let body = value.body || value;
    if (this.excerpt && value.excerpt) {
      body = value.excerpt;
    }
    const meta = {
      ...value,
      tags: {
        ...tags,
        ...(value == null ? void 0 : value.tags) || {}
      }
    };
    let component = meta.component || tag;
    if (typeof meta.component === "object") {
      component = meta.component.name;
    }
    component = resolveVueComponent(component);
    const children = (body.children || []).map((child) => renderNode(child, h, meta));
    return h(component, {
      ...contentProps,
      ...(_a = meta.component) == null ? void 0 : _a.props,
      ...this.$attrs
    }, {
      default: createSlotFunction(children)
    });
  }
});
function renderNode(node, h2, documentMeta) {
  var _a;
  const originalTag = node.tag;
  const renderTag = typeof ((_a = node.props) == null ? void 0 : _a.__ignoreMap) === "undefined" && documentMeta.tags[node.tag] || node.tag;
  if (node.type === "text") {
    return h2(Text, node.value);
  }
  const component = resolveVueComponent(renderTag);
  if (typeof component === "object") {
    component.tag = originalTag;
  }
  return h2(component, propsToData(node, documentMeta), renderSlots(node, h2, documentMeta));
}
function renderSlots(node, h2, documentMeta) {
  const children = node.children || [];
  const slots = children.reduce((data, node2) => {
    if (!isTemplate(node2)) {
      data[DEFAULT_SLOT].push(renderNode(node2, h2, documentMeta));
      return data;
    }
    if (isDefaultTemplate(node2)) {
      data[DEFAULT_SLOT].push(...node2.children.map((child) => renderNode(child, h2, documentMeta)));
      return data;
    }
    const slotName = getSlotName(node2);
    data[slotName] = node2.children.map((child) => renderNode(child, h2, documentMeta));
    return data;
  }, {
    [DEFAULT_SLOT]: []
  });
  return Object.fromEntries(Object.entries(slots).map(([name, vDom]) => [name, createSlotFunction(vDom)]));
}
function propsToData(node, documentMeta) {
  const { tag = "", props = {} } = node;
  return Object.keys(props).reduce(function(data, key) {
    if (key === "__ignoreMap") {
      return data;
    }
    const value = props[key];
    if (rxModel.test(key) && !nativeInputs.includes(tag)) {
      return propsToDataRxModel(key, value, data, documentMeta);
    }
    if (key === "v-bind") {
      return propsToDataVBind(key, value, data, documentMeta);
    }
    if (rxOn.test(key)) {
      return propsToDataRxOn(key, value, data, documentMeta);
    }
    if (rxBind.test(key)) {
      return propsToDataRxBind(key, value, data, documentMeta);
    }
    const { attribute } = find(html, key);
    if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
      data[attribute] = value.join(" ");
      return data;
    }
    data[attribute] = value;
    return data;
  }, {});
}
function propsToDataRxModel(key, value, data, documentMeta) {
  const number = (d) => +d;
  const trim = (d) => d.trim();
  const noop = (d) => d;
  const mods = key.replace(rxModel, "").split(".").filter((d) => d).reduce((d, k) => {
    d[k] = true;
    return d;
  }, {});
  const field = "value";
  const event = mods.lazy ? "change" : "input";
  const processor = mods.number ? number : mods.trim ? trim : noop;
  data[field] = evalInContext(value, documentMeta);
  data.on = data.on || {};
  data.on[event] = (e) => documentMeta[value] = processor(e);
  return data;
}
function propsToDataVBind(_key, value, data, documentMeta) {
  const val = evalInContext(value, documentMeta);
  data = Object.assign(data, val);
  return data;
}
function propsToDataRxOn(key, value, data, documentMeta) {
  key = key.replace(rxOn, "");
  data.on = data.on || {};
  data.on[key] = () => evalInContext(value, documentMeta);
  return data;
}
function propsToDataRxBind(key, value, data, documentMeta) {
  key = key.replace(rxBind, "");
  data[key] = evalInContext(value, documentMeta);
  return data;
}
const resolveVueComponent = (component) => {
  if (!htmlTags.includes(component)) {
    const componentFn = resolveComponent(pascalCase(component), false);
    if (typeof componentFn === "object") {
      return componentFn;
    }
  }
  return component;
};
function evalInContext(code, context) {
  const result = code.split(".").reduce((o, k) => typeof o === "object" ? o[k] : void 0, context);
  return typeof result === "undefined" ? destr(code) : result;
}
function getSlotName(node) {
  let name = "";
  for (const propName of Object.keys(node.props || {})) {
    if (!propName.startsWith("#") && !propName.startsWith("v-slot:")) {
      continue;
    }
    name = propName.split(/[:#]/, 2)[1];
    break;
  }
  return name || DEFAULT_SLOT;
}
function createSlotFunction(nodes) {
  return nodes.length ? () => nodes : void 0;
}
function isDefaultTemplate(node) {
  return isTemplate(node) && getSlotName(node) === DEFAULT_SLOT;
}
function isTemplate(node) {
  return node.tag === "template";
}

export { MarkdownRenderer as default };
//# sourceMappingURL=MarkdownRenderer.5d536282.mjs.map
