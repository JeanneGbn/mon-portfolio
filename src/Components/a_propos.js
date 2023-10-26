import '../Style/main.css';
import picture from '../Images/portrait.jpg';


function AboutMe() {
    return (
        <section className='about-me__section' id='about-me'>
            <div className='picture__div'>
            <img className='picture' src={picture}></img>
            </div>
            <div className='about-me__section_text'>
                <h2> À propos </h2>
                <p> Après une reconversion professionnelle et passionnée par le Web Design, 
                    je me suis tournée vers la programmation front-end. 
                    Étant sensibilisée à l’expérience utilisateur durant mon parcours j’ai décidé de 
                    continuer ma formation en UX Design. 
                </p>
                <button className='cv_button'> Télécharger mon cv </button>

            </div>
        </section>
    )
}
export default AboutMe