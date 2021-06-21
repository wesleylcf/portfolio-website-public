import React, { useState, useEffect } from 'react';
import Sidebar from './SideBar/Sidebar';
import NavBar from './NavBar/NavBar';
import styles from './layout.module.css';
import Social from './Social/Social';
import Animate from './Animate/Animate';
import Footer from './Footer/Footer';
import ToggleButton from '../buttons/ToggleButton/ToggleButton';

interface LayoutProps {
  links: {
    navLinks: { linkTo: string; content: string; button?: boolean }[];
    linkInitialAnimateDelay?: number;
    linkAnimateDelayIncrement?: number;
  };
  isDarkMode: boolean;
  isMobile: boolean;
  onChangeColorTheme: () => void;
  setIsMobile: (bool) => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  links,
  isDarkMode,
  onChangeColorTheme,
  isMobile,
  setIsMobile,
}) => {
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

  const [isModal, setIsModal] = useState(() => {
    if (typeof isMobile === 'undefined') return undefined;
    return false;
  });

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
      }, 1000);
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
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [timeSinceLastHide]);

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

  console.log('layoutrender');
  return (
    <div
      className={`${styles.Layout} ${isModal ? styles.ModalOpen : ''} ${
        isDarkMode ? 'dark' : 'light'
      }`}
      suppressHydrationWarning={true}
    >
      <NavBar
        isMobile={isMobile}
        hide={hideComponents}
        darkMode={isDarkMode}
        links={links}
      />

      <div className={styles.Container}>
        {children}
        <Footer />
      </div>
      <ToggleButton hide={hideComponents} onChangeColor={onChangeColorTheme} />
      {isMobile ? (
        <Sidebar
          isModal={isModal}
          onClickMenu={onClickMenu}
          hide={hideComponents}
          isMobile={isMobile}
          darkMode={isDarkMode}
          links={links}
        />
      ) : null}
      {typeof isMobile === 'undefined' || isMobile ? null : (
        <div className={styles.Social}>
          <Animate delay={isMobile ? 0 : 2}>
            <Social width="60px" hide={hideComponents} darkMode={isDarkMode} />
          </Animate>
        </div>
      )}
    </div>
  );
};

export default Layout;
