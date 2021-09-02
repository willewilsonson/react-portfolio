import './Header.css';
import profileImage from '../william_profile_image.png';

const Header = ({height}) => {

    return (
        <header className="header" style={{height: (height - 100) + 'px'}}>
            <img src={profileImage} alt="" className="header__profile-image"></img>
            <h3 className="header__greeting">Hello</h3>
            <h1 className="header__name">I'm William</h1>
            <h3 className="header__description">A fullstack JavaScript developer</h3>
            <button className="header__contact-button">Contact</button>
        </header>
    )
}

export default Header;