import React, { useState } from 'react';
import { usePostSearchMutation } from '../../redux/api/search';
import { CgSearch } from 'react-icons/cg';

const SearchPopup = () => {
    const [search, setSearch] = useState('');
    const [postSearch, { data, error }] = usePostSearchMutation();
    const [showPopup, setShowPopup] = useState(false);

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearchClick = async () => {
        try {
            const res = await postSearch({ search }).unwrap();
            console.log(res);
            // Handle search results
        } catch (error) {
            console.error(error);
        }
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="relative">
            {/* Search Icon */}
            <button
                className="flex items-center justify-center p-2 rounded-full bg-primary text-white hover:bg-primary-accent-300"
                onClick={togglePopup}
                aria-label="Search"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                </svg>
            </button>

            {/* Popup */}
            {showPopup && (
                           <div className="absolute top-full mt-3 w-[30rem] bg-primary text-black border border-gray-300 rounded-lg shadow-lg z-10">
                           <div className="p-4">
                               <input
                                   type="search"
                                   className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                                   placeholder="Search"
                                   value={search}
                                   onChange={handleInputChange}
                               />
                               <button
                                   className="mt-4 px-6 py-2 bg-primary text-white bg-blue-600 rounded-lg shadow-md hover:bg-primary-accent-300 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                                   onClick={handleSearchClick}
                               >
                                   Search
                               </button>
                           </div>

                    {/* Search Results */}
                    <div className="p-4 border-t border-gray-300">
                        {data && data.length > 0 ? (
                            <ul>
                                {data.map((item) => (
                                    <li key={item._id} className="p-2 border-b border-gray-300">
                                        <a href={`/page/${item._id}`} className="block">
                                            <h5 className="text-2xl font-bold text-white">{item.title}</h5>
                                            <p className="text-white">{item.description}</p>
                                           
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className='text-white font-medium'>No results found.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchPopup;
