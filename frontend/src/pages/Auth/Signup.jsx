import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useSignupMutation } from '../../redux/api/users';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from "react-redux"
import { setCredentials } from '../../redux/auth/authSlice';
import background_video from '../../assets/register.mp4'


const Signup = () => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const [Signup] = useSignupMutation()
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const validationCheck = () => {
        if (password !== confirmPassword) return toast.error('Password is invalid')
        if (password.length < 10) return toast.error('Password length should be at least 10 character')
        if (username.length < 10) return toast.error('Username length should be at least 10 character')
        if (checked !== true) return toast.error('You should accept the Terms and Conditions')
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        validationCheck()

        try {
            const res = await Signup({
                email,
                username,
                password
            }).unwrap()
            console.log(res)
            dispatch(setCredentials({ ...res }))
            toast.success('Your account is created, welcome.')
            navigate('/')
        } catch (error) {
            toast.error('Something went wrong :(')
        }
    }


    return (
        <div className="relative bg-blue-900 dark:bg-blue-900 min-h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={background_video}
          autoPlay
          loop
          muted
        />
        <div className='bg-blue-900 dark:bg-blue-900'>
            <section className="relative z-10">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full shadow-2xl rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-blue-800 dark:border-blue-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-black  md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form
                                onSubmit={submitHandler}
                                className="space-y-4 md:space-y-6"  >
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-xl font-medium text-black"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type=""
                                        name="email"
                                        id="email"
                                        className="bg-gray-300 border text-black border-gray-300text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="username"
                                        className="block mb-2 text-xl font-medium text-black"
                                    >
                                        Your username
                                    </label>
                                    <input
                                        type="input"
                                        name="username"
                                        id="username"
                                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="ceo@company.com"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-xl font-medium text-black dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="confirm-password"
                                        className="block mb-2 text-xl font-medium text-black dark:text-white"
                                    >
                                        Confirm password
                                    </label>
                                    <input
                                        type="password"
                                        name="confirm-password"
                                        id="confirm-password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={confirmPassword}
                                        onChange={e => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="terms"
                                            aria-describedby="terms"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            value={checked}
                                            onChange={e => setChecked(!checked)}
                                            required
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="terms"
                                            className=" text-black text-sm font-semibold dark:text-gray-300"
                                        >
                                            I accept the{' '}
                                            <a
                                                href="#"
                                                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                            >
                                                Terms and Conditions
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Create an account
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account?{' '}
                                    <a
                                        href="/login"
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                        type='submit'
                                    >
                                        Login here
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

         </div>

      </div>

    );
};

export default Signup;
