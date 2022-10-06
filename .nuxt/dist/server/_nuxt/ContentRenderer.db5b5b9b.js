import { defineComponent, watch, useSlots, h } from "vue";
import MarkdownRenderer from "./MarkdownRenderer.5d536282.js";
import "destr";
import "scule";
import "property-information";
import "html-tags";
import "../server.mjs";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "defu";
import "zhead";
import "vue/server-renderer";
import "@vueuse/schema-org";
import "schema-org-graph-js";
import "ohash";
import "cookie-es";
const __nuxt_component_4 = defineComponent({
  props: {
    value: {
      type: Object,
      required: false,
      default: () => ({})
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
    watch(() => props.excerpt, (newExcerpt) => {
      var _a, _b, _c;
      if (newExcerpt && !((_a = props.value) == null ? void 0 : _a.excerpt)) {
        console.warn(`No excerpt found for document content/${(_b = props == null ? void 0 : props.value) == null ? void 0 : _b._path}.${(_c = props == null ? void 0 : props.value) == null ? void 0 : _c._extension}!`);
        console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature.");
      }
    }, {
      immediate: true
    });
  },
  render(ctx) {
    var _a, _b;
    const slots = useSlots();
    const { value, excerpt, tag } = ctx;
    if (value && (value == null ? void 0 : value._type) === "markdown" && ((_b = (_a = value == null ? void 0 : value.body) == null ? void 0 : _a.children) == null ? void 0 : _b.length)) {
      return h(MarkdownRenderer, {
        value,
        excerpt,
        tag,
        ...this.$attrs
      });
    }
    if (value && (slots == null ? void 0 : slots.default)) {
      return slots.default({ value, excerpt, tag, ...this.$attrs });
    } else if (slots == null ? void 0 : slots.empty) {
      return slots.empty({ value, excerpt, tag, ...this.$attrs });
    } else if (slots == null ? void 0 : slots.default) {
      return slots.default({ value, excerpt, tag, ...this.$attrs });
    }
    return h("pre", null, JSON.stringify({ message: "You should use slots with <ContentRenderer>", value, excerpt, tag }, null, 2));
  }
});
export {
  __nuxt_component_4 as default
};
//# sourceMappingURL=ContentRenderer.db5b5b9b.js.map
