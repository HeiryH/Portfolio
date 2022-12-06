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
      <Header />
      <Home />
      <About />
      <Work />
      <Footer />
    </div>
  )
}

export default App
