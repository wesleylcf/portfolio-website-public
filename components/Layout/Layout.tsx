import React, { useState, useEffect } from 'react';
import Sidebar from './SideBar/Sidebar';
import NavBar from './NavBar/NavBar';
import styles from './layout.module.css';
import Social from './Social/Social';
import ToggleButton from '../buttons/ToggleButton/ToggleButton';

interface LayoutProps {
  darkMode: boolean;
  onChangeColor: () => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  darkMode,
  onChangeColor,
}) => {
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
  const [timeSinceLastHide, setTimeSinceLastHide] = useState(
    new Date().getTime()
  );

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
  useEffect(() => {
    let timer: any;
    const scrollListener = () => {
      if (window.scrollY > scrollY) {
        setHideComponents(true);
      } else {
        setHideComponents(false);
      }
      setScrollY(window.scrollY);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setTimeSinceLastHide(new Date().getTime());
      }, 1500);
    };
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
      clearTimeout(timer);
    };
  }, [hideComponents, scrollY]);

  useEffect(() => {
    let timer: any;
    clearTimeout(timer);
    timer = setTimeout(() => {
      setHideComponents(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [timeSinceLastHide]);
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
          <ToggleButton hide={hideComponents} onChangeColor={onChangeColor} />
        </>
      )}
      {isMobile ? (
        <Sidebar
          isModal={isModal}
          onClickMenu={onClickMenu}
          hide={hideComponents}
          isMobile={isMobile}
        />
      ) : null}
    </div>
  );
};

export default Layout;
