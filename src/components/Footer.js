import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// Footer - es bastante responsive solo hay algun tamaño de pantalla especifico donde las pelotas dan algun problema en cuanto al tamaño.
//despues agregare otro media query para que quede bien en todos y ajustare un poco mas las dimensiones si hace falta.
const Footer = () => {
    return (
        <div className="footer">
            {/*Primera Seccion: Logo y Links*/}
            <div className="footer-logo-links">
                <img src="/images/Logo.png" alt="Logo" className="footer-logo" />
                <div className="footer-links">
                    <Link to="/">Inicio</Link>
                    <Link to="/galeria">Galeria</Link>
                    <Link to="/nosotros">Nosotros</Link>
                    <Link to="/como-comprar">Como Comprar</Link>
                </div>
            </div>

            {/*Segunda Seccion: Iconos de Redes Sociales*/}           
            <div className="footer-social-icons">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/Instagram.png" alt="Instagram" className="social-icon" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/Facebook.png" alt="Facebook" className="social-icon" />
                </a>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/TikTok.png" alt="TikTok" className="social-icon" />
                </a>
            </div>

            {/*Tercera Seccion: Texto */}
            <div className="footer-text">
                <p>ALFOMBRAS FUTBOLERAS</p>
            </div>

            {/*Imagenes de Pelotas*/}
            <div className="footer-ball-images">
                <img src="/images/BallBlueFooter.png" alt="Football" className="ball ball-back" />
                <img src="/images/BallRedFooter.png" alt="Football" className="ball ball-front" />
           </div>
        </div>
    );
};

export default Footer;

