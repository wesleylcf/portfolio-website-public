import React from 'react';
import styles from './section.module.css';

interface SectionProps {
  width?: string;
}

const section: React.FC<SectionProps> = ({ children, width }) => {
  return (
    <section className={styles.Section} style={width ? { width: width } : {}}>
      {children}
    </section>
  );
};

export default section;
