import './Header.css';
import profileImage from '../william_profile_image.png';
import wnLogo from '../wn_logo.png';

const Header = ({height}) => {

    return (
        <header className="header" style={{height: (height - 150) + 'px'}}>
            <div className="header__images">
                <img src={wnLogo} alt="" className="header__logo"></img>
                <img src={profileImage} alt="" className="header__profile-image"></img>
            </div>
            <h3 className="header__greeting">Hello</h3>
            <h1 className="header__name">I'm William</h1>
            <h3 className="header__description">A fullstack JavaScript developer</h3>
        </header>
    )
}

export default Header;