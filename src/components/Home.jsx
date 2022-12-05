import React from 'react'

const home = () => {
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

          <div className="relative lg:top-[10rem] top-[1rem] ">
          <div className="absolute leading-[0.75]">CreativeCreative</div>
          <div className="absolute z-20 leading-[0.75] text-fill-transparent text-stroke">CreativeCreative</div>
          </div>

          <div className="relative lg:top-[20rem] top-[7rem] ">
          <div className="absolute lg:right-0 leading-[0.75]">DeveloperDeveloper</div>
          <div className="absolute lg:right-0 z-20 leading-[0.75] text-fill-transparent text-stroke">DeveloperDeveloper</div>
          </div>

          <img className="absolute lg:right-0 right-0 lg:top-[10rem] top-[14rem] z-10 lg:h-[3em] h-[3.5em] rounded-[2em] lg:mr-14" src="./assets/me.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default home