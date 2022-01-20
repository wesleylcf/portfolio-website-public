import React from 'react';
import styles from './hideCard.module.css';

const ExpandCard = ({ onHide }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Arrow} onClick={onHide} />
    </div>
  );
};

export default ExpandCard;
