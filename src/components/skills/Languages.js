import '../Skills.css';


const Languages = ({createDots}) => {

    return (
        <ul className="skills__ul">
                <li className="skills__li">
                    <h3 className="skills__h3">JavaScript</h3>
                    {createDots(3)}
                </li>
                <li className="skills__li">
                    <h3 className="skills__h3">HTML5</h3>
                    {createDots(3)}
                </li>
                <li className="skills__li">
                    <h3 className="skills__h3">CSS3</h3>
                    {createDots(3)}
                </li>
            </ul>
    )

}

export default Languages;