import React from 'react';
import styles from './project.module.css';
import utilStyles from '../../../styles/utils.module.css';
import ImportantButton from '../../buttons/ImportantButton/ImportantButton';
import Image from 'next/image';
import Animate from '../../Layout/Animate/Animate';

interface ProjectCardProps {
  heading: string;
  languages: string;
  description: string;
  imageSrc?: string;
  linkTo: string;
  isDarkMode: boolean;
}

const projectCard: React.FC<ProjectCardProps> = ({
  heading,
  languages,
  description,
  imageSrc,
  linkTo,
  isDarkMode,
}) => {
  return (
    <Animate delay={0.2}>
      <div className={styles.Project}>
        <div
          className={[
            styles.Description,
            isDarkMode ? utilStyles.CardDark : utilStyles.CardLight,
          ].join(' ')}
        >
          <h1
            className={isDarkMode ? utilStyles.ColorT : utilStyles.ColorTLight}
          >
            {heading}
          </h1>
          <p
            className={isDarkMode ? utilStyles.ColorP : utilStyles.ColorPLight}
          >
            [ {languages.replace(/,/g, ' / ')} ]
          </p>
          <p
            className={isDarkMode ? utilStyles.ColorA : utilStyles.ColorALight}
          >
            {description}
          </p>
          {linkTo === 'not deployed' ? (
            <p>(In progress)</p>
          ) : (
            <ImportantButton href={linkTo} darkMode isProjectComponent>
              See Project
            </ImportantButton>
          )}
        </div>
        <div className={styles.ImageContainer}>
          <Image
            priority
            src={`/images/${imageSrc}.png`}
            alt={heading}
            layout="fill"
            className={styles.Image}
          />
        </div>
      </div>
    </Animate>
  );
};

export default projectCard;
