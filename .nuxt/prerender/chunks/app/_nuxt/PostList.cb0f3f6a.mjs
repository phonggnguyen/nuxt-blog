import { _ as __nuxt_component_0 } from './SubTitle.78123582.mjs';
import { m as usePostList, e as identity, l as dayNth, f as isFunction, g as isNumber, h as useTimeoutFn, _ as __nuxt_component_0$3, b as _export_sfc, j as isString, n as noop, t as tryOnScopeDispose, r as resolveUnref, k as clamp } from '../server.mjs';
import { useSSRContext, defineComponent, withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, ref, watch, mergeProps, createVNode, openBlock, createBlock, createCommentVNode, computed } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/vue@3.2.40/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/vue@3.2.40/node_modules/vue/server-renderer/index.mjs';
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

function unrefElement(elRef) {
  var _a;
  const plain = resolveUnref(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = void 0;
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop;
  let cleanup = noop;
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
function useRafFn(fn, options = {}) {
  const {
    immediate = true,
    window: window2 = defaultWindow
  } = options;
  const isActive = ref(false);
  let rafId = null;
  function loop() {
    if (!isActive.value || !window2)
      return;
    fn();
    rafId = window2.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value && window2) {
      isActive.value = true;
      loop();
    }
  }
  function pause() {
    isActive.value = false;
    if (rafId != null && window2) {
      window2.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }
  if (immediate)
    resume();
  tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}
function useElementHover(el) {
  const isHovered = ref(false);
  useEventListener(el, "mouseenter", () => isHovered.value = true);
  useEventListener(el, "mouseleave", () => isHovered.value = false);
  return isHovered;
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
const TransitionPresets = __spreadValues({
  linear: identity
}, _TransitionPresets);
function createEasingFunction([p0, p1, p2, p3]) {
  const a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
  const b = (a1, a2) => 3 * a2 - 6 * a1;
  const c = (a1) => 3 * a1;
  const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
  const getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
  const getTforX = (x) => {
    let aGuessT = x;
    for (let i = 0; i < 4; ++i) {
      const currentSlope = getSlope(aGuessT, p0, p2);
      if (currentSlope === 0)
        return aGuessT;
      const currentX = calcBezier(aGuessT, p0, p2) - x;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  };
  return (x) => p0 === p1 && p2 === p3 ? x : calcBezier(getTforX(x), p1, p3);
}
function useTransition(source, options = {}) {
  const {
    delay = 0,
    disabled = false,
    duration = 1e3,
    onFinished = noop,
    onStarted = noop,
    transition = identity
  } = options;
  const currentTransition = computed(() => {
    const t = unref(transition);
    return isFunction(t) ? t : createEasingFunction(t);
  });
  const sourceValue = computed(() => {
    const s = unref(source);
    return isNumber(s) ? s : s.map(unref);
  });
  const sourceVector = computed(() => isNumber(sourceValue.value) ? [sourceValue.value] : sourceValue.value);
  const outputVector = ref(sourceVector.value.slice(0));
  let currentDuration;
  let diffVector;
  let endAt;
  let startAt;
  let startVector;
  const { resume, pause } = useRafFn(() => {
    const now = Date.now();
    const progress = clamp(1 - (endAt - now) / currentDuration, 0, 1);
    outputVector.value = startVector.map((val, i) => {
      var _a;
      return val + ((_a = diffVector[i]) != null ? _a : 0) * currentTransition.value(progress);
    });
    if (progress >= 1) {
      pause();
      onFinished();
    }
  }, { immediate: false });
  const start = () => {
    pause();
    currentDuration = unref(duration);
    diffVector = outputVector.value.map((n, i) => {
      var _a, _b;
      return ((_a = sourceVector.value[i]) != null ? _a : 0) - ((_b = outputVector.value[i]) != null ? _b : 0);
    });
    startVector = outputVector.value.slice(0);
    startAt = Date.now();
    endAt = startAt + currentDuration;
    resume();
    onStarted();
  };
  const timeout = useTimeoutFn(start, delay, { immediate: false });
  watch(sourceVector, () => {
    if (unref(disabled)) {
      outputVector.value = sourceVector.value.slice(0);
    } else {
      if (unref(delay) <= 0)
        start();
      else
        timeout.start();
    }
  }, { deep: true });
  return computed(() => {
    const targetVector = unref(disabled) ? sourceVector : outputVector;
    return isNumber(sourceValue.value) ? targetVector.value[0] : targetVector.value;
  });
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PostCard",
  __ssrInlineRender: true,
  props: {
    post: Object
  },
  setup(__props) {
    const props = __props;
    const formatPublishedDate = (options) => new Intl.DateTimeFormat("en", options).format(new Date(props.post.publishedAt));
    const month = formatPublishedDate({ month: "short" });
    const day = dayNth(formatPublishedDate({ day: "numeric" }));
    const card = ref();
    const cardHovered = useElementHover(card);
    const marqueeEl = ref();
    const marqueePosition = ref(0);
    const marqueeDelay = ref(0);
    const marqueeDuration = ref(0);
    const marqueTransition = useTransition(marqueePosition, {
      duration: marqueeDuration,
      delay: marqueeDelay,
      transition: TransitionPresets.easeInOut
    });
    const startMarquee = () => {
      const $marquee = marqueeEl.value;
      const $child = $marquee.children[0];
      const offset = $child.offsetWidth - marqueeEl.value.offsetWidth;
      if (offset === 0 || marqueeDuration.value === 1e3)
        return;
      const initialDuration = offset * 20;
      const initialDelay = 350;
      marqueeDuration.value = initialDuration;
      marqueeDelay.value = initialDelay;
      marqueePosition.value = offset;
      watch(marqueTransition, (v) => {
        $child.style.transform = `translateX(-${v}px)`;
        if (v === offset) {
          marqueeDelay.value = 2500;
          marqueeDuration.value = 1e3;
          marqueePosition.value = 0;
        } else if (cardHovered.value && v === 0) {
          marqueeDuration.value = initialDuration;
          marqueePosition.value = offset;
          marqueeDelay.value = initialDelay;
        } else {
          marqueeDuration.value = initialDuration;
          marqueeDelay.value = initialDelay;
        }
      });
    };
    watch(cardHovered, (v) => {
      if (v)
        startMarquee();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
        ref_key: "card",
        ref: card,
        to: __props.post.path,
        class: "block max-w-full transition-all group"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center" data-v-6544bb80${_scopeId}><div class="opacity-70 group-hover:opacity-90 transition-all absolute top-3 -left-20 post-time" data-v-6544bb80${_scopeId}><div class="text-lg" data-v-6544bb80${_scopeId}>${ssrInterpolate(unref(month))}</div><div class="text-sm" data-v-6544bb80${_scopeId}>${ssrInterpolate(unref(day))}</div></div><div class="max-w-full" data-v-6544bb80${_scopeId}><h3 class="opacity-90 text-1xl mb-3 group-hover:sm:-mx-3 group-hover:tracking-wide group-hover:text-blue-700 group-hover:font-bold transition-opacity post-title" data-v-6544bb80${_scopeId}><span data-v-6544bb80${_scopeId}>${ssrInterpolate(__props.post.title)}</span></h3><div class="text-sm wrap overflow-hidden whitespace-nowrap mb-3 flex items-center post-description" data-v-6544bb80${_scopeId}>`);
            if (__props.post.readingMins) {
              _push2(`<span class="opacity-70" data-v-6544bb80${_scopeId}>${ssrInterpolate(__props.post.readingMins)} min</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="px-2 opacity-50 hidden sm:inline-block" data-v-6544bb80${_scopeId}>\xB7</span><div class="hidden sm:inline-flex overflow-hidden items-center" data-v-6544bb80${_scopeId}><div class="opacity-60" data-v-6544bb80${_scopeId}>${ssrInterpolate(__props.post.description)}</div></div></div><div class="opacity-60 text-sm sm:hidden" data-v-6544bb80${_scopeId}>${ssrInterpolate(__props.post.description)}</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("div", { class: "opacity-70 group-hover:opacity-90 transition-all absolute top-3 -left-20 post-time" }, [
                  createVNode("div", { class: "text-lg" }, toDisplayString(unref(month)), 1),
                  createVNode("div", { class: "text-sm" }, toDisplayString(unref(day)), 1)
                ]),
                createVNode("div", { class: "max-w-full" }, [
                  createVNode("h3", { class: "opacity-90 text-1xl mb-3 group-hover:sm:-mx-3 group-hover:tracking-wide group-hover:text-blue-700 group-hover:font-bold transition-opacity post-title" }, [
                    createVNode("span", null, toDisplayString(__props.post.title), 1)
                  ]),
                  createVNode("div", { class: "text-sm wrap overflow-hidden whitespace-nowrap mb-3 flex items-center post-description" }, [
                    __props.post.readingMins ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "opacity-70"
                    }, toDisplayString(__props.post.readingMins) + " min", 1)) : createCommentVNode("", true),
                    createVNode("span", { class: "px-2 opacity-50 hidden sm:inline-block" }, "\xB7"),
                    createVNode("div", {
                      ref_key: "marqueeEl",
                      ref: marqueeEl,
                      class: "hidden sm:inline-flex overflow-hidden items-center"
                    }, [
                      createVNode("div", { class: "opacity-60" }, toDisplayString(__props.post.description), 1)
                    ], 512)
                  ]),
                  createVNode("div", { class: "opacity-60 text-sm sm:hidden" }, toDisplayString(__props.post.description), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PostCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6544bb80"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PostList",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: postGroups } = ([__temp, __restore] = withAsyncContext(() => usePostList()), __temp = await __temp, __restore(), __temp);
    const yearKeys = Object.keys(unref(postGroups)).reverse();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SubTitle = __nuxt_component_0;
      const _component_PostCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="space-y-7"><!--[-->`);
      ssrRenderList(unref(yearKeys), (year) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_SubTitle, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(year)}`);
            } else {
              return [
                createTextVNode(toDisplayString(year), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="space-y-10"><!--[-->`);
        ssrRenderList(unref(postGroups)[year], (post, key) => {
          _push(ssrRenderComponent(_component_PostCard, {
            key,
            post
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/PostList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=PostList.cb0f3f6a.mjs.map
