import React from 'react';
import Main from '../../../components/Layout/Main/Main';
import VerticalSection from '../../../components/Layout/VerticalSection/VerticalSection';
import Card from '../../../components/cards/Card/Card';
import utilStyles from '../../../styles/utils.module.css';

const Posts = ({ posts, darkMode }) => {
  return (
    <VerticalSection>
      <Main>
        {posts.map(({ title, createdAt, tags }, index) => {
          return (
            <Card
              key={index}
              borderRadius="15px"
              side="center"
              darkMode={darkMode}
              showBackground
              margin="2vh 0"
              minHeight="30vh"
              isPreview
              previewPostTitle={title}
            >
              <h1
                className={utilStyles.headingMd}
                style={{ textAlign: 'center', textDecoration: 'underline' }}
              >
                {title}
              </h1>
              <p
                className={
                  darkMode ? utilStyles.ColorP : utilStyles.ColorPLight
                }
              >
                {createdAt}
              </p>
              <p
                className={
                  darkMode ? utilStyles.ColorT : utilStyles.ColorTLight
                }
              >
                {tags.replace(/,/g, ' / ')}
              </p>
            </Card>
          );
        })}
      </Main>
    </VerticalSection>
  );
};

export default Posts;
