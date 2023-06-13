import logo from '../logo.svg';
import './Home.css';
import CustomButton from '../Buttons.js';
import ImgPreviewStack from '../ImageSelection';
import ExpirationDateField from '../ExpirationDateField.js';
import RatingWidget from '../RatingWidget';
import SearchBarAdmin from '../SearchBarAdmin';
import InputBox from '../InputBox';
import Shipment from '../Shipment';
import Carousel from '../Carousel';


const Home = () => (
    <div className="stub" >
        <div className="mb-5 innerDiv">
        <label> ON SALE </label>
        <Carousel/>
        </div>
        <div className="mb-5 innerDiv">
        <label> ON SALE </label>
        <Carousel/>
        </div>
        <div className="mb-5 innerDiv">
        <label> ON SALE </label>
        <Carousel/>
        </div>
        <div className="mb-5 innerDiv">
        <label> ON SALE </label>
        <Carousel/>
        </div>
    </div>
);

export default Home;
