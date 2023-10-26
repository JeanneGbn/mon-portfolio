import '../Style/main.css';
 import Nav from '../Components/nav';

function Header(){
    return (
        <header className='header'>
            <a className='header_link' href="#hero"> 
             Jeanne Goubin 
            </a>
            <Nav />
        </header>
    )
}
export default Header;