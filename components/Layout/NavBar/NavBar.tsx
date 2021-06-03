import React, { useState, useEffect } from 'react';
import StyledLink from '../StyledLink/StyledLink';
import Menu from '../Menu/Menu';
import Image from 'next/image';
import utilStyles from '../../../styles/utils.module.css';
import styles from './navBar.module.css';
import Links from '../Links/Links';

interface NavBarProps {
  isMobile: boolean;
  isModal: boolean;
  onClickMenu: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isMobile, isModal, onClickMenu }) => {
  let links = (
    <div className={styles.Links}>
      <Links />
    </div>
  );
  if (typeof isMobile === 'undefined' || isMobile === true) {
    links = null;
  }
  return (
    <nav>
      <ol className={styles.Nav} suppressHydrationWarning={true}>
        <li className={styles.ProfileWrapper}>
          <Image
            priority
            src="/images/V.svg"
            className={utilStyles.borderCircle}
            height={100}
            width={100}
            alt="Home"
          />
        </li>
        {links}
      </ol>
    </nav>
  );
};

export default NavBar;
