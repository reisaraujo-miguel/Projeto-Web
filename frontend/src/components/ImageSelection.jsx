import { useEffect, useState } from "react";
import "./ImageSelection.css";

const ImgPreviewStack = () => {
  const [image, setImage] = useState(null);

  const SLUG = window.location.pathname;

  useEffect(() => {
    const fetchImage = async () => {
      let response = await fetch("http://localhost:3001/products/" + SLUG);
      const product = await response.json();

      const imageName = product[0].imgPath;

      response = await fetch(
        "http://localhost:3001/products/images/" + imageName
      );
      const imageBlob = await response.blob();

      const imageUrl = URL.createObjectURL(imageBlob);
      setImage(imageUrl);
    };

    fetchImage();
  }, [SLUG]);

  return (
    <div className="image-container">
      <img src={image} alt="product" />
    </div>
  );
};

export default ImgPreviewStack;
