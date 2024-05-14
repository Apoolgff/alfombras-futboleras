import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

//Navbar con el logo que dirige hacia el inicio y los 4 links
const Navbar = () => {
    return (
        <header id="header" className="navbar">
            {/*Seccion del Logo*/}
            <div className="logo">
                <Link to="/">
                    <img src="/images/iconos/Logo.webp" alt=" AF Logo" />
                </Link>
            </div>
             {/*Seccion de Links*/}
            <nav className="nav-links">
                <Link to="/" className="nav-item">Inicio</Link>
                <Link to="/contacto" className="nav-item">Contacto</Link>
                <Link to="/galeria" className="nav-item">Galería</Link>
                <Link to="/nosotros" className="nav-item">Nosotros</Link>
                <Link to="/como-comprar" className="nav-item">Cómo Comprar</Link>
            </nav>
        </header>
    );
};

export default Navbar;