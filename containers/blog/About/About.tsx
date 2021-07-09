import React from 'react';
import VerticalSection from '../../../components/Layout/VerticalSection/VerticalSection';
import Card from '../../../components/cards/Card/Card';
import Animate from '../../../components/Layout/Animate/Animate';
import Image from 'next/image';
import utilStyles from '../../../styles/utils.module.css';
import Main from '../../../components/Layout/Main/Main';
import Link from 'next/link';

const About = ({ darkMode, isMobile }) => {
  return (
    <VerticalSection>
      <Main>
        <div style={{ margin: '4vh auto' }}>
          <Animate delay={0.8}>
            <Image
              src="/images/me.jpg"
              width={100}
              height={134}
              className={utilStyles.borderCircle}
              alt="insert handsome guy"
              title="handsome guy"
            ></Image>
          </Animate>
        </div>

        <Card side="center">
          <Animate delay={0.95}>
            <p>
              Hi there, and welcome to my blog! My name is Wesley and I'm 21
              this year. I'm currently pursuing Computer Science at the Nanyang
              Technological Unviersity(2021-2024).
            </p>
            <p>
              I picked up programming as I was influenced by my siblings, and
              while serving National Service, I took a bunch of courses in a
              breadth-first manner to find a direction that I could work
              towards.
            </p>
          </Animate>
          <Animate delay={1.1}>
            <p>
              Currently, I'm inclined towards Web development, and spend my free
              time doing projects that I find interesting, or provide insight.
              You can check out my recent projects{' '}
              <Link href="/blog/projects">
                <a
                  style={{ color: darkMode ? 'turquoise' : 'teal' }}
                  target="_blank"
                >
                  here
                </a>
              </Link>
            </p>
          </Animate>
          <Animate delay={1.25}>
            <p>
              In the future, I hope to be able to work in a tech company with an
              awesome culture like Google, which I think would be an invaluable
              experience and asset to my growth as a software engineer.
            </p>
          </Animate>
          <Animate delay={1.4}>
            <p style={{ minWidth: '36vw' }}>Some cool facts:</p>
            <ul>
              <li>I did gymnastics for around 13 years</li>
              <li>I play the guitar, and my idol is Tommy Emmanuel!</li>
              <li> I have a twin brother (meh.) </li>
              <li>
                I have three siblings and all of us are current or future
                software engineers
              </li>
            </ul>
            <p>Stuff I hope to accomplish while in university</p>
            <ol>
              <li>Make lots of awesome friends and find my S/O</li>
              <li>
                Stay in hall for as long as I can ( I live like 1h45mins away )
              </li>
              <li>
                Consistently work on this website, practice the guitar, and keep
                fit
              </li>
              <li>Get good enough for people to stalk me here</li>
            </ol>
          </Animate>
        </Card>
      </Main>
    </VerticalSection>
  );
};

export default About;
