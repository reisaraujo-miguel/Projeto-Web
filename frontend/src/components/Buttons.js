import { React, useEffect, useState } from 'react';
import './Buttons.css';


const CustomButton = ({ image, text, alt = '', bg = 'purple-bg', button_size = 'small-button' }) => {

    const [svg, setSvg] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
            if (null !== image && undefined !== image) {
                const img = await import(`${image}`);
                setSvg(img.default);
            }
        };

        loadImage();
    }, [image]);

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
                <img className={button_size} src={svg} alt={alt} />
            </button>
        );
    } else {
        // Image + Text Button
        return (
            <button type='button' className={classes}>
                <img className={button_size} src={svg} alt={alt} />
                <span className={button_size}><strong>{text}</strong></span>
            </button>
        );
    }
}

export default CustomButton;
