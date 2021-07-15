import React from 'react';
import styles from './menu.module.css';

interface MenuProps {
  onClickMenu: () => void;
  isModal: boolean;
  darkMode: boolean;
}

const Menu: React.FC<MenuProps> = ({ onClickMenu, isModal, darkMode }) => {
  const onClickHandler = () => {
    onClickMenu();
  };
  return (
    <button
      className={`${styles.Menu} ${darkMode ? styles.Dark : styles.Light} ${
        isModal ? styles.Change : ''
      } `}
      onClick={onClickHandler}
      style={
        isModal
          ? { backgroundColor: darkMode ? '#333333' : 'rgb(226, 210, 183)' }
          : {}
      }
    >
      <div
        className={styles.Bar1}
        style={
          darkMode
            ? { backgroundColor: 'lightgray' }
            : { backgroundColor: 'rgb(61, 69, 77)' }
        }
      ></div>
      <div
        className={styles.Bar2}
        style={
          darkMode
            ? { backgroundColor: 'lightgray' }
            : { backgroundColor: 'rgb(61, 69, 77)' }
        }
      ></div>
      <div
        className={styles.Bar3}
        style={
          darkMode
            ? { backgroundColor: 'lightgray' }
            : { backgroundColor: 'rgb(61, 69, 77)' }
        }
      ></div>
    </button>
  );
};

export default Menu;
