import './About.css';

const AboutInfo = ({display}) => {

    const contentToDisplay = () => {
        if(display === 'life') {
            return <p>Life</p>;
        }
        if(display === 'education') {
            return <p>Education</p>;
        }
        if(display === 'experiences') {
            return <p>Experiences</p>;
        }
    };

    return(
        <article className="about__info--outer">
            <div className="about__info--inner">
                {contentToDisplay()}
            </div>
        </article>
    )
}

export default AboutInfo;

/* <div className={`about__info ${display === 'life' ? 'display' : ''}`}>
Mitt liv
</div>
<div className={`about__info ${display === 'education' ? 'display' : ''}`}>
    Min utbildning
</div>
<div className={`about__info ${display === 'experiences' ? 'display' : ''}`}>
    annat skit
</div> */