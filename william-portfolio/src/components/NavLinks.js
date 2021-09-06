import './NavLinks.css'
import gmailLogo from '../4202766_email_gmail_mail_icon.png';
import githubLogo from '../4202858_github_icon.png';
import linkedInLogo from '../5282542_linkedin_network_social network_linkedin logo_icon.png';
import facebookLogo from '../2515845_black and white_dark grey_facebook_icon.png';

const NavLinks = () => {

    return (
    <nav className="nav-links">
        <div className="nav-links__link-container">
            <a href="mailto: william.nordenstad@gmail.com" target="_blank">
                <img src={gmailLogo} className="nav-links__logo"></img>
            </a>
        </div>
        <div className="nav-links__link-container">
            <a href="https://github.com/willewilsonson" target="_blank">
                <img src={githubLogo} className="nav-links__logo"></img>
            </a>
        </div>
        <div className="nav-links__link-container">
            <a href="https://www.linkedin.com/in/williamnordenstad/" target="_blank">
                <img src={linkedInLogo} className="nav-links__logo"></img>
            </a>
        </div>
        <div className="nav-links__link-container">
            <a href="https://www.facebook.com/william.nordenstad/" target="_blank">
                <img src={facebookLogo} className="nav-links__logo"></img>
            </a>
        </div>
    </nav>
    )
}

export default NavLinks;