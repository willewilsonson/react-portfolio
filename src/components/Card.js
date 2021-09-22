import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Card.css';
import todoImage from "../project_todo_image.png";
import hackday from "../hackday.png";

const Card = ({activeCard, direction}) => {
    const slideCard = useRef();

    const activeCardRef = (card) => {
        if (activeCard !== card) {
            return;
        }
        return slideCard;
    };

    const slideDirection = () => {
        if (direction === true) {
            return 1500;
        }
        return -1500;
    }

    useEffect(() => {
        gsap.fromTo(slideCard.current, { duration: 2, x: slideDirection(), scale: .5, opacity: 0 }, { x: 0, scale: 1, opacity: 1 });
    });

    return (
        <article className="card-wrapper">
            <div className={`card-wrapper__card${activeCard === 1 ? ' showCard' : ''}`}>
                <img ref={activeCardRef(1)} className="card__image" src={todoImage} alt="project_todo_image"></img>
                <footer className="card__card-footer">
                    <a href="https://github.com/willewilsonson/todo" target="_blank" rel="noreferrer" className="card-footer__link">Code</a>
                    <a href="https://willewilsonson.github.io/todo/" target="_blank" rel="noreferrer" className="card-footer__link">Demo</a>
                </footer>
            </div>
            <div className={`card-wrapper__card${activeCard === 2 ? ' showCard' : ''}`}>
                <img ref={activeCardRef(2)} className="card__image" src={hackday} alt="project_todo_image"></img>
                <footer className="card__card-footer">
                    <a href="https://github.com/willewilsonson/hackday" target="_blank" rel="noreferrer" className="card-footer__link">Code</a>
                </footer>
            </div>
        </article>
    )
};

export default Card;