import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import HeroImg from '../../static/img/header-img.svg';

import HomepageAbout from '../components/HomepageAbout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import 'animate.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx('container')}>
        <div className={clsx('row', styles.heroRow)}>
          <div className={clsx('col col--7')}>
            <div className={clsx(styles.heroTitleContainer)}>
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
            </div>
            <p className='hero__subtitle'>
              Hello world! 👋🏻 My name is Budi Indra Gunawan
              <strong>{` (buigun). `}</strong>I have over two years of
              experience in web development, mostly in frontend. Welcome to my
              website 😁
            </p>
            <div className={clsx(styles.heroCta)}>
              <Link
                className='button button--secondary button--lg'
                to='/#about'
              >
                About me
              </Link>
            </div>
            <div className={clsx(styles.heroLinks)}>
              <Link to='https://linkedin.com/in/buigun'>
                <FontAwesomeIcon icon={faFileLines} /> resume
              </Link>
              <Link to='https://linkedin.com/in/buigun'>
                <FontAwesomeIcon icon={faLinkedinIn} /> linkedin
              </Link>
              <Link to='https://github.com/buigun'>
                <FontAwesomeIcon icon={faGithub} /> github
              </Link>
            </div>
          </div>
          <div className={clsx('col col--5 animate__animated animate__zoomIn')}>
            <HeroImg className={clsx(styles.heroImage)} />
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
        {/* <HomepageFeatures /> */}
        <HomepageAbout />
      </main>
    </Layout>
  );
}
