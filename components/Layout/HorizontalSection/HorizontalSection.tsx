import React from 'react';
import styles from './section.module.css';

interface SectionProps {
  width?: string;
  hideBorder?: boolean;
  margin?: string;
}

const section: React.FC<SectionProps> = ({
  children,
  width,
  hideBorder,
  margin,
}) => {
  let style = { width, margin };
  if (width) {
    style.width = width;
  }
  if (margin) {
    style.margin = margin;
  }
  return (
    <section
      className={`${styles.Section} ${hideBorder ? styles.HideBorder : ''}`}
      style={style}
    >
      {children}
    </section>
  );
};

export default section;
