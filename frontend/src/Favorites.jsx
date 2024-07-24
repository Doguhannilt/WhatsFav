import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavoriteFilm, setFavorites } from './redux/currentFavorites/currentFavorites';
import Navbar from './pages/Navbar';



const Favorites = () => {
    const dispatch = useDispatch();
    const favoriteFilms = useSelector((state) => state.favorites.favoriteFilms);

    useEffect(() => {
        // Favori filmleri localStorage'dan al
        const storedFavorites = JSON.parse(localStorage.getItem('favoriteFilms')) || [];
        dispatch(setFavorites(storedFavorites));
    }, [dispatch]);


    const deleteHandler = (film) => {
        dispatch(removeFavoriteFilm(film));
    };

    return (
        <div className='bg-gradient-to-t from-gray-900 to-teal-800 min-h-screen flex flex-col items-center p-8'>
            <Navbar />
            <div className='max-w-6xl mx-auto'>
                <h1 className='text-4xl font-bold text-white mb-8'>Favorite Films</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {favoriteFilms.map((film) => (
                        <div key={film._id} className='bg-gray-900  rounded-lg shadow-lg hover:scale-105 duration-300 overflow-hidden'>
                            <img
                                src={film.image || 'https://via.placeholder.com/400x250'}
                                alt={film.title || 'No title'}
                                className='w-full h-48 object-cover '
                            />
                            <div className='p-4'>
                                <h2 className='text-xl font-bold text-white'>{film.title || 'No title'}</h2>
                                <p className='text-gray-300'>{film.description || 'No description available'}</p>
                                <div className='flex flex-wrap gap-2 mt-4'>
                                    <span className='bg-yellow-500 text-white px-3 py-1 rounded-full text-sm'>{film.genre || 'No genre'}</span>
                                    <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm'>{film.released || 'No release year'}</span>
                                    <button
                                        className='bg-red-500 cursor-pointer text-white px-3 py-1 rounded-full text-sm'
                                        onClick={() => deleteHandler(film)}
                                    >DELETE</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Favorites;
