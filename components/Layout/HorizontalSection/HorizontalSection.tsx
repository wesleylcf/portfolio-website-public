import React from 'react';
import styles from './section.module.css';

interface SectionProps {
  hideBorder?: boolean;
  margin?: string;
  blog?: boolean;
}

const section: React.FC<SectionProps> = ({
  children,
  hideBorder,
  margin,
  blog,
}) => {
  let style = { margin };

  if (margin) {
    style.margin = margin;
  }
  return (
    <section
      className={`${styles.HorizontalSection} ${
        hideBorder ? styles.HideBorder : ''
      } ${blog ? styles.MediumWidth : ''}`}
      style={style}
    >
      {children}
    </section>
  );
};

export default section;
