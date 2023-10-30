import '../Style/test.css';

import { Link } from 'react-router-dom'; 

import PropTypes from 'prop-types';

function Card({picture, text, Lien,skills}) {



    return (
        <Link className="projet_div" to={Lien}>
            <img src={ require('../Images/' + picture) } alt="Image illustrant le projet" className="projet_picture" />
            <section className="text_section">
                <p className='projet_text'> {text} </p>
                <p className='projet_skills'> {skills} </p>
            </section>
        </Link>
    )
}

Card.propTypes = {
    picture: PropTypes.string,
    text: PropTypes.string,
}

export default Card