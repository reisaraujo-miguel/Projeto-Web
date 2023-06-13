// pages/ProductPage.js

import React from "react";
import ImgPreviewStack from '../ImageSelection';
import RatingWidget from "../RatingWidget";
import CustomButton from '../Buttons.js';
import './ProductPage.css';

const ProductPage = () => (
    <div className="mt-3" style={{"textAlign": "left"}}>
        <div className="row">
            <div className="col">
                <ImgPreviewStack test={true} />
            </div>
            <div className="col">
                <p style={{ marginBottom: 0 }}>Notebook Fritadeira Philips Walita 8GB RAM.</p>
                <div style={{ width: "40%" }}>
                    <RatingWidget />
                </div>
                <div className="col" style={{ width: "40%" }}>
                    <p style={{ fontSize: 'small', color: 'green', marginBottom: 0 }}>In Stock</p>
                    <p style={{ marginTop: 0, marginBottom: 0 }}>$666.66</p>
                    <p style={{ fontSize: 'small', marginTop: 0 }}>List price: <s>$6666.66</s></p>

                </div>
                <div className="col" style={{ width: "60%" }}>
                    <CustomButton button_size='small-button' alt='plus icon' image='./img/Buttons/plus-icon.svg' text='ADD TO CART' />
                    <CustomButton text='BUY NOW' />
                </div>
            <div className="mt-5">
                <b>About this item:</b>
                <p>Lorem Ipsum Dolor Sit Amet</p>
            </div>
            </div>
        </div>
    </div>
);

export default ProductPage;
