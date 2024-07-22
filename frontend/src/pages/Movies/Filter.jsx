import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNameFilterMutation, useRatingFilterMutation, useYearFilterMutation } from '../../redux/api/filter';
import { setInfoCredentials, setInfoCredentialsClear } from '../../redux/filter/filterSlice';


const Filter = () => {

    const [name, setName] = useState('');
    const [rating1, setRating] = useState(0);
    const [year1, setYear] = useState('');

    const dispatch = useDispatch();
    const [nameFilter, { data, error, isLoading }] = useNameFilterMutation();
    const [ratingFilter] = useRatingFilterMutation()
    const [yearFilter] = useYearFilterMutation()

    const handleSearch = async (e) => {
        e.preventDefault()
        try {
            console.log(name)
            if (name) {
                const res = await nameFilter({ name }).unwrap()
                console.log(res)
                dispatch(setInfoCredentials(res))
                console.log('Dispatched:', res);
                toast.success('Your filtered movies based on "name" are displayed in the section below')
            }
            if (rating1) {

                try {
                    const rating = Number(rating1)
                    console.log(rating);
                    const res = await ratingFilter({ rating }).unwrap()
                    console.log(res)
                    dispatch(setInfoCredentials(res))
                    console.log('Dispatched:', res);
                    toast.success('Your filtered movies based on "rating" are displayed in the section below')
                } catch (error) {
                    console.log(error)
                }
            }
            if (year1) {
                const year = Number(year1)
                const res = await yearFilter({ year }).unwrap()
                console.log(res)
                dispatch(setInfoCredentials(res))
                console.log('Dispatched:', res);
                toast.success('Your filtered movies based on "year" are displayed in the section below')
            }
        } catch (error) {
            toast.error(error)
            console.log(error)
        }
    }

    const handleClear = async (e) => {
        e.preventDefault()
        dispatch(setInfoCredentialsClear())
        toast.success('Your filter is removed')
     }
    
    return (
        <div className="mb-10 relative z-10 ">
        
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