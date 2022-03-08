import React from 'react';
import Card from '../Card/Card';
import Image from 'next/image';
import styles from './blogPreviewCard.module.css';
import utilStyles from '../../../styles/utils.module.css';
import Link from 'next/link';
import Animate from '../../Layout/Animate/Animate';

export interface BlogPreviewCardProps {
  title: string;
  date: string;
  previewImage?: string;
  tags: string;
  description: string;
  darkMode?: boolean;
  animateDelay?: number;
}

const BlogPreviewCard: React.FC<BlogPreviewCardProps> = ({
  title,
  date,
  previewImage,
  tags,
  description,
  darkMode,
  animateDelay,
}) => {
  return (
    <div className={styles.Container}>
      <Animate delay={animateDelay}>
        <Link href={`/blog/posts/${title.replace(/\s+/g, '-')}`}>
          <a className={styles.Post}>
            <div className={styles.Cover}>
              {previewImage ? (
                <Image
                  src={previewImage}
                  layout="fill"
                  className={styles.Image}
                  alt={tags.split(',')[0]}
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
                  {tags.replace(/,/g, ' / ')}
                </span>
              </p>
              <h2 className={`${styles.ContentTitle}`}>{title}</h2>
              <p className={styles.Description}>{description}</p>
            </Card>
          </a>
        </Link>
      </Animate>
    </div>
  );
};

export default BlogPreviewCard;
