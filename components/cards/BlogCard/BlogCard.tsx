import React from 'react';
import Card from '../Card/Card';
import utilStyles from '../../../styles/utils.module.css';

interface BlogCardProps {
  blogs: {
    heading: string;
    content: string[];
    image?: string;
  }[];
}

const BlogCard: React.FC<BlogCardProps> = ({ blogs }) => {
  return (
    <Card>
      <header>
        <h1 className={utilStyles.ColorA}></h1>
      </header>
    </Card>
  );
};

export default BlogCard;
