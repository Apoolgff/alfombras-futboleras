import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useMediaQuery } from 'react-responsive';
import Menu from './Menu';
import HamburgerMenu from './HamburgerMenu';

//Navbar con el logo que dirige hacia el inicio y los 4 links
const Navbar = () => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 900 });
    return (
        <header id="header" className="navbar">
            {/*Seccion del Logo*/}
            <div className="logo-nav">
                <Link to="/">
                    <img src="/images/iconos/logoAF-empty" alt=" AF Logo" />
                </Link>
            </div>
             {/*Seccion de Links*/}
             <div>
            {isDesktopOrLaptop ? <Menu /> : <HamburgerMenu />}
            </div>
        </header>
    );
};

export default Navbar;