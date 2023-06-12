import './App.css';
import NavBar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/ProductPage';
import Checkout from './pages/Checkout';
import AdminPage from './pages/AdminPage';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {


    return (
        <div className="vstack App">
            <NavBar />
            <header className="App-header">
                <BrowserRouter>
                    <div className="container mt-2" style={{ marginTop: 40 }}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/product' element={<About />} />
                            <Route path='/checkout' element={<Checkout />} />
                            <Route path='/admin' element={<AdminPage />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/signup' element={<Signup />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
