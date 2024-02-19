import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Navbar/Navbar.css'
function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg  bg-body-tertiary">
                <div className="container">

                    <a href="#" className="navbar-brand "><span>Ta</span>jj</a>
                    
                    <button className="navbar-toggler shadow-none border-0 text-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>

                    <div className="offcanvas offcanvas-start" id="offcanvasNavbar" aria-labelledby="offnavlabel">
                        <div className="offcanvas-header text-dark border-bottom">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><span>Ta</span>jj</h5>
                            <button type="button" className="btn-close btn-close-dark shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center align-items-center  flex-grow-1 pe-3">
                                <Link to='/'><li className="nav-item">
                                    <a href="#" className="nav-link" aria-current="page" >Home</a>
                                </li></Link>
                                <Link to='/destinations'> <li className="nav-item">
                                    <a href="#" className="nav-link mx-2" >Destinations</a>
                                </li></Link>
                                <Link to='/experiences'> <li className="nav-item">
                                    <a href="#" className="nav-link mx-2" >Experiences</a>
                                </li></Link>
                                <Link to='/themes'>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link mx-2">Themes</a>
                                    </li>
                                </Link>

                                <Link to='/incredeble_Journey'>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link mx-2">Journeys</a>
                                    </li>
                                </Link>


                                <li class="nav-item dropdown "><a href="#" class="nav-link dropdown-toggle" data-bs-toggle='dropdown'>  Discover_More</a>
                                    <ul class="dropdown-menu dropdown-menu-dark mt-2 " id="dropdwn"  >
                                        <Link to='/nepal'> <a class="dropdown-item text-white " type="button"></a> Nepal </Link>
                                        <Link to='/srilanka'> <a class="dropdown-item" type="button"></a> Srilanka </Link>
                                        <Link to='/maldives'> <a class="dropdown-item " type="button"></a> Maldives </Link>

                                    </ul>
                                </li>

                            </ul>
                            <hr className='d-lg-none' />

                            <div className='d-flex justify-content-center align-items-center gap-3'>
                                <Link to='/book_holiday'><a className='px-3 py-2 rounded-4 text-decoration-none text-white' id='signup' style={{ backgroundColor: 'grey' }} >Book_Holiday</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Navbar;