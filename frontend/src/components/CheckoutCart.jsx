import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import "./CheckoutCart.css";

const CheckoutCart = () => {
    const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem('cart')));

    useEffect(() => {
        const fetchProducts = async () => {
            const newCart = await Promise.all(
                cart.map(async (item) => {
                    const imageName = item.imgPath;
                    const response = await fetch("http://localhost:3001/products/images/" + imageName);
                    const imageBlob = await response.blob();

                    const imageUrl = URL.createObjectURL(imageBlob);

                    return { ...item, imageUrl };
                })
            )

            setCart(newCart);
            sessionStorage.setItem('cart', JSON.stringify(newCart));
        }

        fetchProducts();
    }, []);

    const updateCart = (update) => {
        sessionStorage.setItem('cart', JSON.stringify(update));
    }

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
                <div className="item-image me-3" style={{ float: "left" }}><img src={index.imageUrl} alt="product in cart" /></div>
                <div style={{ float: "left" }}><b>{index.name}</b></div>
                <div style={{ float: "right" }}>R$ {index.price}</div>
                <input id={index._id} className="me-4" type="number" defaultValue={index.quantity} size="3" min="1" style={{ float: "right" }} onChange={(event) => updateQt(event, index)}></input>
            </ListGroup.Item>
        ));
    };

    return (
        <div style={{ "textAlign": "left" }}>
            <label className="text" htmlFor="list"><b>My Cart</b></label>
            <ListGroup className="cart" id="list" variant="flush">
                {(cart) && createList()}
                {(!cart && !test) && <p>Empty</p>}
            </ListGroup>
        </div>
    );
};

export default CheckoutCart;
