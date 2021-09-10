import './Card.css';
import todoImage from "../project_todo_image.png";
import hackday from "../hackday.png";

const Card = ({activeCard}) => {

    return (
        <article className="card-wrapper">
            <div className={`card-wrapper__card${activeCard === 1 ? ' showCard' : ''}`}>
                <img className="card__image" src={todoImage} alt="project_todo_image"></img>
                <footer className="card__card-footer">
                    <a href="https://github.com/willewilsonson/todo" target="_blank" rel="noreferrer" className="card-footer__link">Code</a>
                    <a href="https://willewilsonson.github.io/todo/" target="_blank" rel="noreferrer" className="card-footer__link">Demo</a>
                </footer>
            </div>
            <div className={`card-wrapper__card${activeCard === 2 ? ' showCard' : ''}`}>
                <img className="card__image" src={hackday} alt="project_todo_image"></img>
                <footer className="card__card-footer">
                    <a href="https://github.com/willewilsonson/hackday" target="_blank" rel="noreferrer" className="card-footer__link">Code</a>
                </footer>
            </div>
        </article>
    )
};

export default Card;