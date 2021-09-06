import '../Skills.css';


const FrontEnd = ({createDots}) => {

    return (
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
    )

}

export default FrontEnd;