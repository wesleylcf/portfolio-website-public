import React, { useState, useEffect } from 'react';
import Sidebar from './SideBar/Sidebar';
import NavBar from './NavBar/NavBar';
import styles from './layout.module.css';
import Social from './Social/Social';
import Animate from './Animate/Animate';

interface LayoutProps {
  darkMode: boolean;

  hideComponents: boolean;
  isModal: boolean;
  isMobile: boolean;
  onClickMenu: () => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  darkMode,

  hideComponents,
  isModal,
  isMobile,
  onClickMenu,
}) => {
  return (
    <div
      className={`${styles.Layout} ${isModal ? styles.ModalOpen : ''} ${
        darkMode ? 'dark' : 'light'
      }`}
      suppressHydrationWarning={true}
    >
      <NavBar isMobile={isMobile} hide={hideComponents} darkMode={darkMode} />

      <div className={styles.Container}>{children}</div>
      {typeof isMobile === 'undefined' || isMobile ? null : (
        <>
          <div className={styles.Social}>
            <Animate delay={isMobile ? 0 : 2}>
              <Social width="60px" hide={hideComponents} darkMode={darkMode} />
            </Animate>
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
        />
      ) : null}
    </div>
  );
};

export default Layout;
