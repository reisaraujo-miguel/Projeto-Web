import { React } from 'react';
import './Navbar.css';
import { BiSolidUserCircle } from 'react-icons/bi';
import { BiSolidCart } from 'react-icons/bi';

const NavBar = ({ logged = null }) => {
    const current = window.location.pathname;

    return (
        <nav className='navbar navbar-dark fixed-top'>
            <div className='container-fluid'>
                {/* Ham menu */}
                <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas'
                    data-bs-target='#offcanvasDarkNavbar' aria-controls='offcanvasDarkNavbar'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon fs-5'></span>
                </button>

                {/* Page name */}
                <a className='navbar-brand fw-bold me-auto ms-auto ms-md-1' href='/#'> Silicon Road </a>

                {/* Search Bar */}
                <form className='d-flex ms-auto me-auto me-md-1' role='search'>
                    <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
                    <button className='btn btn-outline-light' type='submit'>Search</button>
                </form>

                {/* Cart */}
                <a className='d-none d-md-block' href={logged !== null ? "/checkout" : "/login"}>
                    <BiSolidCart className='ms-4' size={'2.5rem'} color="white" />

                </a>

                {/* User */}
                <a className='d-none d-md-block' href="/login">
                    <BiSolidUserCircle className='ms-4 me-2' size={'2.5rem'} color="white" />
                </a>

                {/* Off Canvas*/}
                <div className='offcanvas offcanvas-start text-bg-dark' tabIndex='-1' id='offcanvasDarkNavbar'
                    aria-labelledby='offcanvasDarkNavbarLabel'>
                    {/* Name */}
                    <div className='offcanvas-header'>
                        <h5 className='offcanvas-title' id='offcanvasDarkNavbarLabel'>Main Menu</h5>
                        <button type='button' className='btn-close btn-close-white' data-bs-dismiss='offcanvas'
                            aria-label='Close'></button>
                    </div>

                    <div className='offcanvas-body'>
                        <ul className='navbar-nav justify-content-start flex-grow-1 pe-3'>
                            <li className='nav-item'>
                                <a className={"nav-link " + (current === "/" ? "active" : "")} aria-current='page' href='/'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className={"nav-link " + (current === "/checkout" ? "active" : "")} href='/checkout'>Cart</a>
                            </li>
                            {logged === 'admin' &&
                                <li className='nav-item'>
                                    <a className={"nav-link " + (current === "/admin" ? "active" : "")} href='/admin'>Admin Page</a>
                                </li>
                            }
                            <li className='nav-item'>
                                <a className={"nav-link " + (current === "/login" ? "active" : "")} href='/login'>Login</a>
                            </li>
                            <li className='nav-item'>
                                <a className={"nav-link " + (current === "/signup" ? "active" : "")} href='/signup'>Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;