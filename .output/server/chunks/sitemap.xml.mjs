import { defineEventHandler } from 'h3';
import { SitemapStream, streamToPromise } from 'sitemap';
import { s as serverQueryContent } from './nitro/node-server.mjs';
import { S as SiteUrl } from './constants.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'fs';
import 'pathe';
import 'url';
import 'node:url';
import 'ipx';
import 'unist-util-visit';
import 'defu';
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

async function contentPaths(event) {
  const content = await Promise.all([
    serverQueryContent(event, "pages").find(),
    serverQueryContent(event, "posts").find()
  ]);
  return content.flat().map((c) => c.path);
}

const sitemap_xml = defineEventHandler(async (event) => {
  const routes = await contentPaths(event);
  const sitemap = new SitemapStream({
    hostname: SiteUrl
  });
  for (const url of routes) {
    sitemap.write({
      url
    });
  }
  sitemap.end();
  return streamToPromise(sitemap);
});

export { sitemap_xml as default };
//# sourceMappingURL=sitemap.xml.mjs.map
