import React from 'react'
import './Reviews.css'

const Reviews = () => {
    return (
        <div className="review-section">
            <h2>+250 clientes felices</h2>
            <div className="reviews">
                <img src="/images/iconos/bubble1.webp" alt="review 1" className="review1" />
                <img src="/images/iconos/bubble2.webp" alt="review 2" className="review2" />
                <img src="/images/iconos/bubble3.webp" alt="review 3" className="review3" />
            </div>
        </div>
    )
}

export default Reviews