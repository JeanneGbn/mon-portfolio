import { Link } from "react-router-dom";
import "../Style/main.css";

function Nav() {
    return (
        <nav className="nav">
            <Link> Accueil </Link> 
            <Link> À propos </Link> 
            <Link> Compétences  </Link> 
            <Link> Mes projets </Link> 
            <Link> Contact </Link>
        </nav>
    )
}
export default Nav;