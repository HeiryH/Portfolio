import React from 'react'

const about = () => {
  return (
    <div>
      <div className="
        font-fahkwang
        text-xl
        h-[80vh]
        lg:h-[100vh]
        flex
        flex-col
        overflow-x-hidden">

        <p className="lg:w-[25em] lg:self-end mb-[5em] lg:mr-[3em] mx-2 text-right">
          Specializes in Web-services, development, illustration and animation.
          Full-stack developer living at the heart of Borneo, with a passion of
          programming and developing web app.
        </p>

        <p className="mx-2">Currently a full-time web developer at Boustead Brunei
        </p>

        <img className="lg:w-[45em] w-[30em] max-w-[50em] lg:self-start self-center" src="./assets/car_vintage.svg" alt="" />

      </div>

      <div className="flex flex-col h-[80vh] lg:h-[100vh] lg:mx-20 mx-2 child:my-10">
        <div>
          <p className=" w-fit font-abhaya lg:text-7xl text-6xl font-extrabold">Tools I Use</p>
        </div>


        <div>
          <p className="font-abhaya text-5xl font-extrabold text-transparent lg:text-6xl text-stroke text-stroke lg:ml-20">Development</p>

          <div className="flex flex-row justify-around item-center lg:mx-20 lg:child:h-40 child:h-24">
            <img src="./assets/visual-studio.svg" alt="" /><img src="./assets/react-solid.svg" alt="" /><img src="./assets/node-js.svg" alt="" />
            <img src="./assets/figma.svg" alt="" />
          </div>

        </div>

        <div>

          <p className="font-abhaya lg:text-6xl text-5xl font-extrabold text-transparent text-stroke text-stroke lg:ml-20 ">Design</p>

          <div className="flex flex-row flex-wrap justify-around item-center lg:mx-20 lg:child:h-40 child:h-24">
            <img src="./assets/adobe-after-effects.svg" alt="" />
            <img src="./assets/adobe-illustrator.svg" alt="" />
            <img src="./assets/adobe-photoshop.svg" alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default about