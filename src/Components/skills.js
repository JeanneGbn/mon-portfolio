import '../Style/main.css';
import htmlIMG from '../Images/html.png';
import cssIMG from '../Images/css.png';
import jsIMG from '../Images/js.png';
import reactIMG from '../Images/react.png';
import reduxIMG from '../Images/redux.png';
import figmaIMG from '../Images/figma.png';
import githubIMG from '../Images/github.png';
import seoIMG from '../Images/seo.png';
import swaggerIMG from '../Images/swagger.png';
import sassIMG from '../Images/sass.png'



function Skills() {
    return(
        <section className='skills__section' id='skills'>
          <h2> Compétences </h2>
          <div className='skills__grey_background'>
           <div className='skills__allSkills'>
              <div className='skills__div'>
                 <div className='skills__img_div'>
                   <img className='skills__img' src={htmlIMG} />
                   <span className='skills__text'> HTML </span>
                 </div>
                  <div className='skills__img_div'>
                    <img className='skills__img' src={cssIMG} />
                    <span className='skills__text'> CSS </span>
                  </div>
                  <div className='skills__img_div'>
                    <img className='skills__img' src={jsIMG} />
                    <span className='skills__text'> JavaScript </span>
                  </div>
                  <div className='skills__img_div'>
                    <img className='skills__img' src={reactIMG} />
                    <span className='skills__text'> React </span>
                  </div>
                  <div className='skills__img_div'>
                    <img className='skills__img' src={reduxIMG} />
                    <span className='skills__text'> Redux </span>
                  </div>
              </div>
              <div className='skills__div'>
                 <div className='skills__img_div'>
                   <img className='skills__img' src={figmaIMG} />
                   <span className='skills__text'> Figma </span>
                 </div>
                  <div className='skills__img_div'>
                    <img className='skills__img' src={githubIMG} />
                    <span className='skills__text'> GitHub </span>
                  </div>
                  <div className='skills__img_div'>
                    <img className='skills__img' src={seoIMG} />
                    <span className='skills__text'> SEO </span>
                  </div>
                  <div className='skills__img_div'>
                    <img className='skills__img' src={swaggerIMG} />
                    <span className='skills__text'> Swagger </span>
                  </div>
                  <div className='skills__img_div'>
                    <img className='skills__img' src={sassIMG} />
                    <span className='skills__text'> SASS</span>
                  </div>
              </div>
           </div>
          </div>
        </section>
    )
}
export default Skills;


