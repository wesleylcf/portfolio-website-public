import React from "react";
import VerticalSection from "../../../components/Layout/VerticalSection/VerticalSection";
import Card from "../../../components/cards/Card/Card";
import Animate from "../../../components/Layout/Animate/Animate";
import Image from "next/image";
import utilStyles from "../../../styles/utils.module.css";
import Main from "../../../components/Layout/Main/Main";
import HeadingCard from "../../../components/cards/HeadingCard/HeadingCard";
import Link from "next/link";

const About = ({ darkMode }) => {
  return (
    <VerticalSection>
      <Animate delay={0.15}>
        <HeadingCard
          darkMode={darkMode}
          order={0}
          number="Hi"
          content="Welcome to my blog!"
        />
      </Animate>

      <Main>
        <div style={{ margin: "4vh auto" }}>
          <Animate delay={0.3}>
            <Image
              src="/images/me.jpg"
              width={110}
              height={125}
              className={utilStyles.borderCircle}
              alt="insert dashing photo of wesley lim"
              title="wesley lim"
            ></Image>
          </Animate>
        </div>
        <Card side="center">
          <Animate delay={0.45}>
            <p>
              My name is Wesley and I'm 21 this year. I'm currently pursuing
              Computer Science at the Nanyang Technological
              Unviersity(2021-2024).
            </p>
            <p>
              I picked up programming as I was influenced by my siblings, and
              while serving National Service, I took a bunch of courses in a
              breadth-first manner to find a direction that I could work
              towards.
            </p>

            <p>
              Currently, I'm inclined towards Web development, and spend my free
              time doing projects that I find interesting or provide insight.
              Check out{" "}
              <Link href="/blog/projects">
                <a
                  style={{ color: darkMode ? "turquoise" : "teal" }}
                  target="_blank"
                >
                  my recent projects
                </a>
              </Link>
            </p>

            <p>
              In the future, I hope to be able to work in a software-centric
              company as I feel that the scale and quality of the code would be
              something that I could learn alot from.
            </p>

            <p style={{ minWidth: "36vw" }}>Some cool facts:</p>
            <ul>
              <li>
                I did gymnastics for around 13 years(and spent the following
                years delaying the decline in fitness)
              </li>
              <li>I play fingerstyle guitar and my idol is Tommy Emmanuel!</li>
              <li> I have a twin brother (meh.) </li>
              <li>
                I have three siblings and all of us are current or future
                software engineers(!!)
              </li>
            </ul>
            <p>Stuff I hope to accomplish while in university</p>
            <ol>
              <li>Make lots of awesome friends and find my S/O</li>
              <li>
                Stay in hall for as long as I can ( I live like 1h45mins away )
              </li>
              <li>CODE CONSISTENLY, practice the guitar, and keep fit</li>
              <li>Be less judgmental</li>
            </ol>
          </Animate>
        </Card>
      </Main>
    </VerticalSection>
  );
};

export default About;
