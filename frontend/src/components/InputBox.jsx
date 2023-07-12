import React, { useRef } from 'react';
import './InputBox.css'

const InputBox = ({ image, inputType, backgroundColor, foregroundColor, placeholder, padding, setData = () => { }, isRequired = false, disabled = false }) => {

    const inputRef = useRef(null)

    function handleChange() {
        setData(inputRef.current.value)
    }

    let inputStyle = {
        backgroundColor: backgroundColor,
        color: foregroundColor,
        padding: padding,
        width: '100%',
    }

    if (image !== null && image !== undefined) {
        inputStyle.backgroundImage = `url("${image}")`
        inputStyle.backgroundRepeat = "no-repeat"
        inputStyle.backgroundPosition = "left"
        inputStyle.paddingLeft = "1.5rem"
        inputStyle.backgroundSize = "1.1rem"
    }
    else {
        inputStyle.paddingRight = "1.5rem"
    }

    if (isRequired) {
        return (
            <input
                type={inputType}
                className="basicText"
                style={inputStyle}
                placeholder={placeholder}
                onChange={handleChange}
                required
                ref={inputRef}
                disabled={disabled}>
            </input>
        );
    }

    return (
        <input
            type={inputType}
            className="basicText"
            style={inputStyle}
            placeholder={placeholder}
            onChange={handleChange}
            ref={inputRef}
            disabled={disabled}>
        </input>
    );

};


export default InputBox;
