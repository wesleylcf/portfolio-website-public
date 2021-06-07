import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styles from './social.module.css';

interface SocialProps {
  width: string;
  hide: boolean;
}

const social = ({ width, hide }) => {
  return (
    <>
      <div className={`${styles.SocialIcon1} ${hide ? styles.Hide1 : ''}`}>
        <SocialIcon
          style={{
            marginBottom: '1vh',
            width: width,
            height: width,
          }}
          url="https://www.linkedin.com/in/wesley-lim-cher-fong/"
          bgColor="#ffafaf"
        />
      </div>
      <div className={`${styles.SocialIcon2} ${hide ? styles.Hide2 : ''}`}>
        <SocialIcon
          url="https://www.instagram.com/wesleylcf/"
          bgColor="#ffafaf"
          style={{
            marginBottom: '1vh',

            width: width,
            height: width,
          }}
        />
      </div>
      <div className={`${styles.SocialIcon3} ${hide ? styles.Hide3 : ''}`}>
        <SocialIcon
          url="https://github.com/wesleylcf"
          bgColor="#ffafaf"
          style={{
            marginBottom: '1vh',

            width: width,
            height: width,
          }}
        />
      </div>
    </>
  );
};

export default social;
