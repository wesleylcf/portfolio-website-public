import React, { useEffect, useRef } from 'react';
import styles from './toggleButton.module.css';

interface ToggleButtonProps {
  hide: boolean;
  onChangeColor: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ hide, onChangeColor }) => {
  return (
    <div className={`${styles.ToggleButton} ${hide ? styles.Hide : ''}`}>
      <label className={styles.Switch}>
        <input type="checkbox" />
        <span className={styles.Slider} onClick={onChangeColor}></span>
      </label>
    </div>
  );
};

export default ToggleButton;
