import React, { useState } from 'react';
import './About.css';
import AboutInfo from './AboutInfo';
import AboutNavbar from './AboutNavbar';

const About = ({height}) => {
    const[display, setDisplay] = useState('life');

    return(
        <section className="about" style={{height: height + 44 + 'px'}}>
            <img src="" alt="" className="about__image" />
            <h1 className="about__title">About me</h1>
            <AboutNavbar display={display} setDisplay={setDisplay}/>
            <AboutInfo display={display}/>
        </section>
    )
}

export default About;