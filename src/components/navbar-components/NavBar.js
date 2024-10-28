import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useMediaQuery } from 'react-responsive';
import Menu from './Menu';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
    const [isRotating, setIsRotating] = useState(false);
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 900 });

    const handleLinkClick = () => {
        setIsRotating(true);
        setTimeout(() => setIsRotating(false), 1000); // Duración de la animación en ms
    };

    return (
        <header id="header" className="navbar">
            <div className="logo-nav">
                <Link to="/" onClick={handleLinkClick}>
                    <img className="logo-nav-image" src="/images/iconos/logoAF-empty.png" alt="AF Logo" />
                    <img 
                        className={`logo-nav-ball ${isRotating ? 'rotate' : ''}`} 
                        src="/images/iconos/LogoAF-ball.png" 
                        alt="Logo-ball" 
                        loading="lazy"
                    />
                </Link>
            </div>
            <div>
                {isDesktopOrLaptop ? <Menu onLinkClick={handleLinkClick} /> : <HamburgerMenu />}
            </div>
        </header>
    );
};

export default Navbar;
