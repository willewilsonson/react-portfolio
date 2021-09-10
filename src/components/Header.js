import React, { useRef } from 'react';
import { gsap } from 'gsap';
import './Header.css';
import profileImage from '../william_profile_image.png';
import wnLogo from '../wn_logo.png';
import { useEffect } from 'react';

const Header = ({height}) => {
    const header__logo = useRef();
    const header__profile_image = useRef();
    const header__greeting = useRef();
    const header__name = useRef();
    const header__description = useRef();
    const timeline = gsap.timeline({ defaults: { duration: 1.5 } });

    useEffect(() => {
        timeline
            .fromTo(header__logo.current, { opacity: 0, }, { opacity: 1, })
            .fromTo(header__profile_image.current, { opacity: 0, }, { opacity: 1, }, '<')
            .fromTo(header__greeting.current, { scale: .7, x: -75, opacity: 0, }, { scale: 1, x: 0, opacity: 1, }, '<')
            .fromTo(header__name.current, { scale: .7, x: -75, opacity: 0, }, { scale: 1, x: -0, opacity: 1, }, '< .5')
            .fromTo(header__description.current, { scale: .7, x: -75, opacity: 0, }, { scale: 1, x: -0, opacity: 1, }, '< .5')


    });

    return (
        <header className="header" style={{height: (height) + 50 + 'px'}}>
            <div className="header__images">
                <img src={wnLogo} alt="" className="header__logo" ref={header__logo}></img>
                <img src={profileImage} alt="" className="header__profile-image" ref={header__profile_image}></img>
            </div>
            <div className="header__text-wrapper">
                <h3 className="header__greeting" ref={header__greeting}>Hello</h3>
                <h1 className="header__name" ref={header__name}>I'm William</h1>
                <h3 className="header__description" ref={header__description}>A full stack JavaScript developer</h3>
            </div>
        </header>
    )
}

export default Header;