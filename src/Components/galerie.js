import "../Style/main.css";
import Kasa from '../Images/Kasa.png';
import OhMyFood from '../Images/OhMyFood.png';
import Booki from '../Images/Booki.png';




function Galerie() {
    return (
        <section className='section__galerie'>
          <div className="card">
            <div>
                <img className="card__img" src={Kasa}></img>
            </div>
            <div>
            <img className="card__img" src={OhMyFood}></img>
            </div>
            <div>
            <img className="card__img" src={Booki}></img>
            </div>
            </div>
        </section>
    )
}

export default Galerie;