import React from 'react';
import './Buttons.css';


const CustomButton = ({ image, text, alt = '', bg = 'purple-bg', button_size = 'small-button' }) => {
    const classes = `btn btn-primary m-1 ${bg}`;

    if (null === image || undefined === image) {
        if (null === text || undefined === text) {
            throw new Error('CustomButton [at src/Button.js:24]: You need to either set an image or a text.');
        } else {
            return (
                <button type='button' className={classes}>
                    <span className={button_size}><strong>{text}</strong></span>
                </button>
            );
        }
    } else if (null === text || undefined === text) {
        return (
            <button type='button' className={classes}>
                <img className={button_size} src={image} alt={alt} />
            </button>
        );
    } else {
        // Image + Text Button
        return (
            <button type='button' className={classes}>
                <img className={button_size} src={image} alt={alt} />
                <span className={button_size}><strong>{text}</strong></span>
            </button>
        );
    }
}

export default CustomButton;
