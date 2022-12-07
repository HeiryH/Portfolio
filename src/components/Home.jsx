import React from 'react'
import { motion } from "framer-motion"

const home = () => {

  const Creative = {
    animate: {
      x: [0, -2520],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 8,
          ease: "linear",
        },
      },
    },
  }

  const CreativeDelay = {
    animate: {
      x: [0, -2520],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 8,
          ease: "linear",
          delay: 3.7,
        },
      },
    },
  }

  const Developer = {
    animate: {
      x: [-1020, 1650],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 8,
          ease: "linear",
        },
      },
    },
  }

  const DeveloperDelay = {
    animate: {
      x: [-1020, 1650],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 8,
          ease: "linear",
          delay: 3.7,

        },
      },
    },
  }

  return (
    <div>
      <div className="
      lg:h-[100vh]
      h-[80vh]
      font-abhaya 
      font-extrabold 
      text-9xl
      lg:text-[14.5em]
      block
      overflow-x-hidden">

        <div className="">

          <div className="relative lg:top-[10rem] top-[1rem]">

            <motion.div variants={Creative} animate="animate" className="absolute right-[-850px] leading-[0.75]">Creative</motion.div>

            <motion.div variants={Creative} animate="animate" className="absolute right-[-850px] z-[3] leading-[0.75] text-fill-transparent text-stroke">Creative</motion.div>

            <motion.div variants={CreativeDelay} animate="animate" className="absolute right-[-850px] leading-[0.75]">Creative</motion.div>

            <motion.div variants={CreativeDelay} animate="animate" className="absolute right-[-850px] z-[3] leading-[0.75] text-fill-transparent text-stroke">Creative</motion.div>

            <motion.div variants={CreativeDelay} animate="animate" className="absolute right-[-850px] leading-[0.75]">Creative</motion.div>

            <motion.div variants={CreativeDelay} animate="animate" className="absolute right-[-850px] z-[3] leading-[0.75] text-fill-transparent text-stroke">Creative</motion.div>

          </div>

          <img className="absolute lg:right-0 right-0 lg:top-[10rem] top-[14rem] lg:h-[3em] h-[3.5em] rounded-[2em] lg:mr-14 z-[2] " src="./assets/me.jpg" alt="" />


          <div className="relative lg:top-[20rem] top-[7rem]">

            <motion.div variants={Developer} animate="animate" className="absolute lg:left-[0px] leading-[0.75]">Developer</motion.div>

            <motion.div variants={Developer} animate="animate" className="absolute lg:left-[0px] z-[3] leading-[0.75] text-fill-transparent text-stroke">Developer</motion.div>

            <motion.div variants={DeveloperDelay} animate="animate" className="absolute lg:left-[0px] leading-[0.75]">Developer</motion.div>

            <motion.div variants={DeveloperDelay} animate="animate" className="absolute lg:left-[0px] z-[3] leading-[0.75] text-fill-transparent text-stroke">Developer</motion.div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default home