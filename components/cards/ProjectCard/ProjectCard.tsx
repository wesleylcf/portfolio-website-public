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
}

const projectCard: React.FC<ProjectCardProps> = ({
  heading,
  languages,
  description,
  imageSrc,
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
        </div>
        <div className={styles.Button}>
          <ImportantButton href={`/projects/${heading}`}>
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
      </div>
    </div>
  );
};

export default projectCard;
