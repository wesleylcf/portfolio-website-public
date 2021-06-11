import React from 'react';
import Link from 'next/link';
import styles from './button.module.css';

interface ButtonProps {
  href: string;
  darkMode: boolean;
}

const ImportantButton: React.FC<ButtonProps> = ({
  children,
  href,
  darkMode,
}) => {
  return (
    <div
      className={`${styles.ButtonWrapper} ${
        darkMode ? styles.Dark : styles.Light
      }`}
    >
      <li className={styles.ListItem}>
        <Link href={href}>
          <a
            className={`${styles.Button} ${
              darkMode ? styles.Dark : styles.Light
            }`}
          >
            {children}
          </a>
        </Link>
      </li>
    </div>
  );
};

export default ImportantButton;
