import { defineComponent, withAsyncContext, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { u as useRoute, a as useRoutesContent, S as SchemaOrgBreadcrumb, _ as __nuxt_component_0, b as _export_sfc } from "../server.mjs";
import "vue-router";
import "destr";
import { joinURL, parseURL, hasTrailingSlash, stringifyParsedURL, withTrailingSlash } from "ufo";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "ohmyfetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "h3";
import "defu";
import "zhead";
import "@vueuse/schema-org";
import "schema-org-graph-js";
import "ohash";
import "cookie-es";
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
      const _component_NuxtLink = __nuxt_component_0;
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
const Breadcrumbs_vue_vue_type_style_index_0_scoped_d82deb6c_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Breadcrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d82deb6c"]]);
export {
  __nuxt_component_1 as default
};
//# sourceMappingURL=Breadcrumbs.1630eadf.js.map
