import React, { useEffect, useState } from 'react';
import useInViewHook from '../../hooks/useInViewHook';
import { Link, useNavigate } from 'react-router-dom';
import './Blocks.css'

const Blocks = () => {
    const navigate = useNavigate();
    const { ref: firstBlockRef, inView: firstBlockInView } = useInViewHook(0.1);
    const { ref: secondBlockRef, inView: secondBlockInView } = useInViewHook(0.1);
    const { ref: thirdBlockRef, inView: thirdBlockInView } = useInViewHook(0.1);

    

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
        }, 300); 
      };
  return (
    <section>
    <article className="split-component">
                {/*Primer bloque*/}
                
                    <img src="/images/galeria/riverh.webp" alt="Messi" className="block-item-1" loading="lazy"/>
                    <div ref={firstBlockRef}  className={`block block-item-2 ${firstBlockInView? 'block-animation' : ''}`}>
                        <h2>Fútbol bajo tus pies</h2>
                        <p>Descubre cómo convertimos tu amor por el fútbol en alfombras
                        únicas que no solo adornan tu hogar, sino que también cuentan
                        historias de partidos memorables, emociones intensas y momentos 
                        inolvidables en cada fibra y color.</p>
                        <Link to="/como-comprar" onClick={handleScrollTop} className="btn">Cómo Comprar</Link>
                    </div>
                

                {/*Segundo bloque*/}
                
                    <div ref={secondBlockRef} className={`block block-item-3 ${secondBlockInView? 'block-animation' : ''}`}>
                        <h2>Calidad tejida con precisión</h2>
                        <p>Experimenta la calidad excepcional que ofrecemos a través de 
                        nuestro método de tufting, una técnica artesanal que fusiona
                        precisión y dedicación. Cada alfombra es meticulosamente tejida
                        para ofrecerte no solo un producto estético, sino también duradero,
                        resistente y capaz de resistir el paso del tiempo.</p>
                        <Link to="/nosotros" onClick={(e) => handleSmoothScroll(e, 'como')} className="btn">Como lo hacemos</Link>
                    </div>
                    <img src="/images/galeria/bocah.webp" alt="Copa" className="block-item-4" loading="lazy"/>
                

                {/*Tercer bloque*/}
                
                    <img src="/images/galeria/eldiego10.webp" alt="Firma del Diego" className="block-item-5" loading="lazy"/>
                    <div ref={thirdBlockRef} className={`block block-item-6 ${thirdBlockInView? 'block-animation' : ''}`}>
                        <h2>Alfombras que reflejan tu estilo</h2>
                        <p>Con nuestro servicio de diseño a medida, puedes dejar volar tu 
                        creatividad y crear una alfombra que sea verdaderamente tuya. 
                        Desde escudos de equipos hasta diseños personalizados, estamos
                        aquí para convertir tus ideas en realidad y hacer de tu espacio un
                        lugar que refleje tu amor por el fútbol.</p>
                        <Link to="/contacto" onClick={handleScrollTop} className="btn">Contacto</Link>
                    </div>
                
    </article>
</section>
  )
}

export default Blocks