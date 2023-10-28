import '../Style/test.css';

import { Link } from 'react-router-dom'; 
import { useState, useEffect } from "react";

import PropTypes from 'prop-types';

function Card({picture, text}) {

    const [isActive, setIsActive] = useState(false);

    useEffect (() => {
        if (Text === "") setIsActive(true);
    }, [Text]);

    return (
        <div className="projet_div">
            <img src={ require('../Images/' + picture) } alt="cardPicture" className="projet_picture" />
            <section className="text_section">
                <p className='projet_text'> {text} </p>
            </section>
        </div>
    )
}

Card.propTypes = {
    picture: PropTypes.string,
    text: PropTypes.string,
}

export default Card