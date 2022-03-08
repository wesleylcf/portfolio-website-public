import React from "react";
import utilStyles from "../../../styles/utils.module.css";
import HorizontalSection from "../../../components/Layout/HorizontalSection/HorizontalSection";
import Card from "../../../components/cards/Card/Card";
import HeadingCard from "../../../components/cards/HeadingCard/HeadingCard";
import ImportantButton from "../../../components/buttons/ImportantButton/ImportantButton";

const Contact = ({ isDarkMode }) => {
  return (
    <>
      <HeadingCard
        number="05"
        content="Get in touch"
        order={0}
        darkMode={isDarkMode}
      />
      <HorizontalSection hideBorder margin="0" minHeight="55vh">
        <Card
          side="center"
          showBackground
          darkMode={isDarkMode}
          borderRadius="15px 15px 15px 15px"
          margin="1vh 1vw"
          flexBasis="45%"
          padding="0 2vw"
        >
          <h1
            className={`${utilStyles.headingMd} ${
              isDarkMode ? utilStyles.ColorP : utilStyles.ColorPLight
            }`}
          >
            For the interested recruiter
          </h1>
          <p>I'm currently looking for internships for the coming summer! </p>
          <ImportantButton
            href="mailto:wesleylim.work@gmail.com"
            darkMode={isDarkMode}
          >
            Say Hi!
          </ImportantButton>
        </Card>
        <Card
          side="center"
          showBackground
          darkMode={isDarkMode}
          borderRadius="15px 15px 15px 15px"
          margin="1vh 1vw"
          flexBasis="45%"
          padding="0 2vw"
        >
          <h1
            className={`${utilStyles.headingMd} ${
              isDarkMode ? utilStyles.ColorP : utilStyles.ColorPLight
            }`}
          >
            For the curious visitor
          </h1>
          <p>
            Thanks for reading up till here! If you're interested I write more
            at my blog
          </p>
          <ImportantButton href="/blog" darkMode={isDarkMode}>
            Blog
          </ImportantButton>
        </Card>
      </HorizontalSection>
    </>
  );
};

export default Contact;
