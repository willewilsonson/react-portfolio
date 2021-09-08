import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
// import NavLinks from './components/NavLinks';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

// const height = window.screen.height - 100

const App = () => {
  const[height, setHeight] = useState(window.screen.height - 150);

  window.addEventListener('resize', () => {
    setHeight(window.screen.height - 150)
  })

  return (
    <div className="App">
      <section className="app__section">
        <Navbar height={height}/>
        <Header height={height}/>
        {/* <NavLinks /> */}
        <About height={height}/>
        <Skills height={height}/>
        <Projects height={height}/>
        <ContactForm height={height}/>
      </section>
    </div>
  );
}

export default App;
