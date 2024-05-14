import React from 'react'
import './Hus.css'

const Hus = () => {
  return (
    <div className="us-section">
                <div className="us-text">
                    <p>Mi nombre es Agustín Bruschini, soy de Córdoba Capital, Argentina.<br />
                        Entender de pasiones me permite dedicarle el tiempo y amor que cada alfombra necesita.</p>
                    <button className="us-button">Sobre Alfombras Futboleras</button>
                </div>
                <div className="us-icons">
                    <h3>Seguinos en nuestras Redes Sociales!</h3>
                    <div className="us-links">
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
                    <div className='us-image'>
                        <img src="/images/iconos/semiball.webp" alt="Pelota Azul" className="us-ball"/>
                    </div>
                </div>
            </div>
  )
}

export default Hus