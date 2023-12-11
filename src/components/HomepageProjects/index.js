import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import MagpieV3 from '../../../static/img/magpie-v3.png';
import Sentichat from '../../../static/img/sentichat.svg';
import Performa from '../../../static/img/performa.png';
import MagpieV2 from '../../../static/img/magpie-v2.svg';
import Omg from '../../../static/img/omg.png';
import Lifeline from '../../../static/img/lifeline.png';

const projectList = [
  {
    title: 'Magpie V3',
    img: <img height={'32px'} src={MagpieV3} />,
    status: 'Launched',
    role: 'Frontend developer',
    description: (
      <>
        <p>
          An order management system that automates tracking the number of
          orders and stock in multiple e-commerces
        </p>
        <div className={clsx(styles.techStackContainer)}>
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
            src='https://img.shields.io/badge/-React-333333?style=flat&amp;logo=react'
            alt='React'
            className='img_Puoe'
          />
          <img
            loading='lazy'
            height='24px'
            src='https://img.shields.io/badge/-ChakraUI-333333?style=flat&amp;logo=chakra-ui'
            alt='chakra-ui'
            className='img_Puoe'
          />
          <img
            loading='lazy'
            height='24px'
            src='https://img.shields.io/badge/-Cypress-333333?style=flat&amp;logo=cypress'
            alt='cypress'
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
            src='https://img.shields.io/badge/-Jira-333333?style=flat&amp;logo=jira'
            alt='jira'
            className='img_Puoe'
          />
        </div>
      </>
    ),
  },
  {
    title: 'Sentichat',
    img: <Sentichat style={{ height: '32px' }} />,
    status: 'Launched',
    role: 'Frontend developer',
    description: (
      <>
        <p>Revolutionising communication with seamless AI integration</p>
        <div className={clsx(styles.techStackContainer)}>
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
            src='https://img.shields.io/badge/-sass-333333?style=flat&amp;logo=sass'
            alt='Sass'
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
            src='https://img.shields.io/badge/-Jira-333333?style=flat&amp;logo=jira'
            alt='jira'
            className='img_Puoe'
          />
        </div>
      </>
    ),
  },
  {
    title: 'Performa',
    img: <img height={'32px'} src={Performa} />,
    status: 'Launched',
    role: 'Frontend developer',
    description: (
      <>
        <p>
          An employee performance management system that manages OKR and
          performance review
        </p>
        <div className={clsx(styles.techStackContainer)}>
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
            src='https://img.shields.io/badge/-Vue-333333?style=flat&amp;logo=vue.js'
            alt='Vue'
            className='img_Puoe'
          />
          <img
            loading='lazy'
            height='24px'
            src='https://img.shields.io/badge/-sass-333333?style=flat&amp;logo=sass'
            alt='Sass'
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
            src='https://img.shields.io/badge/-Jira-333333?style=flat&amp;logo=jira'
            alt='jira'
            className='img_Puoe'
          />
        </div>
      </>
    ),
  },
  {
    title: 'Magpie V2',
    img: <MagpieV2 style={{ height: '32px', marginLeft: '-24px' }} />,
    status: 'Launched',
    role: 'Frontend developer',
    description: (
      <>
        <p>
          An enabler that manage warehouse and simplifies the process from order
          to delivery for multiple e-commerces
        </p>
        <div className={clsx(styles.techStackContainer)}>
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
            src='https://img.shields.io/badge/-NextJS-333333?style=flat&amp;logo=next.js'
            alt='Next'
            className='img_Puoe'
          />
          <img
            loading='lazy'
            height='24px'
            src='https://img.shields.io/badge/-ChakraUI-333333?style=flat&amp;logo=chakra-ui'
            alt='chakra-ui'
            className='img_Puoe'
          />
          <img
            loading='lazy'
            height='24px'
            src='https://img.shields.io/badge/-Swr-333333?style=flat&amp;logo=swr'
            alt='Swr'
            className='img_Puoe'
          />
          <img
            loading='lazy'
            height='24px'
            src='https://img.shields.io/badge/-Git-333333?style=flat-square&amp;logo=git'
            alt='Git'
            className='img_Puoe'
          />
        </div>
      </>
    ),
  },
  {
    title: 'OMG Oh My Glam',
    img: <img height={'32px'} src={Omg} />,
    status: 'Launched',
    role: 'Frontend developer',
    description: (
      <>
        <p>A landing page for beauty product called OMG Oh My Glam</p>
        <div className={clsx(styles.techStackContainer)}>
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
            src='https://img.shields.io/badge/-GatsbyJS-333333?style=flat&amp;logo=gatsby'
            alt='Next'
            className='img_Puoe'
          />
          <img
            loading='lazy'
            height='24px'
            src='https://img.shields.io/badge/-ChakraUI-333333?style=flat&amp;logo=chakra-ui'
            alt='chakra-ui'
            className='img_Puoe'
          />
          <img
            loading='lazy'
            height='24px'
            src='https://img.shields.io/badge/-Git-333333?style=flat-square&amp;logo=git'
            alt='Git'
            className='img_Puoe'
          />
        </div>
      </>
    ),
  },
  {
    title: 'Lifeline',
    img: <img height={'32px'} src={Lifeline} />,
    status: 'Terminated',
    role: 'Frontend developer',
    description: (
      <>
        <p>
          Plasma convalescent donors app that securing 2nd place finish in the
          IT Paragon internal hackathon
        </p>
        <div className={clsx(styles.techStackContainer)}>
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
            src='https://img.shields.io/badge/-React-333333?style=flat&amp;logo=react'
            alt='React'
            className='img_Puoe'
          />
          <img
            loading='lazy'
            height='24px'
            src='https://img.shields.io/badge/-ChakraUI-333333?style=flat&amp;logo=chakra-ui'
            alt='chakra-ui'
            className='img_Puoe'
          />
          <img
            loading='lazy'
            height='24px'
            src='https://img.shields.io/badge/-Git-333333?style=flat-square&amp;logo=git'
            alt='Git'
            className='img_Puoe'
          />
        </div>
      </>
    ),
  },
];

function ProjectCard({ title, img, status, role, description }) {
  return (
    <div className='col col--4'>
      <div className={clsx(styles.projectCard)}>
        <div className='text--justify' style={{ marginBottom: '16px' }}>
          {img}
        </div>
        <div className='text--justify'>
          <h3>{title}</h3>
          <p>Status: {status}</p>
          <p>Role: {role}</p>
          {description}
        </div>
      </div>
    </div>
  );
}

export default function HomepageProjects() {
  return (
    <section id='projects' className={clsx(styles.projectsContainer)}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2 className={clsx(styles.headerProjects)}>Projects</h2>
          </div>
        </div>
        <div className={clsx('row')}>
          {projectList.map((props, idx) => (
            <ProjectCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
