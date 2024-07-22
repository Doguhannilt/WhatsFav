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

const Movies = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-t from-slate-900 via-orange-900 to-red-950 overflow-hidden">
            {/* Partikül arka planı */}

            {/* İçerik alanı */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Search />
                    <Filter />
                    <Slider />
                    <FavSlider />
                    <HorrorSlider />
                    <SadSlider />
                    <ComedySlider/>
                </main>
            </div>
        </div>
    );
}
export default Movies