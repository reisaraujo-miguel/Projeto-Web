import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar.js';
import CustomButton from './Buttons.js';

function App() {
    return (
        <div className="vstack gap-3 App">
            <NavBar />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <CustomButton button_size='small-button' alt='plus icon' image='./img/Buttons/plus-icon.svg' text='ICON + TEXT' />
                <CustomButton text='ONLY TEXT' />
                <CustomButton image='./img/Buttons/plus-icon.svg' alt="plus icon" />
                <CustomButton image='./img/Buttons/plus-icon.svg' bg='no-bg' />
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
            </header>
        </div>
    );
}

export default App;
