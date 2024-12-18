import React, { useEffect, useState } from 'react';
import useInViewHook from '../hooks/useInViewHook';
import { Link } from 'react-router-dom';
import './Footer.css';

// Footer - es bastante responsive solo hay algun tamaño de pantalla especifico donde las pelotas dan algun problema en cuanto al tamaño.
//despues agregare otro media query para que quede bien en todos y ajustare un poco mas las dimensiones si hace falta.
const Footer = () => {
    
    const { ref: footerRef, inView: footerInView } = useInViewHook(0.2);



    const handleScrollTop = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 50);
    };
    return (
        <footer className="footer">
            <div className="whatsapp">
                <a className="whatsapp-link " href="https://wa.me/+5493516883680" >
                    <img className="whatsapp-img slide-in-blurred-bottom" src="/images/iconos/Whatsapp.webp" alt="whatsapp" loading="lazy" />
                </a>
            </div>
            {/*Primera Seccion: Logo y Links*/}
            <div className="footer-logo-links">
                <img src="/images/iconos/Logo.webp" alt="Logo" className="footer-logo" loading="lazy" />
                <div className="footer-links">
                    <Link to="/" onClick={handleScrollTop}>Inicio</Link>
                    <Link to="/contacto" onClick={handleScrollTop}>Contacto</Link>
                    <Link to="/galeria" onClick={handleScrollTop}>Galeria</Link>
                    <Link to="/nosotros" onClick={handleScrollTop}>Nosotros</Link>
                    <Link to="/como-comprar" onClick={handleScrollTop}>Como Comprar</Link>
                </div>
            </div>

            {/*Segunda Seccion: Iconos de Redes Sociales*/}
            <div ref={footerRef} className="footer-social-icons">
                <a href="https://www.instagram.com/alfombrasfutboleras?igsh=MW90ZHB2c2hpbDFoOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                    <img src="/images/iconos/Instagram.webp" alt="Instagram" className="social-icon"loading="lazy"/>
                </a>
                <a href="https://www.facebook.com/share/377He4Huujg14s2U/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                    <img src="/images/iconos/Facebook.webp" alt="Facebook" className="social-icon"loading="lazy" />
                </a>
                <a href="https://www.tiktok.com/@alfombrasfutboleras?_t=8mEXkv26kMg&_r=1" target="_blank" rel="noopener noreferrer">
                    <img src="/images/iconos/TikTok.webp" alt="TikTok" className="social-icon" loading="lazy"/>
                </a>
            </div>

            {/*Tercera Seccion: Texto */}
            <div className="footer-text">
                <h3>ALFOMBRAS FUTBOLERAS</h3>
            </div>

            {/*Imagenes de Pelotas*/}
            <div  className={`footer-ball-images ${footerInView ? 'roll-in-left' : ''}`}>
                <img src="/images/iconos/BallBlue.webp" alt="Football" className="ball ball-back" loading="lazy"/>
                <img src="/images/iconos/BallRed.webp" alt="Football" className="ball ball-front" loading="lazy"/>
            </div>
        </footer>
    );
};

export default Footer;

