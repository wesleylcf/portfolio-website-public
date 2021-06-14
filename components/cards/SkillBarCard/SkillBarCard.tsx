import React from 'react';
import styles from './skillBar.module.css';
import utilStyles from '../../../styles/utils.module.css';

interface SkillBarCardProps {
  skills: {
    skill: string;
    confidence: number;
  }[];
  darkMode: boolean;
}

const SkillBarCard: React.FC<SkillBarCardProps> = ({ skills, darkMode }) => {
  return (
    <article className={styles.Article}>
      <ul className={styles.List}>
        {skills.map((skill, index) => {
          return (
            <li
              key={index}
              className={styles.ListItem}
              style={{
                backgroundColor: darkMode ? '#444444' : 'rgb(226, 210, 183)',
              }}
            >
              <span
                className={`${
                  darkMode ? utilStyles.ColorA : utilStyles.ColorDefaultLight
                } ${styles.Skill}`}
              >
                {skill.skill}
              </span>
              <span
                className={styles.Bar}
                style={{
                  width: `${skill.confidence - 20}%`,
                  backgroundColor: darkMode ? 'turquoise' : 'teal',
                }}
              ></span>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default SkillBarCard;
