import React from 'react';
import Card from '../Card/Card';
import Image from 'next/image';
import styles from './blogPreviewCard.module.css';
import utilStyles from '../../../styles/utils.module.css';

export interface BlogPreviewCardProps {
  title: string;
  date: string;
  previewImage?: string;
  tags: string[];
  description: string;
}

const BlogPreviewCard: React.FC<BlogPreviewCardProps> = ({
  title,
  date,
  previewImage,
  tags,
  description,
}) => {
  return (
    <Card showBackground minHeight="40vh">
      <div className={styles.Cover}>
        {previewImage ? (
          <Image src={`/images/${previewImage}`} layout="fill" />
        ) : null}
      </div>
      <div className={styles.Content}>
        <p>
          <span className={`${utilStyles.ColorP} ${styles.CoverTags}`}>
            {tags.reduce((prev, cur) => {
              prev += cur;
              prev += ' / ';
              return prev;
            }, '')}
          </span>
          <span className={`${styles.CoverDate} ${utilStyles.ColorP}`}>
            {date}
          </span>
        </p>
        <h2 className={utilStyles.ColorT}>{title}</h2>
        <p className={utilStyles.ColorA}>{description}</p>
      </div>
    </Card>
  );
};

export default BlogPreviewCard;
