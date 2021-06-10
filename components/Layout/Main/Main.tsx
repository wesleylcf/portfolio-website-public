import React from 'react';
import styles from './main.module.css';

interface MainProps {
  order: number;
}

const Main: React.FC<MainProps> = ({ children, order }) => {
  return (
    <main className={styles.Main} style={{ order: order }}>
      {children}
    </main>
  );
};

export default Main;
