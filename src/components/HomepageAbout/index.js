import React from 'react';
import clsx from 'clsx';
import ParagonImage from '../../../static/img/paragon-corp.png';
import XtrImage from '../../../static/img/xtrlogo.png';
import styles from './styles.module.css';
import ExperienceCard from './ExperienceCard';

export default function HomepageAbout() {
  const experienceList = [
    {
      imgSrc: ParagonImage,
      company: 'Paragon Technology and Innovation',
      title: 'Personal Contributor - Software Engineer',
      link: 'https://www.paragon-innovation.com/',
      period: 'September 2023 - Present',
      tasks: [
        'Analyzing the needs of users and defining the expected delivery timeline',
        'Undertook the complete lifecycle of solution development, including testing, and troubleshooting',
        'Develop a multichannel application to manage stocks and orders in multi-e-commerce',
      ],
    },
    {
      imgSrc: XtrImage,
      company: 'Xtremax Pte Ltd',
      title: 'Software Developer 1 - Frontend',
      link: 'https://www.xtremax.com/',
      period: 'October 2022 - August 2023',
      tasks: [
        'Develop software requirements in collaboration with the Product Owner and team',
        'Seeing the web as dynamically functional and maintaining the aspect of design',
        'Develop employee performance management system application',
      ],
    },
    {
      imgSrc: ParagonImage,
      company: 'Paragon Technology and Innovation',
      title: 'Associate Software Engineer',
      link: 'https://www.paragon-innovation.com/',
      period: 'September 2020 - September 2022',
      tasks: [
        'Develop an E-commerce enabler app, streamlining the progression from inbound to outbound operations within the e-commerce warehouse',
        'Develop and maintain both the beauty product landing page and its accompanying CMS from inception to completion',
      ],
    },
  ];
  return (
    <section id='about' className={styles.homepageAbout}>
      <div className='container'>
        <div className='row'>
          <div className={clsx('col col--6')}>
            <h2 className={clsx(styles.titleAbout)}>
              I love to <br />
              learn <br />
              something new, write code, and share knowledge
            </h2>
          </div>
          <div className={clsx('col col--6', styles.storyAbout)}>
            <h3>About me</h3>
            <p>
              In 2019, right before COVID-19 strikes, I graduated from
              Universitas Gadjah Mada with bachelor degree in network
              engineering. During pandemic, I've nothing much to do so I decided
              to learn web development from the Internet and join Fullstack
              JavaScript Bootcamp at Hacktiv8.
            </p>
            <p>
              I really enjoy learning about making websites, especially the
              frontend part. It's like being the architect and artist of the
              online world, ensuring that websites not only function well but
              also leave a lasting impression on visitors. Right now, I'm
              working on my own website to share what I can do with both the
              creative and technical aspects of web development.
            </p>
            <h3>My tech stack</h3>
            <div
              style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
                marginBottom: '30px',
              }}
            >
              <img
                loading='lazy'
                height='24px'
                src='https://img.shields.io/badge/-JavaScript-333333?style=flat&amp;logo=javascript'
                alt='JavaScript'
                className='img_Puoe'
              />
              <img
                loading='lazy'
                height='24px'
                src='https://img.shields.io/badge/-TypeScript-333333?style=flat&amp;logo=typescript'
                alt='TypeScript'
                className='img_Puoe'
              />
              <img
                loading='lazy'
                height='24px'
                src='https://img.shields.io/badge/-React-333333?style=flat&amp;logo=react'
                alt='React'
                className='img_Puoe'
              />
              <img
                loading='lazy'
                height='24px'
                src='https://img.shields.io/badge/-Vue-333333?style=flat&amp;logo=vue.js'
                alt='Vue'
                className='img_Puoe'
              />
              <img
                loading='lazy'
                height='24px'
                src='https://img.shields.io/badge/-Node-333333?style=flat&amp;logo=node.js'
                alt='Node.js'
                className='img_Puoe'
              />
              <img
                loading='lazy'
                height='24px'
                src='https://img.shields.io/badge/-Git-333333?style=flat-square&amp;logo=git'
                alt='Git'
                className='img_Puoe'
              />
              <img
                loading='lazy'
                height='24px'
                src='https://img.shields.io/badge/-Postgresql-333333?style=flat&amp;logo=postgresql'
                alt='PostgreSql'
                className='img_Puoe'
              />
              <img
                loading='lazy'
                height='24px'
                src='https://img.shields.io/badge/-Jira-333333?style=flat&amp;logo=jira'
                alt='jira'
                className='img_Puoe'
              />
            </div>
            <h3>My experience</h3>
            <div>
              {experienceList.map((experience, idx) => (
                <ExperienceCard key={idx} data={experience} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
