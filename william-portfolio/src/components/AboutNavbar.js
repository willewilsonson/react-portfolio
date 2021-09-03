import './About.css';

const AboutNavbar = ({setDisplay}) => {
    return (
        <nav className="about__about-navbar">
        <ul className="about-navbar__content">
            <li className="about-navbar__element">
                <button className="about-navbar__button active" id="life"
                onClick={() => setDisplay('life')}
                >Life</button>
            </li>
            <li className="about-navbar__element">
                <button className="about-navbar__button" id="education"
                onClick={() => setDisplay('education')}
                >Education</button>
            </li>
            <li className="about-navbar__element">
                <button className="about-navbar__button" id="experiences"
                onClick={() => setDisplay('experiences')}
                >Experiences</button>
            </li>
        </ul>
    </nav>
    )
}

export default AboutNavbar;