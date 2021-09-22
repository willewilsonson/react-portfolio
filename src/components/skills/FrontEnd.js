import '../Skills.css';
import ReactLogo from '../../react_logo.png';
import CssLogo from '../../css_logo.png';
import ReduxLogo from '../../redux_logo.png';
import WebpackLogo from '../../webpack_logo.png';
import HtmlLogo from '../../html5_logo.png';
import JqueryLogo from '../../jquery_logo.png';


const FrontEnd = ({createDots}) => {

    return (
        <ul className="skills__ul">
                <li className="skills__li">
                    {/* <h3 className="skills__h3">REACT</h3>
                    {createDots(3)} */}
                    <img alt='React JS logo' className='skills__image' src={ReactLogo}></img>
                    <p>React JS</p>
                </li>
                <li className="skills__li">
                    {/* <h3 className="skills__h3">GATSBY</h3>
                    {createDots(1)} */}
                    <img alt='HTML5 logo' className='skills__image' src={HtmlLogo}></img>
                    <p>HTML5</p>
                </li>
                <li className="skills__li">
                    {/* <h3 className="skills__h3">CSS(BEM)</h3>
                    {createDots(3)} */}
                    <img alt='CSS logo' className='skills__image' src={CssLogo}></img>
                    <p>CSS</p>
                </li>
                <li className="skills__li">
                    {/* <h3 className="skills__h3">REDUX</h3>
                    {createDots(2)} */}
                    <img alt='Redux logo' className='skills__image' src={ReduxLogo}></img>
                    <p>Redux</p>
                </li>
                <li className="skills__li">
                    {/* <h3 className="skills__h3">DOM-MANIPULATION</h3>
                    {createDots(2)} */}
                    <img alt='Webpack logo' className='skills__image' src={WebpackLogo}></img>
                    <p>Webpack</p>
                </li>
                <li className="skills__li">
                    {/* <h3 className="skills__h3">DOM-MANIPULATION</h3>
                    {createDots(2)} */}
                    <img alt='Jquery logo' className='skills__image' src={JqueryLogo}></img>
                    <p>Jquery</p>
                </li>
            </ul>
    )

}

export default FrontEnd;