import React from 'react';
import styles from './sidebar.module.css';
import Links from '../Links/Links';
import Menu from '../Menu/Menu';

interface SidebarProps {
  isModal: boolean;
  onClickMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isModal, onClickMenu }) => {
  return (
    <>
      <div
        className={`${styles.Sidebar} ${isModal ? styles.SidebarOpen : null}`}
      >
        <Menu onClickMenu={onClickMenu} isModal={isModal} />
        {isModal ? (
          <ol className={styles.Links}>
            <Links />
          </ol>
        ) : null}
      </div>
      <div className={styles.Modal} onClick={onClickMenu}></div>
    </>
  );
};

export default Sidebar;
