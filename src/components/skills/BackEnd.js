import '../Skills.css';
import NodejsLogo from '../../nodejs_logo.png';
import ExpressjsLogo from '../../expressjs_logo.png';
import RestapiLogo from '../../restapi_logo.png';
import GraphqlLogo from '../../graphql_logo.png';
import MongodbLogo from '../../mongodb_logo.png';
import PostgresqlLogo from '../../postgresql_logo.webp';




const BackEnd = ({createDots}) => {

    return (
        <ul className="skills__ul">
                <li className="skills__li">
                    {/* <h3 className="skills__h3">REACT</h3>
                    {createDots(3)} */}
                    <img class='skills__image' src={NodejsLogo}></img>
                    <p>Node JS</p>
                </li>
                <li className="skills__li">
                    {/* <h3 className="skills__h3">REACT</h3>
                    {createDots(3)} */}
                    <img class='skills__image' src={ExpressjsLogo}></img>
                    <p>Express JS</p>
                </li>
                <li className="skills__li">
                    {/* <h3 className="skills__h3">REACT</h3>
                    {createDots(3)} */}
                    <img class='skills__image' src={RestapiLogo}></img>
                    <p>Rest API</p>
                </li>
                <li className="skills__li">
                    {/* <h3 className="skills__h3">REACT</h3>
                    {createDots(3)} */}
                    <img class='skills__image' src={GraphqlLogo}></img>
                    <p>GrapQL</p>
                </li>
                <li className="skills__li">
                    {/* <h3 className="skills__h3">REACT</h3>
                    {createDots(3)} */}
                    <img class='skills__image' src={MongodbLogo}></img>
                    <p>MongoDB</p>
                </li>
                <li className="skills__li">
                    {/* <h3 className="skills__h3">REACT</h3>
                    {createDots(3)} */}
                    <img class='skills__image' src={PostgresqlLogo}></img>
                    <p>PostgreSQL</p>
                </li>
            </ul>
    )

}

export default BackEnd;