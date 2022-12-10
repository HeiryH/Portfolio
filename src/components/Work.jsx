import React from 'react';
import Works from '../data/Work';
import WorkLinks from './WorkLink';

const work = () => {
  return (
    <div>
      <div className="h-[100vh] flex flex-col justify-center break-words">
        {Works.map(project => (
          <a className="lg:w-fit grow-[0.1] lg:grow-0" href={project.link}>
          <WorkLinks  title={project.title}/>
          </a>
        ))}
      </div>
    </div>
  )
}

export default work