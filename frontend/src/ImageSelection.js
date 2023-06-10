import React, { useEffect, useRef, useState, } from 'react';
import "./ImageSelection.css";

const ImgPreviewStack = ({ dir }) => {
    const imageStackContainerRef = useRef(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(dir);
                const html = await response.text();

                // Create a temporary div element to parse the HTML response
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;

                // Get all the 'a' elements from the response
                const linkElements = tempDiv.querySelectorAll('a');

                const imageUrls = [];

                linkElements.forEach((linkElement) => {
                    const href = linkElement.getAttribute('href');
                    const imageUrl = constructImageUrl(href, dir);
                    if (imageUrl && isImageFile(imageUrl)) {
                        imageUrls.push(imageUrl);
                    }
                });

                setImages(imageUrls);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, [dir]);

    console.log(images);

    useEffect(() => {
        const imageStackContainer = imageStackContainerRef.current;

        const scrollImages = (event) => {
            const rect = imageStackContainer.getBoundingClientRect();
            const isMouseOver = event.clientY >= rect.top && event.clientY <= rect.bottom;

            if (isMouseOver) {
                // Prevent scrolling of the page
                event.preventDefault();

                // Scroll the image stack container
                imageStackContainer.scrollTop += event.deltaY;
            }
        };

        //const imageStackContainer = imageStackContainerRef.current;

        imageStackContainer.addEventListener('wheel', scrollImages);

        return () => {
            imageStackContainer.removeEventListener('wheel', scrollImages);
        };
    }, []);


    const createImageStack = () => {
        return images.map((url, index) => (
            <div key={index} className="image-square" style={{ backgroundImage: `url(${url})` }}></div>
        ));
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 offset-md-1">
                    <div className="image-stack-container" ref={imageStackContainerRef}>
                        <div className="image-stack">
                            {createImageStack()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function constructImageUrl(href, dir) {
    const normalizedHref = href.startsWith('./') ? href.substring(2) : href;
    const imageUrl = new URL(normalizedHref, dir).href;
    return imageUrl;
}

function isImageFile(fileName) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const extension = fileName.split('.').pop().toLowerCase();
    return imageExtensions.includes(`.${extension}`);
}

export default ImgPreviewStack;
