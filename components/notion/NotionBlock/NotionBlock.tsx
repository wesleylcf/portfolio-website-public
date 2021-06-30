import styles from './notionBlock.module.css';
import React from 'react';
import { PageBlock } from '../../../pages/api/posts/getPostContent';
import utilStyles from '../../../styles/utils.module.css';
import NotionText from '../NotionText/NotionText';

interface NotionBlockProps {
  pageBlocks: PageBlock[];
  isDarkMode: boolean;
  headingColor: number;
}

const headingColorMap = {
  darkMode: [utilStyles.ColorT, utilStyles.ColorP, utilStyles.ColorA],
  lightMode: [
    utilStyles.ColorTLight,
    utilStyles.ColorPLight,
    utilStyles.ColorALight,
  ],
};

const NotionBlock: React.FC<NotionBlockProps> = ({
  pageBlocks,
  isDarkMode,
  headingColor,
}) => {
  const childrenBlocks = pageBlocks.map(
    ({ type, content, href, link, annotations }, index) => {
      switch (type) {
        case 'bulleted_list_item':
        case 'numbered_list_item':
          return (
            <span>
              <NotionText href={href} link={link} annotations={annotations}>
                {content}
              </NotionText>
            </span>
          );
        case 'heading_1':
        case 'heading_2':
          return (
            <span key={index}>
              <NotionText href={href} link={link} annotations={annotations}>
                {content}
              </NotionText>
            </span>
          );

        case 'paragraph':
          return (
            <span key={index}>
              <NotionText href={href} link={link} annotations={annotations}>
                {content}
              </NotionText>
            </span>
          );

        default:
          return (
            <p>
              <NotionText href={href} link={link} annotations={annotations}>
                {content}
              </NotionText>
            </p>
          );
      }
    }
  );
  switch (pageBlocks[0].type) {
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return <li>{childrenBlocks}</li>;
    case 'heading_1':
      return (
        <h1
          className={`${styles.Heading} ${
            isDarkMode
              ? headingColorMap.darkMode[headingColor]
              : headingColorMap.lightMode[headingColor]
          }`}
        >
          {childrenBlocks}
        </h1>
      );
    case 'heading_2':
      return (
        <h2
          className={`${styles.Heading} ${
            isDarkMode
              ? headingColorMap.darkMode[headingColor]
              : headingColorMap.lightMode[headingColor]
          }`}
        >
          {childrenBlocks}
        </h2>
      );
    case 'paragraph':
      return <p className={styles.Paragraph}>{childrenBlocks}</p>;
    default:
      return null;
  }
};

export default NotionBlock;
