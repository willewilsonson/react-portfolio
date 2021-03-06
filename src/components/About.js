import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './About.css';
import AboutInfo from './AboutInfo';
import profileImage from '../william_profile_image.png';
// import AboutNavbar from './AboutNavbar';

const About = ({height}) => {
    const[display, setDisplay] = useState('life');
    const box4 = useRef();

    gsap.registerPlugin(ScrollTrigger);
    
    useEffect(() => {
        gsap.to(box4.current, {
            opacity: 0,
            scale: 0.1,
                scrollTrigger: {
                    trigger: box4.current,
                    start: '25%',
                    end: '100% 10%',
                    scrub: true,
                }
        })
    });

    return(
        <section className="about" id='about-section' style={{height: height + 150 + 'px'}} ref={box4}>
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