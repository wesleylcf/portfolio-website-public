import styles from './notionBlock.module.css';
import React from 'react';
import { PageBlock } from '../../../pages/api/posts/getPostContent';
import utilStyles from '../../../styles/utils.module.css';
import NotionText from '../NotionText/NotionText';
import Prism from 'prismjs';
import Image from 'next/image';

interface NotionBlockProps {
  pageBlocks: PageBlock[];
  isDarkMode: boolean;
  headingColor: number;
  isMobile: boolean;
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
  isMobile,
}) => {
  const childrenBlocks: any = pageBlocks.map(
    ({ type, content, href, link, annotations, indentLevel }, index) => {
      switch (type) {
        case 'code':
          const code: string = Prism.highlight(
            content,
            Prism.languages.javascript,
            'javascript'
          );
          return (
            <pre
              className={[
                styles.Code,
                isDarkMode ? styles.Dark : styles.Light,
                isMobile ? styles.MobileWidth : styles.DesktopWidth,
                'language-jsx',
              ].join(' ')}
              style={{ marginLeft: `${indentLevel}vw` }}
              key={index}
            >
              <code
                className={'language-jsx'}
                dangerouslySetInnerHTML={{ __html: code }}
              ></code>
            </pre>
          );
        case 'image':
          return (
            <div
              className={styles.ImageContainer}
              style={{ marginLeft: `${indentLevel}vw` }}
              key={index}
            >
              <Image priority layout="fill" src={`/images/${content}.png`} />
            </div>
          );
        default:
          return (
            <span key={index} style={{ marginLeft: `${indentLevel}vw` }}>
              <NotionText
                href={href}
                link={link}
                annotations={annotations}
                isDarkMode={isDarkMode}
              >
                {content}
              </NotionText>
            </span>
          );
      }
    }
  );
  switch (pageBlocks[0].type) {
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return <li>{childrenBlocks}</li>;
    case 'heading_1':
      return <h1 className={styles.Heading1}>{childrenBlocks}</h1>;
    case 'heading_2':
      return (
        <h2
          className={`${styles.Heading2} ${
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
    case 'code':
      return childrenBlocks;
    case 'line_spacing':
      return <p style={{ margin: '1vh' }}></p>;
    case 'image':
      return childrenBlocks;
    default:
      return null;
  }
};

export default NotionBlock;
