import React, { useEffect, useState } from 'react';
import useInViewHook from '../hooks/useInViewHook';
import './Services.css';

const Services = () => {
    const { ref: serviceRef, inView: serviceInView } = useInViewHook(0.2);

    return (
        <article ref={serviceRef} className={`services ${serviceInView? 'service-animation' : ''}`}>
            <div>
                <img src="/images/iconos/Map.webp" alt="map-1" className='service-map' />
                
                <p>Envios a todo el país</p>
            </div>
            <div>
                <img src="/images/iconos/white-circle.webp" alt="circle heart"  />
                <img src="/images/iconos/white-hart.webp" alt="heart" className='service-heart' />
                <p>Diseños personalizados</p>
            </div>
            <div>
                <img src="/images/iconos/white-checkmark-bubble.webp" alt="quality bubble"  />
                <img src="/images/iconos/white-checkmark.webp" alt="quality" className='service-quality' />
                <p>Calidad garantizada</p>
            </div>
        </article>
    )
}

export default Services