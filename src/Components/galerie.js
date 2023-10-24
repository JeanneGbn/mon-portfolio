import "../Style/main.css";
import img from '../Images/portrait.jpg';



function Galerie() {
    return (
        <section className='section__galerie'>
            <div className="card">
                <img className="card__img" src={img}></img>
            </div>
        </section>
    )
}

export default Galerie;