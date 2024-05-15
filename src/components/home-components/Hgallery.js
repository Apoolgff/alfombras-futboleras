import React from 'react'
import { Link } from 'react-router-dom';
import './Hgallery.css'

const Hgallery = () => {
    const handleScrollTop = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                
            });
        }, );
    };
    const images = [
        { src: "/images/galeria/River.webp", title: "Escudo-River" },
        { src: "/images/galeria/Almagro.webp", title: "Escudo-Almagro" },
        { src: "/images/galeria/RosarioCentral.webp", title: "Escudo-R.Central" },
        { src: "/images/galeria/SanLorenzo.webp", title: "Escudo-San Lorenzo" },
        { src: "/images/galeria/Independiente.webp", title: "Escudo-Independiente" },
        { src: "/images/galeria/Racing.webp", title: "Escudo-Racing" },
        { src: "/images/galeria/Chacarita.webp", title: "Escudo-Chacarita" },
        { src: "/images/galeria/alfombra1.webp", title: "Ayrton Senna" }
    ];
  return (
    <div className="gallery-section">
                <div className="gallery-content">
                    <h2>Productos Destacados</h2>
                    <div className="gallery-grid">
                        {images.map((image, index) => (
                            <div key={index} className="gallery-item">
                                <img src={image.src} alt={image.title} />
                                <h3>{image.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                <Link to="/galeria"  className="more-btn" onClick={handleScrollTop}>Ver toda la Galeria</Link>
            </div>
  )
}

export default Hgallery