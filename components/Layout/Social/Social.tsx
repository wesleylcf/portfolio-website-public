import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styles from './social.module.css';
import Animate from '../Animate/Animate';

interface SocialProps {
  width: string;
  hide?: boolean;
  darkMode: boolean;
  atPage: string;
  links: string[];
}

const social: React.FC<SocialProps> = ({
  width,
  hide,
  darkMode,
  atPage,
  links,
}) => {
  const classNames = [
    `${styles.SocialIcon1} ${hide ? styles.Hide1 : ''}`,
    `${styles.SocialIcon2} ${hide ? styles.Hide2 : ''}`,
    `${styles.SocialIcon3} ${hide ? styles.Hide3 : ''}`,
  ];
  console.log('socialrender');
  console.log(links);
  return (
    <Animate delay={2}>
      {links.map((link, index) => {
        return (
          <div className={classNames[index]} key={atPage + index}>
            <SocialIcon
              style={{
                marginBottom: '1vh',
                width: width,
                height: width,
              }}
              url={link}
              bgColor={`${darkMode ? '#ffafaf' : '#ce8e8e'}`}
              fgColor={`${darkMode ? '#222222' : 'papayawhip'}`}
            />
          </div>
        );
      })}
      {/* <div className={`${styles.SocialIcon1} ${hide ? styles.Hide1 : ''} `}>
        <SocialIcon
          style={{
            marginBottom: '1vh',
            width: width,
            height: width,
          }}
          url="https://www.linkedin.com/in/wesley-lim-cher-fong/"
          bgColor={`${darkMode ? '#ffafaf' : '#ce8e8e'}`}
          fgColor={`${darkMode ? '#222222' : 'papayawhip'}`}
        />
      </div>
      <div className={`${styles.SocialIcon2} ${hide ? styles.Hide2 : ''}`}>
        <SocialIcon
          url="https://www.instagram.com/wesleylcf/"
          bgColor={`${darkMode ? '#ffafaf' : '#ce8e8e'}`}
          style={{
            marginBottom: '1vh',
            width: width,
            height: width,
          }}
          fgColor={`${darkMode ? '#222222' : 'papayawhip'}`}
        />
      </div>
      <div className={`${styles.SocialIcon3} ${hide ? styles.Hide3 : ''}`}>
        <SocialIcon
          url="https://github.com/wesleylcf"
          bgColor={`${darkMode ? '#ffafaf' : '#ce8e8e'}`}
          style={{
            marginBottom: '1vh',
            width: width,
            height: width,
          }}
          fgColor={`${darkMode ? '#222222' : 'papayawhip'}`}
        />
      </div> */}
    </Animate>
  );
};

export default social;
