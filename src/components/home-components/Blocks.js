import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Blocks.css'

const Blocks = () => {
    const navigate = useNavigate();

    const handleScrollTop = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }, 0);
    };
    const handleSmoothScroll = (e, id) => {
        e.preventDefault();
        navigate('/nosotros', { replace: true });
    
        setTimeout(() => {
          const targetElement = document.getElementById(id);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth',
            });
          }
        }, 300); // Ajusta este tiempo de espera según sea necesario
      };
  return (
    <div className="split-component">
                {/*Primer bloque*/}
                <div className="block">
                    <img src="/images/galeria/image9.webp" alt="Messi" className="image-block" />
                    <div className="text-block">
                        <h2>Fútbol bajo tus pies</h2>
                        <p>Descubre cómo convertimos tu amor por el fútbol en alfombras</p>
                        <p>únicas que no solo adornan tu hogar, sino que también cuentan</p>
                        <p>historias de partidos memorables, emociones intensas y momentos </p>
                        <p>inolvidables en cada fibra y color.</p>
                        <Link to="/como-comprar" onClick={handleScrollTop} className="btn">Cómo Comprar</Link>
                    </div>
                </div>

                {/*Segundo bloque*/}
                <div className="block">
                    <div className="text-block">
                        <h2>Calidad tejida con precisión</h2>
                        <p>Experimenta la calidad excepcional que ofrecemos a través de </p>
                        <p>nuestro método de tufting, una técnica artesanal que fusiona</p>
                        <p>precisión y dedicación. Cada alfombra es meticulosamente tejida</p>
                        <p>para ofrecerte no solo un producto estético, sino también duradero,</p>
                        <p>resistente y capaz de resistir el paso del tiempo.</p>
                        <Link to="/nosotros" onClick={(e) => handleSmoothScroll(e, 'como')} className="btn">Como lo hacemos</Link>
                    </div>
                    <img src="/images/galeria/image11.webp" alt="Copa" className="image-block" />
                </div>

                {/*Tercer bloque*/}
                <div className="block">
                    <img src="/images/galeria/image12.webp" alt="Firma" className="image-block" />
                    <div className="text-block">
                        <h2>Alfombras que reflejan tu estilo</h2>
                        <p>Con nuestro servicio de diseño a medida, puedes dejar volar tu </p>
                        <p>creatividad y crear una alfombra que sea verdaderamente tuya. </p>
                        <p>Desde escudos de equipos hasta diseños personalizados, estamos</p>
                        <p>aquí para convertir tus ideas en realidad y hacer de tu espacio un</p>
                        <p>lugar que refleje tu amor por el fútbol.</p>
                        <Link to="/contacto" onClick={handleScrollTop} className="btn">Contacto</Link>
                    </div>
                </div>
            </div>
  )
}

export default Blocks