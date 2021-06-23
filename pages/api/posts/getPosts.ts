import { Client } from '@notionhq/client';

export interface Post {
  title: string;
  createdAt: string;
  tags: string;
  imageUrl: string;
}

const notion = new Client({
  auth: process.env.NOTION_KEY,
});
const databaseId = process.env.NOTION_BLOG_DATABASE_ID;
const MAX_POSTS_PER_VIEW = 3;

export default async function getPosts() {
  const pages = await notion.databases.query({
    database_id: databaseId,
  });
  console.log(pages.results[0].properties.name);
  const posts: Post[] = [];
  let postsAdded = 0;
  for (let page of pages.results) {
    if (postsAdded === MAX_POSTS_PER_VIEW) {
      break;
    }
    posts.push({
      title: page.properties.name['title'][0].plain_text,
      createdAt: page.created_time.substring(0, 10),
      tags: page.properties.tags['rich_text'][0].plain_text,
      imageUrl: page.properties.imageUrl['rich_text'][0].plain_text,
    });
    postsAdded += 1;
  }
  return posts;
}
