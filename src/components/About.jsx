import React from 'react'
import { motion as m } from "framer-motion"

const appear = {
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

const about = () => {
  return (
    <div>
      <div className="
        font-fahkwang text-xl lg:font-semibold font-medium h-[80vh] md:h-[80vh] lg:h-[80vh] flex flex-col overflow-x-hidden">

        <p className="lg:w-[25em] lg:self-end mb-[5em] md:ml-[15em] lg:mr-[3em] mx-2 text-right">
          Specializes in Web-services, development, illustration and animation.
          Full-stack developer living at the heart of Borneo, with a passion of
          programming and developing web app.
        </p>

        <p className="mx-2">Currently a full-time web developer at Boustead Brunei
        </p>

        <img className="lg:w-[45em] w-[30em] max-w-[50em] lg:self-start md:self-start self-center" src="./assets/car_vintage.svg" alt="" />

      </div>

      <div className="flex flex-col h-[80vh] md:h-[60vh] lg:h-[80vh] lg:mx-20 mx-2 child:my-10">
          <m.p className=" w-fit font-abhaya lg:text-7xl text-6xl font-extrabold" variants={appear} initial="initial" whileInView="animate" viewport={{once:false, amont: 0.3}} >Tools I Use</m.p>


        <div>
          <m.p className="font-abhaya text-5xl font-extrabold text-transparent lg:text-6xl text-stroke2 lg:text-stroke lg:ml-20" variants={appear} initial="initial" whileInView="animate" viewport={{once:false, amont: 0.3}}>Development</m.p>

          <m.div className="flex flex-row justify-around item-center lg:mx-20 lg:child:h-40 child:h-20" initial="initial" whileInView="animate" viewport={{once:false, amont: 0.3}} transition={{staggerChildren: 0.3}}>
            <m.img variants={appear} src="./assets/visual-studio.svg" alt="" />
            <m.img variants={appear} src="./assets/react-solid.svg" alt="" />
            <m.img variants={appear} src="./assets/node-js.svg" alt="" />
            <m.img variants={appear} src="./assets/figma.svg" alt="" />
          </m.div>

        </div>

        <div>

          <m.p className="font-abhaya lg:text-6xl text-3xl font-extrabold text-transparent text-stroke2 lg:text-stroke lg:ml-20 " variants={appear} initial="initial" whileInView="animate" viewport={{once:false, amont: 0.3}}>Design</m.p>

          <m.div className="flex flex-row flex-wrap justify-around item-center lg:mx-20 lg:child:h-40 child:h-20" initial="initial" whileInView="animate" viewport={{once:false, amont: 0.3}} transition={{staggerChildren: 0.5}}>
            <m.img variants={appear} src="./assets/adobe-after-effects.svg" alt="" />
            <m.img variants={appear} src="./assets/adobe-illustrator.svg" alt="" />
            <m.img variants={appear} src="./assets/adobe-photoshop.svg" alt="" />
          </m.div>

        </div>
      </div>
    </div>
  )
}

export default about