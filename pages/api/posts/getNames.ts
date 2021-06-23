import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_KEY,
});
const databaseId = process.env.NOTION_BLOG_DATABASE_ID;

export default async function getPosts() {
  const pages = await notion.databases.query({
    database_id: databaseId,
  });
  let names: string[] = [];
  for (let page of pages.results) {
    names.push(page.properties.name['title'][0].plain_text);
  }
  return names;
}
