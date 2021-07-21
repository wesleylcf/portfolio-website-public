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
  atPage: string;
  socialLinks: string[];
  setScrollY: (number) => void;
  scrollY: number;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  links,
  isDarkMode,
  onChangeColorTheme,
  isMobile,
  setIsMobile,
  atPage,
  socialLinks,
  scrollY,
  setScrollY,
}) => {
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
    if (!isModal) {
      document.body.classList.add('freeze');
    } else {
      document.body.classList.remove('freeze');
    }
    setIsModal(!isModal);
  };

  return (
    <div
      className={[
        styles.Layout,
        isModal ? styles.ModalOpen : '',
        isDarkMode ? 'dark' : 'light',
        isMobile ? styles.Mobile : '',
      ].join(' ')}
      suppressHydrationWarning={true}
    >
      <NavBar
        isMobile={isMobile}
        hide={hideComponents}
        darkMode={isDarkMode}
        links={links}
        atPage={atPage}
      />

      <div className={styles.Container}>
        {children}
        <Footer />
      </div>
      <ToggleButton
        hide={hideComponents}
        onChangeColor={onChangeColorTheme}
        isDarkMode={isDarkMode}
      />
      {isMobile ? (
        <Sidebar
          isModal={isModal}
          onClickMenu={onClickMenu}
          hide={hideComponents}
          isMobile={isMobile}
          darkMode={isDarkMode}
          links={links}
          socialLinks={socialLinks}
          atPage={atPage}
        />
      ) : null}
      {typeof isMobile === 'undefined' || isMobile ? null : (
        <div className={styles.Social}>
          <Social
            width="60px"
            hide={hideComponents}
            darkMode={isDarkMode}
            atPage={atPage}
            links={socialLinks}
          />
        </div>
      )}
    </div>
  );
};

export default Layout;
