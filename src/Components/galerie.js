import "../Style/main.css";
import Projets from '../Data/data.json';
import Card from "./cards";
import '../Style/test.css';




function Galerie() {
    return (
        <div className='projets__section' id="about">
        <h2 className="projets_title">Mes réalisations</h2>
        <section className="projets_wrapper">
            {Projets.map((projet) => (
                <Card
                        key={ projet.picture }
                        picture={ projet.picture }
                        description={ projet.description }
                        text={ projet.text }
                        outils={ projet.outils }
                        GithubLink={ projet.githubLink }
                        WebLink={ projet.webLink }
                />
            ))}
        </section>
    </div>
    )
}

export default Galerie;