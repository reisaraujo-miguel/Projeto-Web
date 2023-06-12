import { React } from 'react';
import './Navbar.css';

const NavBar = () => {
    return (
        <div className='mb-5'>
            <nav className='navbar navbar-dark fixed-top' style={{ 'backgroundColor': '#6200EE' }}>
                <div className='container-fluid'>
                    <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas'
                        data-bs-target='#offcanvasDarkNavbar' aria-controls='offcanvasDarkNavbar'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon fs-5'></span>
                    </button>
                    <a className='navbar-brand fw-bold' style={{'fontSize': '180%', 'fontFamily': 'Montagu Slab'}} href='/#'> Silicon Road </a>
                    <form className='d-flex' role='search'>
                        <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
                            <button className='btn btn-outline-light' type='submit'>Search</button>
                    </form>
                    <div className='offcanvas offcanvas-start text-bg-dark' tabIndex='-1' id='offcanvasDarkNavbar'
                        aria-labelledby='offcanvasDarkNavbarLabel'>
                        <div className='offcanvas-header'>
                            <h5 className='offcanvas-title' id='offcanvasDarkNavbarLabel'>Main Menu</h5>
                            <button type='button' className='btn-close btn-close-white' data-bs-dismiss='offcanvas'
                                aria-label='Close'></button>
                        </div>
                        <div className='offcanvas-body'>
                            <ul className='navbar-nav justify-content-start flex-grow-1 pe-3'>
                                <li className='nav-item'>
                                    <a className='nav-link active' aria-current='page' href='/'>Home</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/checkout'>Checkout</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/product'>Product Page</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
