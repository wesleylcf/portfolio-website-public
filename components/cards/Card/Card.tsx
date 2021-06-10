import React from 'react';
import styles from './card.module.css';

interface CardProps {
  showBackground?: boolean;
  minHeight?: string;
  flexBasis?: string;
  side: 'center' | 'flex-start' | 'flex-end';
  margin?: string;
  borderRadius?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  showBackground,
  minHeight,
  flexBasis,
  side,
  margin,
  borderRadius,
}) => {
  let style = {
    minHeight,
    flexBasis,
    justifyContent: side,
    margin,
    borderRadius,
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
  return (
    <article
      className={`${styles.Card} ${
        showBackground ? styles.ShowBackground : ''
      }`}
      style={style}
    >
      {children}
    </article>
  );
};

export default Card;
