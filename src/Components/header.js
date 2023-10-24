import '../Style/main.css';
import { Link } from 'react-router-dom';
 import Nav from '../Components/nav';

function Header(){
    return (
        <header className='header'>
            <Link to="/" className='header_link'> 
             Jeanne Goubin 
            </Link>
            <Nav />
        </header>
    )
}
export default Header;