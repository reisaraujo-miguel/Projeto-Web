// pages/ProductPage.js

import React from "react";
import './ProductPage.css';
import ImgPreviewStack from '../components/ImageSelection';
import RatingWidget from "../components/RatingWidget";
import CustomButton from '../components/Buttons.js';
import Carousel from '../components/Carousel';
import plusIcon from '../img/Buttons/plus-icon.svg';


const ProductPage = () => (
    <div>
        <div className="productDiv">
            <div className="col1">
                <ImgPreviewStack test={true} />
            </div>
            <div className="col1">
                <p style={{ marginBottom: 0 }}>Notebook Fritadeira Philips Walita 8GB RAM.</p>
                <div style={{ width: "40%" }}>
                    <RatingWidget />
                </div>
                <div className="col2" style={{ width: "40%", height: "100px" }}>
                    <p style={{ fontSize: 'small', color: 'green', marginBottom: 0 }}>In Stock</p>
                    <p style={{ marginTop: 0, marginBottom: 0 }}>$666.66</p>
                    <p style={{ fontSize: 'small', marginTop: 0 }}>List price: <s>$6666.66</s></p>
                </div>
                <div className="col2" style={{ width: "60%", height: "100px" }}>
                    <CustomButton button_size='small-button' alt='plus icon' image={plusIcon} text='ADD TO CART' />
                    <CustomButton text='BUY NOW' />
                </div>
                <div className="mt-5">
                    <b style={{ fontSize: "medium" }}>About this item:</b>
                    <p style={{ fontSize: "small" }}> I'd just like to interject for a moment. What you're refering to as Linux,
                        is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux.
                        Linux is not an operating system unto itself, but rather another free component
                        of a fully functioning GNU system made useful by the GNU corelibs, shell utilities
                        and vital system components comprising a full OS as defined by POSIX. Many computer
                        users run a modified version of the GNU system every day, without realizing it.
                        Through a peculiar turn of events, the version of GNU which is widely used today is
                        often called Linux, and many of its users are not aware that it is basically the
                        GNU system, developed by the GNU Project.</p>
                </div>
            </div>
        </div>
        <div style={{marginTop:'8%'}}>
            <label htmlFor="recommendations"><h5 style={{ marginBottom: '20px', marginLeft: '40px' }}><b>Recommended:</b></h5></label>
            <div className="mb-4" id="recommendations">
                <Carousel />
            </div>
        </div>
    </div>
);

export default ProductPage;
