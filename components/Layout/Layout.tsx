import React, { useState, useEffect } from 'react';
import Sidebar from './SideBar/Sidebar';
import NavBar from './NavBar/NavBar';
import styles from './layout.module.css';
import Social from './Social/Social';

const Layout: React.FC = ({ children }) => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return undefined;
    return window.innerWidth < 800;
  });
  const [isModal, setIsModal] = useState(() => {
    if (typeof isMobile === 'undefined') return undefined;
    return false;
  });
  const [scrollY, setScrollY] = useState(() => {
    if (typeof window === 'undefined') return undefined;
    return window.scrollY;
  });
  const [hideComponents, setHideComponents] = useState(() => {
    if (typeof scrollY === 'undefined') return undefined;
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
    const scrollListener = () => {
      if (window.scrollY > scrollY) {
        setHideComponents(true);
      } else {
        setHideComponents(false);
      }
      setScrollY(window.scrollY);
    };
    window.addEventListener('resize', viewportListener);
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('resize', viewportListener);
      window.removeEventListener('scroll', scrollListener);
    };
  }, [isMobile, hideComponents, isModal, scrollY]);
  const onClickMenu = () => {
    setIsModal(!isModal);
  };
  return (
    <div
      className={`${isModal ? styles.ModalOpen : ''}`}
      suppressHydrationWarning={true}
    >
      <NavBar
        isMobile={isMobile}
        isModal={isModal}
        onClickMenu={onClickMenu}
        hide={hideComponents}
      />

      <div className={styles.Container}>{children}</div>
      {typeof isMobile === 'undefined' || isMobile ? null : (
        <div className={styles.Social}>
          <Social width="60px" hide={hideComponents} />
        </div>
      )}
      {isMobile ? (
        <Sidebar
          isModal={isModal}
          onClickMenu={onClickMenu}
          hide={hideComponents}
        />
      ) : null}
    </div>
  );
};

export default Layout;
