// pages/ProductPage.js

import React from "react";
import ImgPreviewStack from '../ImageSelection';
import RatingWidget from "../RatingWidget";
import CustomButton from '../Buttons.js';

const ProductPage = () => (
  <div>
    <h1 className="title is-1">Esta é a página do produto</h1>
    <p>
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus
      et ultrices posuere cubilia curae; Duis consequat nulla ac ex consequat,
      in efficitur arcu congue. Nam fermentum commodo egestas.
    </p>

    <ImgPreviewStack test={true}/>
    <RatingWidget/>
    <CustomButton button_size='small-button' alt='plus icon' image='./img/Buttons/plus-icon.svg' text='ADD TO CART' />
    <CustomButton text='BUY NOW' />
    

  </div>
);

export default ProductPage;
