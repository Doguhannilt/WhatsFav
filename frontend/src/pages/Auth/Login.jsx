import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from "react-redux"
import { setCredentials } from '../../redux/auth/authSlice';
import background_video from '../../assets/register.mp4'
import { useLoginMutation } from '../../redux/api/users';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [Login] = useLoginMutation()
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      const res = await Login({
        email,
        password
      }).unwrap()
      console.log(res)
      dispatch(setCredentials({ ...res }))
      toast.success('You are logged, welcome.')
      navigate('/movies')
    } catch (error) {
      toast.error('Something went wrong :(')
    }
  }

  return (
    <div>
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


                    <button
                      type="submit"
                      className="w-full text-white bg-blue-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Log in
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don't you have an account?{' '}
                      <a
                        href="/signup"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        type='submit'
                      >
                        Sing Up Here!
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

        </div>

      </div>

    </div>
  )
}

export default Login