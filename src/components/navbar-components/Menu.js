import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ onLinkClick }) => {
    return (
        <nav className="nav-links">
            <Link to="/" className="nav-item" onClick={onLinkClick}>Inicio</Link>
            <Link to="/contacto" className="nav-item" onClick={onLinkClick}>Contacto</Link>
            <Link to="/galeria" className="nav-item" onClick={onLinkClick}>Galería</Link>
            <Link to="/nosotros" className="nav-item" onClick={onLinkClick}>Nosotros</Link>
            <Link to="/como-comprar" className="nav-item" onClick={onLinkClick}>Cómo Comprar</Link>
        </nav>
    );
};

export default Menu;
