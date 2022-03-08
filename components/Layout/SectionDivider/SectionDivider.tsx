import React from 'react';
import styles from './sectionDiv.module.css';

const SectionDivider = ({ id }) => {
  return <div id={id} className={styles.Divider}></div>;
};

export default SectionDivider;
