import React, { useEffect, useState } from 'react'
import './img.css'

export default function ImageCarousel({images}) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePreviousClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setTimeout(() => {
            handleNextClick();
            
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentImageIndex, images.length]);

    return (
        <section>
            <div className="image-container">
                <button className="nav-button left" onClick={handlePreviousClick}>&lt;</button>

                {images.map((image, index) => (
                    <img 
                        src={image.url} 
                        alt="images" 
                        className={ currentImageIndex === index ? 'block' : 'hidden'}
                        key={image.id} 
                    />
                ))}

                <button className="nav-button right" onClick={handleNextClick}>&gt;</button>

            </div>
        </section>
        )
}//ImageCarousel
