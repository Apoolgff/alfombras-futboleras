import React, { useEffect, useState } from 'react';
import useInViewHook from '../../hooks/useInViewHook';
import './Hus.css'
import { Link } from 'react-router-dom';


const Hus = () => {
    const { ref: btnRef, inView: btnInView } = useInViewHook(0.1);

    
    const { ref: bannerRef, inView: bannerInView } = useInViewHook(0.1);


    const handleScrollTop = () => {
       

        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }, 0);
    };
  return (
    <div className="us-section">
                <div className="us-text">
                    <p>Mi nombre es Agustín Bruschini, soy de Córdoba Capital, Argentina.<br />
                        Entender de pasiones me permite dedicarle el tiempo y amor que cada alfombra necesita.</p>              
                    <Link ref={btnRef} to="/nosotros" onClick={handleScrollTop} className={`us-button ${btnInView? 'btn-animation' : ''}`}>Sobre Alfombras Futboleras</Link>
                </div>
                <div className='us-icons' >
                    <h3>Seguinos en nuestras Redes Sociales!</h3>
                    <div className="us-links">
                        <a href="https://www.instagram.com/alfombrasfutboleras?igsh=MW90ZHB2c2hpbDFoOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                            <img src="/images/iconos/Instagram.webp" alt="Instagram" className="social-icon" loading="lazy"/>
                        </a>
                        <a href="https://www.facebook.com/share/377He4Huujg14s2U/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                            <img src="/images/iconos/Facebook.webp" alt="Facebook" className="social-icon" loading="lazy"/>
                        </a>
                        <a href="https://www.tiktok.com/@alfombrasfutboleras?_t=8mEXkv26kMg&_r=1" target="_blank" rel="noopener noreferrer">
                            <img src="/images/iconos/TikTok.webp" alt="TikTok" className="social-icon" loading="lazy" />
                        </a>
                    </div>
                    <div ref={bannerRef} className='us-image'>
                        <img   src="/images/iconos/BallBlue.webp" alt="Pelota Azul" className={`us-ball ${bannerInView ? 'roll-in-right' : ''}`} loading="lazy"/>
                    </div>
                </div>
            </div>
  )
}

export default Hus