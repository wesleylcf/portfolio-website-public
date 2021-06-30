import React from 'react';
import VerticalSection from '../../../components/Layout/VerticalSection/VerticalSection';
import Card from '../../../components/cards/Card/Card';
import Animate from '../../../components/Layout/Animate/Animate';
import Image from 'next/image';
import utilStyles from '../../../styles/utils.module.css';
import Main from '../../../components/Layout/Main/Main';
import Link from 'next/link';

const About = ({ darkMode }) => {
  return (
    <VerticalSection>
      <Main>
        <div style={{ margin: '4vh auto' }}>
          <Animate delay={0.8}>
            <Image
              src="/images/me2.jpg"
              width={100}
              height={134}
              className={utilStyles.borderCircle}
            ></Image>
          </Animate>
        </div>

        <Card side="center">
          <Animate delay={0.95}>
            <p>
              Hi there! My name is Wesley and I'm currently pursuing Computer
              Science at the Nanyang Technological Unviersity(2021-2024).
            </p>
            <p>
              I picked up programming as I was influenced by my siblings, and
              while serving National Service, I decided to take up a bunch of
              courses in a BFS manner to find a direction I could work towards.
            </p>
          </Animate>
          <Animate delay={1.1}>
            <p>
              Currently, I'm inclined towards Web development, and spend my free
              time doing projects that I find interesting, or provide insight.
              You can check out my recent projects{' '}
              <Link href="/blog/projects">
                <a style={{ color: darkMode ? 'turquoise' : 'teal' }}>here</a>
              </Link>
            </p>
          </Animate>
          <Animate delay={1.25}>
            <p>
              In the future, I hope to be able to work in companies like Google,
              which I think would be an invaluable experience and asset to my
              growth as a software engineer.
            </p>
          </Animate>
          <Animate delay={1.4}>
            <p>Some cool facts:</p>
            <ul>
              <li>I did gymnastics for around 13 years</li>
              <li>
                I play the guitar pretty well (though the genre is a bit unique
                @Tommy Emmanuel)
              </li>
              <li> I have a twin brother </li>
              <li>
                I have three siblings and all of us are current or future
                software engineers
              </li>
            </ul>
          </Animate>
        </Card>
      </Main>
    </VerticalSection>
  );
};

export default About;
