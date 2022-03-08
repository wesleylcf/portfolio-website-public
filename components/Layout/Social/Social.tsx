import React from "react";
import { SocialIcon } from "react-social-icons";
import styles from "./social.module.css";
import Animate from "../Animate/Animate";

interface SocialProps {
  width: string;
  hide?: boolean;
  darkMode: boolean;
  isMobile?: boolean;
  atPage: string;
  links: string[];
}

const social: React.FC<SocialProps> = ({
  width,
  hide,
  darkMode,
  atPage,
  links,
  isMobile,
}) => {
  const classNames = [
    `${styles.SocialIcon1} ${hide ? styles.Hide1 : ""}`,
    `${styles.SocialIcon2} ${hide ? styles.Hide2 : ""}`,
    `${styles.SocialIcon3} ${hide ? styles.Hide3 : ""}`,
  ];
  return (
    <Animate delay={isMobile ? 0 : 1.2}>
      {links.map((link, index) => {
        return (
          <div className={classNames[index]} key={atPage + index}>
            <SocialIcon
              style={{
                marginBottom: "1vh",
                width: width,
                height: width,
              }}
              url={link}
              target="_blank"
              bgColor={`${darkMode ? "#ffafaf" : "#ce8e8e"}`}
              fgColor={`${darkMode ? "#222222" : "papayawhip"}`}
            />
          </div>
        );
      })}
    </Animate>
  );
};

export default social;
