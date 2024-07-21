import React, { useEffect, useRef, useState } from 'react';
import slider1 from '../../assets/slider/slider1.mp4'
import slider2 from '../../assets/slider/slider2.mp4'
import slider3 from '../../assets/slider/slider3.mp4'

const videos = [
    slider1,
    slider2,
    slider3
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideInterval = useRef();

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length);
    };

    useEffect(() => {
        slideInterval.current = setInterval(nextSlide, 10000);

        return () => clearInterval(slideInterval.current);
    }, []);

    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {videos.map((video, index) => (
                    <div className="min-w-full flex justify-center" key={index}>
                        <video className="rounded-2xl" autoPlay loop muted>
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0  left-0 right-0 flex justify-center p-4">
                {videos.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 m-1 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-500'}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Slider;
