import React from 'react';
import Link from 'next/link';
import styles from './button.module.css';

interface ButtonProps {
  href: string;
}

const ImportantButton: React.FC<ButtonProps> = ({ children, href }) => {
  return (
    <div className={styles.ButtonWrapper}>
      <li className={styles.ListItem}>
        <Link href={href}>
          <a className={styles.Button}>{children}</a>
        </Link>
      </li>
    </div>
  );
};

export default ImportantButton;
