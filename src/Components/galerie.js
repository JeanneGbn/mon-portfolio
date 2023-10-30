import "../Style/main.css";
import Projets from '../Data/data.json';
import Card from "./cards";
import '../Style/test.css';




function Galerie() {
    return (
        <div className='projets__section' id="galerie">
        <h2 className="projets_title">Mes projets</h2>
        <section className="projets_wrapper">
            {Projets.map((projet) => (
                <Card
                        key={ projet.picture }
                        picture={ projet.picture }
                        text={ projet.text }
                        Lien={ projet.Lien }
                        skills={ projet.skills }
                />
            ))}
        </section>
    </div>
    )
}

export default Galerie;