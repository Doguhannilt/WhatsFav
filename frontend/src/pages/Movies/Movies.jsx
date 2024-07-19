import React from 'react'
import Navbar from '../Navbar'
import Slider from './Slider'
import Search from './Search'

const Movies = () => {
    return (
        <div className='bg-black h-screen'>
            <Search/>
             <Slider/>
            <Navbar />
           

        </div>
    )
}

export default Movies