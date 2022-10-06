import { useSSRContext, defineComponent, withAsyncContext, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { b as _export_sfc, u as useRoute, a as useRoutesContent, S as SchemaOrgBreadcrumb, _ as __nuxt_component_0$3 } from '../server.mjs';
import { joinURL, parseURL, hasTrailingSlash, stringifyParsedURL, withTrailingSlash } from 'ufo';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import 'ohmyfetch';
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

const getBreadcrumbs = (input) => {
  const startNode = parseURL(input);
  const appendsTrailingSlash = hasTrailingSlash(startNode.pathname);
  const stepNode = (node, nodes = []) => {
    const fullPath = stringifyParsedURL(node);
    const currentPathName = node.pathname;
    nodes.push(fullPath || "/");
    node.pathname = currentPathName.substring(0, currentPathName.lastIndexOf("/"));
    if (appendsTrailingSlash)
      node.pathname = withTrailingSlash(node.pathname.substring(0, node.pathname.lastIndexOf("/")));
    if (node.pathname !== currentPathName)
      stepNode(node, nodes);
    return nodes;
  };
  return stepNode(startNode);
};
async function useBreadcrumbs() {
  const route = useRoute();
  const links = getBreadcrumbs(route.path);
  return await Promise.all(links.reverse().map(async (path, key) => {
    var _a, _b;
    path.startsWith("/blog/") || path.startsWith("/posts/") ? path.replace("/blog", "/posts") : joinURL("/pages", path);
    const { data: page } = await useRoutesContent(path);
    if (key === links.length - 1) {
      return {
        name: (_a = page.value) == null ? void 0 : _a.title
      };
    }
    return {
      name: (_b = page.value) == null ? void 0 : _b.title,
      item: path
    };
  }));
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const breadcrumbs = ([__temp, __restore] = withAsyncContext(() => useBreadcrumbs()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SchemaOrgBreadcrumb = SchemaOrgBreadcrumb;
      const _component_NuxtLink = __nuxt_component_0$3;
      if (unref(breadcrumbs).length > 1) {
        _push(ssrRenderComponent(_component_SchemaOrgBreadcrumb, mergeProps({ "item-list-element": unref(breadcrumbs) }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<nav aria-label="Breadcrumb" data-v-d82deb6c${_scopeId}><ul class="flex space-x-4 text-sm opacity-50 list-none !mt-0 !mb-0" data-v-d82deb6c${_scopeId}><!--[-->`);
              ssrRenderList(unref(breadcrumbs), (item, key) => {
                _push2(`<!--[-->`);
                if (item.item) {
                  _push2(`<li class="!mt-0" data-v-d82deb6c${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    to: item.item,
                    class: "inline !border-none"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(item.name)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.name), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</li>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]--></ul></nav>`);
            } else {
              return [
                createVNode("nav", { "aria-label": "Breadcrumb" }, [
                  createVNode("ul", { class: "flex space-x-4 text-sm opacity-50 list-none !mt-0 !mb-0" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(breadcrumbs), (item, key) => {
                      return openBlock(), createBlock(Fragment, null, [
                        item.item ? (openBlock(), createBlock("li", {
                          key,
                          class: "!mt-0"
                        }, [
                          createVNode(_component_NuxtLink, {
                            to: item.item,
                            class: "inline !border-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ])) : createCommentVNode("", true)
                      ], 64);
                    }), 256))
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Breadcrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d82deb6c"]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=Breadcrumbs.1630eadf.mjs.map
