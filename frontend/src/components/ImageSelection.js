import React, { useEffect, useRef, useState, } from 'react';
import { Carousel } from 'react-bootstrap';
import "./ImageSelection.css";

const ImgPreviewStack = ({ dir = '', test = false }) => {
    const imageStackContainerRef = useRef(null);
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState('');
    const [index, setIndex] = useState(0);

    const handleCarouselSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        const fetchImages = async () => {
            try {
                if (test === false) {
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
                } else {
                    const imageUrls = [];

                    for (let i = 1; i < 8; i++) {
                        const img = await import(`./img/test/laptop-${i}.jpg`);
                        imageUrls.push(img.default);
                    }

                    setImages(imageUrls);
                }
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, [dir, test]);

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

        imageStackContainer.addEventListener('wheel', scrollImages);

        return () => {
            imageStackContainer.removeEventListener('wheel', scrollImages);
        };
    }, []);

    const handleImageSelect = (url) => {
        setSelectedImage(url);
    };

    const createImageStack = () => {
        return images.map((url, index) => (
            <div key={index} className="image-square" style={{ backgroundImage: `url(${url})` }} onClick={() => handleImageSelect(url)}></div>
        ));
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 d-none d-md-block" style={{ "marginRight": "-5%" }}>
                    <div className="image-stack-container" ref={imageStackContainerRef}>
                        <div className="image-stack">
                            {createImageStack()}
                        </div>
                    </div>
                </div>
                <div className='col-md-7'>
                    <div className='big-image-container d-none d-md-block'>
                        {selectedImage && <div className="big-image" style={{ backgroundImage: `url(${selectedImage})` }}></div>}
                        {!selectedImage && images.length > 0 && <div className="big-image" style={{ backgroundImage: `url(${images[0]})` }}></div>}
                    </div>
                    <div className='d-md-none'>
                        <Carousel activeIndex={index} onSelect={handleCarouselSelect}>
                            {images.map((url, index) => (
                                <Carousel.Item key={index}>
                                    <div className='carousel-image-container'>
                                        <img className="carousel-image" src={url} alt={"Product images"} />
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

const constructImageUrl = (href, dir) => {
    const normalizedHref = href.startsWith('./') ? href.substring(2) : href;
    const imageUrl = new URL(normalizedHref, dir).href;
    return imageUrl;
};

const isImageFile = (fileName) => {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const extension = fileName.split('.').pop().toLowerCase();
    return imageExtensions.includes(`.${extension}`);
};

export default ImgPreviewStack;
