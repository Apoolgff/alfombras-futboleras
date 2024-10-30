import React, { useEffect, useState } from 'react';
import './Reviews.css'
import useInViewHook from '../../hooks/useInViewHook';

const Reviews = () => {
    const { ref: obrasRef, inView: obrasInView } = useInViewHook(0.1);
    
    
    const [obrasCount, setObrasCount] = useState(0);
   
    const [hasCountedObras, setHasCountedObras] = useState(false);
  

    useEffect(() => {
        if (obrasInView && !hasCountedObras) {
            let start = 0;
            const end = 250;
            const duration = 2000; 
            const incrementTime = (duration / end) * 1;

            const counter = setInterval(() => {
                start += 1;
                setObrasCount(start);
                if (start === end) {
                    clearInterval(counter);
                    setHasCountedObras(true);
                }
            }, incrementTime);
        }
    }, [obrasInView, hasCountedObras]);



    return (
        <div className="review-section" ref={obrasRef}>
            <h2>+{obrasCount} clientes felices</h2>
            <div className="reviews">
                <img src="/images/iconos/Bubble1.webp" alt="review 1" className="review1" loading="lazy"/>
                <img src="/images/iconos/Bubble2.webp" alt="review 2" className="review2" loading="lazy"/>
                <img src="/images/iconos/Bubble3.webp" alt="review 3" className="review3" loading="lazy"/>
            </div>
        </div>
    )
}

export default Reviews