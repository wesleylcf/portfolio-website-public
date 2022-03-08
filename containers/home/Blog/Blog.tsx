import React from 'react';
import dynamic from 'next/dynamic';
import VerticalSection from '../../../components/Layout/VerticalSection/VerticalSection';
import { Post } from '../../../pages/api/posts/getPosts';
import LoaderCard from '../../../components/cards/LoaderCard/LoaderCard';

const BlogContent = dynamic(() => import('./BlogContent'), {
  ssr: false,
  loading: () => <LoaderCard />,
});

interface BlogProps {
  posts: Post[];
  isDarkMode: boolean;
  isMobile: boolean;
  scrollY: number;
  offsetToRender: number;
}

const Blog: React.FC<BlogProps> = ({
  isDarkMode,
  isMobile,
  posts,
  scrollY,
  offsetToRender,
}) => {
  return (
    <VerticalSection dividerId="contact">
      {scrollY > offsetToRender ? (
        <BlogContent
          isDarkMode={isDarkMode}
          isMobile={isMobile}
          posts={posts}
        />
      ) : null}
    </VerticalSection>
  );
};

export default Blog;
