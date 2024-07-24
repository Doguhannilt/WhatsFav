import React, { useState } from 'react'
import { useUpdateMutation } from '../../redux/api/users'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { setCredentials } from '../../redux/auth/authSlice'


const ProfileInputs = () => {

    const [Update] = useUpdateMutation()
    const dispatch = useDispatch();


    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const validationHandler = () => {
        if (username.length < 10) return toast.error('Username length should be at least 10 character')
        if (password.length < 10) return toast.error('Password length should be at least 10 character')
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        validationHandler()
        try {
            const res = await Update({ username, email, password }).unwrap()
            dispatch(setCredentials({ ...res }))
            toast.success('Your profile is updated')
        } catch (error) {
            console.log(error)
            toast.error('Invalid')
        }
    }

    return (
        <div>
            <div class="flex justify-center mt-20 px-8">
                <form class="" onSubmit={submitHandler}>
                    <div class="flex flex-wrap  shadow rounded-lg p-3 dark:bg-gray-600">
                        <h2 class="text-xl text-white dark:text-gray-300 pb-2">Account settings:</h2>
                        <div class="flex flex-col gap-2 w-full ">
                            <div>
                                <label class="text-white dark:text-gray-400">Username
                                </label>
                                <input
                                    class="w-full py-3 border bg-transparent text-white border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                                    type="text"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                            </div>
                            <div>
                                <label class="text-white dark:text-gray-400">Email</label>
                                <input
                                    class="w-full py-3 border bg-transparent text-white  border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                                    type="text"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label class="text-white dark:text-gray-400">Password</label>
                                <input
                                    class="w-full py-3 border bg-transparent text-white border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div class="flex justify-end hover:duration-500 duration-1000">
                                <button
                                    className="hover:w-40  py-1.5 px-3 m-1 text-center  border rounded-md text-white   hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700"
                                    type="submit">Save changes</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProfileInputs