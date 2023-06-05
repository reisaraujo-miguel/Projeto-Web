import { React } from 'react';
import './Navbar.css';

const NavBar = () => {
    return (
        <div class='mb-5'>
            <nav class='navbar navbar-dark fixed-top' style={{ 'background-color': '#6200EE' }}>
                <div class='container-fluid'>
                    <button class='navbar-toggler' type='button' data-bs-toggle='offcanvas'
                        data-bs-target='#offcanvasDarkNavbar' aria-controls='offcanvasDarkNavbar'
                        aria-label='Toggle navigation'>
                        <span class='navbar-toggler-icon fs-5'></span>
                    </button>
                    <a class='navbar-brand fw-bold' style={{'font-size': '180%', 'font-family': 'Montagu Slab'}} href='/#'> Silicon Road </a>
                    <form class='d-flex' role='search'>
                        <input class='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
                            <button class='btn btn-outline-light' type='submit'>Search</button>
                    </form>
                    <div class='offcanvas offcanvas-start text-bg-dark' tabindex='-1' id='offcanvasDarkNavbar'
                        aria-labelledby='offcanvasDarkNavbarLabel'>
                        <div class='offcanvas-header'>
                            <h5 class='offcanvas-title' id='offcanvasDarkNavbarLabel'>Dark offcanvas</h5>
                            <button type='button' class='btn-close btn-close-white' data-bs-dismiss='offcanvas'
                                aria-label='Close'></button>
                        </div>
                        <div class='offcanvas-body'>
                            <ul class='navbar-nav justify-content-start flex-grow-1 pe-3'>
                                <li class='nav-item'>
                                    <a class='nav-link active' aria-current='page' href='/#'>Home</a>
                                </li>
                                <li class='nav-item'>
                                    <a class='nav-link' href='/#'>Link</a>
                                </li>
                                <li class='nav-item dropdown'>
                                    <a class='nav-link dropdown-toggle' href='/#' role='button' data-bs-toggle='dropdown'
                                        aria-expanded='false'> Dropdown </a>
                                    <ul class='dropdown-menu dropdown-menu-dark'>
                                        <li><a class='dropdown-item' href='/#'>Action</a></li>
                                        <li><a class='dropdown-item' href='/#'>Another action</a></li>
                                        <li>
                                            <hr class='dropdown-divider' />
                                        </li>
                                        <li><a class='dropdown-item' href='/#'>Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form class='d-flex mt-3' role='search'>
                                <input class='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
                                    <button class='btn btn-success' type='submit'>Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
