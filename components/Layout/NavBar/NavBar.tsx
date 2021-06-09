import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import utilStyles from '../../../styles/utils.module.css';
import styles from './navBar.module.css';
import Links from '../Links/Links';
import Link from 'next/link';

interface NavBarProps {
  isMobile: boolean;
  hide: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isMobile, hide }) => {
  let links = (
    <div className={styles.Links}>
      <Links />
    </div>
  );
  if (typeof isMobile === 'undefined' || isMobile) {
    links = null;
  }

  return (
    <nav
      className={`${styles.Nav} ${hide && !isMobile ? styles.HideNav : ''}`}
      suppressHydrationWarning={true}
    >
      <Link href="/" passHref>
        <a className={styles.ProfileWrapper}>
          <Image
            priority
            src="/images/V.svg"
            className={utilStyles.borderCircle}
            height={100}
            width={100}
            alt="Home"
          />
        </a>
      </Link>
      <ol suppressHydrationWarning={true}>{links}</ol>
    </nav>
  );
};

export default NavBar;
