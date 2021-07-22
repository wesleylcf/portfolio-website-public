import React from 'react';
import HorizontalSection from '../../../components/Layout/HorizontalSection/HorizontalSection';
import dynamic from 'next/dynamic';
import LoaderCard from '../../../components/cards/LoaderCard/LoaderCard';

const ExperienceContent = dynamic(() => import('./ExperienceContent'), {
  ssr: false,
  loading: () => <LoaderCard />,
});

interface ExperienceProps {
  isDarkMode: boolean;
  isMobile: boolean;
  scrollY: number;
  offsetToRender: number;
}

const Experience: React.FC<ExperienceProps> = ({
  isDarkMode,
  isMobile,
  scrollY,
  offsetToRender,
}) => {
  return (
    <HorizontalSection dividerId="blog">
      {scrollY > offsetToRender ? (
        <ExperienceContent isDarkMode={isDarkMode} isMobile={isMobile} />
      ) : null}
    </HorizontalSection>
  );
};

export default Experience;
