import React, { useState, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import NavLinks from './components/NavLinks';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// const height = window.screen.height - 100

const App = () => {
  const[height, setHeight] = useState("100%");
  const scroller = useRef();

  // const getHeight = () => {
  //   return window.screen.height < 1200 ? window.screen.height - 150 : false;
  // };

  // window.addEventListener('resize', () => {
  //   setHeight(getHeight())
  // })

  return (
    <div className="App">
      <section className="app__section" ref={scroller}>
        <Navbar height={height}/>
        <Header height={height}/>
        {window.innerWidth < 600 ? <NavLinks /> : false}
        <Projects height={height}/>
        <Skills height={height}/>
        <About height={height}/>
        <ContactForm height={height}/>
        {window.innerWidth > 600 ? <NavLinks /> : false}
        <Footer />
      </section>
    </div>
  );
}

export default App;
