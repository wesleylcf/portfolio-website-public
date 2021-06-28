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
  links: {
    navLinks: { linkTo: string; content: string; button?: boolean }[];
    linkInitialAnimateDelay?: number;
    linkAnimateDelayIncrement?: number;
  };
  atPage: string;
}

const NavBar: React.FC<NavBarProps> = ({
  isMobile,
  hide,
  darkMode,
  links,
  atPage,
}) => {
  let linksPlaceHolder = (
    <ol className={styles.Links}>
      <Links
        darkMode={darkMode}
        isMobile={isMobile}
        {...links}
        atPage={atPage}
      />
    </ol>
  );
  if (typeof isMobile === 'undefined' || isMobile) {
    linksPlaceHolder = null;
  }
  return (
    <nav
      className={`${styles.Nav} ${!darkMode ? 'light' : 'dark'}  ${
        hide && !isMobile ? styles.HideNav : ''
      }`}
      suppressHydrationWarning={true}
    >
      <Link href="/" passHref>
        <a className={styles.ProfileWrapper}>
          <Image
            priority
            src={`/images/${darkMode ? 'Vdark.svg' : 'Vlight.svg'}`}
            className={utilStyles.borderCircle}
            height={70}
            width={70}
            alt="Home"
          />
        </a>
      </Link>
      {linksPlaceHolder}
    </nav>
  );
};

export default NavBar;
