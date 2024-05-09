import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

//Navbar con el logo que dirige hacia el inicio y los 4 links
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src="/images/AF-Logo.png" alt=" AF Logo" />
                </Link>
            </div>
            <div className="nav-links">
                <Link to="/" className="nav-item">Inicio</Link>
                <Link to="/galeria" className="nav-item">Galería</Link>
                <Link to="/nosotros" className="nav-item">Nosotros</Link>
                <Link to="/como-comprar" className="nav-item">Cómo Comprar</Link>
            </div>
        </nav>
    );
};

export default Navbar;