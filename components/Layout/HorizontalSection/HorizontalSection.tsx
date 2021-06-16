import React from 'react';
import styles from './section.module.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface SectionProps {
  hideBorder?: boolean;
  margin?: string;
  blog?: boolean;
  minHeight?: string;
}

const section: React.FC<SectionProps> = ({
  children,
  hideBorder,
  margin,
  blog,
  minHeight,
}) => {
  let style = { margin, minHeight };
  if (margin) {
    style.margin = margin;
  }
  if (minHeight) {
    style.minHeight = minHeight;
  }
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={`${styles.HorizontalSection} ${
        hideBorder ? styles.HideBorder : ''
      } ${blog ? styles.MediumWidth : ''}`}
      style={style}
    >
      {children}
    </motion.section>
  );
};

export default section;
