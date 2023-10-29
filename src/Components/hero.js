import '../Style/main.css';
import { Link } from 'react-router-dom';


function Hero() {
    return (
        <div className='hero__background' id='hero'>
            <section className='section__presentation'>
               <h1> Développeuse front-end </h1> 
               <Link className='cv_button' to="https://github.com/JeanneGbn" target="_blank" rel="noopener noreferrer">
               <i class="fa-brands fa-github"></i>
                 Mon GitHub
               </Link>
            </section>
        </div>
    )
}
export default Hero;