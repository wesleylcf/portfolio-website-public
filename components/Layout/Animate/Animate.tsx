import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface AnimateProps {
  delay: number;
  notTriggerOnce?: boolean;
  minWidth?: string;
}

const Animate: React.FC<AnimateProps> = ({
  children,
  delay = 0,
  notTriggerOnce,
  minWidth,
}) => {
  const [ref, inView] = useInView(notTriggerOnce ? {} : { triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3, delay: delay }}
      style={{ minWidth: minWidth }}
    >
      {children}
    </motion.div>
  );
};

export default Animate;
