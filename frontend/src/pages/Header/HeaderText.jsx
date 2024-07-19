import React from 'react'
import { useSelector } from 'react-redux'

const HeaderText = () => {

  const { userInfo } = useSelector((state) => state.auth)

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">What's Fav?</h1>
        <p className="text-lg md:text-2xl mb-8">Choose your favorite movies 🎥 and rate them.</p>
        <p className="text-lg md:text-xl mb-8 text-gray-600 cursor-pointer hover:brightness-200 duration-200 ">
          <a href='https://www.youtube.com/watch?v=1YDI3pI9gps&ab_channel=JoJoProductions'>The film behind the background (Jo Jo Productions)</a>
        </p>


        {userInfo
          ? <p><a href='/movies'>
            <button className="px-6 py-3 bg-blue-800 opacity-50 hover:opacity-100 text-white rounded-lg cursor-pointer shadow-lg hover:w-28 hover:duration-500 hover:bg-gray-700 transition duration-1000">
              Movies
            </button>
          </a></p>
          : <p><a href='/signup'>
            <button className="px-6 py-3 bg-blue-800 opacity-50 hover:opacity-100 text-white rounded-lg cursor-pointer shadow-lg hover:w-28 hover:duration-500 hover:bg-gray-700 transition duration-1000">
              Sign up
            </button>

          </a></p>
        }


      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

    </>

  )
}

export default HeaderText