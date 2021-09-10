import './About.css';
import texts from '../text/texts.js';

const AboutInfo = ({display}) => {

    const contentToDisplay = () => {
        if(display === 'life') {
            return <p>{texts[0]}</p>;
        }
        if(display === 'education') {
            return <p>{texts[1]}</p>;
        }
        if(display === 'experiences') {
            return <p>{texts[2]}]</p>;
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