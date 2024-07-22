import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInfoCredentials } from '../../../redux/filter/filterSlice';

const FavSlider = () => {
    const filterInfoFromStore = useSelector((state) => state.filter.filterInfo);

    // Verilerin düzleştirilmesi
    const flattenedFilterInfo = filterInfoFromStore.flat();

    console.log(flattenedFilterInfo);
    return (
        <div className="overflow-x-auto whitespace-nowrap py-4">
            <h1 className="font-bold text-4xl mt-10 text-white ml-4 mb-10">
                YOUR SEARCH ({flattenedFilterInfo.length})
            </h1>
            <div className="flex space-x-4">
                
                {flattenedFilterInfo.map((item) => (
                    <div
                        key={item._id}
                        className="max-w-sm bg-slate-800 ml-5 mb-10 hover:scale-105 duration-300 rounded-lg shadow-lg border border-slate-900"
                    >
                        <a href={`/page/${item._id}`}>
                            <img
                                className="rounded-t-lg w-full h-48 object-cover"
                                src={item.image || 'No item'}
                                alt={item.title || 'No title'}
                            />
                        </a>
                        <div className="p-5">
                            <a href={`/page/${item._id}`}>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                                    {item.title || 'No title'}
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-white opacity-60 w-[20rem] overflow-hidden text-ellipsis whitespace-nowrap">
                                {item.description || 'No description'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavSlider;
