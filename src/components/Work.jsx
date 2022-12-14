import React from 'react';
import Works from '../data/Work';
import WorkLinks from './WorkLink';
import { motion as m } from "framer-motion"

const appear ={
  initial: { 
    opacity: 0,
    y: "20px",
    transition: {duration: 1},
    },
  animate: {
    opacity: 1,
    transition: {duration: 1, ease:"easeOut"},
    y: "0"
  }
}

const work = () => {
  return (
    <div>
      <m.div initial="initial" whileInView="animate"viewport={{once:false, amont: 1}} transition={{staggerChildren: 0.4}} className="h-[100vh] md:h-[80vh] lg:h-[80vh] flex flex-col justify-center break-words">
        {Works.map(project => (
          <m.a variants={appear} target="_blank" className="grow-[0.1] lg:grow-0" href={project.link}>
          <WorkLinks  title={project.title}/>
          </m.a>
        ))}
      </m.div>
    </div>
  )
}

export default work