import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import utilStyles from '../../../styles/utils.module.css';
import styles from './navBar.module.css';
import Links from '../Links/Links';
import Menu from '../../buttons/Menu/Menu';
import Link from 'next/link';

interface NavBarProps {
  isMobile: boolean;
  isModal: boolean;
  onClickMenu: () => void;
  hide: boolean;
}

const NavBar: React.FC<NavBarProps> = ({
  isMobile,
  isModal,
  onClickMenu,
  hide,
}) => {
  let links = (
    <div className={styles.Links}>
      <Links />
    </div>
  );
  if (typeof isMobile === 'undefined') {
    links = null;
  } else {
    if (isMobile) {
      links = <Menu isModal={isModal} onClickMenu={onClickMenu} />;
    }
  }

  return (
    <nav
      className={`${styles.Nav} ${hide ? styles.HideNav : ''}`}
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
