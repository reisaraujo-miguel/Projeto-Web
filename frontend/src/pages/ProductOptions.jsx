import React, { useState } from "react";
import CustomButton from '../components/Buttons';
import InputBox from '../components/InputBox';
import SearchBarAdmin from '../components/SearchBarAdmin'
import './ProductOptions.css';
import plusIcon from '../img/Buttons/plus-icon.svg';
import okayMark from '../img/Buttons/okayMark.png'
import excludeMark from '../img/Buttons/excludeMark.png'

const ProductOptions = ({ type = 0 }) => {

    const [result, setResult] = useState(null)

    return (

        <div className="outer-wrapper">
            <div className="options-wrapper">
                <div className="product-wrapper">
                    <div className="label-wrapper"> 
                        <label className="text"> Add Product </label>
                    </div>
                    <div className="gap-2">
                        <div className="inputbox-wrapper">
                            <input type="file" accept="image/png, image/gif, image/jpeg, image/jpg"/>
                        </div>
                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder="Name"/>
                        </div>
                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder="Slug"/>
                        </div>
                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder="Description"/>
                        </div>

                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder="Price"/>
                        </div>

                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder="Quantity"/>
                        </div>
                    </div>
                    <div className="button-product">
                        <CustomButton image={plusIcon} text="Add"/>
                    </div>
                </div>
            </div>
            <div className="options-wrapper">
                <div className="product-wrapper">
                    <div className="label-wrapper"> 
                        <label className="text"> Modify Product </label>
                    </div>
                    <div className="searchbar-product">
                        <SearchBarAdmin placeholder="Search Products" endpoint="products/" setData={setResult} searchType={1}/>
                    </div>
                    <div className="gap-2">
                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder="Name"/>
                        </div>
                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder="Slug"/>
                        </div>
                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder="Description"/>
                        </div>

                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder="Price"/>
                        </div>

                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder="Quantity"/>
                        </div>
                    </div>
                    <div className="button-product">
                        <CustomButton image={okayMark} text="Update"/>
                        <CustomButton image={excludeMark} text="Delete"/>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ProductOptions;
