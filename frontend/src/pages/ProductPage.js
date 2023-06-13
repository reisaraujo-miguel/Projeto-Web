// pages/ProductPage.js

import React from "react";
import ImgPreviewStack from '../ImageSelection';
import RatingWidget from "../RatingWidget";
import CustomButton from '../Buttons.js';
import './ProductPage.css';

const ProductPage = () => (
  <div>

    <div class="row">
      <div class="column1">
        <ImgPreviewStack test={true} />
      </div>
      <div class="column1">
        <p>Notebook Fritadeira Philips Walita 8GB RAM.</p>
        <div style={{width:"40%"}}>
          <RatingWidget />
        </div>


        <div class="column2" style={{width:"40%"}}>
          <p style={{fontSize:'small', color:'green', marginBottom:0}}>In Stock</p>
          <p style={{marginTop:0}}>$666.66</p>
        </div>
        <div class="column2" style={{width:"60%"}}>
          <CustomButton button_size='small-button' alt='plus icon' image='./img/Buttons/plus-icon.svg' text='ADD TO CART' />
          <CustomButton text='BUY NOW' />
        </div>

      </div>
    </div>

  </div>
);

export default ProductPage;
