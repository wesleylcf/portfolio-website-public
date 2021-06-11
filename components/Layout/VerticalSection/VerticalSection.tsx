import React from 'react';
import styles from './section.module.css';
interface SectionProps {
  width?: string;
  hideBorder?: boolean;
}

const VerticalSection: React.FC<SectionProps> = ({
  children,
  width,
  hideBorder,
}) => {
  return (
    <section
      className={`${styles.VerticalSection} ${
        hideBorder ? styles.HideBorder : ''
      }`}
      style={width ? { width: width } : {}}
    >
      {children}
    </section>
  );
};

export default VerticalSection;
