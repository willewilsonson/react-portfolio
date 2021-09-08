import React, { useState } from 'react';
import './Skills.css';
import SkillsNavbar from './SkillsNavbar';
import SkillsInfo from './SkillsInfo';

const Skills = ({height}) => {
    const[displaySkills, setDisplaySkills] = useState('front-end');

    return (
        <section className="skills" style={{height: height + 163 + 'px'}}>
            <h1 className="skills__title">Skills</h1>
            <SkillsNavbar displaySkills={displaySkills} setDisplaySkills={setDisplaySkills}/>
            <SkillsInfo displaySkills={displaySkills}/>
        </section>
    )
}

export default Skills;