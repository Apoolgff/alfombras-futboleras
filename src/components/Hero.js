import React from 'react'
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-content">
                <h1>Tu pasión hecha <br /> <span className="red-text">alfombra</span></h1>

                <p>Cuéntanos qué diseño quieres y lo hacemos realidad</p>
                <div className="bars">
                    <img className="bar-1" src="/images/iconos/bar.webp" alt="bar" />
                    <img className="bar-2" src="/images/iconos/bar2.webp" alt="bar2" />
                </div>
            </div>
            <div className="right-content">
                <img className="logo" src="/images/iconos/Logo.webp" alt="Imagen 1" />
            </div>
        </div>
    )
}

export default Hero