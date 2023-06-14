import React, { useState } from 'react';
import Card from './Card.js';
import './Carousel.css';
import { useNavigate } from 'react-router-dom';
import laptop1 from '../img/test/laptop-1.jpg';
import laptop2 from '../img/test/laptop-2.jpg';
import laptop3 from '../img/test/laptop-3.jpg';
import laptop4 from '../img/test/laptop-4.jpg';
import laptop5 from '../img/test/laptop-5.jpg';
import laptop6 from '../img/test/laptop-6.jpg';
import laptop7 from '../img/test/laptop-7.jpg';

const Carousel = () => {

    let laptops = [{
        "image": laptop1,
        "name": "PC da Xuxa",
        "price": 666,
        "rating": 5,
        "uid": "dksj"
    },
    {
        "image": laptop2,
        "name": "PC da Sasha",
        "price": 333,
        "rating": 4,
        "uid": "jdss"
    },
    {
        "image": laptop3,
        "name": "PC da Sandy Jr.",
        "price": 123,
        "rating": 1,
        "uid": "ijss"
    },
    {
        "image": laptop4,
        "name": "PC da Frozen",
        "price": 321,
        "rating": 3,
        "uid": "91sd"
    },
    {
        "image": laptop5,
        "name": "PC do Shrek",
        "price": 987,
        "rating": 2,
        "uid": "ksjd"
    },
    {
        "image": laptop6,
        "name": "PC do Miranha",
        "price": 789,
        "rating": 5,
        "uid": "spider"
    },
    {
        "image": laptop7,
        "name": "PC do Naruto",
        "price": 653,
        "rating": 2,
        "uid": "sk8d"
    }]

    const [laptopsState, setLaptopsState] = useState(laptops)

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
    const redirectOnClick = () => {
        navigate('/product')
    }

    return (
        <div className="carousel-wrapper">
            <div className="left-button-wrapper">
                <button className="left-button" onClick={goToPrevious}>
                    &lt;
                </button>
            </div>
            {laptopsState.filter((_, index) => index <= 3).map((laptop) => (
                <Card
                    name={laptop.name}
                    img={laptop.image}
                    userRating={laptop.rating}
                    productPrice={laptop.price}
                    key={laptop.uid}
                    onClick={redirectOnClick}
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
