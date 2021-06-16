import React from 'react';
import styles from './toggleButton.module.css';
import Animate from '../../Layout/Animate/Animate';

interface ToggleButtonProps {
  hide: boolean;
  onChangeColor: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ hide, onChangeColor }) => {
  return (
    <div className={`${styles.ToggleButton} ${hide ? styles.Hide : ''}`}>
      <Animate delay={2.4}>
        <label className={styles.Switch}>
          <input type="checkbox" />
          <span className={styles.Slider} onClick={onChangeColor}></span>
        </label>
      </Animate>
    </div>
  );
};

export default ToggleButton;
