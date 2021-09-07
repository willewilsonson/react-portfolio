import './Projects.css';

const Projects = ({height}) => {

    return (
        <section className="projects" style={{height: height + 'px'}}>
            <h1 className="projects__title">Projects</h1>
            <article className="projects__card-wrapper">
                <div className="card-wrapper__card"></div>
                <div className="card-wrapper__card"></div>
                <div className="card-wrapper__card"></div>
                <div className="card-wrapper__card"></div>
            </article>
        </section>
    )
}

export default Projects;