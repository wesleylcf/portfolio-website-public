import Link from 'next/link';
import styles from './styledLink.module.css';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StyledLinkProps {
  content: string;
  linkTo: string;
  isMobile: boolean;
  animationDelay: number;
}

const StyledLink: React.FC<StyledLinkProps> = ({
  content,
  linkTo,
  isMobile,
  animationDelay,
}) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  if (isMobile) {
    return (
      <div className={styles.ListItemWrapper}>
        <li>
          <Link href={linkTo}>
            <a className={styles.StyledLink}>{content}</a>
          </Link>
        </li>
      </div>
    );
  }
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration: 0.3,
        delay: animationDelay,
      }}
      className={styles.ListItemWrapper}
    >
      <li>
        <Link href={linkTo}>
          <a className={styles.StyledLink}>{content}</a>
        </Link>
      </li>
    </motion.div>
  );
};

export default StyledLink;
