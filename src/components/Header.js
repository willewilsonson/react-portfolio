// import React, { useRef } from 'react';
// import { gsap } from 'gsap';
import './Header.css';
// import profileImage from '../william_profile_image.png';
// import wnLogo from '../wn_logo.png';
// import { useEffect } from 'react';

const Header = ({height}) => {
    // const header__logo = useRef();
    // const header__profile_image = useRef();
    // const header__greeting = useRef();
    // const header__name = useRef();
    // const header__description = useRef();
    // const timeline = gsap.timeline({ defaults: { duration: 1.5 } });

    // useEffect(() => {
    //     timeline
    //         .fromTo(header__logo.current, { opacity: 0, }, { opacity: 1, })
    //         .fromTo(header__profile_image.current, { opacity: 0, }, { opacity: 1, }, '<')
    //         .fromTo(header__greeting.current, { scale: .7, x: -75, opacity: 0, }, { scale: 1, x: 0, opacity: 1, }, '<')
    //         .fromTo(header__name.current, { scale: .7, x: -75, opacity: 0, }, { scale: 1, x: -0, opacity: 1, }, '< .5')
    //         .fromTo(header__description.current, { scale: .7, x: -75, opacity: 0, }, { scale: 1, x: -0, opacity: 1, }, '< .5')


    // });

    return (
        <header className="header" style={{height: (height) + 50 + 'px'}}>
            {/* <div className="header__images">
                <img src={wnLogo} alt="" className="header__logo" ref={header__logo}></img>
                <img src={profileImage} alt="" className="header__profile-image" ref={header__profile_image}></img>
            </div> */}
            <div className='header__box--1'></div>
            <div className="header__text-wrapper">
                <h3 className="header__greeting">Hello</h3>
                <div className='header__name-wrapper'>
                    <h1 className="header__name--1">I'm&nbsp;</h1>
                    <h1 className="header__name--2">William</h1>
                </div>
                <h3 className="header__description">A full stack JavaScript developer</h3>
            </div>
            <div className='header__box--2'></div>
            <div className='header__box--3'></div>
        </header>
    )
}

export default Header;