import React, { useState, useEffect } from 'react';
import Sidebar from './SideBar/Sidebar';
import NavBar from './NavBar/NavBar';
import styles from './layout.module.css';
import Social from './Social/Social';

interface LayoutProps {
  darkMode: boolean;
  onChangeColor: () => void;
  hideComponents: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  darkMode,
  onChangeColor,
  hideComponents,
}) => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return undefined;
    return window.innerWidth < 800;
  });
  const [isModal, setIsModal] = useState(() => {
    if (typeof isMobile === 'undefined') return undefined;
    return false;
  });

  useEffect(() => {
    const viewportListener = () => {
      if (window.innerWidth < 800) {
        setIsMobile(true);
        setIsModal(false);
      } else {
        setIsMobile(false);
        setIsModal(false);
      }
    };
    window.addEventListener('resize', viewportListener);
    return () => {
      window.removeEventListener('resize', viewportListener);
    };
  }, [isMobile, isModal]);

  const onClickMenu = () => {
    setIsModal(!isModal);
  };

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
