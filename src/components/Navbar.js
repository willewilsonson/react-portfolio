import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({height}) => {
    const[active, setActive] = useState([0, 0]);

    const scrollAmountContact = window.innerWidth < 600 ? 150 : 150;
    const scrollAmount = window.innerWidth < 600 ? 100 : 150;

    active[0] === 0 ? window.scroll(0, 0) : window.scroll(0, (active[0] * window.screen.height) - active[1]);
    
    return (
        <nav className="navbar">
        <ul className="navbar__container">
            <li className="navbar__element-left">
                <button className="navbar__button" id="top"
                onClick={() => setActive([0, scrollAmount])}
                >TOP</button>
            </li>
            <li className="navbar__element-left">
                <button className="navbar__button" id="portfolio"
                onClick={() => setActive([1, scrollAmount])}
                >PROJECTS</button>
            </li>
            <li className="navbar__element-left">
                <button className="navbar__button" id="skills"
                onClick={() => setActive([2, scrollAmount + 150])}
                >SKILLS</button>
            </li>
            <li className="navbar__element-left">
                <button className="navbar__button" id="about"
                onClick={() => setActive([3, scrollAmount + 300])}
                >ABOUT</button>
            </li>
            <li className="navbar__element-left">
                <button className="navbar__button" id="contact"
                onClick={() => setActive([4, scrollAmountContact + 400])}
                >CONTACT</button>
            </li>
        </ul>
    </nav>
    )   
}

export default Navbar;