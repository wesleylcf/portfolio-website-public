import { Client } from "@notionhq/client";

export interface Post {
  title: string;
  createdAt: string;
  tags: string;
  imageUrl: string;
  link: string;
}

const notion = new Client({
  auth: process.env.NOTION_KEY,
});
const databaseId = process.env.NOTION_BLOG_DATABASE_ID;
const NOTION_DATE_LENGTH = 10;

export default async function getPosts(MAX_POSTS_PER_VIEW: number = 10) {
  const pages = await notion.databases.query({
    database_id: databaseId,
    sorts: [{ timestamp: "last_edited_time", direction: "descending" }],
  });
  const posts: Post[] = [];
  let postsAdded = 0;
  for (let page of pages.results) {
    if (postsAdded === MAX_POSTS_PER_VIEW) {
      break;
    }
    posts.push({
      title: page.properties.name["title"][0].plain_text,
      createdAt: undefined,
      tags: page.properties.tags["rich_text"][0].plain_text,
      imageUrl: page.properties.imageUrl["rich_text"][0].plain_text,
      link: page.properties.name["title"][0].mention.page.id,
    });
    postsAdded += 1;
  }
  for (let post of posts) {
    const block = await notion.blocks.children.list({
      block_id: post.link,
      page_size: 1,
    });
    post.createdAt = block.results[0].created_time.substring(
      0,
      NOTION_DATE_LENGTH
    );
  }
  return posts;
}
