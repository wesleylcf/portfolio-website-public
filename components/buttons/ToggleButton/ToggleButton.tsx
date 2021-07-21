import React from 'react';
import styles from './toggleButton.module.css';
import Animate from '../../Layout/Animate/Animate';

interface ToggleButtonProps {
  hide: boolean;
  onChangeColor: () => void;
  isDarkMode: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  hide,
  onChangeColor,
  isDarkMode,
}) => {
  return (
    <div className={`${styles.ToggleButton} ${hide ? styles.Hide : ''}`}>
      <Animate delay={1.2}>
        <label className={styles.Switch} htmlFor="toggleColorTheme">
          <input type="checkbox" id="toggleColorTheme" />
          <span
            className={[styles.Slider, !isDarkMode ? styles.Checked : ''].join(
              ' '
            )}
            onClick={onChangeColor}
          ></span>
        </label>
      </Animate>
    </div>
  );
};

export default ToggleButton;
