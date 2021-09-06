import './Skills.css';

const SkillsNavbar = ({displaySkills, setDisplaySkills}) => {

    const isActiveSkill = (id) => {
        if (displaySkills === id) {
            return ' active';
        }
        return '';
    };

    return (
        <nav className="skills__skills-navbar">
        <ul className="skills-navbar__content">
            <li className="skills-navbar__element">
                <button className={`skills-navbar__button${isActiveSkill('front-end')}`} id="front-end"
                onClick={() => setDisplaySkills('front-end')}
                >Front-end</button>
            </li>
            <li className="skills-navbar__element">
                <button className={`skills-navbar__button${isActiveSkill('back-end')}`} id="back-end"
                onClick={() => setDisplaySkills('back-end')}
                >Back-end</button>
            </li>
            <li className="skills-navbar__element">
            <button className={`skills-navbar__button${isActiveSkill('oevrigt')}`} id="oevrigt"
                onClick={() => setDisplaySkills('oevrigt')}
                >Övrigt</button>
            </li>
        </ul>
    </nav>
    )
}

export default SkillsNavbar;