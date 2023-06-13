import React from 'react';
import RatingWidget from './RatingWidget.js'
import './Card.css'

const Card = ({ key = 0, name, img, userRating, productPrice, onClick }) => {

  const priceWithCurrency = "$ " + productPrice

  return (
    <div className="card-container" onClick={onClick}>
      <img src={img} alt={name} />
      <div>
      <h2>{name}</h2>
      </div>
      <div className="product-info">
        <RatingWidget 
        isStatic={true}
        userRating={userRating}/>
        <div>
          <h2>{priceWithCurrency} </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
