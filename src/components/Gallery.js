import React, {  useState } from 'react'
import Services from './Services';
import "./Gallery.css"


 const Gallery = () => {

    const defaultImgQuantity = 6
    
      const [visibleImages, setVisibleImages] = useState(defaultImgQuantity); 
     
   
    const images = [
        { src: "/images/galeria/RosarioCentral.webp", title: "Escudo-R.Central"},
        { src: "/images/galeria/Independiente.webp", title: "Escudo-Independiente" },
        { src: "/images/galeria/Almagro.webp", title: "Escudo-Almagro" },
        { src: "/images/galeria/Chacarita.webp", title: "Escudo-Chacarita" },
        { src: "/images/galeria/Racing.webp", title: "Escudo-Racing" },
        { src: "/images/galeria/River.webp", title: "Escudo-River" },
        { src: "/images/galeria/Velez.webp", title: "Escudo-Velez"  },
        { src: "/images/galeria/SanLorenzo.webp", title: "Escudo-San Lorenzo" },
        { src: "/images/galeria/alfombra1.webp", title: "Alfombra" },
        { src: "/images/galeria/Andes.webp", title: "Escudo-Los andes" },
        { src: "/images/galeria/Boca.webp", title: "Escudo-Boca" },
        { src: "/images/galeria/Chicago.webp", title: "Escudo-Chicago"},
        { src: "/images/galeria/Defbelgrano.webp", title: "Escudo-Personalizado" },
        { src: "/images/galeria/Docksud.webp", title: "Escudo-Docksud" },
        { src: "/images/galeria/Indepte.webp", title: "Escudo-Independiente" },
        { src: "/images/galeria/Lanus.webp", title: "Escudo-Lanús" },
        { src: "/images/galeria/Mandiyu.webp", title: "Escudo-Mandiyú" },
        { src: "/images/galeria/Union.webp", title: "Escudo-Unión" },


    ];
  
    const loadMoreImages = () => {
        
        setVisibleImages(prevVisibleImages => prevVisibleImages + defaultImgQuantity); 
    };
    
    return(
        <section>
            <article>
                <div className="buy">
                    <div className="buy-heading">
                        <h1 className='text-focus-in'>Galeria</h1>
                        <div className="buy-heading-bars">
                            <img className="fixed-bar slide-in-bar-1" src="/images/iconos/bar.webp" alt="barra clara"/>
                            <img className="transitioned-bar slide-in-bar-2" src="/images/iconos/bar2.webp" alt="barra oscura"/>
                        </div>    
                    </div>
                    <div className="g-gallery-section">
                        <div className="g-gallery-content">
                            
                            <div className="g-gallery-grid">
                                {images.slice(0, visibleImages).map((image, index) => (
                                    <div key={index} className="g-gallery-item">
                                        <img src={image.src} alt={image.title} loading="lazy" />
                                        <h3>{image.title}</h3>
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