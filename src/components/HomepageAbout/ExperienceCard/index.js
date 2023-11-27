import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function ExperienceCard({ data }) {
  const { imgSrc, title, link, company, period, tasks } = data;
  return (
    <div className={clsx('row', styles.experienceCardContainer)}>
      <div className='col col--3'>
        <div className={clsx(styles.companyContainer)}>
          <img
            loading='lazy'
            className={clsx(styles.companyImage)}
            src={imgSrc}
            alt={`${company} logo`}
          />
        </div>
      </div>
      <div className='col col--9'>
        <h4>{title}</h4>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <h5>{company}</h5>
        </a>
        <em>{period}</em>
        <ul>
          {tasks.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
