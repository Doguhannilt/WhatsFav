import React from 'react'
import { useSelector } from 'react-redux'



const FavSlider = () => {
    const { filterInfo } = useSelector((state) => state.filter)
    console.log(filterInfo)


    return (
        <div>
            {filterInfo.map((filter) => (
                filter._id
            ))}


        </div>
    )
}

export default FavSlider