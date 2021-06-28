import React from 'react';
import styles from './card.module.css';
import Link from 'next/link';

interface CardProps {
  showBackground?: boolean;
  minHeight?: string;
  flexBasis?: string;
  side: 'center' | 'flex-start' | 'flex-end';
  margin?: string;
  borderRadius?: string;
  padding?: string;
  darkMode?: boolean;
  blog?: boolean;
  isPreview?: boolean;
  previewLink?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  showBackground,
  minHeight,
  flexBasis,
  side,
  margin,
  borderRadius,
  padding,
  blog,
  darkMode,
  isPreview,
  previewLink,
}) => {
  let style = {
    minHeight,
    flexBasis,
    justifyContent: side,
    margin,
    borderRadius,
    padding,
  };
  if (minHeight) {
    style.minHeight = minHeight;
  }
  if (flexBasis) {
    style.flexBasis = flexBasis;
  }
  if (margin) {
    style.margin = margin;
  }
  if (borderRadius) {
    style.borderRadius = borderRadius;
  }
  if (padding) {
    style.padding = padding;
  }
  if (isPreview) {
    return (
      <article
        className={`${styles.Preview} ${darkMode ? styles.Dark : styles.Light}`}
      >
        <Link href={previewLink}>
          <a
            className={`${styles.Card} ${
              showBackground
                ? darkMode
                  ? styles.ShowDarkBackground
                  : styles.ShowLightBackground
                : ''
            }`}
            style={style}
          >
            {children}
          </a>
        </Link>
      </article>
    );
  }
  return (
    <article
      className={`${styles.Card} ${
        showBackground
          ? darkMode
            ? styles.ShowDarkBackground
            : styles.ShowLightBackground
          : ''
      } ${blog ? styles.BlogPost : ''} ${isPreview ? styles.Preview : ''}`}
      style={style}
    >
      {children}
    </article>
  );
};

export default Card;
