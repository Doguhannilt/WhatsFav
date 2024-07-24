import React from 'react'
import Navbar from '../Navbar'
import Slider from './Slider'
import Search from './Search'
import Filter from './Filter'
import ParticleCanvas from '../../ParticleCanvas'
import FavSlider from './Sliders/FavSlider'
import HorrorSlider from './Sliders/HorrorSlider'
import SadSlider from './Sliders/SadSlider'
import ComedySlider from './Sliders/ComedySlider'
import '../../index.css'
import TheatreSlider from './Sliders/TheatreSlider'
const Movies = () => {
    return (
        <div className="relative min-h-screen bg-gradient-animation overflow-hidden">
            {/* Partikül arka planı */}

            {/* İçerik alanı */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Search />
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