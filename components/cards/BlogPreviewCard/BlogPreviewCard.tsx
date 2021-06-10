import React from 'react';
import Card from '../Card/Card';
import Image from 'next/image';
import styles from './blogPreviewCard.module.css';
import utilStyles from '../../../styles/utils.module.css';
import Link from 'next/link';

export interface BlogPreviewCardProps {
  title: string;
  date: string;
  previewImage?: string;
  tags: string[];
  description: string;
  flexBasis?: string;
  margin?: string;
}

const BlogPreviewCard: React.FC<BlogPreviewCardProps> = ({
  title,
  date,
  previewImage,
  tags,
  description,
  flexBasis,
  margin,
}) => {
  return (
    <Link href={`/blog/${title.replace(' ', '')}`}>
      <a className={styles.Container}>
        <div className={styles.Cover}>
          {previewImage ? (
            <Image
              src={`/images/${previewImage}`}
              layout="fill"
              className={styles.Image}
            />
          ) : null}
        </div>
        <Card
          minHeight="30vh"
          side="center"
          flexBasis={flexBasis}
          margin={margin}
          borderRadius="0 0 15px 15px"
        >
          <div className={styles.Content}>
            <p className={styles.ContentInfo}>
              <span className={`${styles.CoverDate} ${utilStyles.ColorP}`}>
                {date}
              </span>
              <span className={`${utilStyles.ColorA} ${styles.CoverTags}`}>
                {tags.reduce((prev, cur) => {
                  prev += cur;
                  prev += ' / ';
                  return prev;
                }, '')}
              </span>
            </p>
            <h2 className={utilStyles.ColorT}>{title}</h2>
            <p className={styles.Description}>{description}</p>
          </div>
        </Card>
      </a>
    </Link>
  );
};

export default BlogPreviewCard;
