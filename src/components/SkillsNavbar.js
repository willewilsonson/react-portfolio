import { useRef } from 'react';
import gsap from 'gsap';
import './Skills.css';

const SkillsNavbar = ({displaySkills, setDisplaySkills}) => {
    const activeButton = useRef();

    gsap.fromTo(activeButton.current, {duration: 5, opacity: 0, color: '#fff'}, {opacity: 1, color: "#000"})

    const isActiveSkill = (id) => {
        if (displaySkills === id) {
            return ' activeSkill';
        }
        return '';
    };

    return (
        <nav className="skills__skills-navbar">
        <ul className="skills-navbar__content">
            <li ref={activeButton.current} className={`skills-navbar__element${isActiveSkill('front-end')}`}>
                <button className='skills-navbar__button' id="front-end"
                onClick={() => setDisplaySkills('front-end')}
                >Front-end</button>
            </li>
            <li ref={activeButton.current} className={`skills-navbar__element${isActiveSkill('back-end')}`}>
                <button className='skills-navbar__button' id="back-end"
                onClick={() => setDisplaySkills('back-end')}
                >Back-end</button>
            </li>
            <li ref={activeButton.current} className={`skills-navbar__element${isActiveSkill('languages')}`}>
                <button className='skills-navbar__button' id="languages"
                onClick={() => setDisplaySkills('languages')}
                >Tools and Techs</button>
            </li>
        </ul>
    </nav>
    )
}

export default SkillsNavbar;