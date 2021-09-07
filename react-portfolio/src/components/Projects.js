import './Projects.css';
import todoImage from "../project_todo_image.png";

const Projects = ({height}) => {

    return (
        <section className="projects">
            <h1 className="projects__title">Projects</h1>
            <article className="projects__card-wrapper">
                <div className="card-wrapper__card">
                    <img className="card__image" src={todoImage} alt="project_todo_image"></img>
                    <footer className="card__card-footer">
                        <a href="https://github.com/willewilsonson/todo" target="_blank" rel="noreferrer" className="card-footer__link">Code</a>
                        <a href="https://willewilsonson.github.io/todo/" target="_blank" rel="noreferrer" className="card-footer__link">Demo</a>
                    </footer>
                </div>
                <div className="card-wrapper__card"></div>
            </article>
        </section>
    )
}

export default Projects;