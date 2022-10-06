import { Feed } from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/feed@4.2.2/node_modules/feed/lib/feed.js';
import * as cheerio from 'file:///Users/bon/Documents/my-workspace/nuxt-blog/node_modules/.pnpm/cheerio@1.0.0-rc.10/node_modules/cheerio/lib/index.js';
import { a as SiteTagLine, b as SiteName, c as SiteDescription, S as SiteUrl, d as SiteLanguage, e as SameAs } from './constants.mjs';
import { s as serverQueryContent } from './nitro/nitro-prerenderer.mjs';

async function generateBlogFeed(event) {
  const feed = new Feed({
    title: `${SiteTagLine} | ${SiteName}`,
    description: SiteDescription,
    id: SiteUrl,
    link: SiteUrl,
    language: SiteLanguage,
    image: `${SiteUrl}/cover.png`,
    favicon: `${SiteUrl}/favicon.ico`,
    copyright: `Copyright (c) 2022-present, ${SiteName}`,
    feedLinks: {
      json: `${SiteUrl}/feed.json`,
      atom: `${SiteUrl}/feed.atom`,
      rss: `${SiteUrl}/feed.xml`
    }
  });
  const posts = await serverQueryContent(event, "posts").find();
  for (const post of posts) {
    const path = post._path.replace("posts", "blog");
    const content = await $fetch(path);
    let $ = cheerio.load(content);
    const prose = $(".prose").html();
    $ = cheerio.load(prose);
    $("*").each(function() {
      this.attribs = {};
    });
    const item = {
      title: post.title,
      id: `${SiteUrl}${path}`,
      link: `${SiteUrl}${path}`,
      description: post.description,
      content: $("body").html(),
      image: post.image,
      author: [
        {
          name: SiteName,
          link: SameAs[0]
        }
      ],
      date: new Date(post.publishedAt)
    };
    feed.addItem(item);
  }
  return feed;
}

export { generateBlogFeed as g };
//# sourceMappingURL=rss.mjs.map
