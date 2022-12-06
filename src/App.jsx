import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import bgImg from '/assets/concrete-wall-texture.svg';

function App() {
  return (
    <div className="">
      <img className="h-[100%] fixed z-0 object-cover w-full mix-blend-multiply pointer-events-none" src={bgImg} alt="" />
      <div className="relative">
      <Header/>
      <Home/>
      <About/>
      <Work/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
