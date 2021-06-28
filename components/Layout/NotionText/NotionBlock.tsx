import styles from './notionBlock.module.css';
import React from 'react';
import { PageBlock } from '../../../pages/api/posts/getPostContent';
import utilStyles from '../../../styles/utils.module.css';

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
  children,
  pageBlocks,
  isDarkMode,
  headingColor,
}) => {
  let switchHeadingColor = 0;
  const childrenBlocks = pageBlocks.map(
    ({ type, content, href, link, annotations }, index) => {
      switch (type) {
        case 'bulleted_list_item':
        case 'numbered_list_item':
          return <li>{content}</li>;
        case 'heading_1':
        case 'heading_2':
          return <span key={index}>{content}</span>;

        case 'paragraph':
          return <span key={index}>{content}</span>;

        default:
          return <p>{content}</p>;
      }
    }
  );
  switch (pageBlocks[0].type) {
    case 'bulleted_list_item':
      return <ul>{childrenBlocks}</ul>;
    case 'numbered_list_item':
      return <ol>{childrenBlocks}</ol>;
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
