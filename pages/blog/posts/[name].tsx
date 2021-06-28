import React, { useState } from 'react';
import getPostContent, { PageBlock } from '../../api/posts/getPostContent';
import getNames from '../../api/posts/getNames';
import Main from '../../../components/Layout/Main/Main';
import VerticalSection from '../../../components/Layout/VerticalSection/VerticalSection';
import HeadingCard from '../../../components/cards/HeadingCard/HeadingCard';
import NotionBlock from '../../../components/notion/NotionBlock/NotionBlock';

interface PostProps {
  pageContent: PageBlock[][];
  title: string;
  isDarkMode: boolean;
}

const Post: React.FC<PostProps> = ({ pageContent, title, isDarkMode }) => {
  if (typeof pageContent !== 'undefined' && typeof title !== 'undefined') {
    let headingColorNumber = 0;
    return (
      <VerticalSection>
        <HeadingCard
          number={title}
          content=""
          order={0}
          darkMode={isDarkMode}
        />
        <Main>
          {pageContent.map((pageBlocks, index) => {
            if (
              pageBlocks[0].type === 'heading_1' ||
              pageBlocks[0].type === 'heading_2'
            ) {
              headingColorNumber =
                headingColorNumber === 2 ? 0 : headingColorNumber + 1;
            }
            return (
              <NotionBlock
                key={index}
                pageBlocks={pageBlocks}
                isDarkMode={isDarkMode}
                headingColor={headingColorNumber}
              />
            );
          })}
        </Main>
        <p style={{ marginTop: '7vh' }}>
          If you have any feedback, spot a bug/error, or just want to talk, you
          can reach me <a href="mailto:wesleylim.work@gmail.com">here</a>
        </p>
      </VerticalSection>
    );
  }
  return null;
};

export default Post;

export async function getStaticProps({ params }) {
  const name = params.name.replaceAll('-', ' ');
  const pageContent = await getPostContent(name);
  return {
    props: {
      pageContent: pageContent,
      title: name,
    },
  };
}

export async function getStaticPaths() {
  const names = await getNames();
  const paths = names.map((name) => ({
    params: { name: name },
  }));
  return { paths, fallback: true };
}
