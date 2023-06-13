import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import "./CheckoutCart.css";
import Cart from "./test-json/cart.json";

/*
    * CheckoutCart expects a json file containing the list of products in the cart.
    * The json file should follow the following structure:
    * {
        * "cart": [
            * {
                * "image": "https://link.to/image.jpg", // The image representation for the product
                * "name": "first product",
                * "price": 666,
                * "quantity": 1,
                * "uid": "ae666" // The unique id of the product. That is used to check for stock.
                * }, 
            * {
                * "image": "https://link.to/second/image.jpg",
                * "name": "second product",
                * "price": 119,
                * "quantity": 2,
                * "uid": "ae119"
                * }
            *   ]
        * }
*/

const CheckoutCart = ({ data = null }) => {
    const test = true;
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (data !== null && data !== undefined) {
            const fetchCart = async () => {
                const response = await fetch(data);
                const arr = await response.json();
                /*
                const temp = [];

                arr.cart.forEach((index) => {
                    temp.push(index);
                });
                */

                setCart(arr.cart);
            };

            fetchCart();
        } else if (test) {
            setCart(Cart.cart);
        }
    }, [data, test]);

    const createList = () => {
        return cart.map((index) => (
            <ListGroup.Item key={index.uid}>
                <div key={index} className="item-image me-3" style={{ "backgroundImage": `url(${index.image})`, "float": "left" }}></div>
                <div style={{ "float": "left" }}><b>{index.name}</b></div>
                <div style={{ "float": "right" }}>R$ {index.price}</div>
                <input className="me-4" type="number" defaultValue={index.quantity} size="3" min="1" style={{ "float": "right" }}></input>
                {/*ToDo: show the amount of each product in stock*/}
            </ListGroup.Item>
        ));
    };

    return (
        <div style={{ "textAlign": "left" }}>
            <label className="mt-5 mb-4" htmlFor="list"><b>My Cart</b></label>
            <ListGroup id="list" variant="flush">
                {(data || test) && createList()}
                {(!data && !test) && <p>Empty</p>}
            </ListGroup>
        </div>
    );
};

export default CheckoutCart;
