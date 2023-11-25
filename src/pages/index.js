import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { TypeAnimation } from 'react-type-animation';
import HeroImg from '../../static/img/header-img.svg';

import styles from './index.module.css';
import 'animate.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx('container')}>
        <div className={clsx('row')} style={{ alignItems: 'center' }}>
          <div className={clsx('col col--7')}>
            <h1 className='hero__title'>
              {`Buigun, `}
              <br />
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  2000,
                  'Frontend Developer',
                  2000,
                  'Writer',
                  2000,
                ]}
                repeat={Infinity}
              />
            </h1>
            <p className='hero__subtitle'>
              Hello world! 👋🏻 My name is Budi Indra Gunawan{' '}
              <strong>{`(buigun). `}</strong>I have over two years of experience
              in web development, mostly in frontend. Adeptly utilizing
              JavaScript libraries and frameworks such as
              <strong>{` Vue JS, React JS, and Express JS. `}</strong>I love to
              write codes and words.
              <br />
              <br />
              Welcome to my website 😆
            </p>
          </div>
          <div className={clsx('col col--5 animate__animated animate__zoomIn')}>
            <HeroImg />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description='Description will go into a meta tag in <head />'>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
