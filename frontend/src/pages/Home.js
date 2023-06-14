import './Home.css';
import Carousel from '../components/Carousel';


const Home = () => (
    <div className="stub" >
        <div className="mb-5 innerDiv" style={{marginTop:'100px'}}>
        <label className='labelTitle'> ON SALE </label>
        <Carousel/>
        </div>
        <div className="mb-5 innerDiv">
        <label className='labelTitle'> SPECIAL OFFER </label>
        <Carousel/>
        </div>
        <div className="mb-5 innerDiv">
        <label className='labelTitle'> LAPTOPS </label>
        <Carousel/>
        </div>
        <div className="mb-5 innerDiv">
        <label className='labelTitle'> GOLF BALLS </label>
        <Carousel/>
        </div>
    </div>
);

export default Home;
