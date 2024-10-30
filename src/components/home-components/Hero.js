import React from 'react'
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-background">
        <div className="hero">
            <div className="left-content ">
                <h1 className="text-focus-in">Tu pasión hecha <br /> <span className="red-text ">alfombra</span></h1>

                <p className='fade-in-fwd'>Cuéntanos qué diseño quieres y lo hacemos realidad</p>
                <div className="bars fade-in-left ">
                    <img className="bar-1" src="/images/iconos/bar.webp" alt="bar" loading="lazy"/>
                    <img className="bar-2" src="/images/iconos/bar2.webp" alt="bar2" loading="lazy"/>
                </div>
            </div>
            <div className="right-content">
                <img className="logo rotate-in-center" src="/images/iconos/LogoAF-empty.png" alt="Logo" loading="lazy"/>
                <img className="logo-ball bounce-in-fwd" src="/images/iconos/LogoAF-ball.png" alt="Logo-ball" loading="lazy"/>
            </div>
        </div>
        </div>
    )
}

export default Hero