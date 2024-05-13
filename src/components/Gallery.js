import React, {  useState } from 'react'
import Services from './Services';
import "./Gallery.css"


 const Gallery = () => {

    const defaultImgQuantity = 6
    
      const [visibleImages, setVisibleImages] = useState(defaultImgQuantity); 
     
   
    const images = [
        { src: "/images/galeria/RosarioCentral.webp", title: "Escudo-R.Central", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/Independiente.webp", title: "Escudo-Independiente", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/Almagro.webp", title: "Escudo-Almagro", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/Chacarita.webp", title: "Escudo-Chacarita", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/Racing.webp", title: "Escudo-Racing", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/River.webp", title: "Escudo-River", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/velez.webp", title: "Escudo-Velez", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/SanLorenzo.webp", title: "Escudo-San Lorenzo", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/alfombra1.webp", title: "Alfombra", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/Andes.webp", title: "Escudo-Los andes", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/Boca.webp", title: "Escudo-Boca", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/Chicago.webp", title: "Escudo-Chicago", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/Defbelgrano.webp", title: "Escudo-Def.Belgrano", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/Docksud.webp", title: "Escudo-Docksud", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/Indepte.webp", title: "Escudo-Independiente", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/Lanus.webp", title: "Escudo-Lanús", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/Mandiyu.webp", title: "Escudo-Mandiyú", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/Union.webp", title: "Escudo-Unión", description: "Medidas: 90x40cm" },


    ];
  
    const loadMoreImages = () => {
        
        setVisibleImages(prevVisibleImages => prevVisibleImages + defaultImgQuantity); 
    };
    
    return(
        <section>
            <article>
                <div>
                    <div className="gallery-heading">
                        <h3>Galeria</h3>
                        <div className="gallery-heading-bars">
                            <img className="gallery-fixed-bar" src="/images/iconos/bar.webp" alt="barra clara"/>
                            <img className="gallery-transitioned-bar" src="/images/iconos/bar2.webp" alt="barra oscura"/>
                        </div>    
                    </div>
                    <div className="g-gallery-section">
                        <div className="g-gallery-content">
                            
                            <div className="g-gallery-grid">
                                {images.slice(0, visibleImages).map((image, index) => (
                                    <div key={index} className="g-gallery-item">
                                        <img src={image.src} alt={image.title} />
                                        <h3>{image.title}</h3>
                                        <p>{image.description}</p>
                                    </div>
                                ))}
                            </div>
                            {visibleImages < images.length && (
                                
                                <button className="gallery-more-btn" onClick={loadMoreImages}>Ver más</button>
                            )}
                        </div>
                    </div>
                </div>
            </article>         
            <Services/>           
        </section>
    )

 }

 export default Gallery;