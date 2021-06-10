import React from 'react';
import Section from '../../Layout/Section/Section';
import BlogPreviewCard, {
  BlogPreviewCardProps as BlogPost,
} from '../../cards/BlogPreviewCard/BlogPreviewCard';
import HeadingCard from '../../cards/HeadingCard/HeadingCard';
import styles from './blog.module.css';

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
    <div className={styles.Container}>
      <HeadingCard number="04" content="Blog" order={0} />
      <Section>
        {blogPosts.map((post, index) => {
          return (
            <BlogPreviewCard
              title={post.title}
              date={post.date}
              tags={post.tags}
              description={post.description}
              previewImage="profile.jpg"
              key={index}
              flexBasis="32%"
              margin="0 0.5vw 0 0.5vw"
            />
          );
        })}
      </Section>
    </div>
  );
};

export default Blog;
