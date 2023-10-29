import '../Style/test.css';

import { Link } from 'react-router-dom'; 
import { useState, useEffect } from "react";

import PropTypes from 'prop-types';

function Card({picture, text, Lien}) {

    const [isActive, setIsActive] = useState(false);

    useEffect (() => {
        if (Text === "") setIsActive(true);
    }, [Text]);

    return (
        <Link className="projet_div" to={Lien}>
            <img src={ require('../Images/' + picture) } alt="cardPicture" className="projet_picture" />
            <section className="text_section">
                <p className='projet_text'> {text} </p>
            </section>
        </Link>
    )
}

Card.propTypes = {
    picture: PropTypes.string,
    text: PropTypes.string,
}

export default Card