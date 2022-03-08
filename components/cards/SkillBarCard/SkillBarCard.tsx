import React from 'react';
import styles from './skillBar.module.css';
import utilStyles from '../../../styles/utils.module.css';
import Animate from '../../Layout/Animate/Animate';

interface SkillBarCardProps {
  skills: {
    skill: string;
    confidence: number;
  }[];
  darkMode: boolean;
  isMobile: boolean;
}

const SkillBarCard: React.FC<SkillBarCardProps> = ({
  skills,
  darkMode,
  isMobile,
}) => {
  let delay = 0.1;
  return (
    <Animate delay={isMobile ? 0.6 : 0}>
      <article className={styles.Article}>
        <ul className={styles.List}>
          {skills.map((skill, index) => {
            delay += 0.1;
            return (
              <Animate delay={delay} key={index}>
                <li
                  className={styles.ListItem}
                  style={{
                    backgroundColor: darkMode
                      ? '#222222'
                      : 'rgb(226, 210, 183)',
                  }}
                >
                  <div
                    className={`${styles.Skill} ${
                      darkMode
                        ? utilStyles.ColorA
                        : utilStyles.ColorDefaultLight
                    } ${darkMode ? styles.Dark : styles.Light}`}
                  >
                    {skill.skill}
                  </div>

                  <div className={styles.BarContainer}>
                    <div
                      className={styles.Bar}
                      style={{
                        minWidth: `${skill.confidence}%`,
                        backgroundColor: darkMode ? 'turquoise' : 'teal',
                      }}
                    ></div>
                  </div>
                </li>
              </Animate>
            );
          })}
        </ul>
      </article>
    </Animate>
  );
};

export default SkillBarCard;
