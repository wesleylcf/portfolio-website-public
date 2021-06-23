import React from 'react';
import HorizontalSection from '../../../components/Layout/HorizontalSection/HorizontalSection';
import BlogPreviewCard, {
  BlogPreviewCardProps as BlogPost,
} from '../../../components/cards/BlogPreviewCard/BlogPreviewCard';
import HeadingCard from '../../../components/cards/HeadingCard/HeadingCard';
import ImportantButton from '../../../components/buttons/ImportantButton/ImportantButton';
import VerticalSection from '../../../components/Layout/VerticalSection/VerticalSection';
import Animate from '../../../components/Layout/Animate/Animate';
import { Post } from '../../../pages/api/posts/getPosts';

interface BlogProps {
  posts: Post[];
  darkMode: boolean;
  isMobile: boolean;
}

const Blog: React.FC<BlogProps> = ({ darkMode, isMobile, posts }) => {
  let animateDelay = 0;
  return (
    <VerticalSection dividerId="contact">
      <HeadingCard number="04" content="Blog" order={0} darkMode={darkMode} />
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
              previewImage={post.imageUrl}
              key={index}
              darkMode={darkMode}
              animateDelay={animateDelay}
            />
          );
        })}
      </HorizontalSection>
      <Animate delay={0.75}>
        <ImportantButton darkMode={darkMode} href="/blog/posts">
          See all posts
        </ImportantButton>
      </Animate>
    </VerticalSection>
  );
};

export default Blog;
