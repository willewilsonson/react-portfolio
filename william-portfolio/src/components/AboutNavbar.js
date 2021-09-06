import './About.css';

const AboutNavbar = ({display, setDisplay}) => {

    const isActive = (id) => {
        if (display === id) {
            return ' active';
        }
        return '';
    };

    return (
        <nav className="about__about-navbar">
        <ul className="about-navbar__content">
            <li className={`about-navbar__element${isActive('life')}`}>
                <button className='about-navbar__button' id="life"
                onClick={() => setDisplay('life')}
                >Life</button>
            </li>
            <li className={`about-navbar__element${isActive('education')}`}>
                <button className='about-navbar__button' id="education"
                onClick={() => setDisplay('education')}
                >Education</button>
            </li>
            <li className={`about-navbar__element${isActive('experiences')}`}>
                <button className='about-navbar__button' id="experiences"
                onClick={() => setDisplay('experiences')}
                >Experiences</button>
            </li>
        </ul>
    </nav>
    )
}

export default AboutNavbar;