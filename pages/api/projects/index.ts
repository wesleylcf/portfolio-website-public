import { Client } from '@notionhq/client';

export interface Project {
  title: string;
  tags: string;
  description: string;
}

const notion = new Client({
  auth: process.env.NOTION_KEY,
});
const databaseId = process.env.NOTION_PROJECTS_DATABASE_ID;
const MAX_ITEMS_PER_VIEW = 3;

export default async function getProjects() {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  const projects: Project[] = [];
  let itemsAdded = 0;
  for (let project of response.results) {
    if (itemsAdded === MAX_ITEMS_PER_VIEW) {
      break;
    }
    projects.push({
      title: project.properties.name['title'][0].plain_text,
      tags: project.properties.tags['rich_text'][0].plain_text,
      description: project.properties.description['rich_text'][0].plain_text,
    });
    itemsAdded += 1;
  }
  return projects;
}
