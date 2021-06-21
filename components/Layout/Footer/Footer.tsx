import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.Footer}>
      <small>&copy; Copyright {year} Wesley Lim</small>
    </footer>
  );
};

export default Footer;
