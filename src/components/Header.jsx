import React from "react";

function header() {
  return(
    <div>
      <nav className="flex flex-row lg:mx-10 mx-2 py-10 justify-between sticky">
        <a href="/Home" className="font-abhaya font-extrabold lg:text-5xl text-4xl">
          Helmy Heiry
        </a>
        <div 
        className="
        text-base
        w-[16rem]
        flex
        flex-row 
        lg:grow-[0.05] 
        justify-between 
        items-end
        font-fahkwang">
          <a href="/About">About</a>
          <a href="/Work">Work</a>
          <a href="/Contact">Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default header;