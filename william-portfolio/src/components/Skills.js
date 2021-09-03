import './Skills.css';
import SkillsNavbar from './SkillsNavbar';
import SkillsInfo from './SkillsInfo';

const Skills = ({height}) => {

    return (
        <section className="skills" style={{height: height + 'px'}}>
            <h1 className="skills__title">Skills</h1>
            <SkillsNavbar />
            <SkillsInfo />
        </section>
    )
}

export default Skills;