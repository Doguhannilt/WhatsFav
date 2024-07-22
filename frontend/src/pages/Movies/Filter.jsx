import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNameFilterMutation, useRatingFilterMutation, useYearFilterMutation } from '../../redux/api/filter';
import { setInfoCredentials, setInfoCredentialsClear } from '../../redux/filter/filterSlice';

const Filter = () => {
    const [name, setName] = useState('');
    const [rating1, setRating] = useState(0);
    const [year1, setYear] = useState('');

    const dispatch = useDispatch();
    const [nameFilter] = useNameFilterMutation();
    const [ratingFilter] = useRatingFilterMutation();
    const [yearFilter] = useYearFilterMutation();

    const handleSearch = async (e) => {
        e.preventDefault();
        
        const filters = [];
    
        if (name) {
            filters.push({ type: 'name', value: name });
        }
        if (rating1) {
            filters.push({ type: 'rating', value: Number(rating1) });
        }
        if (year1) {
            filters.push({ type: 'year', value: Number(year1) });
        }
    
        if (filters.length === 0) {
            toast.error('Please provide at least one filter criterion');
            return;
        }
    
        try {
            for (const filter of filters) {
                let res;
                switch (filter.type) {
                    case 'name':
                        res = await nameFilter({ name: filter.value }).unwrap();
                        break;
                    case 'rating':
                        res = await ratingFilter({ rating: filter.value }).unwrap();
                        break;
                    case 'year':
                        res = await yearFilter({ year: filter.value }).unwrap();
                        break;
                    default:
                        throw new Error('Unknown filter type');
                }
                console.log(res);
                dispatch(setInfoCredentials(res));
                toast.success(`Your filtered movies based on "${filter.type}" are displayed in the section below`);
            }
        } catch (error) {
            toast.error('An error occurred while fetching filtered movies');
            console.error(error);
        }
    };

    const handleClear = async (e) => {
        e.preventDefault();
        dispatch(setInfoCredentialsClear());
        toast.success('Your filter is removed');
    };
    
    return (
        <div className="mb-10 relative z-10 mt-10 ">
        
            <form className="-mt-4 p-3  hover:bg-gray-700 duration-500 rounded shadow-md  grid grid-cols-3  2xl:grid-cols-4 items-center gap-4">
                <div className="flex items-center flex-1 justify-center bg-white  p-2 rounded ">
                    {/* NAME */}
                    <input
                        placeholder="Name?"
                        className="text-md w-full focus:outline-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                {/* Rating */}
                <div className="flex items-center flex-1 justify-center font-bold bg-white p-2 rounded ">
                    <input
                        placeholder="Rating?"
                        className="text-md w-full focus:outline-none"
                        value={rating1}
                        onChange={(e) => setRating(e.target.value)}
                    />
                </div>

                {/* Year */}
                <div className="flex items-center flex-1 justify-center bg-white  p-2 rounded">

                    <input
                        placeholder="Year?"
                        className="text-md w-full focus:outline-none"
                        value={year1}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>



                {/* BUTTONS */}
                <div className='flex gap-1 justify-center'>
                    <button
                        type="button"
                        onClick={handleSearch}
                        className='w-full bg-blue-800 rounded text-white h-full p-2 font-bold text-xl duration-600 hover:bg-slate-500'>
                        Search
                    </button>
                    <button
                        className='bg-red-600 text-white h-full  rounded  p-2 font-bold text-xl lg:w-full md:w-full hover:bg-red-500'
                        onClick={handleClear}>
                        Clear
                    </button>

                </div>
            </form>

        </div>
    )
}

export default Filter