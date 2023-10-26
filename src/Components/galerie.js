import "../Style/main.css";
import Kasa from '../Images/Kasa.png';
import OhMyFood from '../Images/OhMyFood.png';
import Booki from '../Images/Booki.png';
import Nina from '../Images/NinaCarducci.png';
import Sophie from '../Images/SophieBluel.png';




function Galerie() {
    return (
        <section className='section__galerie' id="galerie">
            <h2> Mes projets </h2>
          <div className="card">
            <div className="card__div">
                <img className="card__img" src={Kasa}></img>
            </div>
            <div className="card__div">
               <img className="card__img" src={OhMyFood}></img>
            </div>
            <div className="card__div">
               <img className="card__img" src={Booki}></img>
            </div>
            <div className="card__div">
                <img className="card__img" src={Nina}></img>
            </div>
            <div className="card__div">
                <img className="card__img" src={Sophie}></img>
            </div>
          </div>
        </section>
    )
}

export default Galerie;