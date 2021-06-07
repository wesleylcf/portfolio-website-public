import React from 'react';
import styles from './menu.module.css';

interface MenuProps {
  onClickMenu: () => void;
  isModal: boolean;
}

const Menu: React.FC<MenuProps> = ({ onClickMenu, isModal }) => {
  const onClickHandler = () => {
    onClickMenu();
  };
  return (
    <button
      className={`${styles.Menu} ${isModal ? styles.Change : ''}`}
      onClick={onClickHandler}
    >
      <div className={styles.Bar1}></div>
      <div className={styles.Bar2}></div>
      <div className={styles.Bar3}></div>
    </button>
  );
};

export default Menu;
