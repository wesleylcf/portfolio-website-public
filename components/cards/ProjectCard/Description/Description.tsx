import React from 'react';
import styles from './description.module.css';
import utilStyles from '../../../../styles/utils.module.css';
import ImportantButton from '../../../buttons/ImportantButton/ImportantButton';
import HideCard from '../../HideCard/HideCard';

const Description = ({
  isDarkMode,
  heading,
  languages,
  description,
  linkTo,
  show,
  onHide,
  isMobile,
}) => {
  return (
    <div
      className={[
        styles.Description,
        isDarkMode ? utilStyles.CardDark : utilStyles.CardLight,
        show ? styles.Show : '',
      ].join(' ')}
    >
      {show && !isMobile && <HideCard onHide={onHide} />}
      <h1 className={isDarkMode ? utilStyles.ColorT : utilStyles.ColorTLight}>
        {heading}
      </h1>
      <p className={isDarkMode ? utilStyles.ColorP : utilStyles.ColorPLight}>
        [ {languages.replace(/,/g, ' / ')} ]
      </p>
      <p className={isDarkMode ? utilStyles.ColorA : utilStyles.ColorALight}>
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
  );
};

export default Description;
