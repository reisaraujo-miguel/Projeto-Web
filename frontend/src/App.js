import './App.css';
import NavBar from './Navbar';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/ProductPage';
import Checkout from './pages/Checkout';

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

                        </Routes>
                    </div>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
