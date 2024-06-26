import React from 'react'
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-content">
                <h1>Tu pasión hecha <br /> <span className="red-text">alfombra</span></h1>

                <p>Cuéntanos qué diseño quieres y lo hacemos realidad</p>
                <div className="bars">
                    <img className="bar-1" src="/images/iconos/bar.webp" alt="bar" loading="lazy"/>
                    <img className="bar-2" src="/images/iconos/bar2.webp" alt="bar2" loading="lazy"/>
                </div>
            </div>
            <div className="right-content">
                <img className="logo" src="/images/iconos/LogoAF.webp" alt="Logo" loading="lazy"/>
            </div>
        </div>
    )
}

export default Hero