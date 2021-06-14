import React from 'react';
import styles from './project.module.css';
import utilStyles from '../../../styles/utils.module.css';
import ImportantButton from '../../buttons/ImportantButton/ImportantButton';
import Image from 'next/image';

interface ProjectCardProps {
  heading: string;
  languages: string[];
  description: string;
  imageSrc?: string;
  darkMode: boolean;
}

const projectCard: React.FC<ProjectCardProps> = ({
  heading,
  languages,
  description,
  imageSrc,
  darkMode,
}) => {
  let lang = '';
  for (let l of languages) {
    lang += l;
    lang += ' / ';
  }
  return (
    <div className={styles.Project}>
      <div className={styles.ImageContainer}>
        <div className={styles.Description}>
          <h1 className={utilStyles.ColorT}>{heading}</h1>
          <p className={utilStyles.ColorP}>[ {lang} ]</p>
          <p className={utilStyles.ColorA}>{description}</p>
          <ImportantButton
            href={`/projects/${heading}`}
            darkMode
            isProjectComponent
          >
            See Project
          </ImportantButton>
        </div>

        <Image
          priority
          src={`/images/${imageSrc}`}
          alt={heading}
          layout="fill"
          className={styles.Image}
        />
        {}
        <div className={styles.Modal}></div>
      </div>
    </div>
  );
};

export default projectCard;
