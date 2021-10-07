import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = ({height}) => {
    const[active, setActive] = useState([0, 0]);
    const[scrollElement, setScrollElement] = useState('top');

    useEffect(() => {
        const element = document.getElementById(scrollElement);
        element.scrollIntoView();
        console.log(scrollElement);
    }, [scrollElement])

    const scrollAmountContact = window.innerWidth < 600 ? 150 : 150;
    const scrollAmount = window.innerWidth < 600 ? 100 : 150;

    // active[0] === 0 ? window.scroll(0, 0) : window.scroll(0, (active[0] * window.screen.height) - active[1]);
    
    return (
        <nav className="navbar">
        <ul className="navbar__container">
            <li className="navbar__element-left">
                <button className="navbar__button" id="top"
                onClick={() => setScrollElement('top-section')}
                >TOP</button>
            </li>
            <li className="navbar__element-left">
                <button className="navbar__button" id="portfolio"
                onClick={() => setScrollElement('portfolio-section')}
                >PROJECTS</button>
            </li>
            <li className="navbar__element-left">
                <button className="navbar__button" id="skills"
                onClick={() => setScrollElement('skills-section')}
                >SKILLS</button>
            </li>
            <li className="navbar__element-left">
                <button className="navbar__button" id="about"
                onClick={() => setScrollElement('about-section')}
                >ABOUT</button>
            </li>
            <li className="navbar__element-left">
                <button className="navbar__button" id="contact"
                onClick={() => setScrollElement('contact-section')}
                >CONTACT</button>
            </li>
        </ul>
    </nav>
    )   
}

export default Navbar;