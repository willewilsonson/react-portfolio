import './Skills.css';
import FrontEnd from './skills/FrontEnd';
import BackEnd from './skills/BackEnd';
import Languages from './skills/Languages';

const SkillsInfo = ({displaySkills}) => {

    const createDots = (number) => {
        const dots = ['0', '1', '2'];

        return dots.map((dot, i) => <div key={i} className={`circle-${dot} ${number > dot ? 'blue' : 'grey'}`}></div>);
    }

    const contentToDisplay = () => {
        if(displaySkills === 'front-end') {
            return <FrontEnd createDots={createDots}/>;
        }
        if(displaySkills === 'back-end') {
            return <BackEnd createDots={createDots}/>;
        }
        if(displaySkills === 'languages') {
            return <Languages createDots={createDots}/>;
        }
    };


    return (
        <div>
       { contentToDisplay() }
        </div>
    )
};

export default SkillsInfo;