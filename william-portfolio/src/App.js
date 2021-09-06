import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import NavLinks from './components/NavLinks';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

// const height = window.screen.height - 100

const App = () => {
  const[height, setHeight] = useState(window.screen.height);

  window.addEventListener('resize', () => {
    setHeight(window.screen.height - 100)
  })

  return (
    <div className="App">
      <section className="app__section">
        <Navbar height={height}/>
        <Header height={height}/>
        <NavLinks />
        <About height={height}/>
        <Skills height={height}/>
        <Portfolio height={height}/>
      </section>
    </div>
  );
}

export default App;
