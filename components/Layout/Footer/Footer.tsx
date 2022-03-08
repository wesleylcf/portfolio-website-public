import React from 'react';
import styles from './footer.module.css';
import Animate from '../Animate/Animate';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.Footer}>
      <p>
        If you have any feedback, spot a bug, or just wanna talk you can reach
        me <a href="mailto:wesleylim.work@gmail.com">here</a>!
      </p>
      <small>&copy; Copyright {year} Wesley Lim Cher Fong</small>
    </footer>
  );
};

export default Footer;
