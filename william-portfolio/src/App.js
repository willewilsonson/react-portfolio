import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import gmailLogo from './4202766_email_gmail_mail_icon.png';
import githubLogo from './4202858_github_icon.png';
import linkedInLogo from './5282542_linkedin_network_social network_linkedin logo_icon.png';
import facebookLogo from './2515845_black and white_dark grey_facebook_icon.png';

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
        <nav className="app__nav-links">
          <div className="nav-links__link-container">
            <img src={gmailLogo} className="nav-links__logo"></img>
          </div>
          <div className="nav-links__link-container">
            <img src={githubLogo} className="nav-links__logo"></img>
          </div>
          <div className="nav-links__link-container">
            <img src={linkedInLogo} className="nav-links__logo"></img>
          </div>
          <div className="nav-links__link-container">
            <img src={facebookLogo} className="nav-links__logo"></img>
          </div>
        </nav>
        <About height={height}/>
        <Skills height={height}/>
      </section>
    </div>
  );
}

export default App;
