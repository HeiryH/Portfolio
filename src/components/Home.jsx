import React from 'react'
import { motion as m } from "framer-motion"

const home = () => {

  const Creative = {
    animate: {
      x: [0, -2220],
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
      x: [0, -2220],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 8,
          ease: "linear",
          delay: 4.2,
        },
      },
    },
  }

  const Developer = {
    animate: {
      x: [0, 2370],
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
      x: [0, 2370],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 8,
          ease: "linear",
          delay: 4,
        },
      },
    },
  }

  const ImageAnim = {
    initial: {
      opacity: 0,
      x: "-600px",
    },
    animate: {
      x: "0",
      opacity: 1,
      transition: {duration: 3.5, ease:"easeOut"},
    }
  }

  return (
    <div>
      <div className="
      lg:h-[100vh]
      md:h-[80vh]
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

            <m.div variants={Creative} animate="animate" className="absolute left-[100vw] leading-[0.75]">Creative</m.div>

            <m.div variants={Creative} animate="animate" className="absolute left-[100vw] z-[3] leading-[0.75] text-fill-transparent text-stroke">Creative</m.div>

            <m.div variants={CreativeDelay} animate="animate" className="absolute left-[100vw] leading-[0.75]">Creative</m.div>

            <m.div variants={CreativeDelay} animate="animate" className="absolute left-[100vw] z-[3] leading-[0.75] text-fill-transparent text-stroke">Creative</m.div>

          </div>

          <m.img variants={ImageAnim} initial="initial" animate="animate" className="self-end lg:w-[30rem] w-[22rem] mt-14 mr-10 rounded-[2em] z-[2] " src="./assets/me.jpg" alt="" />


          <div className="self-start relative lg:top-[-26rem] top-[-28rem]">

            <m.div variants={Developer} animate="animate" className="absolute right-0 leading-[0.75]">Developer</m.div>

            <m.div variants={Developer} animate="animate" className="absolute right-0 z-[3] leading-[0.75] text-fill-transparent text-stroke">Developer</m.div>

            <m.div variants={DeveloperDelay} animate="animate" className="absolute right-0 leading-[0.75]">Developer</m.div>

            <m.div variants={DeveloperDelay} animate="animate" className="absolute right-0 z-[3] leading-[0.75] text-fill-transparent text-stroke">Developer</m.div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default home