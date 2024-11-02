import React, { useEffect, useState } from 'react';
import './Reviews.css'
import useInViewHook from '../../hooks/useInViewHook';

const Reviews = () => {
    const { ref: clientRef, inView: clientInView } = useInViewHook(0.1);
    const { ref: reviewRef, inView: reviewInView } = useInViewHook(0.1);
    
    const [clientCount, setClientCount] = useState(0);
   
    const [hasCountedClient, setHasCountedClient] = useState(false);
  

    useEffect(() => {
        if (clientInView && !hasCountedClient) {
            let start = 0;
            const end = 250;
            const duration = 2000; 
            const incrementTime = (duration / end) * 1;

            const counter = setInterval(() => {
                start += 1;
                setClientCount(start);
                if (start === end) {
                    clearInterval(counter);
                    setHasCountedClient(true);
                }
            }, incrementTime);
        }
    }, [clientInView, hasCountedClient]);



    return (
        <div className="review-section" ref={clientRef}>
            <h2>+{clientCount} clientes felices</h2>
            <div ref={reviewRef} className={`reviews ${reviewInView? 'review-animation' : ''}`}>
                <img src="/images/iconos/Bubble1.webp" alt="review 1" className="review1" loading="lazy"/>
                <img src="/images/iconos/Bubble2.webp" alt="review 2" className="review2" loading="lazy"/>
                <img src="/images/iconos/Bubble3.webp" alt="review 3" className="review3" loading="lazy"/>
            </div>
        </div>
    )
}

export default Reviews