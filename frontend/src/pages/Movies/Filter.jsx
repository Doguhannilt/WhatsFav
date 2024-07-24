import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNameFilterMutation, useRatingFilterMutation, useYearFilterMutation } from '../../redux/api/filter';
import { setInfoCredentials, setInfoCredentialsClear } from '../../redux/filter/filterSlice';
import { motion, AnimatePresence } from 'framer-motion';

const Filter = () => {
    const [isOpen, setIsOpen] = useState(false);
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
        <motion.div className="relative text-center w-full z-10 mt-10 mb-10">
            <button
                className="bg-teal-800  hover:scale-105 hover:w-60 hover:bg-transparent hover:duration-500 duration-500 text-white p-3 rounded-lg font-bold"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? 'Close Filters' : 'Use filter'}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className=" p-6 rounded-lg mt-4"
                    >
                        <motion.form
                            className="p-6  rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-6"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div className="flex items-center justify-center p-2 bg-white bg-opacity-30 rounded-lg" whileHover={{ scale: 1.05 }}>
                                <input
                                    placeholder="Name?"
                                    className="text-md w-full bg-transparent focus:outline-none text-gray-200 placeholder-gray-400"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </motion.div>

                            <motion.div className="flex items-center justify-center p-2 bg-white bg-opacity-30 rounded-lg" whileHover={{ scale: 1.05 }}>
                                <input
                                    placeholder="Rating?"
                                    className="text-md w-full bg-transparent focus:outline-none text-gray-200 placeholder-gray-400"
                                    value={rating1}
                                    onChange={(e) => setRating(e.target.value)}
                                />
                            </motion.div>

                            <motion.div className="flex items-center justify-center p-2 bg-white bg-opacity-30 rounded-lg" whileHover={{ scale: 1.05 }}>
                                <input
                                    placeholder="Year?"
                                    className="text-md w-full bg-transparent focus:outline-none text-gray-200 placeholder-gray-400"
                                    value={year1}
                                    onChange={(e) => setYear(e.target.value)}
                                />
                            </motion.div>

                            <div className="flex gap-4 justify-center col-span-full mt-4">
                                <motion.button
                                    type="button"
                                    onClick={handleSearch}
                                    className="w-full bg-teal-600 rounded-lg text-white py-2 font-bold text-lg duration-600 hover:bg-teal-500"
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Search
                                </motion.button>
                                <motion.button
                                    className="w-full bg-red-600 rounded-lg text-white py-2 font-bold text-lg duration-600 hover:bg-red-500"
                                    onClick={handleClear}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Clear
                                </motion.button>
                            </div>
                        </motion.form>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default Filter