import React, { Fragment } from 'react';
import styles from './card.module.css';

const Card: React.FC = ({ children }) => {
  return <article className={styles.Card}>{children}</article>;
};

export default Card;
