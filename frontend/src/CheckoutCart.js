import React from "react";
import { ListGroup } from "react-bootstrap";
import "./CheckoutCart.css";
import testCart from "./test-json/cart.json";


const CheckoutCart = ({ cart = null, updateCart = (e) => { console.log(e) } }) => {
    const test = false;

    if (test) {
        cart = testCart.cart;
    }

    const updateQt = (event, index) => {
        const newQt = parseInt(event.target.value);
        const update = cart.map((item) =>
            item.uid === index.uid ? { ...item, quantity: newQt } : item
        );

        updateCart(update);
    };

    const createList = () => {
        return cart.map((index) => (
            <ListGroup.Item key={index.uid}>
                <div className="item-image me-3" style={{ "backgroundImage": `url(${index.image})`, "float": "left" }}></div>
                <div style={{ "float": "left" }}><b>{index.name}</b></div>
                <div style={{ "float": "right" }}>R$ {index.price}</div>
                <input id={index.uid} className="me-4" type="number" defaultValue={index.quantity} size="3" min="1" style={{ "float": "right" }} onChange={(event) => updateQt(event, index)}></input>
                {/*ToDo: show the amount of each product in stock*/}
            </ListGroup.Item>
        ));
    };

    return (
        <div style={{ "textAlign": "left" }}>
            <label className="mt-5 mb-4" htmlFor="list"><b>My Cart</b></label>
            <ListGroup id="list" variant="flush">
                {(cart) && createList()}
                {(!cart && !test) && <p>Empty</p>}
            </ListGroup>
        </div>
    );
};

export default CheckoutCart;
