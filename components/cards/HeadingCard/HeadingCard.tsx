import React from 'react';
import utilStyles from '../../../styles/utils.module.css';
import styles from './headingCard.module.css';

interface HeadingCardProps {
  number: string;
  content: string;
  order: number;
  flexBasis?: string;
  width?: string;
  darkMode: boolean;
  id: string;
}

const HeadingCard: React.FC<HeadingCardProps> = ({
  number,
  content,
  order,
  flexBasis,
  width,
  darkMode,
  id,
}) => {
  let style = { order: order, flexBasis, width };
  if (flexBasis) {
    style.flexBasis = flexBasis;
  }
  if (width) {
    style.width = width;
  }

  return (
    <div className={styles.Card} style={style} id={id}>
      <div
        className={`${utilStyles.DividerL} ${
          darkMode ? utilStyles.ColorA : utilStyles.ColorALight
        }`}
      ></div>
      <header>
        <h1 className={`${utilStyles.headingLg} ${styles.Header}`}>
          <span
            className={`${
              darkMode ? utilStyles.ColorT : utilStyles.ColorTLight
            }`}
          >
            {number}
          </span>
          <span className={styles.Content}> {content}</span>{' '}
        </h1>
      </header>
      <div
        className={`${utilStyles.DividerR} ${
          darkMode ? utilStyles.ColorP : utilStyles.ColorPLight
        }`}
      ></div>
    </div>
  );
};

export default HeadingCard;
