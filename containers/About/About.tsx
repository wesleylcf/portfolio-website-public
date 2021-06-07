import React from 'react';
import Layout from '../../components/Layout/Layout';
import Image from 'next/image';
import styles from './about.module.css';
import utilStyles from '../../styles/utils.module.css';

const about = () => {
  return (
    <Layout>
      <div className={styles.Profile}>
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt="Photo of me"
        />
      </div>
    </Layout>
  );
};

export default about;
