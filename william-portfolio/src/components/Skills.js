import './Skills.css';

const Skills = ({height}) => {

    const createDots = (number) => {
        const dots = ['0', '1', '2'];

        return dots.map(dot => <div className={`circle-${dot} ${number > dot ? 'blue' : 'grey'}`}></div>);
    }

    return (
        <section className="skills" style={{height: height + 'px'}}>
            <h1 className="skills__title">Skills</h1>
            <ul className="skills__ul">
                <li className="skills__li">
                    <h2 className="skills__h2">Front-end JavaScript</h2>
                </li>
                <li className="skills__li">
                    <h3 className="skills__h3">REACT</h3>
                    {createDots(3)}
                </li>
                <li className="skills__li">
                    <h3 className="skills__h3">CSS(BEM)</h3>
                    {createDots(3)}
                </li>
                <li className="skills__li">
                    <h3 className="skills__h3">REDUX</h3>
                    {createDots(2)}
                </li>
                <li className="skills__li">
                    <h3 className="skills__h3">DOM-MANIPULATION</h3>
                    {createDots(2)}
                </li>
                <li className="skills__li">
                    <h3 className="skills__h3">GATSBY</h3>
                    {createDots(1)}
                </li>
            </ul>
        </section>
    )
}

export default Skills;