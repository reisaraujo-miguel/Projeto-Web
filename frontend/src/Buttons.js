import { React, useEffect, useState } from 'react';
import './Buttons.css';


const ImagePlusTextButton = ({ icon_size, image, alt, text }) => {
    const [svg, setSvg] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
            const img = await import(`${image}`);
            setSvg(img.default);
        };

        loadImage();
    }, [image]);

    return (
        <button type='button' className='btn btn-primary btn-purple m-1'>
            <img className={icon_size} src={svg} alt={alt} />
            <span className={icon_size}><strong>{text}</strong></span>
        </button>
    );
}

export default ImagePlusTextButton;
