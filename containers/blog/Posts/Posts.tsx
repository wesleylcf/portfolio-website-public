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
              previewLink={`http://localhost:3000/blog/posts/${title.replaceAll(
                ' ',
                '-'
              )}`}
            >
              <h1
                className={`${utilStyles.headingMd} ${
                  darkMode ? utilStyles.ColorT : utilStyles.ColorTLight
                }`}
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
              <p>{tags.replaceAll(',', ' / ')}</p>
            </Card>
          );
        })}
      </Main>
    </VerticalSection>
  );
};

export default Posts;
