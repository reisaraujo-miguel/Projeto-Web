import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar.js';
import CustomButton from './Buttons.js';
import ImgPreviewStack from './ImageSelection';
import ExpirationDateField from './ExpirationDateField.js';
import RatingWidget from './RatingWidget';
import AdminDropdown from './DropdownMenu';

function App() {
    return (
        <div className="vstack App">
            <NavBar />
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" />
                <CustomButton button_size='small-button' alt='plus icon' image='./img/Buttons/plus-icon.svg' text='ICON + TEXT' />
                <CustomButton text='ONLY TEXT' />
                <CustomButton image='./img/Buttons/plus-icon.svg' alt="plus icon" />
                <CustomButton image='./img/Buttons/plus-icon.svg' bg='no-bg' />
                <ExpirationDateField />
                <RatingWidget />
                <AdminDropdown /> */}
                <ImgPreviewStack dir="http://172.26.157.246:8080" />
                {/* <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a> */}
            </header>
        </div>
    );
}

export default App;
