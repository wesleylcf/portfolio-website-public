import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import utilStyles from '../../../styles/utils.module.css';
import styles from './navBar.module.css';
import Links from '../Links/Links';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface NavBarProps {
  isMobile: boolean;
  hide: boolean;
  darkMode: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isMobile, hide, darkMode }) => {
  let links = (
    <div className={styles.Links}>
      <Links darkMode={darkMode} isMobile={isMobile} />
    </div>
  );
  if (typeof isMobile === 'undefined' || isMobile) {
    links = null;
  }
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <motion.nav
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: isMobile ? 0 : 0.3 }}
      className={`${styles.Nav} ${!darkMode ? 'light' : 'dark'}  ${
        hide && !isMobile ? styles.HideNav : ''
      }`}
      suppressHydrationWarning={true}
    >
      <Link href="/" passHref>
        <a className={styles.ProfileWrapper}>
          <Image
            priority
            src="/images/V.svg"
            className={utilStyles.borderCircle}
            height={70}
            width={70}
            alt="Home"
          />
        </a>
      </Link>
      <ol suppressHydrationWarning={true}>{links}</ol>
    </motion.nav>
  );
};

export default NavBar;
