import React, { useState } from 'react';
import './Projects.css';
import Card from './Card';


const Projects = ({height}) => {
    const[activeCard, setActiveCard] = useState(1);

    if (activeCard === 0) {
        setActiveCard(2);
    }
    if (activeCard  === 3) {
        setActiveCard(1);
    }

    console.log('activecard ', activeCard);


    return (
        <section className="projects" style={{height: height + 15 + 'px'}}>
            <h1 className="projects__title">Projects</h1>
            <div className="projects__wrap">
                <button className={"projects__button--left"}
                    onClick={() => setActiveCard(activeCard - 1)}
                    >&#60;
                </button>
                <Card activeCard={activeCard} />
                <button className={"projects__button--right"}
                    onClick={() => setActiveCard(activeCard + 1)}
                    >&#62;
                </button>
            </div>
        </section>
    )
}

export default Projects;