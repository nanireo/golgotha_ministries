import React, { useState, useEffect, useRef } from 'react';

function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideIntervalRef = useRef(null);
    const slides = [
        { src: "sliding/GM_1.jpg"   },
        { src: "sliding/GM_2.jpg"  },
        { src: "sliding/GM_3.jpg"   },
        { src: "sliding/GM_4.jpg"  },
        { src: "church pics/14 c 2.jpeg"}
        // { src: "sliding/bmcs6.jpg", caption: "Welcome to Bhaskar Medical College & General Hospital" }
        // { src: "sliding/bmcs8.JPG", caption: "Welcome to Bhaskar Medical College & General Hospital" }

    ];

    useEffect(() => {
        startSlideShow();

        return () => {
            stopSlideShow();
        };
    }, []);

    const startSlideShow = () => {
        slideIntervalRef.current = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds
    };

    const stopSlideShow = () => {
        clearInterval(slideIntervalRef.current);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    return (
        <>
        <section
            className="banner"
            onMouseEnter={stopSlideShow}
            onMouseLeave={startSlideShow}
        >
            <div className="slider">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="slide"
                        style={{ display: index === currentSlide ? 'block' : 'none' }}
                    >
                        <img src={slide.src} alt={`Slide ${index + 1}`} />
                     </div>
                ))}
                <button className="prev" onClick={handlePrevSlide}>
                    &#10094;
                </button>
                <button className="next" onClick={handleNextSlide}>
                    &#10095;
                </button>
            </div>
        </section>
       
        </>
    );
}

export default Banner;
