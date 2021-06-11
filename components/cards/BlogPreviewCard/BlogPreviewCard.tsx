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
  darkMode?: boolean;
}

const BlogPreviewCard: React.FC<BlogPreviewCardProps> = ({
  title,
  date,
  previewImage,
  tags,
  description,
  flexBasis,
  margin,
  darkMode,
}) => {
  return (
    <div className={styles.Container}>
      <Link href={`/blog/${title.replace(' ', '')}`}>
        <a className={styles.Post}>
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
            side="center"
            borderRadius="0 0 15px 15px"
            showBackground
            blog
            darkMode={darkMode}
          >
            <div className={styles.Content}>
              <p className={styles.ContentInfo}>
                <span
                  className={`${styles.CoverDate} ${
                    darkMode ? utilStyles.ColorP : utilStyles.ColorPLight
                  }`}
                >
                  {date}
                </span>
                <span
                  className={`${
                    darkMode ? utilStyles.ColorA : utilStyles.ColorALight
                  } ${styles.CoverTags}`}
                >
                  {tags.reduce((prev, cur) => {
                    prev += cur;
                    prev += ' / ';
                    return prev;
                  }, '')}
                </span>
              </p>
              <h2
                className={
                  darkMode ? utilStyles.ColorT : utilStyles.ColorTLight
                }
              >
                {title}
              </h2>
              <p className={styles.Description}>{description}</p>
            </div>
          </Card>
        </a>
      </Link>
    </div>
  );
};

export default BlogPreviewCard;
