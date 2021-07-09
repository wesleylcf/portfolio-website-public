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
}

const projectCard: React.FC<ProjectCardProps> = ({
  heading,
  languages,
  description,
  imageSrc,
  linkTo,
}) => {
  return (
    <div className={styles.Project}>
      <Animate delay={0.2}>
        <div className={styles.ImageContainer}>
          <div className={styles.Description}>
            <h1 className={utilStyles.ColorT}>{heading}</h1>
            <p className={utilStyles.ColorP}>
              [ {languages.replace(/,/g, ' / ')} ]
            </p>
            <p className={utilStyles.ColorA}>{description}</p>
            <ImportantButton href={linkTo} darkMode isProjectComponent>
              See Project
            </ImportantButton>
          </div>

          <Image
            priority
            src={`/images/${imageSrc}.png`}
            alt={heading}
            layout="fill"
            className={styles.Image}
          />
          {}
          <div className={styles.Modal}></div>
        </div>
      </Animate>
    </div>
  );
};

export default projectCard;
