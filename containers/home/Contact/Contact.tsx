import React from 'react';
import dynamic from 'next/dynamic';
import LoaderCard from '../../../components/cards/LoaderCard/LoaderCard';

const ContactContent = dynamic(() => import('./ContactContent'), {
  ssr: false,
  loading: () => <LoaderCard />,
});
import VerticalSection from '../../../components/Layout/VerticalSection/VerticalSection';

interface ContactProps {
  isDarkMode: boolean;
  scrollY: number;
  offsetToRender: number;
}

const Contact: React.FC<ContactProps> = ({
  isDarkMode,
  scrollY,
  offsetToRender,
}) => {
  return (
    <VerticalSection hideBorder>
      {scrollY > offsetToRender ? (
        <ContactContent isDarkMode={isDarkMode} />
      ) : null}
    </VerticalSection>
  );
};

export default Contact;
