import './Home.css';
import Carousel from '../components/Carousel';


const Home = () => (
    <div className="stub gap-5">
        <div className="innerDiv">
            <label className='labelTitle'> ON SALE </label>
            <Carousel />
        </div>
        <div className="innerDiv">
            <label className='labelTitle'> SPECIAL OFFER </label>
            <Carousel />
        </div>
        <div className="innerDiv">
            <label className='labelTitle'> LAPTOPS </label>
            <Carousel />
        </div>
        <div className="innerDiv">
            <label className='labelTitle'> GOLF BALLS </label>
            <Carousel />
        </div>
    </div>
);

export default Home;
