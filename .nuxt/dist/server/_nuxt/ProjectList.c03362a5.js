import { _ as __nuxt_component_0 } from "./SubTitle.78123582.js";
import { defineComponent, mergeProps, useSSRContext, withAsyncContext, unref, withCtx, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { o as useProjects } from "../server.mjs";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    project: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: __props.project.link,
        target: "_blank",
        class: "!flex items-center space-x-3 p-4 group rounded border-gray-200/50 border-2 hover:bg-white dark:border-gray-800/30 dark:hover:bg-gray-800 transition-all"
      }, _attrs))}>`);
      if (__props.project.icon) {
        _push(`<div class="opacity-30 mr-2 group-hover:opacity-75 transition-all svg-container">${__props.project.icon}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><h2 class="mb-2 text-lg">${ssrInterpolate(__props.project.name)}</h2><p class="text-xs opacity-75">${ssrInterpolate(__props.project.description)}</p></div></a>`);
    };
  }
});
const ProjectCard_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProjectList",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: categories } = ([__temp, __restore] = withAsyncContext(() => useProjects()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SubTitle = __nuxt_component_0;
      const _component_ProjectCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-10" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(categories).body, (category, cKey) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_SubTitle, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(category.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(category.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="grid md:grid-cols-2 gap-5"><!--[-->`);
        ssrRenderList(category.projects, (project, pKey) => {
          _push(ssrRenderComponent(_component_ProjectCard, {
            key: pKey,
            project
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ProjectList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ProjectList.c03362a5.js.map
