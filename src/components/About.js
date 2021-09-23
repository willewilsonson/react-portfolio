import React, { useState } from 'react';
import './About.css';
import AboutInfo from './AboutInfo';
import profileImage from '../william_profile_image.png';
// import AboutNavbar from './AboutNavbar';

const About = ({height}) => {
    const[display, setDisplay] = useState('life');

    return(
        <section className="about" style={{height: height + 44 + 'px'}}>
            <h1 className="about__title">About me</h1>
            {/* <AboutNavbar display={display} setDisplay={setDisplay}/> */}
            <AboutInfo display={display} setDisplay={setDisplay}/>
            <div className="header__images">
                <img src={profileImage} alt="" className="about__profile-image"></img>
            </div>
        </section>
    )
}

export default About;