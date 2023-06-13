import logo from '../logo.svg';
import './Home.css';
import CustomButton from '../Buttons.js';
import ImgPreviewStack from '../ImageSelection';
import ExpirationDateField from '../ExpirationDateField.js';
import RatingWidget from '../RatingWidget';
import SearchBarAdmin from '../SearchBarAdmin';
import InputBox from '../InputBox';
import Shipment from '../Shipment';


const Home = () => (
  <div>
    <h1 className="title is-1">Esta é a página principal</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
      risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
      nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
      lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.

      <img src={logo} className="App-logo" alt="logo" />
                <CustomButton button_size='small-button' alt='plus icon' image='./img/Buttons/plus-icon.svg' text='ICON + TEXT' />
                <CustomButton text='ONLY TEXT' />
                <CustomButton image='./img/Buttons/plus-icon.svg' alt="plus icon" />
                <CustomButton image='./img/Buttons/plus-icon.svg' bg='no-bg' />
                <ExpirationDateField />
                <RatingWidget />
                <SearchBarAdmin />
                <ImgPreviewStack test={true} />
                <InputBox/>
                <Shipment/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
    </p>
  </div>
);

export default Home;
