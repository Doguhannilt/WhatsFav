import React from 'react';
import { CgProfile } from "react-icons/cg";
import { useLogoutMutation } from '../redux/api/users';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/auth/authSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const Navbar = () => {
    const dispatch = useDispatch();
    const [Logout] = useLogoutMutation();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            await Logout().unwrap();
            dispatch(logout());
            toast.success('Logged out');
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <motion.nav
            className="fixed z-10 bottom-0 left-0 right-0 text-white py-4 shadow-2xl "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="container mx-auto flex justify-center">
                <ul className="flex space-x-8">
                    <motion.li
                        className="relative group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <a href="/profile" className="cursor-pointer">
                            <CgProfile size={30} />
                        </a>
                        <motion.div
                            className="absolute left-0 w-full h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 origin-left"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </motion.li>
                    <motion.li
                        className="relative group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <a href="/movies" className="py-2 px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:text-yellow-500">
                            Movies
                        </a>
                      
                        <motion.div
                            className="absolute left-0 w-full h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 origin-left"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </motion.li>
                    <motion.li
                        className="relative group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <a href="/favorites" className="py-2 px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:text-yellow-500">
                            Favorites
                        </a>
                        <motion.div
                            className="absolute left-0 w-full h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 origin-left"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </motion.li>
                    <motion.li
                        className="relative group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <a href="/contact" className="py-2 px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:text-yellow-500">
                            Contact
                        </a>
                        <motion.div
                            className="absolute left-0 w-full h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 origin-left"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </motion.li>
                    <motion.li
                        className="relative group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <a className="py-2 px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:text-yellow-500">
                            <button onClick={logoutHandler}>
                                Logout
                            </button>
                        </a>
                        <motion.div
                            className="absolute left-0 w-full h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 origin-left"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </motion.li>
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
