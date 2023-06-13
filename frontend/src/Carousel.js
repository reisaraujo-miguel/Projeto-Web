import React, {useState} from 'react';
import Card from './Card.js'
import './Carousel.css'
import laptop1 from './img/laptop-1.jpg'
import laptop2 from './img/laptop-2.jpg'
import laptop3 from './img/laptop-3.jpg'
import laptop4 from './img/laptop-4.jpg'
import laptop5 from './img/laptop-5.jpg'
import laptop6 from './img/laptop-6.jpg'
import laptop7 from './img/laptop-7.jpg'

const Carousel = ({}) => {

  let laptops = [laptop1, laptop2, laptop3, laptop4, laptop5, laptop6, laptop7]

  const [laptopsState, setLaptopsState] = useState(laptops)

  const goToNext = () => {
    const updatedLaptops = [...laptopsState];
    const head = updatedLaptops.shift();
    updatedLaptops.push(head);
    setLaptopsState(updatedLaptops);  
  };

  const goToPrevious = () => {
    const updatedLaptops = [...laptopsState];
    const tail = updatedLaptops.pop();
    updatedLaptops.unshift(tail);
    setLaptopsState(updatedLaptops);
  };
  
  const foo = () => {
    console.log("redirect")
  }

   return (

     <div className="carousel-wrapper">
       <div className= "left-button-wrapper">
       <button
         className="left-button" onClick={goToPrevious}>
         &lt;
       </button>
       </div>
       {laptopsState.filter((_, index) => index <= 3).map((laptop) => (
      <Card
        name="Laptop Ideapad Lenovo 14 Ryzen"
        img={laptop}
        userRating={4}
        productPrice={9966.66}
        onClick={foo}
        />
      ))}
      <div className= "right-button-wrapper">
      <button className="right-button" onClick={goToNext}>
        &gt;
      </button>
      </div>
     </div>
     
    );
};

export default Carousel;
