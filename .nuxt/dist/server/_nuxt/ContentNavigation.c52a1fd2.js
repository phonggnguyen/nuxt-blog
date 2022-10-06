import { w as withContentBase, p as useHead, x as jsonStringify, y as useCookie, q as useAsyncData } from "../server.mjs";
import { defineComponent, toRefs, useSlots, h } from "vue";
import "vue-router";
import "destr";
import { hash } from "ohash";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "h3";
import "defu";
import "zhead";
import "vue/server-renderer";
import "@vueuse/schema-org";
import "schema-org-graph-js";
import "cookie-es";
const fetchContentNavigation = (queryBuilder) => {
  const params = queryBuilder == null ? void 0 : queryBuilder.params();
  const apiPath = withContentBase(params ? `/navigation/${hash(params)}` : "/navigation");
  {
    useHead({
      link: [
        { rel: "prefetch", href: apiPath }
      ]
    });
  }
  return $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: {
      _params: jsonStringify(params || {}),
      previewToken: useCookie("previewToken").value
    }
  });
};
const ContentNavigation = defineComponent({
  props: {
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      query
    } = toRefs(props);
    const { data, refresh } = await useAsyncData(`content-navigation-${hash(query.value)}`, () => fetchContentNavigation(query.value));
    return {
      data,
      refresh
    };
  },
  render(ctx) {
    var _a;
    const slots = useSlots();
    const {
      query,
      data,
      refresh
    } = ctx;
    const emptyNode = (slot, data2) => h("pre", null, JSON.stringify({ message: "You should use slots with <ContentNavigation>", slot, data: data2 }, null, 2));
    if ((slots == null ? void 0 : slots.empty) && (!data || !(data == null ? void 0 : data.length))) {
      return ((_a = slots == null ? void 0 : slots.empty) == null ? void 0 : _a.call(slots, { query, ...this.$attrs })) || emptyNode("empty", { query, data });
    }
    return (slots == null ? void 0 : slots.default) ? slots.default({ navigation: data, refresh, ...this.$attrs }) : emptyNode("default", data);
  }
});
export {
  ContentNavigation as default
};
//# sourceMappingURL=ContentNavigation.c52a1fd2.js.map
