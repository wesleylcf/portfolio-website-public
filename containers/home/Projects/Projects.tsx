import React from 'react';
import dynamic from 'next/dynamic';
import HorizontalSection from '../../../components/Layout/HorizontalSection/HorizontalSection';
import { Project } from '../../../pages/api/projects';
import LoaderCard from '../../../components/cards/LoaderCard/LoaderCard';

const Content = dynamic(() => import('./ProjectsContent'), {
  ssr: false,
  loading: () => <LoaderCard />,
});
interface ProjectsProps {
  isDarkMode: boolean;
  projects: Project[];
  isMobile: boolean;
  offsetToRender: number;
  scrollY: number;
}
const Projects: React.FC<ProjectsProps> = ({
  isDarkMode,
  projects,
  isMobile,
  offsetToRender,
  scrollY,
}) => {
  return (
    <HorizontalSection dividerId="experience">
      {scrollY > offsetToRender ? (
        <Content
          isDarkMode={isDarkMode}
          projects={projects}
          isMobile={isMobile}
        />
      ) : null}
    </HorizontalSection>
  );
};

export default Projects;
