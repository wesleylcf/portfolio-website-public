import React from 'react';
import { Annotation } from '../../../pages/api/posts/getPostContent';
import styles from './notionText.module.css';

interface NotionTextProps {
  annotations: Annotation[];
  href: string;
  link: string;
}

const NotionText: React.FC<NotionTextProps> = ({
  children,
  annotations,
  href,
  link,
}) => {
  if (href || link) {
    return (
      <a
        href={href || link}
        className={annotations
          .map((annotation) => {
            switch (annotation[0]) {
              case 'bold':
                return 'styles.bold';
              case 'code':
                return styles.code;
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
          .join(' ')}
      >
        {children}
      </a>
    );
  }
  return (
    <span
      className={annotations
        .map((annotation) => {
          switch (annotation[0]) {
            case 'bold':
              return 'styles.bold';
            case 'code':
              return styles.code;
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
        .join(' ')}
    >
      {children}
    </span>
  );
};

export default NotionText;
