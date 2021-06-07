import Link from 'next/link';
import styles from './styledLink.module.css';
import React from 'react';

interface StyledLinkProps {
  content: string;
  url: string;
}

const StyledLink: React.FC<StyledLinkProps> = ({ content, url }) => {
  return (
    <div className={styles.ListItemWrapper}>
      <li>
        <Link href={url}>
          <a className={styles.StyledLink}>{content}</a>
        </Link>
      </li>
    </div>
  );
};

export default StyledLink;
