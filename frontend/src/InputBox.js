import React, { useRef } from 'react';
import './InputBox.css'

const InputBox = ({ image, inputType, backgroundColor, foregroundColor, placeholder, padding, setData=()=>{} }) => {

    const inputRef = useRef(null)

    function handleChange() {
        setData(inputRef.current.value)
    }

    let inputStyle = {
        backgroundColor: backgroundColor,
        color: foregroundColor,
        padding: padding,

    }

    if (image !== null && image !== undefined) {
        inputStyle.backgroundImage = `url("${image}")`
        inputStyle.backgroundRepeat = "no-repeat"
        inputStyle.backgroundPosition = "left"
        inputStyle.paddingLeft = "25px"
        inputStyle.backgroundSize = "18px"
    }
    else {
        inputStyle.paddingRight = "25px"
    }

    return (
        <input
            type={inputType}
            className="basicText"
            style={inputStyle}
            placeholder={placeholder}
            onChange={handleChange}
            ref={inputRef}>
        </input>
    );

};


export default InputBox;
