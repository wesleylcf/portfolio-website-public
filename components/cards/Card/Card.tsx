import React from 'react';
import styles from './card.module.css';

interface CardProps {
  showBackground?: boolean;
  minHeight?: string;
  flexBasis?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  showBackground,
  minHeight,
  flexBasis,
}) => {
  let style = { minHeight, flexBasis };
  if (minHeight) {
    style.minHeight = minHeight;
  }
  if (flexBasis) {
    style.flexBasis = flexBasis;
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
