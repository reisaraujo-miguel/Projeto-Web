import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/ProductPage';
import Checkout from './pages/Checkout';
import AdminPage from './pages/AdminPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminOptions from './pages/AdminOptions';
import UserOptions from './pages/UserOptions';
import ProductOptions from './pages/ProductOptions';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const user = 'admin'; // states: null (not logged),  user, admin

    return (
        <>
            <header className="App-header" role='banner'>
                <NavBar logged={user} />
            </header>
            <main className='App'>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />

                <BrowserRouter>
                    <div className="container">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/product' element={<About />} />
                            <Route path='/checkout' element={<Checkout />} />
                            {user === 'admin' && <Route path='/admin' element={<AdminPage />} />}
                            {user === 'admin' && <Route path='/admin/admins' element={<AdminOptions/>}/>}
                            {user === 'admin' && <Route path='/admin/users' element={<UserOptions/>}/>}
                            {user === 'admin' && <Route path='/admin/products' element={<ProductOptions/>}/>}
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
