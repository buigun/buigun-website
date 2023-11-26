import React from 'react';

export default function ExperienceCard({ data }) {
  const { imgSrc, title, link, company, period, tasks } = data;
  return (
    <div className='row' style={{ marginBottom: '10px' }}>
      <div className='col col--3'>
        <div
          style={{
            backgroundColor: '#EBEDF0',
            borderRadius: '8px',
            textAlign: 'center',
            padding: '4px',
            marginBottom: '12px',
          }}
        >
          <img
            style={{
              margin: 'auto',
              display: 'block',
            }}
            height='32px'
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
