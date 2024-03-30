import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "./Carousel.css";

const Carousel = () => {
	const [laptopsState, setLaptopsState] = useState([]);

	const goToNext = () => {
		const updatedLaptops = [...laptopsState];
		const head = updatedLaptops.shift();
		updatedLaptops.push(head);
		setLaptopsState(updatedLaptops);
	};

	const goToPrevious = () => {
		const updatedLaptops = [...laptopsState];
		const tail = updatedLaptops.pop();
		updatedLaptops.unshift(tail);
		setLaptopsState(updatedLaptops);
	};

	const navigate = useNavigate();

	useEffect(() => {
		let getProducts = async () => {
			const url = "http://localhost:3001/products";

			try {
				const response = await fetch(url, {
					method: "GET",
				});
				const data = await response.json();

				let final = await Promise.all(
					data.map(async (product) => {
						let newUrl =
							"http://localhost:3001/products/images/" +
							product.imgPath;
						const res = await fetch(newUrl, {
							method: "GET",
						});
						const imgRaw = await res.blob();
						const ImgUrl = URL.createObjectURL(imgRaw);
						product.image = ImgUrl;

						return product;
					})
				);
				setLaptopsState(final);
			} catch (e) {
				console.log(e);
			}
		};
		getProducts();
	}, []);

	return (
		<div className="carousel-wrapper">
			<div className="left-button-wrapper">
				<button className="left-button" onClick={goToPrevious}>
					&lt;
				</button>
			</div>
			{laptopsState
				.filter((_, index) => index <= 3)
				.map((laptop, index) => (
					<Card
						name={laptop.name}
						img={laptop.image}
						userRating={laptop.rating}
						productPrice={laptop.price}
						key={index}
						onClick={() => {
							navigate(laptop.slug);
							window.location.reload();
						}}
					/>
				))}
			<div className="right-button-wrapper">
				<button className="right-button" onClick={goToNext}>
					&gt;
				</button>
			</div>
		</div>
	);
};

export default Carousel;
