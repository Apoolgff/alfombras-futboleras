import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="nav-links">
            <Link to="/" className="nav-item">Inicio</Link>
            <Link to="/contacto" className="nav-item">Contacto</Link>
            <Link to="/galeria" className="nav-item">Galería</Link>
            <Link to="/nosotros" className="nav-item">Nosotros</Link>
            <Link to="/como-comprar" className="nav-item">Cómo Comprar</Link>
        </nav>
    );
};

export default Menu;