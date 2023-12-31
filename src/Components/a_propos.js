import '../Style/main.css';
import picture from '../Images/portrait.jpg';
 


function AboutMe() {
    return (
        <section className='about-me__section' id='about-me'>
            <div className='picture__div'>
            <img className='picture' src={picture} alt='Photo de Jeanne Goubin'></img>
            </div>
            <div className='about-me__section_text'>
                <h2> À propos </h2>
                <p> Après une reconversion professionnelle et une formation d'intégrateur Web chez OpenClassrooms, 
                    je me suis tournée vers la programmation front-end. 
                    Étant sensibilisée à l’expérience utilisateur j’ai décidé de 
                    continuer mon parcours en UX Design. 
                </p>
            </div>
        </section>
    )
}
export default AboutMe