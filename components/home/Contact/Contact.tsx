import React from 'react';
import utilStyles from '../../../styles/utils.module.css';
import styles from './about.module.css';
import VerticalSection from '../../Layout/VerticalSection/VerticalSection';
import HorizontalSection from '../../Layout/HorizontalSection/HorizontalSection';
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
        <HorizontalSection hideBorder>
          <Card side="center">
            <h1>Satu</h1>
          </Card>
          <Card side="center">
            <h1>Duah</h1>
          </Card>
        </HorizontalSection>
      </VerticalSection>
    </div>
  );
};

export default Contact;
