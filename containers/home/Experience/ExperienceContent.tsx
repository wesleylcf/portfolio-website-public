import React from "react";
import Card from "../../../components/cards/Card/Card";
import styles from "./experience.module.css";
import utilStyles from "../../../styles/utils.module.css";
import ImportantButton from "../../../components/buttons/ImportantButton/ImportantButton";
import HeadingCard from "../../../components/cards/HeadingCard/HeadingCard";
import Main from "../../../components/Layout/Main/Main";
import Aside from "../../../components/Layout/Aside/Aside";
import SkillBarCard from "../../../components/cards/SkillBarCard/SkillBarCard";
import Animate from "../../../components/Layout/Animate/Animate";

const Experience = ({ isDarkMode, isMobile }) => {
  const skills = [
    {
      skill: "React",
      confidence: 80,
    },
    {
      skill: "Javascript",
      confidence: 80,
    },
    { skill: "Python", confidence: 80 },
    { skill: "Node.js", confidence: 60 },
    { skill: "C++", confidence: 60 },
  ];

  return (
    <>
      <Main order={0}>
        <HeadingCard
          number="03"
          content="Experience"
          order={0}
          darkMode={isDarkMode}
        ></HeadingCard>
        <Card side="center" padding="0 5vw">
          <Animate delay={0.3}>
            <p>
              I'm currently finishing year one/in year two. My current/past
              internships are:
              <span
                className={`${
                  isDarkMode ? utilStyles.ColorP : utilStyles.ColorTLight
                }`}
              >
                <ul>
                  <li>GovTech SWE intern (year one)</li>
                </ul>
              </span>
              Outside of practicing algorithms, the technologies I often work
              with are{` `}
              <u>React/NextJS, Redux, Typescript,</u>
              {` `}
              while those that I recently explored, or intend to explore are
              {` `}
              <u>nestJS, Graphql, micro-services</u>
            </p>
          </Animate>
        </Card>
      </Main>
      <Aside order={1}>
        <SkillBarCard
          skills={skills}
          darkMode={isDarkMode}
          isMobile={isMobile}
        />
      </Aside>
    </>
  );
};

export default Experience;
