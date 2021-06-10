import React from 'react';
import Card from '../Card/Card';
import utilStyles from '../../../styles/utils.module.css';
import styles from './headingCard.module.css';

interface HeadingCardProps {
  number: string;
  content: string;
  order: number;
  flexBasis?: string;
  width?: string;
}

const HeadingCard: React.FC<HeadingCardProps> = ({
  number,
  content,
  order,
  flexBasis,
  width,
}) => {
  let style = { order: order, flexBasis, width };
  if (flexBasis) {
    style.flexBasis = flexBasis;
  }
  if (width) {
    style.width = width;
  }
  return (
    <div className={styles.Card} style={style}>
      <div className={utilStyles.DividerL}></div>
      <header>
        <h1 className={`${utilStyles.headingLg} ${styles.Header}`}>
          <span className={utilStyles.ColorT}>{number + '.'}</span>
          <span className={styles.Content}> {content}</span>{' '}
        </h1>
      </header>
      <div className={utilStyles.DividerR}></div>
    </div>
  );
};

export default HeadingCard;
