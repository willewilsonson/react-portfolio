import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({height}) => {
    const[active, setActive] = useState([0, 0]);

    active[0] === 0 ? window.scroll(0, 0) : window.scroll(0, (active[0] * window.screen.height) - (100 - active[1]));
    
    

    return (
        <nav className="navbar">
        <ul className="navbar__container">
            <li className="navbar__element-left">
                <button className="navbar__button" id="top"
                onClick={() => setActive([0, 0])}
                >TOP</button>
            </li>
            <li className="navbar__element-left">
                <button className="navbar__button" id="about"
                onClick={() => setActive([1, 3])}
                >ABOUT</button>
            </li>
            <li className="navbar__element-left">
                <button className="navbar__button" id="skills"
                onClick={() => setActive([2, 16])}
                >SKILLS</button>
            </li>
            <li className="navbar__element-left">
                <button className="navbar__button" id="portfolio"
                onClick={() => setActive([3, 0])}
                >PROJECTS</button>
            </li>
            <li className="navbar__element-left">
                <button className="navbar__button" id="contact"
                onClick={() => setActive([4, 0])}
                >CONTACT</button>
            </li>
        </ul>
    </nav>
    )   
}

export default Navbar;