import React from 'react';
import Navbar from '../Navbar';
import ProfileInputs from './ProfileInputs';
import { useSelector } from 'react-redux';
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";



const Profile = () => {
    const { userInfo } = useSelector((state) => state.auth)
    return (
        <div className='bg-black  min-h-screen'>
            <Navbar />
            <div className='grid grid-cols-2 gap-8 p-20 '>
                <div className=''>
                    <ProfileInputs />
                </div>
                <div className='flex-1 pt-24 '>
                    <div className="max-w-2xl mx-auto lg:mx-0 bg-white opacity-75 rounded-lg shadow-2xl">
                        <div className="p-4 md:p-12 text-center lg:text-left">
                            <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>
                            <h1 className="text-3xl font-bold pt-8 lg:pt-0">{userInfo.username}</h1>
                            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                                <MdOutlineMailOutline size={20} className='' />
                                <span className='ml-2'>{userInfo.email}</span>
                            </p>
                            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                                <RiLockPasswordLine size={20} className='' />
                                <span className='ml-2'>{userInfo.password || <span>●●●●●●●●●●●●● </span>}</span>
                            </p>
                            <p className="pt-8 text-sm opacity-50">This is your profile. When you update your profile, it may take a while to display.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
