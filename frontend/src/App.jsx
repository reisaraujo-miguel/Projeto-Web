import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/ProductPage';
import Checkout from './pages/Checkout';
import AdminPage from './pages/AdminPage';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
    const user = 'admin'; // states: null (not logged),  user, admin

    return (
        <>
            <header className="App-header" role='banner'>
                <NavBar />
            </header>
            <main className='App'>
                <BrowserRouter>
                    <div className="container">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/product' element={<About />} />
                            <Route path='/checkout' element={<Checkout />} />
                            {user === 'admin' && <Route path='/admin' element={<AdminPage />} />}
                            <Route path='/login' element={<Login />} />
                            <Route path='/signup' element={<Signup />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </main>
        </>
    );
}

export default App;
