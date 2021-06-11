import React from 'react';
import styles from './card.module.css';

interface CardProps {
  showBackground?: boolean;
  minHeight?: string;
  flexBasis?: string;
  side: 'center' | 'flex-start' | 'flex-end';
  margin?: string;
  borderRadius?: string;
  padding?: string;
  blog?: boolean;
  darkMode?: boolean;
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
  return (
    <article
      className={`${styles.Card} ${
        showBackground
          ? darkMode
            ? styles.ShowDarkBackground
            : styles.ShowLightBackground
          : ''
      } ${blog ? styles.MediumWidth : ''} `}
      style={style}
    >
      {children}
    </article>
  );
};

export default Card;
