// pages/ProductPage.js

import React, { useEffect, useState } from "react";
import './ProductPage.css';
import ImgPreview from '../components/ImageSelection';
import CustomButton from '../components/Buttons';
import Carousel from '../components/Carousel';
import plusIcon from '../img/Buttons/plus-icon.svg';

const ProductPage = () => {
    const [product, setProduct] = useState('');

    const SLUG = window.location.pathname;

    useEffect(() => {
        const fetchProduct = async () => {
            let response = await fetch("http://localhost:3001/products" + SLUG);
            const data = await response.json();
    
            setProduct(data[0]);
        };
        
        fetchProduct();
    }, [SLUG])

    return (
        <div className="outer-div-product">
            <div className="productDiv">
                <div className="col1">
                    <ImgPreview test={true} />
                </div>
                <div className="col1">
                    <p style={{ marginBottom: '1rem', fontSize: '2rem' }}>{product.name}</p>
                    <div className="col2" style={{ width: "40%", height: "100px" }}>
                        <p style={{ fontSize: 'small', color: 'green', marginBottom: 0 }}>{`In Stock: ${product.quantity}`}</p>
                        <p style={{ fontSize: '1.5rem', marginTop: 0, marginBottom: 0 }}>{`$${product.price}`}</p>
                    </div>
                    <div className="col2" style={{ width: "60%", height: "100px" }}>
                        <CustomButton button_size='small-button' alt='plus icon' image={plusIcon} text='ADD TO CART' />
                        <CustomButton text='BUY NOW' />
                    </div>
                    <div className="mt-1">
                        <b style={{ fontSize: "medium" }}>About this item:</b>
                        <p style={{ fontSize: "small" }}>{product.description}</p>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '8%' }}>
                <label htmlFor="recommendations"><h5 style={{ marginBottom: '20px', marginLeft: '40px' }}><b>Recommended:</b></h5></label>
                <div className="mb-4" id="recommendations">
                    <Carousel />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
