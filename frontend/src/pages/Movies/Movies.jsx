import React from 'react'

// PAGES
import Navbar from '../Navbar'
import Slider from './Slider'
import Search from './Search'
import Filter from './Filter'
import ChangeColor from './ChangeColor'

// SLIDER
import FavSlider from './Sliders/FavSlider'
import HorrorSlider from './Sliders/HorrorSlider'
import SadSlider from './Sliders/SadSlider'
import ComedySlider from './Sliders/ComedySlider'
import TheatreSlider from './Sliders/TheatreSlider'

// UTILS
import { useSelector } from 'react-redux'
import '../../index.css'

// bg-stone-950
// bg-amber-950
// bg-yellow-900
// bg-indigo-950
// DEFAULT: bg-blue-950
//  ${getColorClass()}
const getColorClass = () => {
    const { colorInfo } = useSelector((state) => state.colors)
    switch (colorInfo.color) {
        case 'BLUE':
            return 'bg-blue-950';
        case 'STONE':
            return 'bg-stone-950';
        case 'AMBER':
            return 'bg-amber-950';
        case 'YELLOW':
            return 'bg-yellow-900';
        case 'INDIGO':
            return 'bg-indigo-950';
        default:
            return 'bg-blue-950';
    }
}; 

const Movies = () => {
    return (
        <div className={`relative min-h-screen ${getColorClass()} overflow-hidden`}>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <div className='flex justify-between'>
                        <Search />
                        <ChangeColor/>
                    </div>
                    <Slider />
                    <Filter /> 
                    <FavSlider />
                    <HorrorSlider />
                    <SadSlider />
                    <ComedySlider />
                    <TheatreSlider/>
                </main>
            </div>
        </div>
    );
}
export default Movies