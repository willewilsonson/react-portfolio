import '../Skills.css';


const BackEnd = ({createDots}) => {

    return (
        <ul className="skills__ul">
                <li className="skills__li">
                    <h3 className="skills__h3">Node</h3>
                    {createDots(3)}
                </li>
                <li className="skills__li">
                    <h3 className="skills__h3">Express</h3>
                    {createDots(3)}
                </li>
                <li className="skills__li">
                    <h3 className="skills__h3">MongoDB</h3>
                    {createDots(2)}
                </li>
                <li className="skills__li">
                    <h3 className="skills__h3">PostgreSQL</h3>
                    {createDots(2)}
                </li>
                <li className="skills__li">
                    <h3 className="skills__h3">GraphQL</h3>
                    {createDots(1)}
                </li>
            </ul>
    )

}

export default BackEnd;