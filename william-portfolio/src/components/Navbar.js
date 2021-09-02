import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
        <ul className="navbar__container">
            <li className="navbar__element-left">
                <button className="navbar__button" id="about">ABOUT</button>
            </li>
            <li className="navbar__element-left">
                <button className="navbar__button" id="skills">SKILLS</button>
            </li>
            <li className="navbar__element-left">
                <button className="navbar__button" id="portfolio">PORTFOLIO</button>
            </li>
            <li className="navbar__element-left">
                <button className="navbar__button" id="contact">CONTACT</button>
            </li>
            <li className="navbar__element-right">FB</li>
            <li className="navbar__element-right">LI</li>
            <li className="navbar__element-right">GH</li>
        </ul>
    </nav>
    )   
}

export default Navbar;