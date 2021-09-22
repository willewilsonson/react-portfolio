import '../Skills.css';
import VscodeLogo from '../../vscode_logo.png';
import AtomLogo from '../../atom_logo.png';
import DockerLogo from '../../docker_logo.webp';
import GitLogo from '../../git_logo.png';
import GithubLogo from '../../github_logo.png';


const Languages = ({createDots}) => {

    return (
        <ul className="skills__ul">
                <li className="skills__li">
                    {/* <h3 className="skills__h3">DOM-MANIPULATION</h3>
                    {createDots(2)} */}
                    <img class='skills__image' src={VscodeLogo}></img>
                    <p>Visual Studio Code</p>
                </li>
                <li className="skills__li">
                    {/* <h3 className="skills__h3">DOM-MANIPULATION</h3>
                    {createDots(2)} */}
                    <img class='skills__image' src={AtomLogo}></img>
                    <p>Atom</p>
                </li>
                <li className="skills__li">
                    {/* <h3 className="skills__h3">DOM-MANIPULATION</h3>
                    {createDots(2)} */}
                    <img class='skills__image' src={DockerLogo}></img>
                    <p>Docker</p>
                </li>
                <li className="skills__li">
                    {/* <h3 className="skills__h3">DOM-MANIPULATION</h3>
                    {createDots(2)} */}
                    <img class='skills__image' src={GithubLogo}></img>
                    <p>Github</p>
                </li>
                <li className="skills__li">
                    {/* <h3 className="skills__h3">DOM-MANIPULATION</h3>
                    {createDots(2)} */}
                    <img class='skills__image' src={GitLogo}></img>
                    <p>Git</p>
                </li>
            </ul>
    )

}

export default Languages;