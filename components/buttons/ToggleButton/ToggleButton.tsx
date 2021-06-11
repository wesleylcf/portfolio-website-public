import React from 'react';
import styles from './toggleButton.module.css';

interface ToggleButtonProps {
  hide: boolean;
}

const ToggleButton = ({ hide }) => {
  return (
    <div className={`${styles.ToggleButton} ${hide ? styles.Hide : ''}`}>
      <label className={styles.Switch}>
        <input type="checkbox" />
        <span className={styles.Slider}></span>
      </label>
    </div>
  );
};

export default ToggleButton;
