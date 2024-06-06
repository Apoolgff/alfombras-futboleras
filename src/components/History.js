import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./History.css"


const History = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true, // Esto centrará el carrusel
        centerPadding: '0px', // Ajusta este valor según sea necesario para el espacio entre las imágenes
        responsive: [   {
                            breakpoint: 380,
                            settings: 
                                    {
                                        arrows: false,
                                        slidesToShow: 1,
                                    },
                        }, 
                        {
                            breakpoint: 868,
                            settings:
                                    {
                                        slidesToShow: 1,
                                    },
                        }, 
                        {
                            breakpoint: 1280,
                            settings:
                                    {
                                        slidesToShow: 2,
                                    },
                        }
                    ]
      };
    return (
        <section >
            <article>
                <div >
                    <div className="history-heading">
                                <h3>Mi historia</h3>
                                <div className="history-heading-bars">
                                    <img className="history-fixed-bar" src="/images/iconos/bar.webp" alt="barra clara"/>
                                    <img className="history-transitioned-bar" src="/images/iconos/bar2.webp" alt="barra oscura"/>
                                </div>    
                    </div>
                    <div className="history-split-component">
                         {/*bloque 1*/}
                        <div className="history-block">
                            <div className="history-text-block history-text-block-left ">
                                <p>¡Hola! Soy Agustín Bruschini, originario de Córdoba capital.</p>
                                <p>Podría decir que básicamente soy un deportista, artista y</p>
                                <p>emprendedor, en búsqueda del equilibrio entre las pasiones</p>
                                <p>que he ido descubriendo a lo largo de mi vida.</p>
                                <p>Desde chico fui criado con valores centrados en la educación y</p>
                                <p>el deporte, me involucre en el mundo deportivo, practicando</p>
                                <p>futbol y el voleibol. Dedicándome a este ultimo varios años,</p>
                                <p>hasta que tome la decisión de darle un giro a mi vida.</p>     
                                
                            </div>
                            <img src="/images/nosotros_img/Rectangle-26.webp" alt="Trabajo" className="history-image-block history-content-right" />
                        </div>

                        {/*bloque 2*/}
                        <div className="history-block">
                            <img src="/images/nosotros_img/Rectangle-27.webp" alt="alfombra sol" className="history-image-block" />
                            <div className="history-text-block history-content-right history-text-block-right">
                                <p>No fue facil decidir dejar el deporte, ya que disfruto competir y</p>
                                <p>experimentar la emoción de las victorias, pero busqué</p>
                                <p>emprender un camino nuevo siguiendo mis instintos, y así fue</p>
                                <p>como descubrí viendo videos, personas haciendo “tufting”, este</p>
                                <p>proceso artesanal me parecía hipnótico y llamo mi atención</p>
                                <p>enseguida, siempre he buscado desafíos, por lo que quise</p>
                                <p>probar. Compré los elementos básicos, un bastidor chico, una</p>
                                <p>maquina y lana, y así fue como comencé a experimentar. Hice</p>
                                <p>algunos diseños abstractos, dibujos simples y no pude evitar</p>
                                <p>engancharme de una.</p>     
                            </div>
                        </div>

                    

                        {/*bloque 3*/}
                        <div className="history-block">
                            <div className="history-text-block history-text-block-left">
                                <p>Con el apoyo de mi familia y amigos, fui probando, creando</p>
                                <p>otros diseños, practicando y perfeccionando la técnica.</p>
                                <p>Fui haciendo de todo un poco, diseños abstractos,</p>
                                <p>personalizados, comics, diferentes marcas y los resultados</p>
                                <p>cada vez eran mejores. Un día iba a jugar con unos amigos</p>
                                <p>pádel y Juancito me dice “che porque no probas hacer</p>
                                <p>escudos”, decía que todos iban a engancharse y esta idea,</p>
                                <p>simplemente lo junto todo. No podría estar más agradecido de</p> 
                                <p>que se le haya ocurrido, porque complementar mi pasión</p>
                                <p>futbolera con esta nueva pasión que estaba descubriendo me</p>
                                <p>dio el impulso para crear lo que ahora es</p>    
                                <p><span className='p-red'>“Alfombras Futboleras”</span>.</p>
                            </div>
                            <img src="/images/nosotros_img/Rectangle-28.webp" alt="Alfombra River" className="history-image-block history-content-right" />
                        </div>
                        
                        <div className='history-final'>
                            <div className='history-final-text '>
                                <p>Desde ese momento, todo tomo forma, encontré un espacio donde mis pasiones se unen y me permite entregarles un producto que<br>
                                </br><p>complementa también sus pasiones.</p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="history-section-blue">
                    <div className="history-content">
                        <div className="history-heading-box-blue">
                            <h3>¿Cómo es el proceso?</h3>   
                        </div>
                        <div className="history-split-component">
                            {/*bloque 4*/}
                            <div className="history-block">
                                <div className="history-text-block history-text-block-left ">
                                    <p>El proceso de tufteado o tufting, se define básicamente como</p>
                                    <p>una técnica para fabricar textiles, en la cual se insertan hilos</p>
                                    <p>en una base armando el diseño final.</p>
                                    <br></br>

                                    <p>Se comienza con la preparación de la base, esta puede ser la</p>
                                    <p>tela o un lienzo, el cual debe estar bien tensado en el bastidor</p>
                                    <p>y se pasa el patrón o diseño que servirá de guía al momento de</p>
                                    <p>insertar los hilos. Con la ayuda de la tufting gun o tufting</p>
                                    <p>machine, se perfora la base con agujas, esta maquina va</p>     
                                    <p>insertando hilos para ir armando el diseño previamente</p>
                                    <p>seleccionado, de esta forma, se van aplicando las capas que</p>
                                    <p>sean necesarias hasta completar el diseño , luego se pule el</p>
                                    <p>resultado para mejorar el acabado y obtener el producto final.</p>
                                    <br></br>
                                    <p>Esta técnica se utiliza en muchos lugares para realizar</p>
                                    <p>alfombras y tapices, combinando diferentes texturas, colores y</p>
                                    <p>patrones en diversos diseños y estilos.</p>
                                </div>
                                <img src="/images/nosotros_img/Rectangle-36.webp" alt="Trabajo" className="history-image-block history-content-right" />
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="history-section-carrousel">
                    {/* <div className="history-content"> */}
                        <div className="history-heading-carrousel">
                                <h3>Mis primeros trabajos</h3>   
                        </div>
                        <Slider {...settings}>
                            
                            <div>
                                <img src="/images/ptrabajos/akatsuki.webp" alt="Imagen 4" />
                            </div>
                            <div>
                                <img src="/images/ptrabajos/naranjayazul.webp" alt="Imagen 4" />
                            </div>
                            <div>
                                <img src="/images/ptrabajos/jake.webp" alt="Imagen 4" />
                            </div>
                            <div>
                                <img src="/images/ptrabajos/Air.webp" alt="Imagen 4" />
                            </div>
                            <div>
                                <img src="/images/ptrabajos/Bryant.webp" alt="Imagen 5" />
                            </div>
                            <div>
                                <img src="/images/ptrabajos/Circulo.webp" alt="Imagen 6" />
                            </div>
                            <div>
                                <img src="/images/ptrabajos/Nike.webp" alt="Imagen 7" />
                            </div>
                            <div>
                                <img src="/images/ptrabajos/Rectangulo.webp" alt="Imagen 8" />
                            </div>
                            <div>
                                <img src="/images/ptrabajos/Vans.webp" alt="Imagen 9" />
                            </div>
                            <div>
                                <img src="/images/Dog.webp" alt="Imagen 10" />
                            </div>
                            <div>
                                <img src="/images/Lanumerouno.webp" alt="Imagen 11" />
                            </div>
                            <div>
                                <img src="/images/Mario.webp" alt="Imagen 12" />
                            </div>
                            <div>
                                <img src="/images/Mariposa.webp" alt="Imagen 13" />
                            </div>

                        </Slider>
                    {/* </div> */}
                </div>
            </article>
        </section>
    )
}


export default History