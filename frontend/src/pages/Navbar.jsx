import React from 'react';
import { CgProfile } from "react-icons/cg";
import { useLogoutMutation } from '../redux/api/users';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/auth/authSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';


const Navbar = () => {
    const dispatch = useDispatch()
    const [Logout] = useLogoutMutation()
    const navigate = useNavigate()

    const logoutHandler = () => {
        try {
            Logout().unwrap()
            dispatch(logout())
            toast.success('Logged out')
            navigate('/')
        } catch (error) {
            console.log(error)

        }
    }

    return (
        <nav className="fixed z-10  pt-10 pl-10 bottom-0 left-0 right-0 opacity-50 hover:opacity-100  text-white py-4 shadow-2xl">
            <div className="container mx-auto flex justify-center">
                <ul className="flex space-x-8">
                    <li className="">
                        <a href="/profile" className=" cursor-pointer ">
                            <CgProfile size={30} className='' />
                        </a>
                        <div className="absolute left-0 w-full h-1  bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
                    </li>
                    <li className="navbar-item group relative">
                        <a href="/movies" className="py-2 px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:text-yellow-500">
                            Movies
                        </a>
                        <div className="absolute left-0 w-full h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
                    </li>
                    <li className="navbar-item group relative">
                        <a href="/favorites" className="py-2 px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:text-yellow-500">
                            Favorites
                        </a>
                        <div className="absolute left-0 w-full h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
                    </li>
                    <li className="navbar-item group relative">
                        <a href="/contact" className="py-2 px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:text-yellow-500">
                            Contact
                        </a>
                        <div className="absolute left-0 w-full h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
                    </li>
                    <li className="navbar-item group relative">
                        <a className="py-2 px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:text-yellow-500">
                            <button
                                onClick={logoutHandler}
                            >
                                Logout
                            </button>
                        </a>
                        <div className="absolute left-0 w-full h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
