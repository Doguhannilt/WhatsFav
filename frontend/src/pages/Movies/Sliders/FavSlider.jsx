import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const FavSlider = () => {
    const filterInfoFromStore = useSelector((state) => state.filter.filterInfo);
    const [filterInfo, setFilterInfo] = useState([]);


    const scrollContainer = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (scrollContainer.current) {
                scrollContainer.current.scrollBy({ left: 300, behavior: 'smooth' });
                
                if (scrollContainer.current.scrollLeft + scrollContainer.current.clientWidth >= scrollContainer.current.scrollWidth) {
                    scrollContainer.current.scrollLeft = 0;
                }
            }
        }, 3000); 

        return () => clearInterval(intervalId); // Temizlik
    }, []);





    useEffect(() => {
        if (Array.isArray(filterInfoFromStore)) {
            setFilterInfo(filterInfoFromStore);
        } else if (typeof filterInfoFromStore === 'object') {
            const convertedArray = Object.keys(filterInfoFromStore).map((key) => filterInfoFromStore[key]);
            setFilterInfo(convertedArray);
        }
    }, [filterInfoFromStore]);

    console.log("filterInfo:", filterInfo); // Debugging log

    if (!Array.isArray(filterInfo) || filterInfo.length === 0) {
        return <div>No items to display</div>;
    }
    console.log(filterInfo.image)
    return (
        <div className="overflow-x-auto whitespace-nowrap py-4">
            <h1 className="font-bold text-4xl mt-10 text-white ml-4 mb-10">YOUR SEARCH ({ filterInfo.length })</h1>
            <div
                ref={scrollContainer}
                className="flex space-x-4">
                <div>
               
                </div>
                {filterInfo.map((item) => (
                    <div class="max-w-sm bg-slate-800 ml-5 mb-10 hover:scale-105 duration-300 rounded-lg shadow-lg border border-slate-900">
                        <a href={`/page/${item._id}`}>
                            <img class="rounded-t-lg" src={ item.image } alt="" />
                        </a>
                        <div class="p-5">
                            <a href={`/page/${item._id}`}>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{ item.title }</h5>
                            </a>
                            <p class="mb-3 font-normal text-white opacity-60 dark:text-gray-400 w-[20rem] overflow-hidden text-ellipsis whitespace-nowrap">{ item.description }</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavSlider;
