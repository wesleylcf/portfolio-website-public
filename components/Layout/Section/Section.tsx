import React from 'react';
import styles from './section.module.css';

const section: React.FC = ({ children }) => {
  return <section className={styles.Section}>{children}</section>;
};

export default section;
