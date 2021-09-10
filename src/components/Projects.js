import React, { useState } from 'react';
import './Projects.css';
import Card from './Card';

const cardsQuantity = 2;
const counter = 1;


const Projects = ({height}) => {
    const[activeCard, setActiveCard] = useState(1);
    const[direction, setDirection] = useState(false);

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

    console.log('activecard ', activeCard);


    return (
        <section className="projects" style={{height: height + 135 + 'px'}}>
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