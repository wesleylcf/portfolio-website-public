import React from 'react';
import styles from './section.module.css';
import SectionDivider from '../SectionDivider/SectionDivider';

interface SectionProps {
  width?: string;
  hideBorder?: boolean;
  dividerId?: string;
}

const VerticalSection: React.FC<SectionProps> = ({
  children,
  width,
  hideBorder,
  dividerId,
}) => {
  return (
    <section
      className={`${styles.VerticalSection} ${
        hideBorder ? styles.HideBorder : ''
      }`}
      style={width ? { width: width } : {}}
    >
      {children}
      {dividerId ? <SectionDivider id={dividerId} /> : null}
    </section>
  );
};

export default VerticalSection;
