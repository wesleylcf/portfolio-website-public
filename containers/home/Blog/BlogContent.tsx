import React from 'react';
import HorizontalSection from '../../../components/Layout/HorizontalSection/HorizontalSection';
import BlogPreviewCard, {
  BlogPreviewCardProps as BlogPost,
} from '../../../components/cards/BlogPreviewCard/BlogPreviewCard';
import HeadingCard from '../../../components/cards/HeadingCard/HeadingCard';
import ImportantButton from '../../../components/buttons/ImportantButton/ImportantButton';
import Animate from '../../../components/Layout/Animate/Animate';

const Blog = ({ isDarkMode, isMobile, posts }) => {
  let animateDelay = 0;
  return (
    <>
      <HeadingCard number="04" content="Blog" order={0} darkMode={isDarkMode} />
      <HorizontalSection hideBorder margin="0" blog>
        {posts.map((post, index) => {
          animateDelay += 0.25;
          if (isMobile && index > 1) {
            return null;
          }
          return (
            <BlogPreviewCard
              title={post.title}
              date={post.createdAt}
              tags={post.tags}
              description=""
              previewImage={
                post.tags.includes('Personal')
                  ? `/images/${isDarkMode ? 'Vdark.svg' : 'Vlight.svg'}`
                  : post.imageUrl
              }
              key={index}
              darkMode={isDarkMode}
              animateDelay={animateDelay}
            />
          );
        })}
      </HorizontalSection>
      <Animate delay={isMobile ? 0.3 : 0.75}>
        <ImportantButton darkMode={isDarkMode} href="/blog/posts">
          See all posts
        </ImportantButton>
      </Animate>
    </>
  );
};

export default Blog;
