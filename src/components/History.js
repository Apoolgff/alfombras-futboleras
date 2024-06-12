import React, { lazy, Suspense } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./History.css"
const Slider = lazy(() => import('react-slick'));

const History = () => {

    const imageArray = [
        { src: "/images/ptrabajos/akatsuki.webp", alt: "Imagen 1" },
        { src: "/images/ptrabajos/naranjayazul.webp", alt: "Imagen 2" },
        { src: "/images/ptrabajos/jake.webp", alt: "Imagen 3" },
        { src: "/images/ptrabajos/Air.webp", alt: "Imagen 4" },
        { src: "/images/ptrabajos/Bryant.webp", alt: "Imagen 5" },
        { src: "/images/ptrabajos/Circulo.webp", alt: "Imagen 6" },
        { src: "/images/ptrabajos/Nike.webp", alt: "Imagen 7" },
        { src: "/images/ptrabajos/Rectangulo.webp", alt: "Imagen 8" },
        { src: "/images/ptrabajos/Vans.webp", alt: "Imagen 9" },
        { src: "/images/Dog.webp", alt: "Imagen 10" },
        { src: "/images/Mario.webp", alt: "Imagen 11" },
        { src: "/images/Mariposa.webp", alt: "Imagen 12" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true, 
        centerPadding: '0px', 
        responsive: [{
            breakpoint: 380,
            settings:
            {
                arrows: true,
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

            <div className="history-heading">
                <h3>Mi historia</h3>
                <div className="history-heading-bars">
                    <img className="history-fixed-bar" src="/images/iconos/bar.webp" alt="barra clara" />
                    <img className="history-transitioned-bar" src="/images/iconos/bar2.webp" alt="barra oscura" />
                </div>
            </div>
            <article>
                <div className="history-grid">
                    <p>¡Hola! Soy Agustín Bruschini, originario de Córdoba capital.
                        Podría decir que básicamente soy un deportista, artista y
                        emprendedor, en búsqueda del equilibrio entre las pasiones
                        que he ido descubriendo a lo largo de mi vida.
                        Desde chico fui criado con valores centrados en la educación y
                        el deporte, me involucre en el mundo deportivo, practicando
                        futbol y el voleibol. Dedicándome a este ultimo varios años,
                        hasta que tome la decisión de darle un giro a mi vida.</p>

                    <img src="/images/nosotros_img/Rectangle-26.webp" alt="Trabajo" />

                    <img className='item-3' src="/images/nosotros_img/Rectangle-27.webp" alt="alfombra sol" />

                    <p className='item-4' >No fue facil decidir dejar el deporte, ya que disfruto competir y
                        experimentar la emoción de las victorias, pero busqué
                        emprender un camino nuevo siguiendo mis instintos, y así fue
                        como descubrí viendo videos, personas haciendo “tufting”, este
                        proceso artesanal me parecía hipnótico y llamo mi atención
                        enseguida, siempre he buscado desafíos, por lo que quise
                        probar. Compré los elementos básicos, un bastidor chico, una
                        maquina y lana, y así fue como comencé a experimentar. Hice
                        algunos diseños abstractos, dibujos simples y no pude evitar
                        engancharme de una.</p>


                    <p>Con el apoyo de mi familia y amigos, fui probando, creando
                        otros diseños, practicando y perfeccionando la técnica.
                        Fui haciendo de todo un poco, diseños abstractos,
                        personalizados, comics, diferentes marcas y los resultados
                        cada vez eran mejores. Un día iba a jugar con unos amigos
                        pádel y Juancito me dice “che porque no probas hacer
                        escudos”, decía que todos iban a engancharse y esta idea,
                        simplemente lo junto todo. No podría estar más agradecido de
                        que se le haya ocurrido, porque complementar mi pasión
                        futbolera con esta nueva pasión que estaba descubriendo me
                        dio el impulso para crear lo que ahora es <br />
                        <span className='p-red'>“Alfombras Futboleras”</span>.</p>

                    <img src="/images/nosotros_img/Rectangle-28.webp" alt="Alfombra River" />
                </div>
                <p className='after-grid'>Desde ese momento, todo tomo forma, encontré un espacio donde mis pasiones se unen y me permite entregarles un producto que<br />
                    complementa también sus pasiones.</p>

            </article>

            <article className="process">
                <h3 id="como" className="process-title" >¿Cómo es el proceso?</h3>
                <div className="process-content">
                    <p >El proceso de tufteado o tufting, se define básicamente como
                        una técnica para fabricar textiles, en la cual se insertan hilos
                        en una base armando el diseño final.
                        <br />
                        <br />
                        Se comienza con la preparación de la base, esta puede ser la
                        tela o un lienzo, el cual debe estar bien tensado en el bastidor
                        y se pasa el patrón o diseño que servirá de guía al momento de
                        insertar los hilos. Con la ayuda de la tufting gun o tufting
                        machine, se perfora la base con agujas, esta maquina va
                        insertando hilos para ir armando el diseño previamente
                        seleccionado, de esta forma, se van aplicando las capas que
                        sean necesarias hasta completar el diseño , luego se pule el
                        resultado para mejorar el acabado y obtener el producto final.
                        <br />
                        <br />
                        Esta técnica se utiliza en muchos lugares para realizar
                        alfombras y tapices, combinando diferentes texturas, colores y
                        patrones en diversos diseños y estilos.</p>
                    <img src="/images/nosotros_img/Rectangle-36.webp" alt="Trabajo" className="history-image-block history-content-right" />
                </div>
            </article>
            <article className="history-section-carrousel">
                <div className="history-heading-carrousel">
                    <h3>Mis primeros trabajos</h3>
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Slider {...settings}>
                        {imageArray.map((image, index) => (
                            <div key={index}>
                                <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" />
                            </div>
                        ))}
                    </Slider>
                </Suspense>
            </article>

        </section>
    )
}


export default History