import React from 'react'
import './Services.css';

const Services = () => {
    return (
        <article className="services">
            <figure>
                <img src="/images/iconos/Map.webp" alt="map"/>
                <figcaption>Envios a todo el país</figcaption>
            </figure>
            <figure>
                <img src="/images/iconos/heartCircle.webp" alt="heart"/>
                <figcaption>Diseños personalizados</figcaption>
            </figure>
            <figure>
                <img src="/images/iconos/checkmarkBubbleWhite.webp" alt="quality"/>
                <figcaption>Calidad garantizada</figcaption>
            </figure>
        </article>
    )
}

export default Services