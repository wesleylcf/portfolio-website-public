import React from 'react';
import Section from '../../Layout/Section/Section';
import Card from '../../cards/Card/Card';
import utilStyles from '../../../styles/utils.module.css';
import BlogPreviewCard, {
  BlogPreviewCardProps as BlogPost,
} from '../../cards/BlogPreviewCard/BlogPreviewCard';

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      title: 'blog post 1',
      date: '09/06/2000',
      tags: ['React', 'Typescript'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: 'blog post 2',
      date: '09/06/2000',
      tags: ['React', 'Typescript'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: 'blog post 3',
      date: '09/06/2000',
      tags: ['React', 'Typescript'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
  ];
  return (
    <>
      <header>
        <h1 className={utilStyles.headingLg}>
          <span className={utilStyles.ColorT}>4.</span> Blog
        </h1>
      </header>
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
            />
          );
        })}
      </Section>
    </>
  );
};

export default Blog;
