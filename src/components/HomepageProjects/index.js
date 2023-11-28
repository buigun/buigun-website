import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const projectList = [
  {
    title: 'Magpie V3',
    img: 'test',
    status: 'Launched',
    role: 'Frontend developer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quisquam inventore repudiandae ea nemo quas temporibus necessitatibus deleniti ipsum. Adipisci eum amet quis! Assumenda quibusdam, consequuntur facilis rerum dolorum molestiae!',
  },
  {
    title: 'Sentichat',
    img: 'test',
    status: 'Launched',
    role: 'Frontend developer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quisquam inventore repudiandae ea nemo quas temporibus necessitatibus deleniti ipsum. Adipisci eum amet quis! Assumenda quibusdam, consequuntur facilis rerum dolorum molestiae!',
  },
  {
    title: 'Performa',
    img: 'test',
    status: 'Launched',
    role: 'Frontend developer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quisquam inventore repudiandae ea nemo quas temporibus necessitatibus deleniti ipsum. Adipisci eum amet quis! Assumenda quibusdam, consequuntur facilis rerum dolorum molestiae!',
  },
  {
    title: 'Magpie V2',
    img: 'test',
    status: 'Launched',
    role: 'Frontend developer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quisquam inventore repudiandae ea nemo quas temporibus necessitatibus deleniti ipsum. Adipisci eum amet quis! Assumenda quibusdam, consequuntur facilis rerum dolorum molestiae!',
  },
  {
    title: 'OMG',
    img: 'test',
    status: 'Launched',
    role: 'Frontend developer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quisquam inventore repudiandae ea nemo quas temporibus necessitatibus deleniti ipsum. Adipisci eum amet quis! Assumenda quibusdam, consequuntur facilis rerum dolorum molestiae!',
  },
  {
    title: 'Lifeline',
    img: 'test',
    status: 'Launched',
    role: 'Frontend developer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quisquam inventore repudiandae ea nemo quas temporibus necessitatibus deleniti ipsum. Adipisci eum amet quis! Assumenda quibusdam, consequuntur facilis rerum dolorum molestiae!',
  },
];

function ProjectCard({ title, img, status, role, description }) {
  return (
    <div className='col col--4'>
      <div className={clsx(styles.projectCard)}>
        <div className='text--justify'>{img}</div>
        <div className='text--justify'>
          <h3>{title}</h3>
          <p>Status: {status}</p>
          <p>Role: {role}</p>
          <p>{description}</p>
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
