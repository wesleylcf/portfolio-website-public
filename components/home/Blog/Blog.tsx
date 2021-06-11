import React from 'react';
import HorizontalSection from '../../Layout/HorizontalSection/HorizontalSection';
import BlogPreviewCard, {
  BlogPreviewCardProps as BlogPost,
} from '../../cards/BlogPreviewCard/BlogPreviewCard';
import HeadingCard from '../../cards/HeadingCard/HeadingCard';

import ImportantButton from '../../buttons/ImportantButton/ImportantButton';
import VerticalSection from '../../Layout/VerticalSection/VerticalSection';
import Main from '../../Layout/Main/Main';

const Blog = () => {
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
  return (
    <VerticalSection>
      <HeadingCard number="04" content="Blog" order={0} />
      <HorizontalSection hideBorder margin="0" blog>
        {blogPosts.map((post, index) => {
          return (
            <BlogPreviewCard
              title={post.title}
              date={post.date}
              tags={post.tags}
              description={post.description}
              previewImage="profile.jpg"
              key={index}
              margin="0 0.5vw 2vh 0.5vw"
            />
          );
        })}
      </HorizontalSection>
      <ImportantButton href="/blog">See all posts</ImportantButton>
    </VerticalSection>
  );
};

export default Blog;
