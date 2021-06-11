import React from 'react';
import utilStyles from '../../../styles/utils.module.css';
import styles from './about.module.css';
import VerticalSection from '../../Layout/VerticalSection/VerticalSection';
import Card from '../../cards/Card/Card';
import HeadingCard from '../../cards/HeadingCard/HeadingCard';

const Contact = ({ darkMode }) => {
  return (
    <div>
      <VerticalSection width="60%" hideBorder>
        <HeadingCard
          number="05"
          content="Contact Me!"
          order={0}
          darkMode={darkMode}
        />
        <Card side="center"></Card>
      </VerticalSection>
    </div>
  );
};

export default Contact;
