import React from "react";
import { useState } from "react";
import Contact from "./Contact";

function header() {
  const [ open, setOpen ] = useState(false);

  return (
    <div>
      <nav className="flex flex-row lg:mx-10 px-4 my-10 justify-between sticky">
        <a href="/Home" className="font-abhaya font-extrabold lg:text-5xl text-4xl">
          Helmy Heiry
        </a>
        <button className="grow-[0.03] lg:grow-[0.01]" onClick={ () => { setOpen(true);}}>
        <img className="w-6" src="./assets/hamburger.svg" alt="" />
        </button>
        {open && <Contact close={setOpen}/> }
      </nav>
    </div>
  )
}

export default header;