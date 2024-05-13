import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// Footer - es bastante responsive solo hay algun tamaño de pantalla especifico donde las pelotas dan algun problema en cuanto al tamaño.
//despues agregare otro media query para que quede bien en todos y ajustare un poco mas las dimensiones si hace falta.
const Footer = () => {
    return (
        <footer className="footer">
            <div className="whatsapp">
                <a className="whatsapp-link" href="https://wa.me/+5493516883680" >
                    <img className="whatsapp-img" src="/images/iconos/Whatsapp.webp" alt="whatsapp" />
                </a> 
            </div>
            {/*Primera Seccion: Logo y Links*/}
            <div className="footer-logo-links">
                <img src="/images/iconos/Logo.webp" alt="Logo" className="footer-logo" />
                <div className="footer-links">
                    <Link to="/">Inicio</Link>
                    <Link to="/galeria">Galeria</Link>
                    <Link to="/nosotros">Nosotros</Link>
                    <Link to="/como-comprar">Como Comprar</Link>
                </div>
            </div>

            {/*Segunda Seccion: Iconos de Redes Sociales*/}           
            <div className="footer-social-icons">
                <a href="https://www.instagram.com/alfombrasfutboleras?igsh=MW90ZHB2c2hpbDFoOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                    <img src="/images/iconos/Instagram.webp" alt="Instagram" className="social-icon" />
                </a>
                <a href="https://www.facebook.com/share/377He4Huujg14s2U/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                    <img src="/images/iconos/Facebook.webp" alt="Facebook" className="social-icon" />
                </a>
                <a href="https://www.tiktok.com/@alfombrasfutboleras?_t=8mEXkv26kMg&_r=1" target="_blank" rel="noopener noreferrer">
                    <img src="/images/iconos/TikTok.webp" alt="TikTok" className="social-icon" />
                </a>
            </div>

            {/*Tercera Seccion: Texto */}
            <div className="footer-text">
                <p>ALFOMBRAS FUTBOLERAS</p>
            </div>

            {/*Imagenes de Pelotas*/}
            <div className="footer-ball-images">
                <img src="/images/iconos/BallBlueFooter.webp" alt="Football" className="ball ball-back" />
                <img src="/images/iconos/BallRedFooter.webp" alt="Football" className="ball ball-front" />
           </div>
        </footer>
    );
};

export default Footer;

