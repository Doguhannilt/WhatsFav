import React, { useRef, useState } from 'react';
import { useSelectSadQuery } from '../../../redux/api/genre/genre';

const SadSlider = () => {
    const { data = [], error, isLoading } = useSelectSadQuery();
    const scrollContainer = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        e.preventDefault()
        setIsDragging(true);
        setStartX(e.pageX - scrollContainer.current.offsetLeft);
        setScrollLeft(scrollContainer.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.current.offsetLeft;
        const walk = (x - startX) * 2; // Kaydırma hızını ayarlamak için
        scrollContainer.current.scrollLeft = scrollLeft - walk;
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="overflow-x-auto whitespace-nowrap py-4">
            <h1 className="font-bold text-4xl mt-10 text-white ml-4 mb-10">SAD ({data.length})</h1>
            <div
                ref={scrollContainer}
                className="flex space-x-4 overflow-hidden"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {data.map((item) => (
                    <div
                        key={item._id}
                        className="max-w-sm cursor-grab bg-slate-800 ml-5 mb-10 hover:scale-105 duration-300 rounded-lg shadow-lg border border-slate-900"
                    >
                        <a href={`/page/${item._id}`}>
                            <img className="rounded-t-lg" src={item.image} alt={item.title} />
                        </a>
                        <div className="p-5">
                            <a href={`/page/${item._id}`}>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{item.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-white opacity-60 w-[20rem] overflow-hidden text-ellipsis whitespace-nowrap">{item.description}</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SadSlider;
