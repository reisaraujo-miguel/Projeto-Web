import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { BiSolidTrash } from "react-icons/bi";
import "./CheckoutCart.css";

const CheckoutCart = ({ setHasCart }) => {
	const [cart, setCart] = useState(
		JSON.parse(sessionStorage.getItem("cart"))
	);

	useEffect(() => {
		if (cart) {
			setHasCart(true);
			const fetchProducts = async () => {
				const newCart = await Promise.all(
					cart.map(async (item) => {
						const imageName = item.imgPath;
						let response = await fetch(
							"http://localhost:3001/products/images/" + imageName
						);
						const imageBlob = await response.blob();

						const imageUrl = URL.createObjectURL(imageBlob);

						response = await fetch(
							"http://localhost:3001/products/" + item.slug
						);
						const data = await response.json();

						const stock = data[0].quantity;

						return { ...item, imageUrl, stock };
					})
				);

				setCart(newCart);
				sessionStorage.setItem("cart", JSON.stringify(newCart));
			};

			fetchProducts();
		}
	}, []);

	const updateCart = (update) => {
		sessionStorage.setItem("cart", JSON.stringify(update));
	};

	const removeItem = (name) => {
		const newCart = cart.filter((item) => item.name !== name);
		setCart(newCart);
		sessionStorage.setItem("cart", JSON.stringify(newCart));
		setHasCart(newCart.length > 0);
	};

	const updateQt = (event, index) => {
		const newQt = parseInt(event.target.value);
		const update = cart.map((item) =>
			item._id === index._id ? { ...item, quantity: newQt } : item
		);

		updateCart(update);
	};

	const createList = () => {
		console.log(cart);
		return cart.map((index) => (
			<ListGroup.Item key={index._id}>
				<div className="item-image me-3" style={{ float: "left" }}>
					<img src={index.imageUrl} alt="product in cart" />
				</div>
				<div style={{ float: "left" }}>
					<b>{index.name}</b>
				</div>
				<button
					style={{
						float: "right",
						background: "none",
						border: "none",
						marginLeft: "2em",
					}}
					onClick={() => removeItem(index.name)}
				>
					<BiSolidTrash size="2em" color="red" />
				</button>
				<div style={{ float: "right" }}>$ {index.price}</div>
				<input
					id={index._id}
					className="me-4"
					type="number"
					defaultValue={index.quantity}
					size="3"
					min="1"
					max={index.stock}
					style={{ float: "right" }}
					onChange={(event) => updateQt(event, index)}
				></input>
			</ListGroup.Item>
		));
	};

	return (
		<div style={{ textAlign: "left" }}>
			<label className="text" htmlFor="list">
				<b>My Cart</b>
			</label>
			<ListGroup className="cart" id="list" variant="flush">
				{cart && cart.length > 0 ? createList() : <p>Empty</p>}
			</ListGroup>
		</div>
	);
};

export default CheckoutCart;
