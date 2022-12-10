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
      md:
      h-[80vh]
      font-abhaya 
      font-extrabold
      text-9xl
      lg:text-[14.5em]
      block
      overflow-x-hidden
      ">

        <div className="flex flex-col lg:mt-[0] mt-10">

          <div className="relative lg:top-[10rem] top-[1rem]">

            <motion.div variants={Creative} animate="animate" className="absolute right-[-850px] leading-[0.75]">Creative</motion.div>

            <motion.div variants={Creative} animate="animate" className="absolute right-[-850px] z-[3] leading-[0.75] text-fill-transparent text-stroke">Creative</motion.div>

            <motion.div variants={CreativeDelay} animate="animate" className="absolute right-[-850px] leading-[0.75]">Creative</motion.div>

            <motion.div variants={CreativeDelay} animate="animate" className="absolute right-[-850px] z-[3] leading-[0.75] text-fill-transparent text-stroke">Creative</motion.div>

          </div>

          <img className="self-end lg:w-[30rem] w-[22rem] mt-14 mr-10 rounded-[2em] z-[2] " src="./assets/me.jpg" alt="" />


          <div className="self-start relative lg:top-[-26rem] top-[-28rem]">

            <motion.div variants={Developer} animate="animate" className="absolute leading-[0.75]">Developer</motion.div>

            <motion.div variants={Developer} animate="animate" className="absolute z-[3] leading-[0.75] text-fill-transparent text-stroke">Developer</motion.div>

            <motion.div variants={DeveloperDelay} animate="animate" className="absolute leading-[0.75]">Developer</motion.div>

            <motion.div variants={DeveloperDelay} animate="animate" className="absolute z-[3] leading-[0.75] text-fill-transparent text-stroke">Developer</motion.div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default home