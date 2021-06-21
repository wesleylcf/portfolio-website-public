import React from 'react';
import styles from './sidebar.module.css';
import Links from '../Links/Links';
import Menu from '../../buttons/Menu/Menu';
import Social from '../Social/Social';

interface SidebarProps {
  isModal: boolean;
  onClickMenu: () => void;
  hide: boolean;
  isMobile: boolean;
  darkMode: boolean;
  links: {
    navLinks: { linkTo: string; content: string; button?: boolean }[];
    linkInitialAnimateDelay?: number;
    linkAnimateDelayIncrement?: number;
  };
  socialLinks: string[];
  atPage: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  isModal,
  onClickMenu,
  hide,
  isMobile,
  darkMode,
  links,
  socialLinks,
  atPage,
}) => {
  return (
    <>
      <div
        className={`${styles.Sidebar} ${isModal ? styles.SidebarOpen : ''} ${
          darkMode ? styles.Dark : styles.Light
        }`}
      >
        <Menu onClickMenu={onClickMenu} isModal={isModal} darkMode={darkMode} />
        {isModal ? (
          <>
            <ul className={styles.Links}>
              <Links
                darkMode={darkMode}
                isMobile={isMobile}
                {...links}
                atPage={atPage}
              />
            </ul>
            <div className={styles.Social}>
              <Social
                width="40px"
                darkMode={darkMode}
                links={socialLinks}
                atPage={atPage}
              />
            </div>
          </>
        ) : null}
      </div>
      {isModal ? (
        <div className={styles.Modal} onClick={onClickMenu}></div>
      ) : null}
    </>
  );
};

export default Sidebar;
