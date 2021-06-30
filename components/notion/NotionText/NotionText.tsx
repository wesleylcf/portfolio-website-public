import React from 'react';
import { Annotation } from '../../../pages/api/posts/getPostContent';
import styles from './notionText.module.css';

interface NotionTextProps {
  annotations: Annotation[];
  href: string;
  link: string;
  isDarkMode: boolean;
}

const NotionText: React.FC<NotionTextProps> = ({
  children,
  annotations,
  href,
  link,
  isDarkMode,
}) => {
  const child = href || link ? <a href={href || link}>{children}</a> : children;
  const classNames = annotations
    .map((annotation) => {
      switch (annotation[0]) {
        case 'bold':
          return 'styles.bold';
        case 'code':
          return isDarkMode ? styles.codeDark : styles.codeLight;
        case 'underline':
          return styles.underline;
        case 'strikethrough':
          return styles.strikethrough;
        case 'italic':
          return styles.italic;
        default:
          return '';
      }
    })
    .join(' ');
  return <span className={classNames}>{child}</span>;
};

export default NotionText;
