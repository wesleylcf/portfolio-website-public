import React from 'react';
import Link from 'next/link';
import styles from './button.module.css';

interface ButtonProps {
  href: string;
  darkMode: boolean;
  isTextComponent?: boolean;
  isProjectComponent?: boolean;
}

const ImportantButton: React.FC<ButtonProps> = ({
  children,
  href,
  darkMode,
  isTextComponent,
  isProjectComponent,
}) => {
  return (
    <div
      className={`${styles.ButtonWrapper} ${
        isTextComponent ? styles.TextComponent : ''
      } ${isProjectComponent ? styles.ProjectComponent : ''} ${
        darkMode ? styles.Dark : styles.Light
      }`}
    >
      <li className={styles.ListItem}>
        {isProjectComponent ? (
          <a
            className={`${styles.Button} ${
              darkMode ? styles.Dark : styles.Light
            } ${isProjectComponent ? styles.ProjectComponent : ''}`}
            href={href}
            target="_blank"
          >
            {children}
          </a>
        ) : (
          <Link href={href}>
            <a
              className={`${styles.Button} ${
                darkMode ? styles.Dark : styles.Light
              } ${isProjectComponent ? styles.ProjectComponent : ''}`}
            >
              {children}
            </a>
          </Link>
        )}
      </li>
    </div>
  );
};

export default ImportantButton;
