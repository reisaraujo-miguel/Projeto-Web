import React from "react";
import CustomButton from '../components/Buttons';
import InputBox from '../components/InputBox';
import './ProductOptions.css';
import plusIcon from '../img/Buttons/plus-icon.svg';

const ProductOptions = ({ type = 0 }) => {

    return (

        <div className="options-container">
            <div className="row gap-4 product-wrapper">
                <label className="text"> Add new product </label>
                <div className="row gap-2">
                    <div>
                        <InputBox inputType="text" placeholder="Name" />
                    </div>
                    <div>
                        <InputBox inputType="text" placeholder="Email" />
                    </div>
                    <div>
                        <InputBox inputType="password" placeholder="Password" />
                    </div>
                    <div>
                        <InputBox inputType="password" placeholder="Confirm Password" />
                    </div>
                </div>
                <div>
                    <CustomButton image={plusIcon} />
                </div>
            </div>

            <div className="row gap-4 product-wrapper">
                <label className="text"> Edit existing product </label>
                <div>
                </div>
                <div className="row gap-2">
                    <div>
                        <InputBox inputType="text" placeholder="Name" />
                    </div>
                    <div>
                        <InputBox inputType="text" placeholder="Email" />
                    </div>
                    <div>
                        <InputBox inputType="password" placeholder="Password" />
                    </div>
                    <div>
                        <InputBox inputType="password" placeholder="Confirm Password" />
                    </div>
                </div>
                <div>
                    <CustomButton text="Delete" />
                    <CustomButton text="Update" />
                </div>
            </div>
        </div>
    );
};

export default ProductOptions;
