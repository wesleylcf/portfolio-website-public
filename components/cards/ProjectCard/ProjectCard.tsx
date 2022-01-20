import React, { useState } from 'react';
import styles from './project.module.css';
import utilStyles from '../../../styles/utils.module.css';
import ImportantButton from '../../buttons/ImportantButton/ImportantButton';
import Image from 'next/image';
import Animate from '../../Layout/Animate/Animate';
import ExpandCard from '../ExpandCard/ExpandCard';
import Description from './Description/Description';

interface ProjectCardProps {
  heading: string;
  languages: string;
  description: string;
  imageSrc?: string;
  linkTo: string;
  isDarkMode: boolean;
  isMobile: boolean;
}

const projectCard: React.FC<ProjectCardProps> = ({
  heading,
  languages,
  description,
  imageSrc,
  linkTo,
  isDarkMode,
  isMobile,
}) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <Animate delay={0.2}>
      <div className={styles.Project}>
        {!isMobile && !showDescription && (
          <ExpandCard
            onExpand={() => {
              setShowDescription(true);
            }}
          />
        )}
        <Description
          languages={languages}
          description={description}
          isDarkMode={isDarkMode}
          linkTo={linkTo}
          heading={heading}
          show={showDescription}
          onHide={() => setShowDescription(false)}
          isMobile={isMobile}
        />
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
