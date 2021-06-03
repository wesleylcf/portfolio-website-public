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
  useEffect(() => {
    const listener = () => {
      if (window.innerWidth < 800) {
        setIsMobile(true);
        setIsModal(false);
      } else {
        setIsMobile(false);
        setIsModal(false);
      }
    };
    window.addEventListener('resize', listener);
    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [setIsMobile]);
  const onClickMenu = () => {
    setIsModal(!isModal);
  };
  return (
    <div
      className={`${isModal ? styles.ModalOpen : null}`}
      suppressHydrationWarning={true}
    >
      <NavBar isMobile={isMobile} isModal={isModal} onClickMenu={onClickMenu} />
      <div className={styles.Container}>{children}</div>
      <div className={styles.Social}>
        <Social />
      </div>

      {isMobile === true ? (
        <Sidebar isModal={isModal} onClickMenu={onClickMenu} />
      ) : null}
    </div>
  );
};

export default Layout;
