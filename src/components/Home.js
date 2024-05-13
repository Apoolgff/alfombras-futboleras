import React from 'react'
import Hero from './Hero'
import Services from './Services';
import './Home.css'

const Home = () => {
    /*Array de imagenes*/
    const images = [
        { src: "/images/galeria/River.webp", title: "Escudo-River", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/Almagro.webp", title: "Escudo-Almagro", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/RosarioCentral.webp", title: "Escudo-R.Central", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/SanLorenzo.webp", title: "Escudo-San Lorenzo", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/Independiente.webp", title: "Escudo-Independiente", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/Racing.webp", title: "Escudo-Racing", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/Chacarita.webp", title: "Escudo-Chacarita", description: "Medidas: 90x40cm" },
        { src: "/images/galeria/alfombra1.webp", title: "Alfombra", description: "Medidas: 90x40cm" }
    ];
    return (
        <>
            <Hero></Hero>
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
            {/*Galeria*/}
            <div className="gallery-section">
                <div className="gallery-content">
                    <h2>Productos Destacados</h2>
                    <div className="gallery-grid">
                        {images.map((image, index) => (
                            <div key={index} className="gallery-item">
                                <img src={image.src} alt={image.title} />
                                <h3>{image.title}</h3>
                                <p>{image.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="more-btn">Ver toda la Galeria</button>
            </div>

            {/*Nosotros*/}
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

            <div className="review-section">
                <h2>+250 clientes felices</h2>
                <div className="reviews">
                <img src="/images/iconos/bubble1.webp" alt="review 1" className="review1"/>
                <img src="/images/iconos/bubble2.webp" alt="review 2" className="review2"/>
                <img src="/images/iconos/bubble3.webp" alt="review 3" className="review3"/>
                </div>
            </div>
            <Services/>
        </>
    )
}

export default Home