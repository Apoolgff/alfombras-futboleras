import React from 'react';
import Services from './Services';
import './HowToBuy.css';

const HowToBuy = () => {
    return (
       <section className="buy">
            <div className="buy-heading">
                <h1 className='text-focus-in'>¿Cómo comprar?</h1>
                <div className="buy-heading-bars">
                    <img className="fixed-bar slide-in-bar-1" src="/images/iconos/bar.webp" alt="barra clara"/>
                    <img className="transitioned-bar slide-in-bar-2" src="/images/iconos/bar2.webp" alt="barra oscura"/>
                </div>    
            </div>
            
        <article className="steps">
            <div className="steps-container">
                <img src="/images/iconos/heart.circle.webp" alt="heart" />
                <div className="step-one">
                    <h2 className='step-title'>1. Elije tu diseño favorito</h2>
                    <p className='step-description'>Ten en cuenta que trabajamos dimensiones entre los 70 y 120 cm</p>
                </div>
            </div>
            <div>
                <div className="time-line">
                </div>
            </div>
            <div className="steps-container">
                <img src="/images/iconos/figureDotted.webp" alt="people conecting" />
                <div className="step-two">
                    <h2 className='step-title'>2. Contáctanos</h2>
                    <p className='step-description'>Puedes escribirnos por Whatsapp o por alguna de nuestras redes sociales.
                        Te pediremos detalles sobre el diseño escogido y la dirección de entrega.
                        Hacemos envíos a todo el país!</p>
                </div>
            </div>
            <div>
                <div className="time-line">
                </div>
            </div>
            <div className="steps-container">
            <img src="/images/iconos/checkmarkBubble.webp" alt="people conecting" />
                <div className="step-three">
                    <h2 className='step-title'>3. Listo!</h2>
                    <p className='step-description'>Empezaremos a hilar tu alfombra para que la disfrutes en breve.
                        Nos pondremos en contacto cuando tu pedido esté listo 
                        para retirar o cuando lo hayamos entregado al correo.</p>
                </div>
            </div>
        </article>

        <Services/>
       </section>
    );
};

export default HowToBuy;