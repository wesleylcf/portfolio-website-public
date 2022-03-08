import React, { useState } from "react";
import getPostContent, { PageBlock } from "../../api/posts/getPostContent";
import getNames from "../../api/posts/getNames";
import Main from "../../../components/Layout/Main/Main";
import VerticalSection from "../../../components/Layout/VerticalSection/VerticalSection";
import HeadingCard from "../../../components/cards/HeadingCard/HeadingCard";
import NotionBlock from "../../../components/notion/NotionBlock/NotionBlock";
import utilStyles from "../../../styles/utils.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import "prismjs/themes/prism-tomorrow.css";

interface PostProps {
  pageContent: PageBlock[][];
  title: string;
  isDarkMode: boolean;
  isMobile: boolean;
  error?: string;
}

const Post: React.FC<PostProps> = ({
  pageContent,
  title,
  isDarkMode,
  isMobile,
  error,
}) => {
  const router = useRouter();
  if (router.isFallback || typeof pageContent === "undefined") {
    return <p>Loading...</p>;
  }
  if (error) return <h1>{error}</h1>;
  if (
    typeof pageContent !== "undefined" &&
    pageContent.length > 0 &&
    typeof title !== "undefined"
  ) {
    let headingColorNumber = 0;
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" property="description" content={title} />
          <meta
            name="keywords"
            content={`${title.replace(
              /\s+/g,
              ","
            )} ${title}, Wesley Lim, software engineer, Singapore, NTU, computer science`}
          />
        </Head>
        <VerticalSection>
          <HeadingCard
            number=""
            content={title}
            order={0}
            darkMode={isDarkMode}
          />
          <Main>
            {pageContent.map((pageBlocks, index) => {
              if (
                pageBlocks[0].type === "heading_1" ||
                pageBlocks[0].type === "heading_2"
              ) {
                headingColorNumber =
                  headingColorNumber === 2 ? 0 : headingColorNumber + 1;
              }
              const child = (
                <NotionBlock
                  key={index}
                  pageBlocks={pageBlocks}
                  isDarkMode={isDarkMode}
                  headingColor={headingColorNumber}
                  isMobile={isMobile}
                />
              );
              if (pageBlocks[0].type === "bulleted_list_item") {
                return (
                  <ul className={utilStyles.List} key={index}>
                    {child}
                  </ul>
                );
              }
              if (pageBlocks[0].type === "numbered_list_item") {
                return (
                  <ol className={utilStyles.List} key={index}>
                    {child}
                  </ol>
                );
              }
              return child;
            })}
          </Main>
        </VerticalSection>
      </>
    );
  }
  return null;
};

export default Post;

export async function getStaticProps({ params }) {
  const name = params.name.replace(/-/g, " ");
  let pageContent = null;
  try {
    pageContent = await getPostContent(
      process.env.NOTION_BLOG_DATABASE_ID,
      name
    );
    if (pageContent === null)
      return {
        props: {
          error:
            "Could not fetch page at the moment, please try again later. If the problems persists kindly alert me :)",
        },
      };
  } catch (e) {
    console.log("ERROR LOADING BLOG:", e.message);
  }
  return {
    props: {
      pageContent: pageContent,
      title: name,
    },
  };
}

export async function getStaticPaths() {
  let names = null;
  let paths = [];
  try {
    names = await getNames(process.env.NOTION_BLOG_DATABASE_ID);
    if (names != null)
      paths = names.map((name) => ({
        params: { name: name },
      }));
  } catch (e) {
    console.log("ERR FETCHING BLOG NAMES");
  }

  return { paths, fallback: true };
}
