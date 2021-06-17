import React, { useState, useEffect } from 'react';
import Sidebar from './SideBar/Sidebar';
import NavBar from './NavBar/NavBar';
import styles from './layout.module.css';
import Social from './Social/Social';
import Animate from './Animate/Animate';
import Footer from './Footer/Footer';

interface LayoutProps {
  darkMode: boolean;
  hideComponents: boolean;
  isModal: boolean;
  isMobile: boolean;
  onClickMenu: () => void;
  links: {
    navLinks: { linkTo: string; content: string; button?: boolean }[];
    linkInitialAnimateDelay?: number;
    linkAnimateDelayIncrement?: number;
  };
}

const Layout: React.FC<LayoutProps> = ({
  children,
  darkMode,
  hideComponents,
  isModal,
  isMobile,
  onClickMenu,
  links,
}) => {
  return (
    <div
      className={`${styles.Layout} ${isModal ? styles.ModalOpen : ''} ${
        darkMode ? 'dark' : 'light'
      }`}
      suppressHydrationWarning={true}
    >
      <NavBar
        isMobile={isMobile}
        hide={hideComponents}
        darkMode={darkMode}
        links={links}
      />

      <div className={styles.Container}>
        {children}
        <Footer />
      </div>
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
          links={links}
        />
      ) : null}
    </div>
  );
};

export default Layout;
