import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function TechStack() {
  return (
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
  );
}
