import React, { useState, useEffect } from 'react';
import Sidebar from './SideBar/Sidebar';
import NavBar from './NavBar/NavBar';
import styles from './layout.module.css';
import Social from './Social/Social';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface LayoutProps {
  darkMode: boolean;
  onChangeColor: () => void;
  hideComponents: boolean;
  isModal: boolean;
  isMobile: boolean;
  onClickMenu: () => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  darkMode,
  onChangeColor,
  hideComponents,
  isModal,
  isMobile,
  onClickMenu,
}) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div
      className={`${darkMode ? 'dark' : 'light'} ${
        isModal ? styles.ModalOpen : ''
      }`}
      suppressHydrationWarning={true}
    >
      <NavBar isMobile={isMobile} hide={hideComponents} darkMode={darkMode} />

      <div className={styles.Container}>{children}</div>
      {typeof isMobile === 'undefined' || isMobile ? null : (
        <>
          <div className={styles.Social}>
            <Social width="60px" hide={hideComponents} darkMode={darkMode} />
          </div>
        </>
      )}
      {isMobile ? (
        <Sidebar
          isModal={isModal}
          onClickMenu={onClickMenu}
          hide={hideComponents}
          isMobile={isMobile}
          darkMode={darkMode}
          onChangeColor={onChangeColor}
        />
      ) : null}
    </div>
  );
};

export default Layout;
