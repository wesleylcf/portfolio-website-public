import React from 'react';
import styles from './expandCard.module.css';

const ExpandCard = ({ onExpand }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Arrow} onClick={onExpand} />
    </div>
  );
};

export default ExpandCard;
