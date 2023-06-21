import React from 'react';
import RatingWidget from '../components/RatingWidget'
import './Card.css'

const Card = ({ name, img, userRating, productPrice, onClick }) => {

    const priceWithCurrency = "$" + productPrice

    return (
        <div className="card-container" onClick={onClick}>
            <img src={img} alt={name} />
            <div>
                <h2>{name}</h2>
            </div>
            <div className="product-info">
                <RatingWidget
                    isStatic={true}
                    userRating={userRating} />
                <div>
                    <h2 className='price'>{priceWithCurrency} </h2>
                </div>
            </div>
        </div>
    );
};

export default Card;
