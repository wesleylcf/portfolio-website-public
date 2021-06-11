import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import utilStyles from '../../../styles/utils.module.css';
import styles from './navBar.module.css';
import Links from '../Links/Links';
import Link from 'next/link';

interface NavBarProps {
  isMobile: boolean;
  hide: boolean;
  darkMode: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isMobile, hide, darkMode }) => {
  let links = (
    <div className={styles.Links}>
      <Links darkMode={darkMode} />
    </div>
  );
  if (typeof isMobile === 'undefined' || isMobile) {
    links = null;
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
            src="/images/V.svg"
            className={utilStyles.borderCircle}
            height={70}
            width={70}
            alt="Home"
          />
        </a>
      </Link>
      <ol suppressHydrationWarning={true}>{links}</ol>
    </nav>
  );
};

export default NavBar;
