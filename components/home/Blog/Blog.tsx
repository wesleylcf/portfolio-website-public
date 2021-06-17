import React from 'react';
import HorizontalSection from '../../Layout/HorizontalSection/HorizontalSection';
import BlogPreviewCard, {
  BlogPreviewCardProps as BlogPost,
} from '../../cards/BlogPreviewCard/BlogPreviewCard';
import HeadingCard from '../../cards/HeadingCard/HeadingCard';

import ImportantButton from '../../buttons/ImportantButton/ImportantButton';
import VerticalSection from '../../Layout/VerticalSection/VerticalSection';
import Animate from '../../Layout/Animate/Animate';

const Blog = ({ darkMode, isMobile }) => {
  const blogPosts: BlogPost[] = [
    {
      title: 'blog post 1',
      date: '09/06/2000',
      tags: ['React', 'Typescript'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s... ",
    },
    {
      title: 'blog post 2',
      date: '09/06/2000',
      tags: ['React', 'Typescript'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500... ",
    },
    {
      title: 'blog post 3',
      date: '09/06/2000',
      tags: ['React', 'Typescript'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    },
  ];
  let animateDelay = 0;
  return (
    <VerticalSection dividerId="contact">
      <HeadingCard number="04" content="Blog" order={0} darkMode={darkMode} />
      <HorizontalSection hideBorder margin="0" blog>
        {blogPosts.map((post, index) => {
          animateDelay += 0.25;
          if (isMobile && index > 1) {
            return null;
          }
          return (
            <BlogPreviewCard
              title={post.title}
              date={post.date}
              tags={post.tags}
              description={post.description}
              previewImage="profile.jpg"
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
