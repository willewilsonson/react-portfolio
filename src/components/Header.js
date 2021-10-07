import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Header.css';


const Header = ({height}) => {
    const box1 = useRef();

    gsap.registerPlugin(ScrollTrigger);
    
    useEffect(() => {
        gsap.to(box1.current, {
            opacity: 0,
                scrollTrigger: {
                    trigger: box1.current,
                    start: '100px',
                    end: '100% 10%',
                    scrub: true
                }
        })
    });


    return (
        <header className="header" style={{height: (height)}} ref={box1}>
            {/* <div className='header__box--1'></div> */}
            <div className="header__text-wrapper">
                <h3 className="header__greeting">Hello</h3>
                <div className='header__name-wrapper'>
                    <h1 className="header__name--1">I'm&nbsp;</h1>
                    <h1 className="header__name--2">William</h1>
                </div>
                <h3 className="header__description">A full stack JavaScript developer</h3>
            </div>
            {/* <div className='header__box--2'></div> */}
            {/* <div className='header__box--3'></div> */}
        </header>
    )
}

export default Header;