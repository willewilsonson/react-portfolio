import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Projects.css';
import Card from './Card';

const cardsQuantity = 3;

const Projects = ({height}) => {
    const[activeCard, setActiveCard] = useState(1);
    const[direction, setDirection] = useState(false);
    const box2 = useRef();

    gsap.registerPlugin(ScrollTrigger);
    
    useEffect(() => {
        gsap.to(box2.current, {
            opacity: 0,
                scrollTrigger: {
                    trigger: box2.current,
                    start: '100px',
                    end: '100% 10%',
                    scrub: 1,
                }
        })
    });

    if (activeCard === 0) {
        setActiveCard(cardsQuantity);
    }
    if (activeCard  > cardsQuantity) {
        setActiveCard(1);
    }

    const handleClick = (direction) => {
        setDirection(direction);
        if (direction === false) {
            setActiveCard(activeCard - 1);
        }
        setActiveCard(activeCard +1 );
    };

    return (
        <section className="projects" style={{height: height}} ref={box2}>
            <h1 className="projects__title">Projects</h1>
            <div className="projects__wrap">
                <button className={"projects__button--left"}
                    onClick={() => handleClick(true)}
                    >&#60;
                </button>
                <Card activeCard={activeCard} direction={direction}/>
                <button className={"projects__button--right"}
                    onClick={() => handleClick(false)}
                    >&#62;
                </button>
            </div>
        </section>
    )
}

export default Projects;