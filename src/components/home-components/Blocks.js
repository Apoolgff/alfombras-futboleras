import React from 'react'
import './Blocks.css'

const Blocks = () => {
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
                        <button className='btn'>Como Comprar</button>
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
                        <button className='btn'>Como lo hacemos</button>
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
                        <button className='btn'>Contactanos</button>
                    </div>
                </div>
            </div>
  )
}

export default Blocks