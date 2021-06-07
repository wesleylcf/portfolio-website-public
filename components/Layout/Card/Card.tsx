import React, { Fragment } from 'react';
import styles from './card.module.css';

const Card: React.FC = ({ children }) => {
  return <div className={styles.Card}>{children}</div>;
};

export default Card;
