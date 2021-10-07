import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Skills.css';
import SkillsNavbar from './SkillsNavbar';
import SkillsInfo from './SkillsInfo';

const Skills = ({height}) => {
    const[displaySkills, setDisplaySkills] = useState('front-end');
    const box3 = useRef();

    gsap.registerPlugin(ScrollTrigger);
    
    useEffect(() => {
        gsap.to(box3.current, {
            opacity: 0,
            scale: 0.1,
                scrollTrigger: {
                    trigger: box3.current,
                    start: '20%',
                    end: '100% 10%',
                    scrub: true
                }
        })
    });

    return (
        <section className="skills" id='skills-section' style={{height: height + 150 + 'px'}} ref={box3}>
            <h1 className="skills__title">Skills</h1>
            <SkillsNavbar displaySkills={displaySkills} setDisplaySkills={setDisplaySkills}/>
            <SkillsInfo displaySkills={displaySkills}/>
        </section>
    )
}

export default Skills;