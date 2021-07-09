import React from 'react';
import VerticalSection from '../components/Layout/VerticalSection/VerticalSection';
import HeadingCard from '../components/cards/HeadingCard/HeadingCard';
import Contact from '../containers/home/Contact/Contact';

export default function PageNotFound({ isDarkMode }) {
  return (
    <>
      <head>
        <title>Page not found!</title>
      </head>
      <VerticalSection>
        <HeadingCard
          darkMode={isDarkMode}
          order={0}
          number="Hi there! "
          content="The page you are looking for is regrettably still under construction..."
        />
      </VerticalSection>
    </>
  );
}
