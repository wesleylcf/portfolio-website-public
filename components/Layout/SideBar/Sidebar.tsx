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
  onChangeColor: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isModal,
  onClickMenu,
  hide,
  isMobile,
  darkMode,
  onChangeColor,
}) => {
  return (
    <>
      <div className={`${styles.Sidebar} ${isModal ? styles.SidebarOpen : ''}`}>
        <Menu onClickMenu={onClickMenu} isModal={isModal} />
        {isModal ? (
          <>
            <ul className={styles.Links}>
              <Links darkMode={darkMode} />
            </ul>
            <div className={styles.Social}>
              <Social width="40px" darkMode={darkMode} />
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
