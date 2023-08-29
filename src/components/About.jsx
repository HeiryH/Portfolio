import React from 'react'
import { motion as m } from "framer-motion"

const appear = {
  initial: {
    opacity: 0,
    y: "20px",
    transition: { duration: 1 },
  },
  animate: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
    y: "0"
  }
}

const about = () => {
  return (
    <div>

      <div className="flex flex-col lg:mx-20 mx-2 child:my-10">
        <m.p className=" w-fit font-bebasNeue lg:text-7xl text-6xl font-extrabold" variants={appear} initial="initial" whileInView="animate" viewport={{ once: false, amont: 0.3 }} >Tools I Use</m.p>


        <div>
          <m.p className="text-5xl font-extrabold text-transparent lg:text-6xl text-stroke2 lg:text-stroke lg:ml-20" variants={appear} initial="initial" whileInView="animate" viewport={{ once: false, amont: 0.3 }}>Development</m.p>

          <m.div className="flex flex-row justify-around item-center lg:mx-20 lg:child:h-40 child:h-20" initial="initial" whileInView="animate" viewport={{ once: false, amont: 0.3 }} transition={{ staggerChildren: 0.3 }}>
            <m.img variants={appear} src="./assets/visual-studio.svg" alt="" />
            <m.img variants={appear} src="./assets/react-solid.svg" alt="" />
            <m.img variants={appear} src="./assets/node-js.svg" alt="" />
            <m.img variants={appear} src="./assets/figma.svg" alt="" />
          </m.div>

        </div>

        <div>

          <m.p className="lg:text-6xl text-5xl font-extrabold text-transparent text-stroke2 lg:text-stroke lg:ml-20 " variants={appear} initial="initial" whileInView="animate" viewport={{ once: false, amont: 0.3 }}>Design</m.p>

          <m.div className="flex flex-row flex-wrap justify-around item-center lg:mx-20 lg:child:h-40 child:h-20" initial="initial" whileInView="animate" viewport={{ once: false, amont: 0.3 }} transition={{ staggerChildren: 0.5 }}>
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