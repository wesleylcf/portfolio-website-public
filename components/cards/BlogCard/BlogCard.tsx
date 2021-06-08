import React from 'react';
import Card from '../Card/Card';
import utilStyles from '../../../styles/utils.module.css';

interface BlogProps {
  title: string;
  date: string;
  sections: {
    heading: string;
    content: string;
  }[];
}

const BlogCard: React.FC<BlogProps> = () => {
  return (
    <Card>
      <header>
        <h1 className={utilStyles.ColorA}></h1>
      </header>
    </Card>
  );
};

export default BlogCard;
