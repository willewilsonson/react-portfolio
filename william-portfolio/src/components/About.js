import './About.css';

const About = ({height}) => {
    return(
        <section className="about" style={{height: height + 'px'}}>
            <img src="" alt="" className="about__image" />
            <h1 className="about__title">About me</h1>
            <nav className="about__about-navbar">
                <ul className="about-navbar__content">
                    <li className="about-navbar__element">
                        <button className="about-navbar__button active" id="life">Life</button>
                    </li>
                    <li className="about-navbar__element">
                        <button className="about-navbar__button" id="education">Education</button>
                    </li>
                    <li className="about-navbar__element">
                        <button className="about-navbar__button" id="experiences">Experiences</button>
                    </li>
                </ul>
            </nav>
            <div className="about__info life display">
            Mitt liv
            </div>
            <div className="about__info education">
                Min utbildning
            </div>
            <div className="about__info experiences">
                annat skit
            </div>
        </section>
    )
}

export default About;