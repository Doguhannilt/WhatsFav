import React from 'react';
import { useGetDetailQuery } from './redux/api/detail/details';
import { useParams } from 'react-router';
import Navbar from './pages/Navbar'
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { addFavoriteFilm } from './redux/currentFavorites/currentFavorites';


const DetailPage = () => {
    const { id } = useParams();
    const { data: film, error, isLoading } = useGetDetailQuery(id);
    const dispatch = useDispatch()
    if (isLoading) return <div className="text-center text-white">Loading...</div>;
    if (error) return <div className="text-center text-red-500">Error: {error.message}</div>;
    if (!film) return <div className="text-center text-white">Film not found</div>;

    const favoriteHandler = async (e) => {
        e.preventDefault()
        try {
            await dispatch(addFavoriteFilm(film))
            toast.success('Added');
        } catch (error) {
            console.log(error)
            toast.error(error)
        }
    }

    return (
        <div className='shadow-lg bg-gradient-to-t from-gray-900 to-teal-800 min-h-screen flex items-center justify-center p-8'>
            <Navbar />
            <div className='flex flex-col lg:flex-row bg-gray-900 rounded-lg shadow-2xl overflow-hidden max-w-6xl mx-auto hover:scale-105 duration-300'>
                <div className='lg:w-1/2'>
                    <img
                        src={film.image || 'default-image-url'} 
                        alt={film.title || 'No title'}
                        className='w-full h-full object-cover rounded-t-lg hover:w-full lg:rounded-tr-none lg:rounded-l-lg '
                    />
                </div>
                <div className='lg:w-1/2 p-6 flex flex-col justify-between'>
                    <div>
                        <h1 className='text-5xl font-bold text-white mb-4'>{film.title || 'No title'}</h1>
                        <p className='text-lg text-gray-300 mb-6'>{film.description || 'No description available'}</p>
                        <div className='flex flex-wrap gap-4 mb-6'>
                            <span className='bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold'>{film.genre || 'No genre'}</span>
                            <span className='bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold'>{film.released || 'No release year'}</span>
                        </div>
                        <div className='text-gray-300'>
                            <h2 className='text-2xl font-semibold text-white mb-2'>Details</h2>
                            <ul className='list-disc list-inside'>
                                <li><strong className='font-semibold'>Released:</strong> {film.released || 'No release date'}</li>
                                <li><strong className='font-semibold'>Language:</strong> {film.language || 'No language'}</li>
                                <li><strong className='font-semibold'>Year:</strong> {film.year || 'No year'}</li>
                                <li><strong className='font-semibold'>Rating:</strong> {film.rating || 'No rating'} Rating</li>
                            </ul>
                        </div>
                    </div>
                    <button
                        className='mt-6 px-6 py-3 bg-teal-600 text-white rounded-full font-semibold shadow-lg hover:bg-teal-700 transition duration-200'
                        onClick={favoriteHandler}
                    >
                        Add to Favorites
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
