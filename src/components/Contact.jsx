import React from 'react'
import ReactDOM from 'react-dom'

const contact = ({ close }) => {
  return ReactDOM.createPortal(
    <div className="fixed bg-[#2b3232db] top-0 right-[0] z-[99]">
      <div className="mt-10 lg:mt-11 h-[100vh] w-fit mx-4 lg:mx-[3.7rem] flex flex-col items-end lg:justify-start font-fahkwang text-2xl [&>*]:mb-[5rem]">
        <button onClick={ () => close(false)}> <img src="./assets/close.svg" alt="" /> </button>
        <p>Wanna colaborate? Find me below!</p>
        <a href="https://telegram.me/HelmyHeiry"> Telegram </a>
        <a href="mailto: HelmyHeiry1104@gmail.com">Send Email</a>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default contact