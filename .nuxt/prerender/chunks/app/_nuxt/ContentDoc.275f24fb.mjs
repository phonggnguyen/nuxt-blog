import { u as useRoute, p as useHead } from '../server.mjs';
import { defineComponent, useSlots, h } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/vue@3.2.40/node_modules/vue/index.mjs';
import __nuxt_component_4 from './ContentRenderer.db5b5b9b.mjs';
import ContentQuery from './ContentQuery.0bfd106b.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/ohmyfetch@0.4.19/node_modules/ohmyfetch/dist/node.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/ufo@0.8.5/node_modules/ufo/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/hookable@5.3.0/node_modules/hookable/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/unctx@1.2.0/node_modules/unctx/dist/index.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/vue-router@4.1.5_vue@3.2.40/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs';
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

const ContentDoc = defineComponent({
  props: {
    tag: {
      type: String,
      required: false,
      default: "div"
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    path: {
      type: String,
      required: false,
      default: () => useRoute().path
    },
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  render(ctx) {
    const slots = useSlots();
    const { tag, excerpt, path, query } = ctx;
    const contentQueryProps = Object.assign(query || {}, { path, find: "one" });
    const emptyNode = (slot, data) => h("pre", null, JSON.stringify({ message: "You should use slots with <ContentDoc>", slot, data }, null, 2));
    const addHead = (doc) => {
      if (path !== useRoute().path) {
        return;
      }
      const head = Object.assign({}, doc.head);
      head.title = head.title || doc.title;
      head.meta = head.meta || [];
      const description = head.description || doc.description;
      if (description && head.meta.filter((m) => m.name === "description").length === 0) {
        head.meta.push({
          name: "description",
          content: description
        });
      }
      if (head.image && head.meta.filter((m) => m.property === "og:image").length === 0) {
        head.meta.push({
          property: "og:image",
          content: head.image
        });
      }
      {
        useHead(head);
      }
    };
    return h(ContentQuery, contentQueryProps, {
      default: (slots == null ? void 0 : slots.default) ? ({ data, refresh, isPartial }) => {
        addHead(data);
        return slots.default({ doc: data, refresh, isPartial, excerpt, ...this.$attrs });
      } : ({ data }) => {
        addHead(data);
        return h(__nuxt_component_4, { value: data, excerpt, tag, ...this.$attrs }, { empty: (bindings) => (slots == null ? void 0 : slots.empty) ? slots.empty(bindings) : emptyNode("default", data) });
      },
      empty: (bindings) => {
        var _a;
        return ((_a = slots == null ? void 0 : slots.empty) == null ? void 0 : _a.call(slots, bindings)) || h("p", null, "Document is empty, overwrite this content with #empty slot in <ContentDoc>.");
      },
      "not-found": (bindings) => {
        var _a;
        return ((_a = slots == null ? void 0 : slots["not-found"]) == null ? void 0 : _a.call(slots, bindings)) || h("p", null, "Document not found, overwrite this content with #not-found slot in <ContentDoc>.");
      }
    });
  }
});

export { ContentDoc as default };
//# sourceMappingURL=ContentDoc.275f24fb.mjs.map
