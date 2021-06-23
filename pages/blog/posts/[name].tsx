import React from 'react';
import getPostContent, { PageBlock } from '../../api/posts/getPostContent';
import getNames from '../../api/posts/getNames';
import Main from '../../../components/Layout/Main/Main';
import VerticalSection from '../../../components/Layout/VerticalSection/VerticalSection';
import HeadingCard from '../../../components/cards/HeadingCard/HeadingCard';
import Card from '../../../components/cards/Card/Card';
import utilStyles from '../../../styles/utils.module.css';

interface PostProps {
  pageContent: PageBlock[];
  title: string;
  isDarkMode: boolean;
}

const headingColorMap = {
  darkMode: [utilStyles.ColorT, utilStyles.ColorP, utilStyles.ColorA],
  lightMode: [
    utilStyles.ColorTLight,
    utilStyles.ColorPLight,
    utilStyles.ColorALight,
  ],
};

const Post: React.FC<PostProps> = ({ pageContent, title, isDarkMode }) => {
  if (typeof pageContent !== 'undefined' && typeof title !== 'undefined') {
    let switchHeadingColor = 0;
    return (
      <VerticalSection>
        <HeadingCard
          number={title}
          content=""
          order={0}
          darkMode={isDarkMode}
        />
        <Main>
          {pageContent.map(({ type, content }, index) => {
            if (type === 'heading_2') {
              switchHeadingColor =
                switchHeadingColor === 2 ? 0 : switchHeadingColor + 1;
              return (
                <h1
                  key={index}
                  className={
                    isDarkMode
                      ? headingColorMap.darkMode[switchHeadingColor]
                      : headingColorMap.lightMode[switchHeadingColor]
                  }
                  style={{ alignSelf: 'flex-start', marginTop: '7vh' }}
                >
                  {content}
                </h1>
              );
            }
            if (type === 'paragraph') {
              return (
                <p key={index} style={{ maxWidth: '95%', alignSelf: 'center' }}>
                  {content}
                </p>
              );
            }
          })}
        </Main>
        <p>
          If you have any feedback or spot a bug you can reach me{' '}
          <a href="mailto:wesleylim.work@gmail.com">here</a>
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
