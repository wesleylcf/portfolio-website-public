import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from './animate.module.css';

interface AnimateProps {
  delay: number;
  notTriggerOnce?: boolean;
  isMobile?: boolean;
}

const Animate: React.FC<AnimateProps> = ({
  children,
  delay = 0,
  notTriggerOnce,
  isMobile,
}) => {
  const [ref, inView] = useInView(notTriggerOnce ? {} : { triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3, delay: delay }}
      className={
        isMobile ? (isMobile === true ? styles.Mobile : styles.Desktop) : ''
      }
    >
      {children}
    </motion.div>
  );
};

export default Animate;
