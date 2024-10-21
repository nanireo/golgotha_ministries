import React, { useState, useEffect, useRef } from 'react';

function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideIntervalRef = useRef(null);
    const slides = [
        { src: "sliding/GM_1.jpg", caption: "Bro. Samuel Mories (M.B.A., M.Th.)Bro. Samuel Mories serves as the dedicated Associate Pastor at Golgotha Ministries in Armoor. With a strong academic foundation holding both an M.B.A. and a Master of Theology (M.Th.), Bro. Samuel brings a unique blend of spiritual insight and organizational leadership to the ministry. His passion for sharing the Gospel and commitment to serving the local community have been instrumental in the growth and impact of the church.Bro. Samuel Mories serves as the dedicated Associate Pastor at Golgotha Ministries in Armoor. With a strong academic foundation holding both an M.B.A. and a Master of Theology (M.Th.), Bro. Samuel brings a unique blend of spiritual insight and organizational leadership to the ministry. His passion for sharing the Gospel and commitment to serving the local community have been instrumental in the growth and impact of the church. At Golgotha Ministries, Bro. Samuel focuses on nurturing spiritual growth, guiding discipleship programs, and supporting the vision of the church through pastoral care. His heart for service extends beyond the church walls, as he actively engages with outreach initiatives aimed at uplifting the underprivileged and spreading the message of Christ’s love. In addition to his pastoral duties, Bro. Samuel also leverages his business acumen to ensure that the church’s ministries are efficiently managed, allowing the church to thrive and meet the needs of its congregation and community. He continues to inspire and lead with humility, dedication, and unwavering faith in God’s plan." },
        { src: "sliding/GM_2.jpg", caption: "Golgotha Ministries Armoor" },
        { src: "sliding/GM_3.jpg", caption: "Golgotha Ministries Armoor" },
        { src: "sliding/GM_4.jpg", caption: "Golgotha Ministries Armoor" },
        { src: "church pics/14 c 2.jpeg", caption: "Golgotha Ministries Armoor"}
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
                        <div className="caption">{slide.caption}</div>
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
