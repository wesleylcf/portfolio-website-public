import Layout from '../components/Layout/Layout';
import React from 'react';
import Intro from '../components/home/Intro/Intro';
import About from '../components/home/About/About';

export default function Home() {
  return (
    <div>
      <Layout>
        <Intro />
        <About />
      </Layout>
    </div>
  );
}
