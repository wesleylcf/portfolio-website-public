import React from 'react';
import styles from './aside.module.css';

interface AsideProps {
  order: number;
}

const Aside: React.FC<AsideProps> = ({ children, order }) => {
  return (
    <aside className={styles.Aside} style={{ order: order }}>
      {children}
    </aside>
  );
};

export default Aside;
