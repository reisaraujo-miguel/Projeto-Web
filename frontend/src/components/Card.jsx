import React from "react";
//import RatingWidget from '../components/RatingWidget'
import "./Card.css";

const Card = ({ name, img, productPrice, onClick }) => {
	const priceWithCurrency = "$" + productPrice;

	return (
		<div className="card-container" onClick={onClick}>
			<img src={img} alt={name} />
			<div>
				<h2>{name}</h2>
			</div>
			<div className="product-info">
				<div>
					<h2 className="price">{priceWithCurrency} </h2>
				</div>
			</div>
		</div>
	);
};

export default Card;
